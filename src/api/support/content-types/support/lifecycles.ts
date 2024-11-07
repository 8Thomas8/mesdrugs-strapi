module.exports = {
    async beforeCreate({params}) {
        const ctx = strapi.requestContext.get();
        const user = ctx.state.user;


        if (!user) {
            ctx.throw(401, 'User is not authenticated')
        }

        params.data.created_datetime = new Date();
        params.data.created_by_user = { connect: { id: user.id } };
    },

    async beforeUpdate({params}) {
        const ctx = strapi.requestContext.get();
        const user = ctx.state.user;

        if (!user) {
            ctx.throw(401, 'User is not authenticated')
        }

        params.data.updated_datetime = new Date();
        params.data.updated_by_user = { connect: { id: user.id } };
    },};
