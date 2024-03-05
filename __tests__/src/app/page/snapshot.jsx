import { render } from '@testing-library/react'
import Home from '@/app/page'

it('renders homepage unchanged', () => {
  const { container } = render(<Home />)
  var a

  expect(container).toMatchSnapshot()
})
