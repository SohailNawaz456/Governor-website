declare module "react-slick" {
    import { ComponentType, ReactNode } from 'react';

    interface SlickSliderProps {
        children?: ReactNode;
        className?: string; // Allow className as a valid prop
        autoplay?: boolean;
        dots?: boolean;
        dotsClass?: string;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        arrows?: boolean;
        responsive?: Array<{
            breakpoint: number;
            settings: {
                slidesToShow: number;
                slidesToScroll: number;
                infinite: boolean;
                dots: boolean;
            };
        }>;
        customPaging?: (i: number) => ReactNode;
    }

    const Slider: ComponentType<SlickSliderProps>;
    export default Slider;
}
