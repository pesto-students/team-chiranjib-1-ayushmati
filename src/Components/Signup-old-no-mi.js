import { useForm, useController } from "react-hook-form";
import Select from "react-select";
import { stateList,countryList,roleList,townCityList } from "./OptionList";

function Signup() {

  const { register, handleSubmit, formState: { errors }, control, watch } = useForm();

  const {
    field: { value: roleValue, onChange: roleOnChange, ...restRoleField },
  } = useController({ name: "Role", control });

  const {
    field: {
      value: countryValue,
      onChange: countryOnChange,
      ...restCountryField
    },
  } = useController({ name: "Country", control });

  const {
    field: { value: stateValue, onChange: stateOnChange, ...restStateField },
  } = useController({ name: "State", control });

  const {
    field: {
      value: townCityValue,
      onChange: townCityOnChange,
      ...restTownCityField
    },
  } = useController({ name: "Town/city", control });

  const onsubmit = (data) => {
    console.log(data);  
  };

  return (
    <div className="signup-div">
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="form-control">
          <label>Hospital Name : </label>
          <input
            placeholder="orange city hospital"
            type="text"
            name="Hospital Name"
            {...register("hospital")}
          />
        </div>
        <div className="form-control">
          <label>Role : </label>
          <Select
            className="select-role"
            placeholder="Select Language"
            isClearable
            options={roleList}
            value={
              roleValue
                ? roleList.find((x) => x.value === roleValue)
                : roleValue
            }
            onChange={(option) => roleOnChange(option ? option.value : option)}
            {...restRoleField}
          />
        </div>

        <div className="form-control">
          <label>User No : </label>
          <input
            placeholder="APH110501"
            type="text"
            name="User No"
            {...register("User No")}
          />
        </div>

        <div className="form-control">
          <label>First Name : </label>
          <input
            placeholder="Virat"
            type="text"
            name="First Name"
            {...register("First Name")}
          />
        </div>

        <div className="form-control">
          <label>Last Name : </label>
          <input
            placeholder="Kholi"
            type="text"
            name="Last Name"
            {...register("Last Name")}
          />
        </div>

        <div className="form-control">
          <label>Country : </label>
          <Select
            className="select-country"
            placeholder="Select Country"
            isClearable
            options={countryList}
            value={
              countryValue
                ? countryList.find((x) => x.value === countryValue)
                : roleValue
            }
            onChange={(option) =>
              countryOnChange(option ? option.value : option)
            }
            {...restCountryField}
          />
        </div>

        <div className="form-control">
          <label>State: </label>
          <Select
            className="select-State"
            placeholder="Select State"
            isClearable
            options={stateList}
            value={
              stateValue
                ? stateList.find((x) => x.value === stateValue)
                : stateValue
            }
            onChange={(option) => stateOnChange(option ? option.value : option)}
            {...restStateField}
          />
        </div>

        <div className="form-control">
          <label>Town/city : </label>
          <Select
            className="select-townCity"
            placeholder="Select town/city"
            isClearable
            options={townCityList}
            value={
              townCityValue
                ? townCityList.find((x) => x.value === townCityValue)
                : townCityValue
            }
            onChange={(option) =>
              townCityOnChange(option ? option.value : option)
            }
            {...restTownCityField}
          />
        </div>

        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register("Email", {
              required: {
                value:true,
                message:"Email is required"},
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Enter valid email id"
              },
            })}
          />
          {errors.Email && <p>{errors.Email.message}</p>}
          
        </div>

        <div className="form-control">
          <label>Password : </label>
          <input
            type="password"
            name="password"
            {...register("Password",{
              required:{
                value:true,
                message:"password is required"}
            })}
            />
        </div>

        <div className="form-control">
          <label>Confirm Password : </label>
          <input
            type="password"
            name="confirm password"
            {...register("Confirm_password",{
              required:{
              value:true,
              message:"Confirm password is required"},
              validate:(val)=>{
                if (watch('Password')!==val){
                  return "password should match"
                }
              }
            }
            )}
            />

           {errors.Confirm_password && <p>{errors.Confirm_password.message}</p>}
        </div>

          <div className="form-control">
            <label></label>
            <button type="submit">signup</button>
          </div>
        
      </form>
    </div>
  );
}

export default Signup;
