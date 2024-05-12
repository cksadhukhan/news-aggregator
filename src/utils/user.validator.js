class UserValidator {
  static emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  static validateSignupDetails(userData) {
    const { name, password, email } = userData;

    if (!name) {
      return {
        status: false,
        message: "Please Provide Name",
      };
    }

    if (!email || this.emailRegex.test(email)) {
      return {
        status: false,
        message: "Please Provide Valid Email",
      };
    }

    if (!password) {
      return {
        status: false,
        message: "Please Provide Passsword",
      };
    }

    return {
      status: true,
      message: "Details Validated",
    };
  }

  static validateLoginDetails(userData) {
    const { email, password } = userData;

    if (!email || this.emailRegex.test(email)) {
      return {
        status: false,
        message: "Please Provide Valid Email",
      };
    }

    if (!password) {
      return {
        status: false,
        message: "Please Provide Passsword",
      };
    }

    return {
      status: true,
      message: "Details Validated",
    };
  }

  static validatePreferencesInput(data) {
    const { preferences } = data;
    if (!preferences || !Array.isArray(preferences)) {
      return { status: false, message: "Please provide valid preferences" };
    }

    return {
      status: true,
      message: "Details Validated",
    };
  }
}

module.exports = UserValidator;
