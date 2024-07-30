import { createSlice } from "@reduxjs/toolkit";
import { addProduct, getProducts, deleteProduct } from './ProductAPI';

const initialState = {
    data: [],
    newData: {}
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        resetNewData: (state, _) => {
            state.newData = {
                article: "",
                tags: [],
                images: [],
                golds: [
                    {
                        startWeight: "",
                        weight: "",
                        price: "",
                        color: "",
                        prob: "",
                    }
                ],
                price: {
                    productionPrice: "",
                    price: "",
                },
                stones: [
                    {
                        type: "",
                        count: "",
                        diametr: "",
                        weight: "",
                        quality: "",
                        price: "",
                        GIA: false,
                        number: ""
                    }
                ],
                works: [
                    {
                        name: "",
                        count: "",
                        price: "",
                        amount: "",
                        comment: ""
                    }
                ]
            };
        },
        addNewImage: (state, action) => {
            state.newData = {
                ...state.newData,
                images: [...state.newData.images, action.payload],
            }
        },
        removeImage: (state, action) => {
            state.newData = {
                ...state.newData,
                images: state.newData.images.filter((_, index) => index !== action.payload),
            }
        },
        productDataTag: (state, action) => {
            state.newData = {
                ...state.newData,
                tags: action.payload,
            }
        },
        productArticle: (state, action) => {
            state.newData = {
                ...state.newData,
                article: action.payload,
            }
        },
        removeGold: (state, action) => {
            state.newData = {
                ...state.newData,
                golds:
                    state.newData.golds.length > 1
                        ? state.newData.golds.filter((_, ind) => ind !== action.payload)
                        : [...state.newData.golds],
            }
        },
        addGold: (state, _) => {
            state.newData = {
                ...state.newData,
                golds: [
                    ...state.newData.golds,
                    {
                        name: "",
                        count: "",
                        price: "",
                        amount: "",
                        comment: "",
                    },
                ],
            }
        },
        changeGoldProb: (state, action) => {
            state.newData = {
                ...state.newData,
                golds: state.newData.golds.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            prob: action.payload.data.prob,
                            color: action.payload.data.color,
                        };
                    }
                    return st;
                }),
            }
        },
        changeStartWeight: (state, action) => {
            state.newData = {
                ...state.newData,
                golds: state.newData.golds.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            startWeight: action.payload.data,
                        };
                    }
                    return st;
                }),
            }
        },
        changeWeight: (state, action) => {
            state.newData = {
                ...state.newData,
                golds: state.newData.golds.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            weight: action.payload.data,
                        };
                    }
                    return st;
                }),
            }
        },
        changeGoldDrice: (state, action) => {
            state.newData = {
                ...state.newData,
                golds: state.newData.golds.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            price: action.payload.data,
                        };
                    }
                    return st;
                }),
            }
        },
        productPriceChange: (state, action) => {
            state.newData = {
                ...state.newData,
                price: { ...state.newData.price, price: action.payload },
            }
        },
        productProductionPriceChange: (state, action) => {
            state.newData = {
                ...state.newData,
                price: { ...state.newData.price, productionPrice: action.payload },
            }
        },
        removeStone: (state, action) => {
            state.newData = {
                ...state.newData,
                stones:
                    state.newData.stones.length > 1
                        ? state.newData.stones.filter((_, ind) => ind !== action.payload)
                        : [...state.newData.stones],
            }
        },
        addStone: (state, _) => {
            state.newData = {
                ...state.newData,
                stones: [
                    ...state.newData.stones,
                    {
                        type: "",
                        count: "",
                        diametr: "",
                        weight: "",
                        quality: "",
                        price: "",
                        GIA: false,
                        number: "",
                    },
                ],
            }
        },
        stoneTypeChange: (state, action) => {
            state.newData = {
                ...state.newData,
                stones: state.newData.stones.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            type: action.payload.data,
                        };
                    }
                    return st;
                }),
            }
        },
        stoneCountChange: (state, action) => {
            state.newData = {
                ...state.newData,
                stones: state.newData.stones.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            count: action.payload.data,
                        };
                    }
                    return st;
                }),
            }
        },
        stoneDiametrChange: (state, action) => {
            state.newData = {
                ...state.newData,
                stones: state.newData.stones.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            diametr: action.payload.data,
                        };
                    }
                    return st;
                }),
            }
        },
        stoneWeightChange: (state, action) => {
            state.newData = {
                ...state.newData,
                stones: state.newData.stones.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            weight: action.payload.data,
                        };
                    }
                    return st;
                }),
            }
        },
        stoneQualityChange: (state, action) => {
            state.newData = {
                ...state.newData,
                stones: state.newData.stones.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            quality: action.payload.data,
                        };
                    }
                    return st;
                }),
            }
        },
        stonePriceChange: (state, action) => {
            state.newData = {
                ...state.newData,
                stones: state.newData.stones.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            price: action.payload.data,
                        };
                    }
                    return st;
                }),
            }
        },
        stoneGIAChange: (state, action) => {
            state.newData = {
                ...state.newData,
                stones: state.newData.stones.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            GIA: action.payload.data,
                        };
                    }
                    return st;
                }),
            }
        },
        stoneNumberChange: (state, action) => {
            state.newData = {
                ...state.newData,
                stones: state.newData.stones.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            number: action.payload.data,
                        };
                    }
                    return st;
                }),
            }
        },
        removeWork: (state, action) => {
            state.newData = {
                ...state.newData,
                works:
                    state.newData.works.length > 1
                        ? state.newData.works.filter((_, ind) => ind !== action.payload)
                        : [...state.newData.works],
            }
        },
        addWork: (state, _) => {
            state.newData = {
                ...state.newData,
                works: [
                    ...state.newData.works,
                    {
                        name: "",
                        count: "",
                        price: "",
                        amount: "",
                        comment: "",
                    },
                ],
            }
        },
        workNameChange: (state, action) => {
            state.newData = {
                ...state.newData,
                works: state.newData.works.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            name: action.payload.data,
                        };
                    }
                    return st;
                }),
            }
        },
        workCountChange: (state, action) => {
            state.newData = {
                ...state.newData,
                works: state.newData.works.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            count: action.payload.data,
                        };
                    }
                    return st;
                }),
            }
        },
        workPriceChange: (state, action) => {
            state.newData = {
                ...state.newData,
                works: state.newData.works.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            price: action.payload.data,
                        };
                    }
                    return st;
                }),
            }
        },
        workAmountChange: (state, action) => {
            state.newData = {
                ...state.newData,
                works: state.newData.works.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            amount: action.payload.data,
                        };
                    }
                    return st;
                }),
            }
        },
        workCommentChange: (state, action) => {
            state.newData = {
                ...state.newData,
                works: state.newData.works.map((st, ind) => {
                    if (action.payload.index === ind) {
                        return {
                            ...st,
                            comment: action.payload.data,
                        };
                    }
                    return st;
                }),
            }
        },
    },
    // FIXME: Add extra reducers
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.data = [...state.data, action.payload]
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.data = state.data.filter((prod) => prod.id !== action.payload)
            })
    },
});

export default productSlice.reducer;

export const {
    resetNewData, addNewImage, removeImage, productDataTag, productArticle, addGold,
    removeGold, changeGoldProb, changeStartWeight, changeWeight, changeGoldDrice,
    productPriceChange, productProductionPriceChange, removeStone, addStone, stoneTypeChange,
    stoneCountChange, stoneDiametrChange, stoneWeightChange, stoneQualityChange, stonePriceChange,
    stoneGIAChange, stoneNumberChange, removeWork, addWork, workNameChange, workCountChange,
    workPriceChange, workAmountChange, workCommentChange
} = productSlice.actions