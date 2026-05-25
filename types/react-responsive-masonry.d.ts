declare module "react-responsive-masonry" {
  import type { ComponentType, ReactNode } from "react";

  type MasonryProps = {
    columnsCount?: number;
    gutter?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
  };

  const Masonry: ComponentType<MasonryProps>;

  export default Masonry;
}
