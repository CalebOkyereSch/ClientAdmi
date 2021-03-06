import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../../component/widget/TextAreaFieldGroup";
import TextAreaFieldGroup from "../../component/widget/TextAreaFieldGroup";
import SelectListGroup from "../../component/widget/SelectListGroup";
import Layout from "../../component/layout/Layout";
import { updateProduct } from "../../actions/productActions";
import validateProductAdd from "../../validation/addProperty";
import isEmpty from "../../isEmpty";
class PropertyUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      price: "",
      rooms: "",
      type: "",
      bath: "",
      bed: "",
      description: "",
      status: "",
      main: null,
      image: null,
      errors: {},
    };
    this.mainOnChange = this.mainOnChange.bind(this);
    this.imageOnChange = this.imageOnChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { prodUpdate } = this.props.product;
    let product = {
      location: this.state.location,
      price: this.state.price,
      rooms: this.state.rooms,
      type: this.state.type,
      bath: this.state.bath,
      bed: this.state.bed,
      description: this.state.description,
      status: this.state.status,
      main: this.state.main,
      image: this.state.image,
    };

    const { err, isValid } = validateProductAdd(product);

    if (!isValid) {
      this.setState({ errors: err });
    } else {
      const formData = new FormData();

      formData.append("location", this.state.location);
      formData.append("status", this.state.status);
      formData.append("price", this.state.price);
      formData.append("rooms", this.state.rooms);
      formData.append("bed", this.state.bed);
      formData.append("type", this.state.type);
      formData.append("bath", this.state.bath);
      formData.append("description", this.state.description);
      formData.append("main", this.state.main);

      if (!isEmpty(this.state.image)) {
        this.state.image.forEach((image) => {
          formData.append("image", image);
        });
      }
      this.props.updateProduct(formData, prodUpdate.id, this.props.history);
    }
  }

  componentWillMount() {
    const { prodUpdate } = this.props.product;
    if (prodUpdate) {
      this.setState({
        location: prodUpdate.location,
        price: prodUpdate.price,
        rooms: prodUpdate.rooms,
        type: prodUpdate.type,
        bath: prodUpdate.bath,
        bed: prodUpdate.bed,
        description: prodUpdate.description,
        status: prodUpdate.status,
        main: prodUpdate.main,
        image: prodUpdate.image,
      });
    }
    console.log(this.props.product);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  mainOnChange(e) {
    let file = e.target.files[0];
    this.setState({ main: file });
  }

  imageOnChange(e) {
    let file = e.target.files;
    this.setState({ image: [...file] });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;

    // Select options for type
    const options = [
      { label: "* Select Status Of Product", value: "" },
      { label: "Rent", value: "Rent" },
      { label: "Buy", value: "Buy" },
      { label: "Other", value: "Other" },
    ];
    const option1 = [
      { label: "* Select Type Of Product", value: "" },
      { label: "Housing", value: "Housing" },
      { label: "Land", value: "Land" },
      { label: "Apartment", value: "Apartment" },
      { label: "Other", value: "Other" },
    ];

    return (
      <Layout>
        <div className="container-fluid">
          <div className="create-profile">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Update Property</h1>
                  <p className="lead text-center"></p>
                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="Location"
                      name="location"
                      value={this.state.location}
                      onChange={this.onChange}
                      error={errors.location}
                      info="Provide The Location Of The Property"
                    />
                    <SelectListGroup
                      options={option1}
                      placeholder="Type"
                      name="type"
                      value={this.state.type}
                      onChange={this.onChange}
                      error={errors.type}
                      info="Provide The Type Of Products "
                    />
                    <TextFieldGroup
                      placeholder="Price"
                      name="price"
                      value={this.state.price}
                      onChange={this.onChange}
                      error={errors.price}
                      info="Provide The Price For The Property"
                    />
                    <SelectListGroup
                      options={options}
                      placeholder="Status"
                      name="status"
                      value={this.state.status}
                      onChange={this.onChange}
                      error={errors.status}
                      info="Provide Status"
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
                        onChange={this.mainOnChange}
                      />

                      {errors.main ? (
                        <div
                          style={{
                            fontSize: "12px",
                            color: "red",
                          }}
                        >
                          {errors.main}
                        </div>
                      ) : (
                        <small className="form-text text-muted">
                          Select The Main Picture
                        </small>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="file"
                        name="image"
                        placeholder="Choose Your Other Pictures"
                        accept="image/*"
                        onChange={this.imageOnChange}
                        multiple
                      />
                      {errors.others ? (
                        <div
                          style={{
                            fontSize: "12px",
                            color: "red",
                          }}
                        >
                          {errors.others}
                        </div>
                      ) : (
                        <small className="form-text text-muted">
                          Select The Other Images You Have Of The Property
                        </small>
                      )}
                    </div>

                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-info btn-block mt-4 btn-dark"
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

PropertyUpdate.propTypes = {
  errors: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  updateProduct: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
  product: state.product,
});

export default connect(mapStateToProps, { updateProduct })(
  withRouter(PropertyUpdate)
);
