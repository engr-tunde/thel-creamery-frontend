import AppInputField from "../../Component/form/AppInputField";
import AppSubmitButton from "../../Component/form/AppSubmitButton"

const LoginPage = () => {

    return (
        <div className="h-screen  w-screen flex flex-col items-center justify-center">
            <div className="w-full md:max-w-[400px] mx-auto flex flex-col gap-5 bg-blue-500">
                <img src="/images/logo.png" alt="" width={120} className="bg-amber-800 flex mx-auto"/>
                <AppInputField type="email" placeholder="email address"/>
                <AppInputField type="password"/>
                <AppSubmitButton title="Submit"/>
            </div>

        </div>
    )
}

export default LoginPage;