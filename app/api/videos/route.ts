import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

type CloudinaryVideoResource = {
  public_id: string;
  duration?: number;
  video?: {
    duration?: number;
  };
  context?: {
    custom?: {
      caption?: string;
    };
  };
};

//to get all the videod uploaded to cloudinary in the folder "soundskillhub"
export async function GET() {
  try {
    const result = await cloudinary.api.resources({
      resource_type: 'video',
      type: 'upload',
      prefix: 'soundskillhub/',
      max_results: 10,
      context: true,
      image_metadata: true, // 👈 this pulls duration and other metadata
    });

    const videos = (result.resources as CloudinaryVideoResource[]).map((video) => {
      return {
        publicId: video.public_id,
        title: video.context?.custom?.caption || formatTitle(video.public_id),
        duration: formatDuration(video.duration || video.video?.duration || 0),
        videoUrl: cloudinary.url(video.public_id, {
          resource_type: 'video',
          format: 'mp4',
          transformation: [{ quality: 'auto' }],
        }),
        thumbnail: cloudinary.url(video.public_id, {
          resource_type: 'video',
          format: 'jpg',
          transformation: [
            { start_offset: '2', width: 900, height: 500, crop: 'fill' },
            { quality: 'auto' },
          ],
        }),
      };
    });

    return NextResponse.json(videos);
  } catch (error) {
    console.error('Cloudinary fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 });
  }
}

function formatDuration(seconds: number): string {
  if (!seconds) return '00:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function formatTitle(publicId: string): string {
  // "soundskillhub/nelson-training" → "Nelson Training"
  const name = publicId.split('/').pop() || publicId;
  return name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}
