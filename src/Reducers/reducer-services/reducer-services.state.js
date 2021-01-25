const serviceState = {
    user: {
        reseller: false,
        register: false,
        token: false,
        product: false,
        paymentMethod: false,
        province: false,
        city: false,
        district: false,
        area: false,
        shipper: false,
        buyProduct: false,
    },
    product: {
        productList: false,
        createProduct: false,
        deleteSpec: false,
        deleteImage: false,
    },
    reseller: {
        product: false,
        productList: false,
        supplierList: false,
        deleteProduct: false,
        addProduct: false,
        addProductMultiple: false,
        bank: false,
    },
};

export default serviceState;
