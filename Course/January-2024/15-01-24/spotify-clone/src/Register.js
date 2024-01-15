




function Register(){
     
    return (<>
     <section id="students-offer">
    <h3>Special discount for eligible students in university</h3>
    <button>LEARN MORE</button>
    <form>
        <input type="email" name="email" id="email" placeholder="Email address" required autocomplete="off" />
        <input type="text" name="userName" id="userName" placeholder="User Name" required  autocomplete="off" />
        <input type="password" name="password" id="password" placeholder="Password" required  autocomplete="off" />

        <label for="appType">App Type</label>
        <select name="appType" id="appType" required>
            <option value="music">music</option>
            <option value="album">album</option>
        </select>
        <input type="checkbox" name="consent-checkbox" id="consent-checkbox" required/>
        <span>By checking this box and clicking "Submit", you consent to use information for verification.</span>
        <button type="submit">SUBMIT</button>
    </form>
</section>
    </>)

}
export default Register;