import { component$, Host, $, useScopedStyles$, useContext } from '@builder.io/qwik';
import { CloseIcon } from '../svgs/close-icon';
import { DiscordLogo } from '../svgs/discord-logo';
import { GithubLogo } from '../svgs/github-logo';
import { MoreIcon } from '../svgs/more-icon';
import { QwikLogo } from '../svgs/qwik-logo';
import { TwitterLogo } from '../svgs/twitter-logo';
import styles from './header.css?inline';
import { GlobalStore } from '../../utils/context';

export const Header = component$(
  () => {
    useScopedStyles$(styles);
    const globalStore = useContext(GlobalStore);

    const toggleMenu = $(() => {
      globalStore.headerMenuOpen = !globalStore.headerMenuOpen;
    });

    const closeMenu = $(() => {
      globalStore.headerMenuOpen = false;
    });

    return (
      <Host>
        <div class="header-inner">
          <div class="header-logo">
            <a href="/">
              <span className="sr-only">Qwik Homepage</span>
              <QwikLogo width={110} height={50} />
            </a>
          </div>
          <button onClickQrl={toggleMenu} class="mobile-menu" type="button">
            <span class="more-icon">
              <MoreIcon width={30} height={30} />
            </span>
            <span class="close-icon">
              <CloseIcon width={30} height={30} />
            </span>
          </button>
          <ul className="md:grow md:flex md:justify-end md:p-4 menu-toolkit">
            <li>
              <a href="/docs/overview" onClickQrl={closeMenu}>
                <span>Docs</span>
              </a>
            </li>
            <li>
              <a href="/examples/introduction/hello-world" onClickQrl={closeMenu}>
                <span>Examples</span>
              </a>
            </li>
            <li>
              <a href="/tutorial/welcome/overview" onClickQrl={closeMenu}>
                <span>Tutorial</span>
              </a>
            </li>
            <li>
              <a href="/playground" onClickQrl={closeMenu}>
                <span>Playground</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/BuilderIO/qwik" target="_blank" onClickQrl={closeMenu}>
                <span class="md:hidden">Github</span>
                <span class="hidden md:block">
                  <GithubLogo width={22} height={22} />
                </span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/QwikDev" target="_blank" onClickQrl={closeMenu}>
                <span class="md:hidden">@Builder.io</span>
                <span class="hidden md:block">
                  <TwitterLogo width={22} height={22} />
                </span>
              </a>
            </li>
            <li>
              <a href="https://qwik.builder.io/chat" target="_blank" onClickQrl={closeMenu}>
                <span class="md:hidden">Discord</span>
                <span class="hidden md:block">
                  <DiscordLogo width={22} height={22} />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </Host>
    );
  },
  { tagName: 'header' }
);
