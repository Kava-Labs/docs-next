
import Header from './Header';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import Footer from './Footer';
import Doc from './Doc'; 

// brings it all together in this case children will be the mardown file 
// markdown file will be rendered inside the Doc Component which is a seperate "container" for the mdx file to keep 
// the code more atomic and loosely coupled

function Main({children}){

    return <>
        <Header />
        <LeftNav />

        <Doc>
            {children}
        </Doc>

        <RightNav />
        <Footer />

    </>; 
};


export default Main; 