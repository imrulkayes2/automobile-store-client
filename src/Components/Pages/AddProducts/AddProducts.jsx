import React from 'react';

const AddProducts = () => {
    const handleAddCar = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.typ.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const textArea = form.textArea.value;
        console.log(name, brandName, type, price, photo, textArea);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="">
                <div className="text-center pb-10">
                    <h1 className="text-5xl font-bold">Add Your Car!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleAddCar} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" name='brandName' placeholder="Brand Name" className="input input-bordered" required />
                        </div>
                        <div>
                            <select name='typ' className="select select-success w-full max-w-xs">
                                <option disabled selected>Type</option>
                                <option >Hatchback</option>
                                <option >Micro car</option>
                                <option >Station wagon</option>
                                <option >Utility vehicle</option>
                                <option >Sports car</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter Your Photo URL" className="input input-bordered" />
                        </div>
                        <div>
                            <textarea name='textArea' className="textarea textarea-primary" placeholder="Short description"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">ADD</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;