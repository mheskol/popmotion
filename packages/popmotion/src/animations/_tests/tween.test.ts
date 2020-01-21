import { tween } from '../tween';
import { linear } from '../../easing';

describe('tween', () => {
  it('should by default animate between 0 and 1 over 300 milliseconds with easeOut easing', () => {
    const animation = tween();
    expect(animation(0)).toBe(0);
    expect(animation(300)).toBe(1);
    expect(animation(150)).toBe(0.75);
  });

  it('should accept custom easing', () => {
    const animation = tween({ ease: linear });
    expect(animation(150)).toBe(0.5);
  });

  it('should accept custom duration', () => {
    const animation = tween({ duration: 1000, ease: linear });
    expect(animation(500)).toBe(0.5);
  });

  it('should accept custom from and to', () => {
    const animation = tween({ from: 50, to: 0 });
    expect(animation(0)).toBe(50);
    expect(animation(300)).toBe(0);
  });

  it('should clamp the duration', () => {
    const animation = tween({ duration: 1000 });
    expect(animation(2000)).toBe(1);
  });
});
