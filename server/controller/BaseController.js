import "babel-polyfill";
import fetch from "node-fetch";

/**
 * this is an Interface that has the response methods and every class
 * implementing this interface must implement the methods
 */

class BaseController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  /** handle response errors */
  static _responseError = (res, code) => {
    return res.status(code).json({ error_msg: "error" });
  };

  /** handle successful response */
  static _responseSuccess = (res, results, code) => {
    //return json response
    res.status(code).json({ results });
  };

  /** get data from rates api */
  static fetchData = async (url) => {
    const response = await fetch(url);
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error();
    }
  };

  /** validate request parameter sent */
  static validateRequest = async (query) => {
    let response;
    if (
      query.hasOwnProperty("base") &&
      query.hasOwnProperty("currency") &&
      Object.keys(query).length == 2
    ) {
      response = true;
    } else {
      response = false;
    }

    return response;
  };
}

export default BaseController;
