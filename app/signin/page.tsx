

export default function signin(){
    return(
        <div className="w-[80%] mx-auto my-[200px]">
            <div className="flex justify-center items-center">
            <div className="box">
        <span className="borderline"></span>
        <form action="#" method="get">
            <h2>Sign in</h2>
            <div className="inputBox">
                <input type="text" name="UserName" id="UserName" required />
                <label for="UserName">UserName</label>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="password" name="pass" id="pass" required />
                <label for="pass">Password</label>
                <i></i>
            </div>
            <div className="links">
                <a href="#">Forget Password</a>
                <a href="#1">Sign Up</a>
            </div>
            <input type="submit" value="Login" />
        </form>
    </div>
            </div>
        </div>
    )
}