import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../../component/widget/TextAreaFieldGroup";
import TextAreaFieldGroup from "../../component/widget/TextAreaFieldGroup";
import InputGroup from "../../component/widget/InputGroup";
import SelectListGroup from "../../component/widget/SelectListGroup";
import Layout from "../../component/layout/Layout";

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      price: "",
      rooms: "",
      type: "",
      bath: "",
      description: "",
      main: "",
      image: [],
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      location: this.state.location,
      price: this.state.price,
      rooms: this.state.rooms,
      bed: this.state.bed,
      type: this.state.type,
      bath: this.state.bath,
      description: this.state.description,
      main: this.state.main,
      image: this.state.image,
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    // Select options for type
    const options = [
      { label: "* Selet Type Of Product", value: 0 },
      { label: "Land", value: "Land" },
      { label: "Rent", value: "Rent" },
      { label: "Buy", value: "Buy" },
      { label: "Other", value: "Other" },
    ];

    return (
      <Layout>
        <div className="container-fluid">
          <div className="create-profile">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Add Property</h1>
                  <p className="lead text-center"></p>
                  <form onSubmit={this.onSubmit} encType="multipart/form-data">
                    <TextFieldGroup
                      placeholder="Location"
                      name="location"
                      value={this.state.location}
                      onChange={this.onChange}
                      error={errors.location}
                      info="Provide The Location Of The Property"
                    />
                    <SelectListGroup
                      placeholder="Type"
                      name="type"
                      value={this.state.type}
                      onChange={this.onChange}
                      options={options}
                      error={errors.type}
                      info="Select The Type Of Product You Want To Add"
                    />
                    <TextFieldGroup
                      placeholder="Price"
                      name="price"
                      value={this.state.price}
                      onChange={this.onChange}
                      error={errors.price}
                      info="Provide The Price For The Property"
                    />
                    <TextFieldGroup
                      placeholder="Rooms"
                      name="rooms"
                      value={this.state.rooms}
                      onChange={this.onChange}
                      error={errors.rooms}
                      info="Provide The Total Number Of Rooms Of The Property If Any"
                    />
                    <TextFieldGroup
                      placeholder="Bedrooms"
                      name="bed"
                      value={this.state.bed}
                      onChange={this.onChange}
                      error={errors.bed}
                      info="Provide The Number Of Bedrooms Of The Property If Any"
                    />
                    <TextFieldGroup
                      placeholder="Bathrooms"
                      name="bath"
                      value={this.state.bath}
                      onChange={this.onChange}
                      error={errors.bath}
                      info="Provide The Number Of Bathrooms Of The Property If Any"
                    />
                    <TextAreaFieldGroup
                      placeholder="Give A Description Of the Property"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                      error={errors.description}
                      info="Provide some information not yet provided on the property"
                    />

                    <div className="form-group">
                      <input
                        type="file"
                        name="main"
                        accept="image/*"
                        placeholder="Choose Your Main Picture"
                      />
                      <small className="form-text text-muted">
                        Select The Main Picture
                      </small>
                    </div>
                    <div className="form-group">
                      <input
                        type="file"
                        name="image"
                        placeholder="Choose Your Other Pictures"
                        accept="image/*"
                        multiple
                      />
                      <small className="form-text text-muted">
                        Select The Other Images You Have Of The Property
                      </small>
                    </div>

                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-info btn-block mt-4"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
