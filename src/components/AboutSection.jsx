function AboutSection () {
    return (
        <>  
            {/* add full screen height 100 */}
            <div className="full-screen-height  px-4 pt-5 my-5 text-center border-bottom">
                {/* add full screen height 100 */}
                {/* copy title from Hero Sectopm && make it display-6 */}
                <h1 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">About Me</h1>

                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                {/* -- buttons */}
                </div>
                {/* -- custom style */}
                <div className="overflow-hidden"  >
                <div className="container px-5">
                    {/* width auto height 200 */}
                    {/* ++ border outline */}
                    {/* -- class Shadow lg */}
                    {/* -- mb-4 */}

                    <img src="https://i.pinimg.com/originals/e5/bd/3a/e5bd3a2f2cf2f6f4dad0f531b92564be.gif" className="img-fluid border-outline rounded-3" alt="Example image" width="auto" height="200" loading="lazy"/>
                </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection;