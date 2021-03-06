const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const resolvers = {
  Query: {
    posts: (_, args, context, info) => {
      return context.prisma.query.posts(
        {
          where: {
            OR: [
              { title_contains: args.searchString },
              { content_contains: args.searchString },
              //{ author_contains: args.searchString }
            ],
          },
        },
        info,
      );
    },
    user: (_, args, context, info) => {
      return context.prisma.query.user(
        {
          where: {
            id: args.id,
          },
        },
        info,
      );
    },
    post: (_, args, context, info) => {
      return context.prisma.query.post(
        {
          where: {
            id: args.id,
          },
        },
        info,
      );
    },
  },
  Mutation: {
    createDraft: (_, args, context, info) => {
      const { title, content } = args.input;
      return context.prisma.mutation.createPost({
        data: {
          title: title,
          content: content,
          published: false,
          author: {
            connect: {
              id: 'ck6ib3nku000a0778ehplr35o',
            },
          },
        },
        info,
      });
    },
    editPost: (_, args, context, info) => {
      const { id, title, content } = args.input;
      return context.prisma.mutation.updatePost({
        where: {
          id: id,
        },
        data: {
          title: title,
          content: content,
        },
        info,
      });
    },
    publish: (_, args, context, info) => {
      return context.prisma.mutation.updatePost(
        {
          where: {
            id: args.id,
          },
          data: {
            published: true,
          },
        },
        info,
      );
    },
    deletePost: (_, args, context, info) => {
      return context.prisma.mutation.deletePost(
        {
          where: {
            id: args.id,
          },
        },
        info,
      );
    },
    ///add const user here 3/9
    signup: (_, args, context, info) => {
      const user = {
        data: {
          name: args.input.name,
        },
        info,
      };
      return context.prisma.mutation.createUser(user);
    },
  },
};

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'http://localhost:4466',
    }),
  }),
});
server.start(() => console.log(`GraphQL server is running on http://localhost:4000`));

// // The `listen` method launches a web server.
// server.listen().then(({ url }) => {
//   console.log(`????  Server ready at ${url}`);
// });
