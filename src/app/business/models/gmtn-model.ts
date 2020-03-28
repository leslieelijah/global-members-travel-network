export class MembersTravelNetworkDb {
    public firstName: string;
    public lastName: string;
    public interest: string;
    public city: string;
    public address: string;
    public address1: string;
    public email: string;
    public phone: string;
    public typeOfCommunication: string;
    public zipCode: string;

    constructor(
        firstName: string,
        lastName: string,
        interest: string,
        city: string,
        address: string,
        address1: string,
        email: string,
        phone: string,
        typeOfCommunication: string,
        zipCode: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.interest = interest;
        this.city = city;
        this.address = address;
        this.address1 = address1;
        this.email = email;
        this.phone = phone;
        this.typeOfCommunication = typeOfCommunication;
        this.zipCode = zipCode;
    }
}