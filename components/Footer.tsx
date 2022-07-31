import Icon from "@mdi/react";
import { mdiEmailOutline } from '@mdi/js';
import Container from "./Container";

function Footer() {
    return (
        <footer className="py-10">
            <Container>
                <div className="flex justify-between items-center">
                    <p className="flex flex-row items-center space-x-3">
                        <Icon
                            path={mdiEmailOutline}
                            color='white'
                            size={1.5}
                        />

                        <a className=' text-green-600 font-bold ' href='mailto:hello@zero-1.studio'>
                            hello@zero-1.studio
                        </a>
                    </p>
                    <div>
                        <p className="text-white">
                            © Zero 1 Studio 2022
                        </p>
                        <a href="https://storyset.com/work">Work illustrations by Storyset</a>
                    </div>

                </div>
            </Container>
        </footer>
    )
}

export default Footer;