import React from "react";
import { Navigate } from "react-router-dom";

export default class CreateProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isCreateProfile: 0 }
    }

    createprofileURL = "http://localhost:3000/Renteen/user/createprofile"
    userCreateprofile = () => {
        var address = this.address.value
        var city = this.city.value
        var file = this.file.value
        var occupation = this.occupation.value

        console.log(address + " : " + city + " : " + file + " : " + occupation);

        var api_url = this.createprofileURL + "?address=" + address + "&city=" + city + "&file=" + file + "&occupation=" + occupation

        console.log(api_url)

        fetch(api_url).then((response) => {

            response.json().then((result) => {

                var check = result.res
                if (check == true) {
                    alert('User create successfully...')
                    this.address.value = ""
                    this.city.value = ""
                    this.file.value = ""
                    this.occupation.value = ""
                    this.setState({ isCreateProfile: 1 })

                }
                else {
                    alert('User create already exists...')
                    this.address.value = ""
                    this.city.value = ""
                    this.file.value = ""
                    this.occupation.value = ""
                    this.setState({ isCreateProfile: 0 })
                }

            })
        }).catch((err) => {
            alert("Data Not Inserted...")
            console.log("Error is : " + err)
        })
    }

render() {

    if (this.state.isCreateProfile == 1) {
        return <Navigate to='/hostelowner/hostelpage' />
    }

    return (
        <div>
            <section class="for-full-back color-white " id="about"  >
                <div class="container" >
                    <div class="row text-center" >
                        <div class="col-md-8 col-md-offset-2">
                            <h2>
                                Create Profile!!
                            </h2>
                            <div className="control-group">
                                <textarea className="form-control p-4"
                                    name="address" placeholder="Enter address"
                                    ref={e => this.address = e} />
                                <p className="help-block text-danger"></p>
                            </div>

                            <div className="control-group">
                                <select name="city" ref={e => this.city = e}>
                                    <option>Select City</option>
                                    <option>Indore </option>
                                    <option>Bhopal</option>
                                    <option>Ujjain</option>
                                </select>
                            </div>
                            <br /><br />

                            <div className="control-group">
                                <input type="file" className="form-control p-4"
                                    placeholder="Enter file" name="file"
                                    ref={e => this.file = e} />
                                <p className="help-block text-danger"></p>
                            </div>

                            <div className="control-group">
                                <input type="text" className="form-control p-4"
                                    name="occupation" placeholder="Enter Occupation"
                                    ref={e => this.occupation = e} />
                                <p className="help-block text-danger"></p>
                            </div>

                            <div>
                                <button className="btn btn-primary py-3 px-5" type="submit"
                                    onClick={this.userCreateprofile}>
                                    Submit!!</button>
                            </div>
                            <br /><br />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
}