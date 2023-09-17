import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route, useLocation } from 'react-router-dom';
import { withRouter } from '../../tests/utils';
import { fakeVideo as video } from '../../tests/videos';
import VideoCard from '../VideoCard';

import renderer from 'react-test-renderer';

describe('VideoCard', () => {
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;

  // 빈 타입을 전달받았을 때
  it('renders grid type correctly', () => {
    const component = renderer.create(withRouter(<Route path="/" element={<VideoCard video={video} />} />));
    expect(component.toJSON()).toMatchSnapshot();
  });

  // List 타입을 전달받았을 때
  it('renders list type correctly', () => {
    const component = renderer.create(withRouter(<Route path="/" element={<VideoCard video={video} type="list" />} />));
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('navigates to detailed video page with video state when clicked', () => {
    function LocationStateDisplay() {
      return <pre>{JSON.stringify(useLocation().state)}</pre>;
    }
    render(
      withRouter(
        <>
          <Route path="/" element={<VideoCard video={video} />} />
          <Route path={`/videos/watch/${video.id}`} element={<LocationStateDisplay />} />
        </>
      )
    );

    const card = screen.getByRole('listitem');
    userEvent.click(card);

    expect(screen.getByText(JSON.stringify({ video }))).toBeInTheDocument();
  });
});
