
// container to render the markdown file 
type Props = {
    html : string
}

function Doc({html} : Props){

   
    return <>
        <main dangerouslySetInnerHTML={{__html: html }}>

        </main>
    </>;

};


function transformHtml(htmlStr : string){

};

export default Doc; 