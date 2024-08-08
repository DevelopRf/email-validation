import { useFormik } from "formik"
import { validation } from "../validation/Validation"

const RegisterForm = () => {

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: validation
    })

    return (
        <section className="my-14">
            <div className="container">
                <form className="flex max-w-[600px] flex-col gap-y-3" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="email" value={values.email} onChange={handleChange} placeholder="Enter your email" className="w-full h-12 px-3 outline-none border border-[#e5e5e5] rounded-md" />
                        {
                            errors.email && <p className="text-red-500 text-xs">{errors.email}</p>
                        }
                    </div>
                    <button type="submit" className="w-28 h-12 self-end flex-shrink-0 rounded-md bg-green-600 text-white border border-green-600">Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default RegisterForm