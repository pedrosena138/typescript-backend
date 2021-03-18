import User from "@models/User";

test("It should be ok", () => {
  const user = new User();

  user.name = "Pedro";

  expect(user.name).toEqual("Pedro");
});
