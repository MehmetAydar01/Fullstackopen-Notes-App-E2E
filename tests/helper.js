const loginWith = async (page, username, password) => {
  await page.getByRole('button', { name: 'log in' }).click()
  // A better solution is to define unique test id attributes for the fields, to search for them in the tests using the method getByTestId.
  await page.getByTestId('username').fill(username)
  await page.getByTestId('password').fill(password)
  await page.getByRole('button', { name: 'login' }).click()
}

const createNote = async (page, content) => {
  await page.getByRole('button', { name: 'new note' }).click()
  await page.getByRole('textbox').fill(content)
  await page.getByRole('button', { name: 'save' }).click()
}

export { loginWith, createNote }
