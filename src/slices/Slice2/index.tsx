import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Slice2`.
 */
export type Slice2Props = SliceComponentProps<Content.Slice2Slice>;

/**
 * Component for "Slice2" Slices.
 */
const Slice2 = ({ slice }: Slice2Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
           {slice.primary.are_you_interested_in_3d_design ?
           <p>I love 3d</p>
           :
           <p>I hate 3d</p>
           }
    </section>
  );
};

export default Slice2;
