import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const BlogDetailsForm = () => {

    //for validation
    const validationSchema = Yup.object().shape({
            name: Yup.string().required("Name is Required"),
            email: Yup.string().required("Email is Required").email("Entered value does not match email format"),
            sendMessage: Yup.string().required("Please, leave us a message."),
        });

    const formOptions = {
        resolver: yupResolver(validationSchema)
    };
    // get functions to build form with useForm() hook
    const {register, handleSubmit, formState} = useForm(formOptions);
    const {errors} = formState;

    function onSubmit(data, e) {
        //display form data on success
        console.log("Message submited: " + JSON.stringify(data));
        e.target.reset();
    }

    return (
        <Fragment>
            <form  className="mt-25" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-wrapper mb-15">
                    <label>Name*</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Rashed Kabir"
                        {...register("name")}
                        className={`${errors.name ? "is-invalid" : ""}`}
                        /> 
                        {errors.name && (
                        <div className="invalid-feedback">{errors.name
                                ?.message}</div>
                    )}
                </div>
                {/* /.input-wrapper */}
                <div className="input-wrapper mb-30">
                    <label>Email*</label>
                    <input 
                    type="text" 
                    name="email" 
                    placeholder="rshdkabir@gmail.com"
                    {...register("email")}
                    className={`${errors.email ? "is-invalid" : ""}`}
                    />
                    {errors.email && (
                        <div className="invalid-feedback">{errors.email
                                ?.message}</div>
                    )}
                </div>
                {/* /.input-wrapper */}
                <div className="input-wrapper mb-30">
                    <textarea 
                    placeholder="Your message"
                    name="sendMessage"
                    type="text"
                    {...register("message")}
                    className={`${errors.sendMessage ? "is-invalid" : ""}`}
                    />
                    {errors.sendMessage && (
                        <div className="invalid-feedback">{errors.sendMessage
                                ?.message}</div>
                    )}
                </div>
                {/* /.input-wrapper */}
                <button className="btn-eight ripple-btn">Post Comment</button>
            </form>
        </Fragment>
    )
}

export default BlogDetailsForm