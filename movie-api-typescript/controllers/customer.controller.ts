import { Request, Response } from "express";
import { CustomerService } from "../services/customer.service";


export class CustomerController {
  customerService: CustomerService;
    constructor() {
        this.customerService = new CustomerService();
    }
    public async getCustomers(req: Request, res: Response) {
    
    }

  public async postCustomers(req: Request, res: Response) {
    try {
      let ans = new CustomerService().postCustomers(req.body);
      res.send(ans);
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: "Error occured" });
    }
  }


  public async updateCustomers(req: Request, res: Response) {
    try {
      let ans = new CustomerService().updateCustomers(req.body);
      res.send(ans);
    } catch (err) {
      console.log(err);
      res.status(404)
        .send({ message: "Error Occured" });
    }
  }

}