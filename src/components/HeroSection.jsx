function HeroSection () {  
    return (
        <>  
            {/* ++ id home for nav3 */}
            <div id="home" className="container">
                {/* ++ Justify content center && text center */}
                {/* py-5 to py-3 */}
                 {/* ++ fill screen heighht class */}
                <div className="full-screen-height row flex-lg-row-reverse justify-content-center text-center align-items-center g-5 py-3">
                <div className="col-10 col-sm-8 col-lg-6 ">
                    {/* ++rounded Circle */}
                    {/* ++ height and width smaller and border outline*/}
                    <img src="https://i.pinimg.com/564x/5a/72/49/5a7249c50b1e0cd4dad05707640332e6.jpg" className="border-outline d-block mx-auto img-fluid rounded-circle" alt="Bootstrap Themes" width="400" height="200" loading="lazy"/>
                </div>
                {/* ++ text center */}
                <div className="col-lg-6 text-center">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Hello, I'm Espresso Macchiato</h1>
                    <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    {/* Justify content md start => justify content center */}
                    <div className="d-grid gap-2 d-md-flex justify-content-center">
                    {/* -- cancel button */}
                    {/* primary button -> dark outline */}
                    <button type="button" className=" btn btn-outline-dark btn-lg px-4 me-md-2" fdprocessedid="48ssyg">Github</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )

    

}

export default HeroSection;
