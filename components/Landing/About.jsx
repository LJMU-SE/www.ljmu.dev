import Container from "../Layout/Container";
import BodyButton from "@/components/Buttons/Body";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AboutSection() {
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="w-full px-0 md:pr-4">
                        <h1 className="text-2xl">About Us</h1>
                        <p className="my-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut ornare mauris a risus dignissim posuere.
                            Donec massa orci, auctor non venenatis et, convallis
                            ut ante. Morbi ut dapibus quam. Duis efficitur ante
                            libero, et suscipit massa sagittis eget. Nunc
                            egestas sem pharetra sapien semper, ac vulputate
                            velit sollicitudin. Nam vel enim at quam dictum
                            vestibulum ut laoreet arcu. Fusce dignissim porta
                            risus. Fusce eu ante ut nisi tempor pulvinar sit
                            amet vitae mauris.
                        </p>
                        <BodyButton
                            onClick={() => {
                                window.open("/about-us", "_self");
                            }}
                        >
                            Learn More <FaArrowRightLong className="ml-3" />
                        </BodyButton>
                    </div>
                    <div className="w-full px-0 mt-4 md:my-0 md:pl-4 flex flex-col items-end">
                        <video
                            src="/video/landing.webm"
                            className="w-full rounded-lg"
                            controls
                        />
                        <a
                            href="https://www.youtube.com/watch?v=Vc2DAkMvqko"
                            target="_blank"
                            className="block md:text-right mt-2 text-sm opacity-50 text-right max-w-full"
                        >
                            LJMU 200 - always ahead of our time [YouTube]
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
}
