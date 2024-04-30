import { useForm } from "react-hook-form";

const SignupForm = () => {
    const {register, handleSubmit, reset, formState: { errors} } = useForm();

    const handleClearClick = () =>{
        reset();
    };

    const handleSubmitForm = (data) => {
        console.log(data);

    };  


    return(
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label>
                Name
                <input {...register('name', { required: true})} />
            </label>
            <br />
            <label>
                Age
                <input {...register('age', { required: true})} />    
            </label> 
            <br />
            <label>
                Address 
                <input {...register('address', { required: true})} />
            </label>
            <br />
            <label>
                Zipcode
                <input {...register('zipcode', { required: true})} />
            </label>
            <br />
            <label>
                Phone
                <input {...register('phone', { required: true})} />
            </label>
            <br />
          
        </form>
    );
};

export { SignupForm };
