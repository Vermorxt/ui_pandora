import { fireEvent } from '@testing-library/react'
import React from 'react'
import { renderWithAct } from './render-with-act'

export function itSupportsFocusEvents<P>(Component: React.ComponentType<P>, requiredProps: P, selector?: string) {
  it('supports focus events', async () => {
    const onFocusSpy = jest.fn()
    const onBlurSpy = jest.fn()
    const { container } = await renderWithAct(<Component {...requiredProps} onFocus={onFocusSpy} onBlur={onBlurSpy} />)

    fireEvent.focus((container as any).querySelector(selector))
    expect(onFocusSpy).toHaveBeenCalled()

    fireEvent.blur((container as any).querySelector(selector))
    expect(onBlurSpy).toHaveBeenCalled()
  })
}
