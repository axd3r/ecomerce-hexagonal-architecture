class UpdateAddressResponse {
    constructor(address) {
        this.id = address.id;
        this.userId = address.userId;
        this.address = address.address;
        this.department = address.department;
        this.province = address.province;
        this.district = address.district;
    }
}

export default UpdateAddressResponse;