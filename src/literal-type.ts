type SomeString = "some string"

type SomeNumber = 1
type True = true

function fn(str: SomeString) {
  return str.trim()
}

fn("some string") // ok
// fn("other string") // error