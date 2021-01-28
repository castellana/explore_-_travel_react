

const Header = () => {
    return ( 
        <main>
            <section id="header">
                <section className="title-wrapper">
                    <h1>Explore and Travel</h1>
                    <h3>Holiday finder</h3>
                    <hr class="smallLine" />
                    <article id="select-group"> 
                        <select name="selectLocation" id="">
                            <option value="" selected>Location</option>
                            <option value="">Germany</option>
                            <option value="">Spain</option>
                            <option value="">France</option>
                        </select>
                        <select name="selectActivity" id="selectActivity">
                            <option value="" selected>Activity</option>
                            <option value="">Hiking</option>
                            <option value="">Scuba Diving</option>
                            <option value="">Mountain biking</option></select>
                        <select name="selectGrade" id="">
                            <option value="" selected>Grade</option>
                            <option value="">Beginner</option>
                            <option value="">Middle</option>
                            <option value="">Advance</option></select>
                        <select name="selectDate" id="">
                            <option value="" selected>Date</option>
                        </select>
                        <a href="" className="buttonOrange">Explore</a> 
                    </article>
                
                </section>

                <img src="/img/header-explorer.png" alt=""/>
            </section>
        </main>
     );
}
 
export default Header;