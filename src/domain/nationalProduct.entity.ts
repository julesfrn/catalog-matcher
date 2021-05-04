type NationalProductRaw = {
    assortment_product_uid: string
    family: string
    is_sold_as_unit: boolean
    measure_unit: string
}

export class NationalProduct {
    assortment_product_uid: string
    family: string
    is_sold_as_unit: boolean
    measure_unit: string

    constructor(nationalProductRaw: NationalProductRaw) {
        this.assortment_product_uid = nationalProductRaw.assortment_product_uid
        this.family = nationalProductRaw.family
        this.is_sold_as_unit = nationalProductRaw.is_sold_as_unit
        this.measure_unit = nationalProductRaw.measure_unit
    }
}