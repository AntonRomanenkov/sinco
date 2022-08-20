import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const ContactForm = () => {

    //for validation
    const validationSchema = Yup
        .object()
        .shape({
            name: Yup
                .string()
                .required("Name is Required"),
            email: Yup
                .string()
                .required("Email is Required")
                .email("Entered value does not match email format"),
            sendMessage: Yup
                .string()
                .required("Please, leave us a message.")
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
        e
            .target
            .reset();
    }

    return (
        <Fragment>
            <form id="contact-form" action="#" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-12">
                        <div className="input-group-meta form-group mb-30">
                            <label>Name*</label>
                            <input type="text" placeholder="Rashed Kabir" name="name"{...register("name")}
                        className={`${errors.name ? "is-invalid" : ""}`}
                        /> 
                        {errors.name && (
                        <div className="invalid-feedback">{errors.name
                                ?.message}</div>
                    )}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group-meta form-group mb-30">
                            <label>Email*</label>
                            <input type="text" placeholder="rshdkabir@gmail.com" name="email" {...register("email")}
                        className={`${errors.email ? "is-invalid" : ""}`}
                        /> 
                        {errors.name && (
                        <div className="invalid-feedback">{errors.email
                                ?.message}</div>
                    )}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group-meta form-group mb-30">
                            <textarea placeholder="Your message*" name="sendMessage" {...register("message")}
                        className={`${errors.sendMessage ? "is-invalid" : ""}`}
                        /> 
                        {errors.sendMessage && (
                        <div className="invalid-feedback">{errors.sendMessage
                                ?.message}</div>
                    )}
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn-eight ripple-btn">Send Message</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default ContactForm