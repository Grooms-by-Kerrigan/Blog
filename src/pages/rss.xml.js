import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getPosts, url } from '../utils';

export async function GET(context) {
	const posts = (await getPosts()).filter((post) => !post.data.draft);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: url(`blog/${post.id}/`),
		})),
	});
}
