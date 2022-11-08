function fn(args: { message?: string }) {
  if (!args.message) return "";
  return args.message.toLowerCase();
}

console.log(fn({}));
