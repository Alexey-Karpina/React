const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((wrapepd, f) => f(wrapepd),comp);
};

export default compose;