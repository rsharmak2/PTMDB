﻿// ==UserScript==
//
// @name         IMDb Scout Mod
// @version      1.0.7
// @namespace    https://github.com/rsharmak2/PTMDB
// @description  Auto search for movie/series on torrent, usenet, ddl, subtitles, streaming, predb and other sites. Adds links to IMDb pages from hundreds various sites. Adds movies/series to Radarr/Sonarr. Adds external ratings from Metacritic, Rotten Tomatoes, Letterboxd, Douban, Allocine, MyAnimeList, AniList. Media Server indicators for Plex, Jellyfin, Emby. Dark theme/style for Reference View. Adds/Removes to/from Trakt's watchlist. Removes ads.
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAD/AAAcAAA1AABEAABVAAC3AADnAAD2AACFAAClAABlAAB3AADHAACVAADYAABCnXhrAAAD10lEQVRIx73TV4xMURgH8H/OnRmZWe3T7h2sOWaNXu7oJRg9UccuHgTRBatMtAgSg+gJu9q+kFmihcQoD8qLTkK0CIkoy0YJITsRD0rCKTHFrnkSv5e5c88/53znO+fiPwvsvrN038cPNqrG9pJmHkRVnPcpaTlHJY60cfPSpsrzl1LKihrmLvxhCM2i3OHvDx0d+H7e3F6JBv5iZMiJfhFTfPYDMHrMImpwimWWUdSgDQkbno7fFpUPVgh+pHFbZR4SovSctDCM9Hac9IKd9rO8EevtBCkXgY5IMmgquwypP7qqfcp/Tp4KLONDVsWh3RSBB2rnZfit69ocUdqLn2prrRZYM0Jg4JibamKsqe7gfEh5GOAfeYJjVHIPZvil97rcXkMog30byWRwXYRWoxHbzNFHJJpAarO8NdEBBsdCaP3WMJltTmQd4zlnekTq9Z5dgACwAlrpK4BxdV5mvLuspRgMSHbCIFF0iS8MZ5S8oYBYKY7rByC4dDM9uSIUmPOIwxgQBoYeF93auP4qFyPbIVXziWeGTH1EFM57kJo2hqQju6BwIyRf6RmCjdT4JOdiwNgiH/PPD3qoqlsNaXRd+fKtFfECxlZVNVF9SOsgTZEr2TUjJJbyeNX1IZrKIbyGlBABfpQPv2UDrly13LkJXDVhpQ5MhtGwcyF4HKjlU4E8xwB0AvDjd6AGmevZ87EcQRHgcO52e9uNsYELOrAa/Yh81YlmYLQJ5HWyq0+kzQ/DQKEusg6CRI27ryy8nReRS0wsoetkmRwogHSprliCckfEjXG9yAQc74J0WB99vu6DF3i3pMucsXM6tpBbxd2mVJAwXwGogNRBvGRA4jtHKTXkAIwLGCR/mT4Lh75oneQXXP9sAYfGRDCsnw7pX/jRZkU3M44kjw2l5zRIzb4CbZ8dULdL6wbNPZOpK0B6gN1UR1mdoxAaL/GrWiLPL3SEwW9YMTU/d64BtLahAVyucWhj9Mm8ign9IfQaBtd2/GbvCAEBpG5eMcrj2I0ktpKLeaqXQ3Pst42KGIshpdTmQLAeTgFGJ2wvh+tayMOR0n1RZ8B9z13vnOPBnsBq4E1ffgZpPFZHWVpO2cvhjYpOcbBd5TlhpDu5zq9mHGZcVi0y+VFkcFkDdyKJfTt99wEyHSEzDM90KH0nexpwZHJHKYYhjzlwGe0pP/IKfxociaEb7YDbi6KGJY1R2cR76E6NAtXqY4pPH3plLcl8LD7V+cOLUbUWRFZRPTAbVZO3mxK18Xc1ZaAiS8ARJXpZliXAomR94siiiMx8ZBOkXGTlnH0F/9ov1xPtWwEqP9wAAAAASUVORK5CYII=
// @license      MIT
//
// @updateURL    https://github.com/rsharmak2/PTMDB/raw/refs/heads/main/IMDb_Scout_Mod.user.js
// @downloadURL  https://github.com/rsharmak2/PTMDB/raw/refs/heads/main/IMDb_Scout_Mod.user.js
// @homepage     https://github.com/rsharmak2/PTMDB
// @supportURL   https://github.com/rsharmak2/PTMDB/issues
//
// @compatible   firefox
// @compatible   opera
// @compatible   chrome
// @compatible   safari (it doesn't support the sites with logins)
// @compatible   edge
//
// @require      https://cdn.jsdelivr.net/gh/sizzlemctwizzle/GM_config@43fd0fe4de1166f343883511e53546e87840aeaf/gm_config.js
// @require      https://greasyfork.org/scripts/403996-exev/code/ExEv.js?version=808391
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
//
// @include      https://*.imdb.tld/title/tt*
// @include      https://*.imdb.tld/search/title*
// @include      https://*.imdb.tld/user/ur*/watchlist*
// @include      https://*.imdb.tld/user/ur*/ratings*
// @include      https://*.imdb.tld/list/ls*
//
// @include      https://*.imdb.tld/*/title/tt*
//
// @exclude      /title\/tt\d+\/\w(?!(eference))/
// @exclude      /anon/
// @exclude      /pro.imdb/
//
// @connect      *
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.openInTab
// @grant        GM.xmlHttpRequest
// @grant        GM.registerMenuCommand
// @grant        GM.notification
//
// @run-at       document-start
// @noframes
//
// ==/UserScript==
//
/*=========================  Version History  ==================================

1.00    -    Initial public release, everything works on barebones greasemonkey

1.50    -    Added the ability to select which sites to load from the GM script commands
        -    Moved the required method to userscripts
        -    Removed FH, NZB, Avax

1.60    -    Added style elements and shading to display on imdb

1.62    -    Fixed bug:SCC-ARC not removing when unchecked
        -    Alphabetized list

1.70    -    Cleaned up code
        -    Added option to not run script on page load

1.71    -    Deprecated action-box field

1.80    -    Added icons that link to OpenSubs, Criticker, RT, YT

1.81    -    Added support for tv, only displays on shows listed as 'tv series'
        -    Added support for icheckmovies at top bar.

1.82    -    Fixed title parsing for tv shows.

1.83    -    Fixed dhive not working properly

1.90    -    Set height of preference window to 450px, added scroll bar

1.91    -    Added another 11 torrent sites

2.00    -    Added auto updater

2.01    -    Added TC, FreshOn, TVT, STF, CC
        -    Cleaned up code (tabbing)
        -    Removed THR
        -    Added TV-Rage to top bar

2.02    -    Added PS, THC, HH, HDStar
        -    Fixed CC false positive

2.03    -    TehC now uses tt
        -    Added Raymoz mod for AT

2.04    -    Added HDbits
        -    Added TL

2.10    -    Added genre page search functionality

2.11    -    Fixed ICM because Nuked was whining

2.12    -    Removed tvrage
        -    Fixed iCM (added tt)
        -    Added HDVNbits
        -    Changed RevTT to .me
        -    Added HDT
        -    removed autoupdate

2.13    -    removed xvidme
        -    reinstated autoupdate
        -    removed google chrome code
        -    fixed hdvn and hdt issues

2.14    -    Added @grant entries for API access
        -    Fixed tt parser to work on imdb pages with referral info in url

2.2     -    Switch preferences window to use GM_config
        -    Consolidate icon & site lists
        -    Added IPT, KASS, sHD, and HDW
        -    Fix "Open All" link
        -    Add option for strikethroughs on search page
        -    Removed arrays from search URLs
        -    Spring cleaning

2.21    -    Added SSL to TVT, HDME, TC, AHD, IPT, SCC
        -    Added SSL option for CG
        -    Added GFT, GFT-Gems, GFT-TV
        -    Fixed SCC, SCC-ARC search URL
        -    Removed TheBox, TheDVDClub
        -    Added more comments, cleaned up some more stuff

2.22    -    Fixed TehC, BTN, BTN-Req, THC
        -    Added a bunch of TV sites, courtesy of seedless
        -    Added "both" option for sites, and made changes
             to allow coexistence of movie and TV sites with
             the same name
        -    Code re-organization, documentation
        -    Re-added code to allow an array for searchUrl

2.22.1  -    Minor fixes

2.23    -    Fixed THC, BTN
        -    Distinguish between movies and TV on search page

2.24    -    Separate load_on_start option for search page
        -    Fix search_string on search page

2.25    -    Added some helpful text when no sites have been enabled

2.26    -    Added code to show links when on pages besides just the "front" one
             (e.g. http://www.imdb.com/title/tt2310332/reference)

2.26.1  -    Correctly detect TV shows when on aforementioned pages.

2.3     -    Incorporate a bunch of changes courtesy of Inguin:
             - Added SSL to AT, TE, D-noid, TG, YT, RT
             - Changed tracker short titles to canonical form ADC, KG
             - Updated D-noid from .me to .pw
             - Fixed broken AT search; also updated to use .me so avoids redirect
             - Added BitHQ, ET (eutorrents)
             - Removed two broken THC; replaced with one fixed
             - Removed iplay, horrorhaven, hdstar, scandbits, leecherslair
             - Removed needless CG http/https duplication - plenty of listed sites self-sign
             - A-Z sites list for readability
             - Cleanup YT search string
             - Copyedits
             - Clean up code (tabs, trailing spaces)
        -    Use consistent naming style
        -    Added Letterboxd, Subscene to icons
        -    Added options for showing icons

2.31    -    Added preliminary check for TSH
        -    Change all SCC links to .org

2.31.1  -    Typo fix

2.32    -    On uncertain pages, display both movie and TV sites

2.33    -    Add year to possible search params
        -    Add rutorrent

2.33.1  -    Change KG to .in

2.33.2  -    Change TSH to .me

2.34    -    Updated AT, TPB
             - Removed HDWing, TVT and CHDBits
             - Added RARBG
             - Re-added reverse match checking to support rarbg

2.35    -    Fixed YouTube icon, add SubtitleSeeker icon
        -    Added FL.ro, bB, BHD, HDS
             - Fixed TL, TehC, HDb, HDVN, AHD, KG
             - Renamed reverseMatch to positiveMatch

2.36    -    Added Wikipedia to icon sites

2.36.1  -    Typo fix

2.37    -    Add PxHD

2.38    -    Fix subtitle seeker
        -    Added CG-c
        -    Added FilmAffinity
        -    Added option to skip http check entirely

2.38.1  -    Typo fix

2.38.2  -    Global replace parameters

2.38.3  -    Typo fix

3.00    -    Clean up some formatting
        -    Add support for new IMDb page format
        -    Update jquery

3.0.1   -    Added Classix

3.0.2   -    Updated documentation/comments

3.0.3   -    Removed GOEM, FY, PS, MT
        -    Added Metacritic, CanIStream.It?, AllMovie, Facebook, Amazon, Cartoon Chaos, MySpleen, Secret Cinema
        -    Fixed Wikipedia icon

3.1     -    Handle HTTP failures less silently

3.1.1   -    Fix KASS

3.1.2   -    Fix TPB, TE, HDT
        -    Add MTV, DVDSeed

3.1.3   -    Add M-T, UHDB, HDC, Blu-ray.com
        -    Fix scenehd, RT

3.1.4   -    Add HDClub

3.2     -    Fix the button on new-style pages

3.2.1   -    Fix AHD

3.3     -    Be less obnoxious about failed calls

3.4     -    Add Netflix icon
        -    Remove a default parameter to satisfy Chrome

3.5     -    Add KZ, NNM, BB-HD, t411, TD, Rutor
        -    Fix HDClub
        -    Fix preferences in Chrome, sort sites properly

3.5.1   -    Remove DHive, Fix AHD

4.0     -    Bring in UI changes courtesy of janot
        -    Add spaceEncode and goToUrl to site options
        -    Add option to show results as links instead of text
        -    Differentiate between missing and logged out
        -    General refactoring

4.1     -    Add RARAT

4.2     -    Fix t411
        -    Use magic .tld domain in @include

4.3     -    Set @connect in metadata block

4.3.1   -    Fix THC

4.3.2   -    Add AR, TtN
        -    Add year and "trailer" to youtube search
        -    Fix M-team

4.3.3   -    Fix BitHQ, PTP-Req, SCC

4.3.4   -    Fix M-team, myspleen, avistaz, eutorrents
        -    Removed KAT

4.3.5   -    Fix IPT, Freshon
        -    Add ExtraTorrent

4.3.6   -    Fix Demonoid, EuTorrents (now CinemaZ)
        -    Fix "Actually search for torrents" option
        -    Add PrivateHD for movies and tv

4.3.7   -    Apply CinemaZ fixes to AvistaZ as well

4.3.8   -    Fix SurrealMoviez and MySpleen, switch to new PTP url

4.3.9   -    Fix criticker, add CN

4.3.10  -    Fix Netflix, MTV

4.3.11  -    Add CHD back

4.3.12  -    Fix typo

4.4     -    Fix BeyondHD
        -    Allow unicode when searching by name

4.4.1   -    Add trakt.tv

4.4.2   -    Added XS, HD-S, PTN, TBD, Blutopia
        -    Removed Freshon, CN, ExT, t411, SCC
        -    Fixed SC, TE, TG, Tik
        -    Add .com for script runners that don't support .tld

4.5     -    (Chameleon)
        -    Added an option to run on ILC request pages
        -    Fixed running on reference pages (new imdb style)
        -    Added a delay of 1 second between loading the same site (by domain) - no more popcorn quota timeouts
        -    Fixed running on search pages

4.5.1   -    Removed (dead): BitHQ, TehC, FSS, ExtraTorrent, Cine-Clasico, and Secret-Cinema
        -    Fixed the hack on goToUrl

4.5.2   -    Fixed filelist.ro, Tik, TD
        -    Added HDHome, HDU, OurBits

4.5.3   -    Fixed TG, TE, HDSpace
        -    Added XS

4.5.4   -    Fixed HDU

4.5.5   -    Fixed BHD

4.6     -    Option to highlight if the movie is missing from PTP

4.7     -    Added option to ignore the movie/tv distinction

4.7.1   -    Fix blutopia, hdchina, indenting

4.7.2   -    Fix SDBits, M-T
        -    Add TTGg

4.7.3   -    Enable on https versions of imdb sites
        -    Add TTG

4.8.0   -    Add FinVip, JoyHD, TO, TP, TS, TVCK
        -    Fix TE, HDH, CZ, Subscene
        -    Remove SubtitleSeeker
        -    Rip out all site-specific code
        -    Fix up minor code smells
        -    Allow config name to be different from site name

4.8.1   -    Add SP

4.8.2   -    Add TMDB

4.8.3   -    Add TGx
        -    Fix TTG, JoyHD, HDH
        -    Remove duplicate TMDB

4.9.0   -    Add support for a user's watchlist

4.10.0  -    Add support for icon sites on the reference view
        -    Add HTTPS for icon sites that support it

4.11.0  -    Fix search_string

4.11.1  -    Remove Blutopia
             Fix IPT

4.11.2  -    Add unogs

4.11.3  -    Fix TVDB

4.11.4  -    Add AB, remove ADC
        -    Fix BHD, Demonoid, TPB, M-T, U2, BTN, BitHD

4.11.5  -    Fix conditional check

4.12    -    Update SDBits, BTN, PTP, TMDB
        -    Apply some correctness changes

4.12.1  -    Add CCT
        -    Update CHD, AB, TTG


#==============================================================================#
#    IMDb Scout Mod:
#==============================================================================#

4.12.1-mod1  -   First public release.  New additions, tweaks, bugfixes.

                 What I can remember:
             -   Added: Blu, Retroflix, ACM, PTE, KG Requests, SC Requests.
             -   Tweak: Classix search, and split to Movie/TV.
             -   Tweak: Bunch of 'loggedOutRegex' added.
             -   Fixed: Bunch of icons.
             -   Fixed: TL, TPB.
             -   Fixed: Bug in 'loggedOutRegex' logic.
             -   New feature: Distinct icons on Requests.

4.12.1-mod2  -   Removed: Canistream.it
             -   Fixed: Few icons.
             -   Fixed: Search bug if ampersand is in the title

4.12.1-mod3  -   Removed: RARAT.
             -   Added: Rarelust & Zooqle.
             -   New feature: Sites are split to public & private (config menu).

4.12.1-mod4  -   Added: YGG, CG Requests.
             -   Tweak: CG-Cocks & CG Request icons.
             -   Tweak: RuT search, split to TV/Movie.
             -   Fixed: Filter out filled KG Requests.
             -   New feature: %search_string_orig% (search by the original titles
                              on the movie/tv pages), enabled on RuT and YGG.

4.12.1-mod5  -   Fixed: CG Request. Demonoid typo.

4.12.1-mod6  -   Removed: HDVN, HoundDawgs.
             -   Added: 1337x, ETTV, LimeTor, HDSpain, RlsBB, DB, FF, THR, PTer.
             -   Fixed: TD, Demonoid, RARBG.
             -   Tweak: Bold'ed the titles of config menu sections for better visibility.
             -   Tweak: 'Other titles' sorted in alphabetical order.
             -   Tweak: Added 'loggedOutRegex' to all private & some public sites.
             -   Fixed: All borked icons are fixed.
             -   Fixed: Bug in 'loggedOutRegex' (false negative if site responds with redirect).

4.12.1-mod7  -   Added: BRT.
             -   Tweak: SDBits, U2.

5.0     -   Fix: @namespace & @name changed to fix updating for plugins.

5.1     -   Tweak: TVV, BB-HD.
        -   Fixed: Invisible icons on dark background JoyHD, Rarelust, CZ, Zooqle, KG.
        -   New feature: The new layout (icons are placed at top). Option to turn it off.
        -   New feature: Option to select background for the new layout.

5.2     -   Tweak: Small tweaks (some preferences will reset to default).
        -   Fixed: Rarelust icon.

5.2.1   -   Fixed: Rarelust icon (forgot to update it)
        -   Added: RlsBB-Proxy ('RlsBB' now points to the main domain)

5.3     -   Added: Tik-Req, AHD-Req.
        -   Tweak: No icon borders if "Show results on one line" is off.
        -   Fixed: Text color on the new layout.
        -   New feature: Option to change size of the icons.

5.3.1   -   Added: JPTV.
        -   Fixed: ACM icon.

5.4     -   Added: AG, CPS, Deildu (as public because open reg).
        -   Tweak: PTP, DVDSeeds, AHD, PTer.
        -   Fixed: Button code for legacy & new layout.
        -   Fixed: Reference view for the new layout.

5.5     -   Added: PreDB & dozen of the subtitles sites (all of it is set to the 2nd bar).
        -   Fixed: Subscene
        -   New Feature: New 'Subtitles' & 'Other searchable sites' sections (config menu), all set to 2nd bar.
        -   New Feature: Two extra searchable bars for the movies page (Search/Watchlist page shows only 1st bar).
        -   New Feature: Extra bars can be enabled/disabled/swapped at the preferences.
        -   New Feature: Two new 'inSecondSearchBar' and 'inThirdSearchBar' attributes.
                         Subtitles & Other searchable sites are set to 2nd bar.
                         3rd bar is empty, free space for custom configuration.

5.5.1   -   Added: TVV-Req, GT, WC, RareFilm, Titlovi, MoviePosterDB, Ulož, srrDB, xREL.
            Tweak: PreDB, TE, 1337x, LimeTor, HDB, BTN.

5.5.2   -   Added: XDCC, ixIRC.
            Tweak: GT.

5.5.3   -   Added: EUC, 1337x-Proxy, LimeTor-Proxy.

6.0     -   Added: BTN-Title (if someone prefer to search by the titles).
        -   Tweak: PTP, "Your popcorn quota" added to loggedOutRegex.
        -   Tweak: Refinement of code, comments and documentation.
        -   Fixed: "TV Special" is not recognized as "TV" (now it works same as "TV Movie").
        -   Fixed: Broken TV/Movie distinction on the Search/Watchlist pages.
        -   Fixed: Broken Watchlist search if "episode" is present.
        -   Fixed: Broken 'Load' button on Watchlist pages.
        -   Fixed: Broken %year% search on Search/Watchlist pages.
        -   Fixed: Broken %goToUrl% on Search/Watchlist pages when "check for results" is on.
        -   Fixed: Broken %goToUrl% on all pages when "check for results" is off.
        -   Fixed: Broken %year% on TV-series pages.
        -   Removed: 'Treat the watchlist as a search page?' option.
        -   New Feature: Documentaries are treated as TV & Movie.
        -   New Feature: %search_string_orig% works on Search/List/Watchlist pages too.
        -   New Feature: Script supports List pages.

6.0.1   -   Added: TSeeds.

6.0.2   -   Tweak: TSeeds.

6.1     -   Added: DC.
        -   Tweak: BTN-Title, WC, TVV, TVV-Req, ACM, Blu, JPTV, M-T, U2 and ect..
        -   Tweak: Some code optimizations.
        -   New Feature: Connection rate limiting for IMDb's domain.
                         Sites are added more consequent on Search/List pages.
        -   New Feature: Dynamic rates. Search on Title pages are much faster now.
        -   New Feature: Optional 'rateLimit' attribute for sites.

6.1.1   -   Fixed: TL, TSeeds.

6.1.2   -   Added: TL-PL, 3CT, IT.
        -   Tweaks: BTN-Req icon, Tik, Tik-Req.

6.2     -   Added: TVU, Bit-Titan, SU, Tasmanites, BDC, FE, PTMSG.
        -   Tweaks: AHD, AHD-Req, CPS, HDB. Some rate tweaks.
        -   Fixed: Disabling 'Show results on one line?' removed icon borders on Search/List pages.
        -   New feature: Sites are grouped by the result states on Search/List pages (same as on Title pages) (scout_tick).
        -   New feature: Option to highlight preferred sites (brighter border of icon or bold text).
        -   New feature: All icons of request sites ('-Req') are highlighted with a blue border if 'found'.
        -   New feature: 3rd bar supported on Search/List pages.
        -   New feature: Separate space in Config for the custom sites. Replace 'Dummy' placeholder with your custom sites.

6.2.1   -   Added: TDB.
        -   Tweaks: SDBits, TSeeds.

6.3     -   Added: iTS.
        -   Tweaks: TSeeds, Retroflix, Subscene.
        -   New feature: Infotip on icons shows '(TV)' for 'TV' sites.

6.3.1   -   Added: TT, TBA.

6.4     -   Added: T2K, DT.
        -   Tweak: Retroflix, TPB/TPB-Proxy.
        -   Fixed: Broken "Open All" button.
        -   New feature: Links of "icon sites" opens in new tabs.
        -   New feature: Support for POST method with new 'mPOST' attribute.

6.5     -   Added: SpaceTor, AlloCiné, SensCritique, КиноПоиск, MovieMistakes, TrailerAddict,
                   ScreenAnarchy, MovieChat, The Numbers, Lumiere, Box Office Mojo, OFDb.
        -   New feature: "Total sites" stats at the top of config.

7.0     -   Tweaks : TTG, RuTor, TL-PL is renamed to TLPL.
        -   Tweaks : TL search is by IMDb ID; searching by title is done with TL-Title.
        -   Tweaks : Some sites moved to https. Some config tweaks.
        -   Updated: GM_config & jQuery to latest versions.
        -   Fixed  : 'SpaceEncode' not working with 'goToUrl'.
        -   New feature: "Load Settings" button if there is no sites enabled.
        -   New feature: Page auto reloads after Settings close.
        -   New feature: "Selected sites" stats at the top of config.
        -   New feature: Greasemonkey v4 is supported.

7.1     -   Added: AS, DVDCompare, DVDTalk, DVDBeaver.
        -   New feature: Icon sites have hyperlinks in Settings too.

7.2     -   Added: ProStyleX, TorDL, PHD-Req, DonTor, CineCalidad, DVD-Basen, MRQE, Movie-Censorship.
        -   Tweaks: uNoGS, ETTV, CG, TVV-Req.
        -   New feature: Icons of the "icon sites" are same size as other icons.

7.3     -   Added: OmgWtf, DrunkenSlug.
        -   New feature: Streamlined "icon sites" area.

7.4     -   Added: NZBgeek, NZBfinder, NZBGrabit, NZBsu, abNZB, BD25, NZBplanet, NZBnoob,
                   TVmaze, Aither.
        -   New feature: Usenet sites are separated in Settings.

7.5     -   Added: NinjaCentral, MIAtrix, altHUB, SceneNZB, NzbNdx, nzbforyou, GingaDADDY,
                   HDA, FindAnyFilm, xThor.
        -   New feature: 'mPOST' can be formed as json (atm only for icon sites).

7.6     -   Added: DOGnzb, Sharewood, MovieBuff, ONLYscene, HD-F, E-T, SolidTor, MVG, BTDB, BD-film.
        -   Tweaks: eThor, YGG (tv separated), TSeeds, RareFilm, M-T, TVCK.
        -   Fixed: Iframes of the ads are interfering with Settings/GM_Config (script will remove ads).

7.6.1   -   Added: ExiTor, SI, Team-HuSh, G-Free.

7.7     -   New feature: HTTP status above 399 will produce an error (red border).

7.7.1   -   Tweak: BDC.

7.7.2   -   Added: ArenaBG.

7.8     -   Added:  LimeTor (tv), TorDL-Proxy, RMZ.
        -   Tweaks: LimeTor-Proxy, 1337x-Proxy, TPB-Proxy, Demonoid, Classix (icon), TT.
        -   Tweaks: Icons of some blocked sites moved to Imgur.
        -   New feature: Streamlined the layout of Settings.

7.8.1   -   Added: HEVCBay.

7.8.2   -   Added: GloTor, Unlimitz, HDenc, SB, Zamunda.
        -   Removed: SceneNZB, DB.
        -   Tweaked: YGG, PTP, KG, U2.

7.8.3   -   Tweaked: Zooqle.

7.8.4   -   Added: Yubraca.

7.8.5   -   Added: HDtime, HDAtmos, GD, DKBits, nCore, Thor-Island, Videoteka, DesiRel, Telly,
                   WhatsOnMubi, JustWatch.
        -   Removed: eThor.
        -   Tweaked: ArenaBG, TGx, NNM (split to movies/tv), Bit-Titan, updated proxy sites.

7.8.6   -   Added: SpeedApp, CMS, BJS.

7.8.7   -   Added: Milkie (no search), HQS, TSH, DWR, BigBBS, CT, ST, PS, TM, MP, LS, NZBcat.
        -   Removed: DKBits, SU, AG, ONLYscene, SpaceTor, Thor-Island.

7.9     -   New feature: Icons sorting (on button click, beta testing) by Sapphire.
                         For "found" icons only. Behaviour:
                         Highlighted > Others > Requests (in alphabetical order),
                         except order of highlighted is taken from Settings.
            Tweaked: CT, Subs4Free.

7.10    -   Added: BWT.
            Fixed: Watchlist

7.11    -   Merged code from Sapphire:
               New feature: Sites sorting when "Show results on one line" is off.
               New feature: Sorting button on the reference page.
        -   New feature: The request sites on the new line when sorting (Option).
        -   New feature: Added the sites sorting function for the missing.
        -   Fixed: Misalignment of the icons after sorting.
        -   Fixed: Sorting is done by a site's name instead of url.
        -   Fixed: Script was loading on trivia, credits, reviews & ect pages.
        -   Fixed: NBL.
        -   Tweak: Removed redundant @include.

7.12    -   Added: SPD, HT.
        -   Tweaks: Sorting, Ads.

8.0     -   New feature: Automatic alphabetical icons/sites sorting on Title page.
                Only for Public, Private, Usenet sites on the 1st searchable bar.
                "Found" sites are sorted as Highlighted > Others > Requests,
                order of the highlighted is taken from Settings.
                "Missing" sites are sorted only alphabetically, "LoggedOut" & "Error" sites are not sorted.
                Sorting starts when less than 5 sites are left to add.
                Found request sites are split only after all sites are added (Optional).
            Custom sites must be set to the 3rd/2nd search bar or sorting wont be working properly!

8.0.1   -   Tweak: Subscene.
        -   Tweak: Sorting functions moved above "main".

8.0.2   -   Added: WF, CrazyHD, PTM.
        -   Removed: DT.

8.1     -   Added: SkT.
        -   Fixed: AHD.
        -   Removed: OpenSubsOnline
        -   Bugfix: Firefox + GM4 combination wasn't working. New fixed GM_config lib.

8.2     -   Tweak: Updated GM_config link (fix was merged into mainline).

8.3     -   Bugfix: Page reload on Settings close wasn't working on Chrome and Opera.

8.4     -   Bugfix: No vertical spacing between icons.
        -   Bugfix: Non-square icons.

8.4.1   -   Added: BP.

8.5     -   Added: W-v3.
        -   Fixed: BigBBS, RetroFlix, Zamunda, E-T, RARBG, WF, Snahp.
        -   New feature: If rateLimit>1000 then when on List it won't increase.

8.5.1   -   Added: DW, ADC.
        -   Fixed: nCore.

8.6     -   Added: PREcBurns, PREovh, preFYP.
        -   Removed: MTV.
        -   New feature: Other sites are split to Pre databases and Streaming sites.

8.7     -   Tweak: Milkie moved to the icon sites.
        -   Tweak: Some ratelimits added.
        -   Tweak: Small tweak to code for ratelimit to IMDb site on List/Search pages.

8.7.1   -   Added: PD.

8.7.2   -   Added: HDZ.

8.7.3   -   Added: PTTime.

8.7.4   -   Tweaked: RARBG.

8.7.5   -   Added: Reelgood, WtFnzb(no tv), DDLW (for ~German IPs).
        -   Tweaked: OmgWtf(sort by size). DrunkenSlug & NZBfinder movie search by imdb id.

8.8     -   Tweaked: RARBG, Subtitry (RU).
        -   New feature: @noframes (probably proper fix for the bug "fixed" in v7.6).
        -   New feature: Changed how script starts, should be faster now.

8.9     -   Added: Fist of B-List, Criterion, Criterion Channel.
        -   New feature: New "Other sites" category in Settings.

8.9.1   -   Removed: AHD, AHD-Req.

8.9.2   -   Added: MTV.

8.9.3   -   Tweaks: Proxy updates.

9.0     -   Added: DOGnzb (movie search is by IMDb id, tv search by TVDb id) .
        -   New feature:  Support search by TVDb ID and TMDb ID
                         with new search URL parameters: %tvdbid% and %tmdbid%.
                          If matching id is not found then it will be set to "00000000".
                         Some functions are async now.

9.1     -   New feature: All icons from Imgur and the problematic sites are stored in the script as Base64 strings.

9.1.1   -   Fixed: YGG.

9.2     -   Added: FZ, Portugas.
        -   New feature: Ads removal moved to func.

9.2.1   -   Added: HDFans, BTN-TVDb (should be more reliable than by imdb id).

9.3     -   Tweaked: BHD.
        -   New feature: On list/Watchlist page the "Load IMDb Scout" button moved to the top.

9.3.1   -   Added: Simply Scripts, Scripts On Screen, IMSDb.

9.3.2   -   Added: HDAI.
        -   Fixed: PxHD, CG-Req.
        -   Removed: IMSDb.

9.3.3   -   Added: HB.

9.3.4   -   Fixed: BD-film.

9.3.5   -   Added: T (The Myth).

9.3.6   -   Added: VidSrc, DbGDP, FZN, M-TB, ETpl.
        -   Tweak: Ulož moved to the icon sites.

9.4     -   Fixed: A typo in %tmdbid% code.

9.4.1   -   Added: NTELogo, MOJBLiNK, MovieTorrentz.

9.5     -   New feature: Add movies to Radarr (based on dirtycajunrice's code).

9.6     -   New feature: Refined Radarr settings.

9.6.1   -   Added: Anasch.
        -   Tweaked: PTP, M-T, PTer, SDBits, U2, UHDB, TTG.

9.7     -   New feature: Add tv-series to Sonarr.

9.7.1   -   Added: TSP, Assrt (CN), GreekSubs (GR), HosszuPuska (HU), Pipocas (PT) & (BR),
                   Nekur (LV), Titrari (RO), WizdomSubs (IL), Yavka (BG), Zimuku (CN), Feliratok (HU).

9.7.2   -   Added: seleZen, Blu-Req, ACM-Req.

9.8     -   Added: DesiTor, Caps-A-Holic.
        -   New feature: Add/Remove movies/series/episodes to/from Trakt's watchlist.
        -   Note: Current Tampermonkey ver. has bug with notifications, affected: Sonarr/Radarr/Trakt-Watchlist.

9.9     -   Some code syntax and other tweaks.

9.10    -   Fixed: T2K (tv).
        -   Fixed: 'mPOST' wasn't working on the List/Search pages.
        -   Fixed: 'SpaceEncode' wasn't working on 'mPOST'.

9.11    -   New feature: Support for notifications on GM3.
        -   New feature: New section in settings for the special icons/buttons.
        -   Note: Tampermonkey fixed notifications from v4.13.6134.

9.11.1  -   Added: Filmow, WB.

9.12    -   Added: Simkl, MovieLens, ratehouse, Filmsomniac, MyMovieRack.
        -   Added support for Milkie search (needs auth token).

9.12.1  -   Added: Dl4All, 3Dsbs4u, myGully.

9.12.2  -   Added: PB.

9.13    -   Added new: GiroTor, LeechTurks, AveTor, 7torrents, xTorrenty, DevilTor, OxTor, Oasis,
                       TCTG, HD-U, HD-U-Req, Lat-Team, Lat-Team-Req, Immortuos, Immortuos-Req,
                       TorSurf, TorSurf-Req, Ztracker, Ztracker-Req.
        -   Added: DesiRel-Req, Telly-Req, 3CT-Req, Aither-Req, Anasch-Req, AR-Req, AT-Req, BDC-Req,
                   BP-Req, BRT-Req, BTN-IMDb-Req, BWT-Req, Classix-Req, CrazyHD-Req, CZ-Req, ExiTor-Req,
                   FE-Req, FL-Req, FZ-Req, HB-Req, IPT-Req, IT-Req, iTS-Req, JPTV-Req, MP-Req, nCore-Req,
                   NTELogo-Req, Portugas-Req, PS-Req, PTE-IMDb, PTM-Req, Retroflix-Req, Sharewood-Req,
                   SI-Req, SpeedApp-Req, TDB-Req, Team-HuSh-Req, THC-Req, TL-Req, TSH-Req, Yubraca-Req.
        -   Removed: E-T.

9.13.1  -   Added: ARAMovie.

9.13.2  -   Added: Cilipro, EXTTor, NPlus, NPlus-Req, DBy, DBy-Req.

9.14    -   Added: BT4G, SW, WH.
        -   Fixed: SolidTor.
        -   Removed: 7torrents.
        -   New feature: New 'ignore404' attribute.

9.14.1  -   Added: TLFBits, UHDB-Req, ANT-Req, NBL-Req, bB-Req.

9.14.2  -   Added: HDTurk.

9.14.3  -   Added: HDMonkey.

9.15    -   New feature: Check on tmdb/tvdb conversion, if it's not successful = 'error' icon.

9.15.1  -   Added: RPTor, SF, BestCore, HD-F-Req, BHD-Req.
        -   Tweak: HD-F (add search for tv).

9.15.2  -   Tweaks: BTN, BTN-TVDb.

9.16    -   Added: IS, IS-Req.
        -   New feature: 'mPOST' can be formed as json for all sites.
        -   New feature: 'mPOST' can be formed as json array (supports duplicate keys).
        -   New feature: Support for parameters in 'searchUrl' & 'mPOST' at the same time.

9.16.1  -   Added: HDT-Req.

9.16.2  -   Added: ASC.

9.16.3  -   Added: MKO.

9.16.4  -   Added: Hon3yHD, Hon3yHD-Req, TLZ.

10.0    -   New feature: Support for new IMDb layout.
        -   New feature: Support %search_string_orig% on the reference pages.
        -   Removed: Options for the legacy layout.
        -   Checked the icon sites: some fixed & some icons updated.

10.1    -   Updated: HB, MOJBLiNK.
        -   Removed: CineCalidad.
        -   New feature: If response is empty then site is 'logged_out'.
        -   New feature: New attribute 'ignoreEmpty'.
        -   Updated more icons of the icon sites.

10.2    -   Updated: Blu.
        -   Added: NZBSin, Douban, AE, ReinvenTor, 7torrents, CineCalidad, Cpasbien, PornoLab, PornoLab-ID.
        -   New feature: Option to remove "Open all" button.
        -   New feature: Option to change the size of the icons border.
        -   Changed GM_config link to a better host.
        -   Updated some icons of the public sites.

10.3    -   Added: Mubi, Hurtom.
        -   Updated: sHD.
        -   New feature: Support for new IMDb layout on Lists/Search pages.
        -   New feature: Support for reference view on Lists/Search pages (if set in Content Settings).
        -   As everything is so big on the new layout the icon size default is bumped to 32.

10.4    -   Added: HD-Olimpo, HD-Olimpo-Req.
        -   Fixed: Sometimes script wasn't loading/icons disappearing on the new IMDb layout.

10.5    -   New feature: Script removes tracking references from IMDb's URL (eg. ?ref_=tt_sims_tt_i_2).
        -   New feature: Separate size setting for the icons in settings.

10.6    -   New feature: Option to disable icons in settings.

10.7    -   Fixed: Bug in the references removal code.
        -   Refined @include and added @exlude so the script wouldn't activate where it shouldn't.

10.7.1  -   Added: TSP-Req.
        -   Removed: DesiTor.

10.7.2  -   Added: NextEpisode, CineMaterial, FF-Req.
        -   Updated: Aither, SI, HD-U, Lat-Team, Telly, NTELogo, FF, DBy.

10.8    -   Added: InternetArchive, DDU (as icon - rate limit is too high).
        -   New feature: Ads removal for the new layout and new option to disable it.
        -   New feature: Option to force the title pages to open in Reference View without login.
        -   Updated some private sites icons.

11.0    -   Fixed: Trakt authorization was broken if imdb opens in Reference View.
        -   New feature: Dark style for Reference View (optional).
        -   New feature: Compact mode for Reference View (optional).

11.1    -   Fixed: Few conditionals.

11.2    -   Added: TNT (needs auth token).
        -   New feature: Remove ":" and "-" symbols from the titles (possibly, search on some sites can break).
        -   Tweaked the compact mode.

11.3    -   Added: SceneRush, TorParadise, TCh, TTR, MH.
        -   Reverted removal of "-".
        -   Tweaked "Open all" button so it wouldn't open the special buttons.

11.3.1  -   Added: Peeratiko, ArabScene.
        -   Updated: MOJBLiNK.

11.4    -   Added: HDCenter, HDCenter-Req, TorSyndikat, TorSyndikat-Req, BTF, TSC, NRW, NRW-Req, SFP, SFP-Req.
        -   (Hacks: TorSyndikat link -> button. SFP-Req search works but links to the page without search results.)
        -   New feature: German sites moved to the new section in settings - "German sites".

11.5    -   Added: STT, Tubi, TurkTor, Partis.
        -   Fixed: "Hack" in previous patch wasn't working properly.
        -   Tweaked the buttons code.

11.6    -   Added: Darius, EkşiSözlük, BeyazPerde, Sinemalar, Hancinema, Ktuvit, TVRopes, FilmKatalogus, RatinGraph, TürkçeAltyazı (TR).
        -   Fixed: DonTor.

11.6.1  -   Added: Sinefil (TR), InterSinema (TR), Filmux (LT), OK (RU).
        -   Renamed few icon sites.

11.7    -   Added: SoR.
        -   New feature: No icon borders if auto-search is disabled.

12.0    -   Added: Nitro.
        -   New features: External ratings (beta testing on Reference View).
                          Gets raw average rating from Letterboxd even if there is no score.
                          Experimental atm: Rotten Tomatoes & Metacritic.
        -   Some code tweaks.

12.1    -   External ratings enabled for old layout.

12.2    -   New features: Metacritic's "Must-See" badge.
                          Rotten Tomatoes "Rotten" & "Certified Fresh" badge.
                          Separate RT's Audience score.
                          Ratings should be fully functional & enabled on all layouts.
        -   Fixed: Buggy interaction of tracking removal & forced reference, start is ~twice faster.

12.3    -   Added: PJs, PirataDigital, PirataDigital-Req, LegendasTV (BR), OpenSubtitles (BR),
                        PreDB.de, PreDB.org, PreDB.pw.
        -   Fixed: Some ratings can be 0, and 0 was shown when there were no ratings too (now '-').
        -   Removed: Filmsomniac, ADC.
        -   New feature: Douban ratings.
        -   New feature: Option to add your own OMDb API key (www.omdbapi.com/apikey.aspx),
                         it's used to get Rotten Tomatoes ratings.
        -   New feature: Support for search by Douban ID with %doubanid% parameter.

12.4    -   Added: JME, JME-Req, OBNIV (FR).
        -   Removed: PirataDigital (dupe of 'PD').
        -   New feature: Extract info to clipboard with the special button "Copy info to BBCode".

12.5    -   Fixed: Reference View forcing wasn't working from imdb's chart pages.
        -   Fixed: Dirty hack on IDs conversions, now they work properly and more reliably.
        -   Reworked: "Copy info to BBCode" button. Double action, first click activates the button.
                      Grey: standby, Yellow: working, Green(hollow): ready to copy, Red: error.
        -   New feature: Option to disable grey background for the searchable sites bars in Reference View.
        -   Added: Amazon Prime (DE).
        -   Moved OBNIV to the third bar.

12.6    -   Added: TorrentHistory, Wikidata.
        -   New feature: Allocine ratings.

12.7    -   Added: ABN, ABN-Req.
        -   Additional fallback methods to get douban id.

12.8    -   Fixed few ratings bugs.

13.0    -   New feature: Special buttons/indicators for: Plex, Jellyfin.
        -   Fixed: Allocine ratings bug.
        -   Added: Swarmazon.

13.1    -   Fixed: "#" and "&" in titles were breaking Plex.
        -   Fixed: Non-default Jellyfin url wasn't working.
        -   New feature: Indicator for Emby.
        -   New features: If found on Plex/Jellyfin/Emby then link opens actual movie/series.
        -   One more fallback method to get douban id.

13.2    -   Removed: SW.
        -   Added timeouts for the requests to sites.
        -   New features: Debug and Timeout option.

13.3    -   Removed: HEVCBay.
        -   Added: TeRaCoD.
        -   Fixed: Radarr/Sonarr custom profile id wasn't working.
        -   Differential BTN icons.

13.4    -   Fixed: IMDb ratings were not working in France(?).
        -   Fixed: RT ratings were not shown for some new movies.
        -   Fixed: Icons' size inconsistencies.
        -   Improved: "Copy info to BBCode". Gets Runtime & Ratings from imdb if they are not on omdb.

13.4.2  -   Removed: Cilipro.
        -   Added: ADC, OpenSubtitles.com (EN) & (GR).

13.5    -   Fixed: POST links stopped working on the redesigned pages (missing jQuery).

13.5.1  -   Updated: ACM, ACM-Req.

13.6    -   New feature: Add Top Review to the Reference View pages in compact mode.

13.7    -   Added: Haidan, Haidan-Req.
        -   Improved: "13.5" fix.

13.8    -   Added: EMP.
        -   Removed imdb's old layout code.

13.8.1  -   Added: Arrow Films, CBT, CBT-Req, TBL, TMV, iBit.
        -   Removed: Hon3yHD.

13.8.2  -   Added: Uniongang, SunXDCC.
        -   Removed: HDMonkey, Team-HuSh, ixIRC.

13.8.3  -   Added: GPW.

13.8.4  -   Added: TvRoad, Netflix-DVD, Blu-ray (moved to searchable, Other).

13.8.5  -   Added: OshenPT, Itzmx.

13.8.6  -   Added: CRT, CRT-Req.

13.8.7  -   Added: Arsenevich, Hawkmenblues, MovieParadise, DesiTor, TorrentLand, RedBits,
                   oMgWtFtrackr, TheRostrum, Taranis, AySTor, DataScene, Bukvi (BG).
            Updated: Snahp, ST, HDCenter, Yavka (BG), Arrow Films.
            Removed: ReinvenTor, TVU, DesiRel, LeechTurks, SF, Tasmanites, TBA, TCh, LS, NPlus, Oasis, Yubraca.

13.9    -   Removed @grant's - GM.addStyle, GM_info, GM.info.

13.9.1  -   Added: TurkSeed.

13.9.2  -   Added: DVDs ReleaseDates.

13.9.3  -   Added: WoT, TurkTracker, Yubraca.
            Updated: MTV.

13.9.4  -   Added: SC-Desc, TVV-Desc.
            Updated: BTF, TSeeds.

13.9.5  -   Removed: AS, ADC, DBy.

14.0    -   New feature: Chinese sites & French sites sections.
            Added: DBy, HD-O.
            Removed: BTDB.

15.0    -   New feature: Support for the video streaming APIs.
            New search URL parameters: %seriesid%, %seasonid%, %episodeid%.
            Updated: Sites in the Streaming section.
            Added: NetHD, Knaben.

15.0.2  -   Updated: SubDivX (ES).

15.0.3  -   Updated: WoT.

15.1    -   Disabled referer on links.
            Added: STC, STC-Req.

15.1.1  -   Added: Bit-City.

15.1.2  -   Added: Voidtools Everything search engine to Other section [8080 port] ( www.voidtools.com ).
            Removed: CurtStream.

15.2    -   New feature: Support for Radarr v4.
            Fixed: Bug with some sites (if it's mPOST and there are special chars in the name).
            Added: TorrentView, Bluray-Disc (DE).
            Updated AT, CZ and PHD to work in list view.
            Removed: ETTV, 7torrents.

15.2.1  -   Added: TPB-ID, TPB-ID-Proxy.
            Removed: AniSubs.

15.2.2  -   Added: DokuJunkies, SerienJunkies, FilmFans, SerienFans, Tor911, YesAsia,
                   KMDb (KR), KoFiC (KR), KoreanFilm.org (KR), Eiga (JP), HKMDb (CN), Kinenote (JP).
            Removed: OxTor, RlsBB-Proxy.

16.0    -   Updated script to work with new IMDb layout changes.

16.1    -   CSS fix for reference pages (v16.0 regression).
            Added: PuZo, BTDigg.
            Updated: ARAMovie, TBL, TheRostrum, TorParadise, xTorrenty.
            Removed: T2K, TMV.

16.2    -   Fixed: The icons bar wasn't smooth if icons occupied the few lines.
            Fixed: Script was running on anon.to urls with imdb url (anonymous redirect website).
            Possible fix for a rare bug when the script runs before page transfers to a reference page if set on imdb's settings.
            Added other sites/tools: MRI, Voidtools ES: URL protocol.
            Added the icon sites:
            45worlds, ADP, AFI Catalog (US), BAMPFA - CineFiles, BBFC, Common Sense Media, ČSFD (CZ), eBay,
            Eiga chirashi (JP), FFF Movie Posters, Filmový přehled (CZ), Google Scholar, HRC - Movie Posters Collection,
            Heritage Auctions - Movie Posters, Kinorium (RU), LaserDisc Database, Media History Digital Library,
            MyDramaList (Asia), Posteritati, VHS Collector, WorldCat, Yahoo! Japan - Movies (JP).

16.2.1  -   Added: Pahe, Nyaa, Filmboards.
            Updated: Movie-Censorship.

17.0    -   Updated script to work with new IMDb layout changes.
            Removed MutationObserver (probably not needed anymore).
            Added: TV Guide, EpisodeCalendar.

17.0.1  -   Moved: Tubi to the streaming sites.
            Removed: Bit-Titan.

17.0.2  -   Added: Flick Metrix.

17.0.3  -   Version bump: GitHub glitched with 17.0.2 update.

17.0.4  -   Added: HBO Max Movie/Series Catalog [https://github.com/Purfview/IMDb-Scout-Mod/pull/110].

17.0.5  -   Added: 0dayhome, AllYouLike, ATorrents, AXEL torrents (BG).
            Updated: DonTor, ilCorSaRoNeRo, TCTG, Blu.
            Removed: bB, Arsenevich, G-Free, Proxy sites.

17.1    -   Updated script to work with new IMDb layout changes [TV Episode pages].

17.1.1  -   Added: Tasmanites.
            Updated: NZBgeek (to ID search), MTV.
            Updated UNIT3D: Aither, HD-U, JME, NTELogo, LAT-Team, SI, STC, RedBits.
            Removed: PornoLab-ID, Telly, BP, PREcBurns.

17.2    -   Fixed: Searchable sites with mPOST didn't work if auto-search was disabled.
            Added: TPB-Proxy (as icon site), Wikipedia Links Search, Francomac, MyAnimeList, AniDB.

17.2.1  -   Added: CorruptNet-Pre, CorruptNet-Trace, LimitOfEden.

17.3    -   New feature: Added option to disable Radarr/Sonarr notification when they don't respond.
            Added: HD-Source.
            Updated: NZBgeek (reverted 17.1.1).

17.3.1  -   Added: HD4fun, Locadora, Telly, PSArips, RareFilmm, BitBR, Lapumia, Comando4K, ComoEuBaixo, OndeBaixa.
            Removed: oMgWtFtrackr, HDCenter, TorrentHistory, 2Embed, PD.

17.3.2  -   Added: TMDB-ID, NewHeaven, MaDsRevolution.
            Removed: BitBR.

17.3.3  -   Added: 2Embed, Filmweb (PL), Ancensored.

17.3.4  -   Added: MrSkin.

17.3.5  -   Added: LastFiles.

17.4    -   Updated script to work with new IMDb layout changes [TV Episode pages].
            Fixed: Most likely "17.1" fix wasn't working on the list pages. [untested]
            Updated: TSH.
            Removed: THC, HDME, Taranis, DWR, LookMovie.ws.

17.5    -   Fixed: Error if page is "TV Episode" and there is no episode numbers. [probably since 15.0]
            Added: OpenSubtitles (NL), UHDMV.

17.5.1  -   Added: SpiderTK.

17.5.2  -   Added: JPTV-TMDb, Blu-TMDb, OpenSubtitles (Arabic).

17.6    -   Fixed: Script was running on pro.imdb urls

17.6.1  -   Updated: Knaben.

17.6.2  -   Added: CarPT.

17.6.3  -   Added: CinéLounge (FR).

17.6.4  -   Added: UniOtaku.

17.7    -   "Open All" button disabled by default.
            Option to disable the icon sites code.
            Option to disable the searchable sites code.

17.7.1  -   Added: TOS.
            Removed: TDB, Anasch.

17.7.2  -   Added: GimmePeers
            Removed: HQS

17.7.3  -   Added: Mkvking, TFPDL, YTS, 9anime.

17.8    -   Fixed: Inconsistency with mPOST formattings ["+" replacement with space for 2 & 3 formattings].
            Updated: Portugas.

17.8.1  -   Added: BitSearch, OldToonsWorld.
            Removed: TorSurf, Movietown.

17.9    -   Fixed: Options from 17.7 didn't work properly.
        -   Added: ReelFliX.

17.9.1  -   Added: HDUse, HUNO.
            Note: There are some quirks with Violentmonkey v2.13.3, it will be fixed in v2.13.3.9:
                  [ https://github.com/violentmonkey/violentmonkey/issues/1671 ]

17.9.2  -   Update: Blu, RedBits.

17.10   -   Fixed: Broken Douban and Metacritic ratings on the mobile browsers.
            Removed: SP.

18.0    -   New feature: Show Rotten Tomatoes & Metacritic ratings for TV series.
            Added: NZBKing.

18.1    -   New feature: Support other IMDb page languages: French, German, Hindi, Italian, Portuguese, Spanish.
                         [Note: Anyway, some sites work properly only in English and(!) when IMDb is set to English titles & any English region at www.imdb.com/preferences/general]
            Added: AnimeVibe Lite, KissAnime, Actvid, KinoX (DE), StreamKiste (DE).
            Removed: 9anime, Filmux (LT).

18.2    -   New feature: Change the names URLs to fullcredits on the Reference View [optional].
            Fixed: Some TV/Movie discrepancies.
                   TV only: Podcast Series|TV Mini Series [added only English].
                   Won't fix: Non-tv Shorts are searched in both on non-reference view.
            Added: AnimeWorld, Yugen, Filmai (LT), ADC2, Back-Ups, Tornado, Tigers, Crna Berza, PTN-Req, PornoLab-ID.
            Removed: Actvid, BD-film, LegendasTV, UHDMV, 3Dsbs4u, HDAI, Bit-City.

18.2.1  -   Removed: Zooqle, ATorrents, TorParadise, Nitro, CineCalidad, ProStyleX, HDSpain.
            Updated: PTN.

18.2.2  -   Added: ZmPT, GayTor.

18.3    -   Fixed: Broken names URLs with "?ref" tracking.
            Added: Acervos, RoTor.
            Removed: PREovh.

18.4    -   Fixed: Rotten Tomatoes ratings broken for episodes of TV series. [ www.imdb.com/title/tt14659496 ]
            Added: CineCartaz (PT), FilmSpot (PT), SapoMAG (PT), LegendasDivX (PT) [not working yet, need more info],
                   Rutor-Title, Rutor.org, ShotOnWhat.

18.4.1  -   Added: LST, RocketHD, SecretBinaries (DE).

19.0    -   Fixed: IMDb's layout change was blurring the script's elements.

19.1    -   Fixed: "19.0" fix had cosmetic issues. ["19.0" Reverted. Moved Scout elements one parent up.]
            Fixed: IMDb's layout change broke %search_string% & %search_string_orig%.
            Fixed: On some browsers <hr> separator was white instead of dark.
            Removed: Tornado, iBit, PTMSG.

19.1.1  -   Added: NIMA4K, WCX, Fanart, Movieposters, ThePosterDB, Amazon (UK).

19.2    -   Fixed: Metacritic "getMetacriticRatings_IMDb()" func.
            Fixed: Rotten Tomatoes ratings.
            Added: BitHUmen, HoU.

19.3    -   Fixed: HTML entities in the titles on the redesigned pages.
            Added: HCT, AnimeTorrents, 2Embed.to, PreDB.club.
            Removed: PJs.

19.4    -   New feature: MyAnimeList & AniList ratings.
            Removed feature: External IMDb ratings [IMDb monkeys deleted data for this feature].
            Added: SceneNZBs, AniList.
            Removed: RocketHD.

19.5    -   New feature: Support for Sonarr v4.

19.5.1  -   Added: 9anime, SkipTheTrailers, YouTube (Invidious).

19.5.2  -   Added: DuckDuckGo.

19.5.3  -   Added: Serializd.

19.6    -   Fixed: Rotten Tomatoes ratings. [RT site element's ID change]
            Fixed: Rotten Tomatoes ratings broken for episodes of TV series. [ www.imdb.com/title/tt14659496 ] [OMDb response change???]
            Fixed: Bug in getMetacriticRatings().
            Added: MonikaDesign, Brothers of Usenet.
            Removed: RARBG, SDBits, InterSinema (TR), OndeBaixa, ComoEuBaixo, RPTor.

19.6.1  -   Added: ItaTorrents, TheRebels, Bithorlo, Infire, UnleashTheCartoons, G-Free.
            Updated: BJS, HD-Olimpo, PreDB.de renamed to PreDB.net.

19.6.2  -   Updated: Aither.

19.6.3  -   Updated: TGx.

19.6.4  -   Removed: 2Embed.to, 2Embed.org.

19.6.5  -   Added: AnimeSub (PL).

19.6.6  -   Added: iDope, Burning Series (DE), 30nama (IR).
            Renamed: 9anime to Aniwave.
            Removed: Hawkmenblues.

19.6.7  -   Added: Sky of Usenet (DE), House of Usenet (DE), OnlyEncodes, RareShare2.
            Removed: HoU, SpiderTK, Telly.

19.6.8  -   Moved "Sky of Usenet (DE)" to the icon sites.

19.6.9  -   Added: RateYourMusic, TheRARBG, Tapochek, Zone Telechargement.

19.7    -   Fixed: Metacritic ratings.
            Added: ComandoFilmes, BTArg, DiabloTor, UltraHD, LBM, FearNoPeer.
            Removed: Lapumia.

19.8    -   New feature: "_Check URLs (for Dev tests)" - special button to quick check for the dead sites.
            Added: DvDFr (FR), Le-Cinephile, SceneLinks, AnimeVibe.
            Removed: BD25, DVD-Basen, LimitOfEden, AnimeVibe Lite, MH, Acervos, Subs.com.ru (RU).

19.8.1  -   Update: Filmweb (PL).

19.9    -   Code fix for "_Check URLs (for Dev tests)".
            Added: NordicHD.

19.9.1  -   Update: PSArips, NZBfinder.

19.9.2  -   Removed: Cuevana2, PTN, T [openlook], UltraHD, MRI, FFF Movie Posters, PlanetDP (TR).

20.0    -   New feature: 2nd bar supported on Search/List/Watchlist pages.
            Fixed: Bug with %search_string% & %search_string_orig% on Search/List/Watchlist pages if in IMDB's acc was enabled the reference view option.

20.0.1  -   Update: Titrari (RO).

20.0.2  -   Added: ToonsForMe.

20.1    -   New feature: Support IMDb's redesigned Advanced search page.
            Tweaked connection rate limiter to IMDb on the list pages.
            Added: HDb-Req, Movies Unlimited, SubHD (CN), Utopia, Toca Share, LDU, YouTube (Piped), FileLeechers (DE).
            Removed: Ulož, SolidTor, TorrentView, AySTor, GT.

20.1.1  -   Update: FileLeechers (DE).

20.1.2  -   Added: Usenet4all (DE).

20.1.3  -   Added: JustWatch (CA).

20.1.5  -   Added: TamilBlasters, TamilRockers, NYPT, preDataBa.se, ExtremeBits
            Removed: Darius, UnleashTheCartoons, CaCh, ToonsForMe

20.1.6  -   Removed: Netflix-DVD

20.1.7  -   Added: Square Eyed, nzbCore (DE)

20.1.8  -   Added: TVDB-ID, Apple TV

20.1.10 -   Added: HHanClub, Audiences, Digital Carnage

20.1.11 -   Added: Movie-Web

20.1.12 -   Added: CapybaraBR
            Removed: preFYP, Feliratok (HU), TamilRockers, TurkTracker, BDC, ARAMovie, TheRebels, TvRoad.

20.1.14 -   Added: ArabP2P

20.1.16 -   Added: Plusteca

20.2    -   New feature: New search URL parameter - %tmdb_orig_title%.
                         To get the native original title instead of IMDb's latinized one.
                         Atm, it's used for ArabP2P.
            Removed: HDSS (FR)

20.2.1  -   Added: TorSyndikat-Produkt, Subdbs, Subdl
            Removed: Subscene

21.0    -   New feature: Support for a second Radarr instance. https://github.com/Purfview/IMDb-Scout-Mod/commit/cdcb87a4c39cae343cf9f8ea93e9a85c96af4ede
            Fixed: Rotten Tomatoes ratings.
            Added: PolishTorrent, NewzBay (DE)
            Removed: HDC, ComandoFilmes, SkipTheTrailers, AnimeVibe, NzbNdx, CT, HDZ

21.1    -   Fixed: Stopped working with Chrome 127.0.6533.73

21.2    -   Fixed: For some users stopped working with Firefox on the reference pages.
                   (Note: Because of ".ipc-page-section" [redesign elem] present on the reference pages. Fix: Made check for reference page first.)

21.3    -   Fixed: Stopped working with the mobile browsers on the redesigned pages.
                  (Note: Ads removal code on the mobile browsers + the redesigned pages is disabled now.)

21.3.1  -   Added: MyWarez, SceneSource, SoftArchive, Tabula Rasa.

21.4    -   Fixed: Stopped working on the list & watchlist pages.

21.5    -   New feature: Support the dynamic elements on the List/Watchlist/Advanced Title Search pages.
            Removed: MovieTorrentz, PS (aka Polishsource).

21.5.1  -   Added: Vimeo.

21.5.2  -   Removed: STC, Subdbs, TSP, Aniwave

21.5.3  -   Removed: GD (GreekDiamond)

21.5.4  -   Added: Yoinked, Seedpool, StarK ClouD.

21.5.5  -   Removed: STT, SceneLinks, Yugen

22.0    -   Added: Prime Video, Max.
            New feature: Replace Featured reviews with Helpful reviews. [optional, enabled by default]
                         Option to allow spoilers in Helpful reviews. [disabled by default]
                         Featured reviews tends to show random useless ones even with negative helpfulness.
                         Helpful review is selected by the highest helpfulness ratio from the top voted reviews.
            Fixed: Reviews broken in the compact Reference View mode as IMDb started switching to the redesigned reviews pages.
            Deleted the "URLs to fullcredits" feature as IMDb removed those pages.
            Improved ads removal.
            Adjusted the settings position to be more compatible with mobile browsers.
            Re-enabled ads removal for mobile browsers (v21.3 fix). [tested only Firefox]

22.1    -   Fixed: Not working MyAnimeList & AniList ratings for TV shows.
            Fixed: Broken genre detection on the redesigned title pages.
            Fixed: Broken %tmdb_orig_title% for tv series.
            Fixed: Broken year/title parameters on the upcoming titles. ( www.imdb.com/title/tt14820580 )
            New feature: Fallbacks for MyAnimeList & AniList ratings.
            New feature: Clickable links on MyAnimeList & AniList ratings.
            New feature: Support the list pages in Compact view.
            New feature: Support the ratings pages.
            Change: Let the ads removal run on the list pages.

23.0    -   Moved all external icons to the script.
            Removed an option to disable icons in the settings as it's obsolete. [10.6]
            Added: RocketHD, HDZero, TPB-Proxy2

23.0.1  -   Updated: WH, WF, ilCorSaRoNeRo, Cpasbien

23.1    -   Added: MovieHunterz, Data-Load, Kino (DE).
            Fixed: Cosmetic Rotten Tomatoes bug if there is no "Tomatometer" rating. ( www.imdb.com/title/tt1009017 )

23.2    -   Fixed: The script was not working on very slow PCs with Chrome
            Fixed: Trakt-Watchlist & MP urls were triggering the script.
            Notification for Chrome/Cromium users as Chrome bug with requests + Violenmonkey may be banned soon. It's shown 3 times.
            Added: UHD100

23.2.1  -  Added:  DDLValley, Derinport, Zamunda-stolen, Energy Torrent (BG), StreamCloud (DE), SerienStream (DE)
           Removed: Demonoid

23.3   -   Fixed: Trakt-Watchlist & MP urls were triggering the script. [23.2 "fix" was wrong]

23.4   -   New feature: Voidtools supports custom url and credentials.
                        New section in the settings - "Voidtools config".

23.5   -   New feature: Seeding status/highlight - light blue icon border.
           Added: YouTube Filtered, ULCX

23.6   -   Fixed Radarr issues caused by API changes in 5.16.3.9541
           Allowed running on non-English IMDb (IMDb "moved" the non-English site versions to the different URLs)
                [Reminder: Anyway, various sites and features work properly only in English and(!) when IMDb is set to English titles & any English region at www.imdb.com/preferences/general]
           Added: xBytesV2
           Removed: Plusteca, NordicHD

23.6.1  -  Added: eMuwarez

23.7    -  Fixed: Anime ratings icon was showing allocine.fr link for non-anime titles.
           Added: MIRCrew (IT), DDNCrew (IT), DDLVillage (IT), ilCorSaRoVeRde (IT) # Last 3 only links to a search page
           Updated: DDU & ilCorSaRoNeRo to use %search_string%
           Removed: RedBits, Brothers of Usenet (DE), Bukvi (BG)

23.7.1  -  Added: SubSource

23.7.3  -  Added: Usenet-Crawler, AZnude, Stremio

23.7.5  -  Removed: TSH, TSC, Classix, StreamKiste (DE), JPTV

23.8    -  Fixed: Script breaks in some cases because IMDb stopped adding the slash to the end of the URL.

24.0    -  Fixed: Bug when "Reference View: Force it" is on and a link is without the slash at the end.
           Fixed: In some conditions "Helpful review" was truncated on the re-designed pages.
           Fixed: In some conditions "Helpful review" was repeated multiple times on the re-designed pages.
           Fixed: Wrong title of "Helpful review" on the re-designed pages.
           Removed obsolete workaround for: "Sometimes randomly imdb loads pre-redesigned reviews page".
           Added: OldGreekTracker

24.1    -  New feature: Adds "Box Office (graphQL API)" section. [compact reference only]
           New feature: Implemented original IMDb's "Helpful review" selection algo.
           Fixed: Bug in getDoubanID0 and added one more fallback.

24.1.1  -  Added: PrivateSilverScreen, Yu-Scene

24.1.2  -  Added: DarkPeers, Electro Torrent
           Removed: TSeeds, DVDSeed, AE

24.1.3  -  Update: THR, Knaben

24.1.4  -  Added: Nyaa (Mirror), Anime Tosho, Zooqle (Fake), TGx (Fake)
           Removed: TGx, RareShare2, FinVip, StarK ClouD, GPW, HDAtmos, Le-Cinephile, M4uFree, Movie-Web, WizdomSubs (IL)


//==============================================================================
//    Notes.
//==============================================================================

UNIT3D:

       v7.2.5 - v8.2.0
      'matchRegex': /torrent-search--list__overview/,
      'positiveMatch': true,

      'seedingRegex': /fa-arrow-circle-up/,

       v6.5.0:
      'matchRegex': /torrent-listings-name/,
      'positiveMatch': true,

      'seedingRegex': /fal fa-leaf/,

      or

      'matchRegex': /torrent-search--list__overview/,
      'positiveMatch': true,

       v6.4.1:
      'matchRegex': /torrent-listings-no-result/,

       v5.3.0 - v6.0.6:
      'matchRegex': /"Download">/,
      'positiveMatch': true,

      'matchRegex': /<tbody>\s*<\/tbody>/,

UNIT3D Req:

       v6.5.0 - v8.2.0:
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,

       v5.3.0 - v6.4.1:
      'matchRegex': /label-danger/,
      'positiveMatch': true,

*/
//==============================================================================
//    JSHint directives.
//==============================================================================

/*jshint esversion: 8 */
/*jshint sub:true */
/*jshint multistr: true */
/*jshint scripturl:true*/
/*globals GM, GM_config, GM_notification, GM_addStyle, $ */
/*jshint shadow:true */
/*jshint -W089 */
/*jshint expr: true */
/*jshint laxbreak: true */

//==============================================================================
//    A list of all the sites.
//==============================================================================
/*
    -= Each site is a dictionary with the following attributes: =-

#  'name':
The site name, abbreviated, unique (the 'TV' atribute internaly adds 'TV' to the name).
Note: only these special chars are allowed in a site name if mPOST: .- ().

#  'icon' (optional):
Icon for the site. If not defined then script looks at site/favicon.ico.
Can be URL or Base64 string (www.base64-image.de).

#  'searchUrl':
The URL to perform the search against, see below for how to tailor the string to a site.

#  'matchRegex':
The string which appears if the searchUrl *doesn't* return a result.

#  'positiveMatch' (optional):
Changes the test to return true if the searchUrl *does* return a result that matches matchRegex.

#  'seedingRegex' (optional):
The string which appears if the searchUrl does return a result with seeding indicator.

#  'TV' (optional):
If true, it means that this site will only show up on TV pages.
By default, sites only show up on movie pages.

#  'both' (optional):
Means that the site will show up on both movie and TV pages.

#  'SpaceEncode' (optional):
Changes the character used to encode spaces in movie/TV titles. The default is '+'.

#  'goToUrl' (optional):
Most of the time the same URLs that are used for checking are the ones that
are used to actually get to the movie, but this allows overriding that.

#  'loggedOutRegex' (optional):
If any text on the page matches this regex, the site is treated as being logged out,
rather than mising the movie. This option is not effected by positiveMatch.

#  'ConfigName' (optional):
Use this to allow changing names without breaking existing users.

#  'inSecondSearchBar' & 'inThirdSearchBar' (optional):
Places site at the extra searchable bar. Subtitles and other sites are set to 2nd bar.
3rd bar is for the streaming sites. By defaut site goes to the 1st bar.
Extra bars can be enabled/disabled/swapped at the Settings.

#  'rateLimit' (optional):
Connection rate limit in milliseconds. Default is 200.
On the Search/List pages if rateLimit<=1000 then it will be increased by a factor of 4.

#  'mPOST':
HTTP request by POST method. For the sites that doesn't support GET.
Right mouse click won't submit such request.
Atm 'goToUrl' not supported with it.
Examples (3 types of formating):
1) 'cat1=4&cat2=6&filter=%tt%'
2) '{"cat1":4,"cat2":6,"filter":"all=%tt%&sort=date"}'
3) '{key:"cat",value:"4"},{key:"cat",value:"6"},{key:"filter",value:"%tt%"}'  // (supports duplicate keys)
Note: only these special chars are allowed in a site name if mPOST: .- ().

#  'ignore404' (optional):
Ignores all 4** HTTP errors.

#  'ignoreEmpty' (optional):
Use it if an empty response means that no results found, otherwise by default it means 'logged_out'.

    -=  Search URL parameters: =-

#  %tt%:
The IMDb id with the tt prefix (e.g. tt0055630).

#  %nott%:
The IMDb id without the tt prefix (e.g. 0055630).

#  %tvdbid%:
The TVDb id.

#  %tmdbid%:
The TMDb id. [it's not unique]

#  %tmdb_orig_title%:
To get the native original title instead of IMDb's latinized one.

#  %doubanid%:
The Douban id.

#  %search_string%:
The local movie title. Depends on your preferences at www.imdb.com/preferences/general.

#  %search_string_orig%:
The original movie title (e.g. Yôjinbô). Reverts to %search_string% if original title is not set at IMDb.

#  %year%:
The movie year (e.g. 1961).

#  %seriesid%
#  %seasonid%
#  %episodeid%
For the streaming APIs. The IMDb ID of series and season/episode numbers.

*/

// Custom sites must be set to the 3rd/2nd search bar.
var custom_sites = [
  {   'name': 'Dummy',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8AAABzxoNxAAAAAXRSTlMAQObYZgAAALpJREFUKM990rENxSAMBNCIMqNkH6dgBKZgifRpkOCm/IdtPogiViTy4Nxgju86gTr+A1iv4+qAA1p5dMzchSaSAE89ImK5wANW1NzJg9jkVlwQ6UnUjsYIiiQQKB3ccaQSwaZ8BMYTO0QUXAzvcXKxLxHtA6ybiH80Q+mIK1JZgMfh/RPNoWv5RNqBBYGwQsczkIlisZs4BiL03gxJAQOq3fXEnMI2H59cBNaZVkUw5P0d7C+ER+zY6wdFUso28xDDuwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://dummy.dummy',
      'loggedOutRegex': /dummy/,
      'matchRegex': /dummy/,
      'inThirdSearchBar': true,
      'both': true}
];

var public_sites = [
  {   'name': '0dayhome',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAY1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmaHTeAAAAIXRSTlMA+kv1pWbXHhAIBdFr4tnJv7mWWzAX6bGpnYp4YT41JQN0QtowAAAAbUlEQVQY032PRwrAMAwEJcs9Tu89/39lSMExGDIXiTksu6A4oYe4Ai4F8wjJgQQECAJk92ftfRi+Yh1KZwKxy6ygOhAOa5X29hMVNSZP9I+YkbVpaT6xdcWILgg9liSbtBcXurVPsah6NC6afwIswgQ03fomRQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://0dayhome.net/index.php?do=search&subaction=search&search_start=0&full_search=0&result_from=1&story=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /yielded no results/,
      'both': true},
  {   'name': '1337x',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAPUExURdY2AN9iOP///9Y2AN9iOE1iXmMAAAADdFJOUwAAAPp2xN4AAADRSURBVDjLtdXtDQIhDAbgxmMBDAP4NcDFOoAI+8/kQXsmV6DgRfuL8KTlhT/ARSkYwHNMZZdyafHS8LhFN4SxhZ7Rf4OW0TUxjqCVyHFjG30ffYG07fZi5FgF5v34c7Sr+f+glXgCAEMWluVhF85VBGqclU5UMOCjiQERq5iHKpga8VnHbClRgYatjmwpboETrlXBoCF2caJEEk3ebuDUR6C7SOSXo0QSOaeKNECg4YejowVyHh1pgsDASGcL5DwdDCXePpgPv2/wyjep4o7f4Q1FlOJhL4s2tAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://1337x.to/category-search/%search_string%+%year%/Movies/1/',
      'matchRegex': /No results were returned/},
  {   'name': '1337x',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAPUExURdY2AN9iOP///9Y2AN9iOE1iXmMAAAADdFJOUwAAAPp2xN4AAADRSURBVDjLtdXtDQIhDAbgxmMBDAP4NcDFOoAI+8/kQXsmV6DgRfuL8KTlhT/ARSkYwHNMZZdyafHS8LhFN4SxhZ7Rf4OW0TUxjqCVyHFjG30ffYG07fZi5FgF5v34c7Sr+f+glXgCAEMWluVhF85VBGqclU5UMOCjiQERq5iHKpga8VnHbClRgYatjmwpboETrlXBoCF2caJEEk3ebuDUR6C7SOSXo0QSOaeKNECg4YejowVyHh1pgsDASGcL5DwdDCXePpgPv2/wyjep4o7f4Q1FlOJhL4s2tAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://1337x.to/category-search/%search_string%/TV/1/',
      'matchRegex': /No results were returned/,
      'TV': true},
  {   'name': 'AllYouLike',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEX86gT8ChQMItT8agx0enwckgS0tjz8vgw6s+jEAAAAxElEQVQoz52PMY6DMBBFf/AuaflyJLdohFLjG2Q5wTbebR2k9HD/JvJowKFMXvmkP8/GR3ynDJwX4Et6FW36BU4dMEuGkhIQPTANLxsSrVyBbePIsZEbjPS3kmESbDxSZPQy1PA/w3rRqB25c3QluhOp0Qp9LtEdx0vfyM+4i5XzMEkM9YSfRa6RMM4MjUi/cjFx4tiKZMfuEC2tbWFfj7Zx7IrQqUWXIvS4PRMq6jODiRo9ikjSYxJFL70KyXBHccP7PAFeGyCNEXDnkQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.allyoulike.com/?s="%search_string%"',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nothing Found/,
      'both': true},
  {   'name': 'Anime Tosho',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAaVBMVEUAAAAAAAD///9ycnJXV1f29vbt7e0JCQknJyeXl5fY2Ni9vb0+Pj7i4uK6urqjo6OCgoJ2dnZOTk6tra2fn582NjYfHx8XFxfn5+ff39/Pz8+2trYxMTEtLS3IyMilpaVGRkYNDQ0FBQWpvYrKAAAAAXRSTlMAQObYZgAAASJJREFUOMu9k9mSgyAURKERcMG4ZTQazfb/HzlwE0Atp+ZlavpBi9uH5oLC/l946yezzJJUcz2L4ohB98WD+m5PQD34Rq3E1k/5TkauARnioxqsAgSVXuJaSsjxntCwjP5EBaFwqReukxzT7MYIAC1whhScpBWk7WkIwMlVa0jjl78yZPblAbR2kEo03GtkrFgBF5qEnLzBwdgClTs6IKFGSvtIQEX9AchpQDkdbq6d98ZnDyy2VrAzTaW4jDH1jNuEW1ax2jlAQwCd3MlvgjuAEozqehekBLUaAKJzvtMpAJpWhzn6VvGg7xif0aUOA5BRpa2KZOC9uOWGa2Pzo+TCg9Lp4L9FriPxiFYUigi0AdhmtB6o2LE+d+JV47dbxf5a38yjCp8EAXGKAAAAAElFTkSuQmCC',
      'searchUrl': 'https://animetosho.org/search?q=%search_string%+%year%',
      'matchRegex': 'No items found'},
  {   'name': 'Anime Tosho',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAaVBMVEUAAAAAAAD///9ycnJXV1f29vbt7e0JCQknJyeXl5fY2Ni9vb0+Pj7i4uK6urqjo6OCgoJ2dnZOTk6tra2fn582NjYfHx8XFxfn5+ff39/Pz8+2trYxMTEtLS3IyMilpaVGRkYNDQ0FBQWpvYrKAAAAAXRSTlMAQObYZgAAASJJREFUOMu9k9mSgyAURKERcMG4ZTQazfb/HzlwE0Atp+ZlavpBi9uH5oLC/l946yezzJJUcz2L4ohB98WD+m5PQD34Rq3E1k/5TkauARnioxqsAgSVXuJaSsjxntCwjP5EBaFwqReukxzT7MYIAC1whhScpBWk7WkIwMlVa0jjl78yZPblAbR2kEo03GtkrFgBF5qEnLzBwdgClTs6IKFGSvtIQEX9AchpQDkdbq6d98ZnDyy2VrAzTaW4jDH1jNuEW1ax2jlAQwCd3MlvgjuAEozqehekBLUaAKJzvtMpAJpWhzn6VvGg7xif0aUOA5BRpa2KZOC9uOWGa2Pzo+TCg9Lp4L9FriPxiFYUigi0AdhmtB6o2LE+d+JV47dbxf5a38yjCp8EAXGKAAAAAElFTkSuQmCC',
      'searchUrl': 'https://animetosho.org/search?q=%search_string%',
      'matchRegex': 'No items found',
      'TV': true},
  {   'name': 'ArenaBG',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://arenabg.com/en/torrents/?category=1&text=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|>Грешка<|Lost password/,
      'matchRegex': /no results found|Не са намерени резултати/},
  {   'name': 'ArenaBG',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://arenabg.com/en/torrents/?category=2&text=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|>Грешка<|Lost password/,
      'matchRegex': /no results found|Не са намерени резултати/,
      'TV': true},
  {   'name': 'AXEL torrents (BG)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABTVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAWUCAn4BADQCAXoAAACS1PY2NIsCAXcqQrEPFJ0DAomK0/l7yPYCAYO45PsAAADJ6foBAEsBAEoQF38CAXQDAZ/6/f/u+f/i9f/e9P/O7v+35/99yvptt/JTjN0mO7ofLLMuMLL1/P/w+v/r+P/W8P+u4/+d3f/U6PnF4fnD1/SYxvNhoemRsOdWj+BMgthEb9JBac89ZM01VcYqRL0UHq0LDqYTEaX+///l9v/R7//H7P/A6f+x5P+m4P+B1P+Y2v6T2f7D5v3R6vzp7fmFzfmUzPba4vPQ2vOIxvOdxvKCwvJrsO+Rwe2tx+yNu+xytOyEr+dwoeZcmOSur+Fvm+FShdyanttqjtpKedZ2fM9ZdM9OZss4WshCTb0sTL0nOLIbKLEXI68aHasICaPO1hYDAAAAH3RSTlMAHy6QDgeIbkcn4d3Du2BC6uq9vbq0tK6inpKIiFdXzL97VwAAAO5JREFUGNMlj8Vyw1AMRfXsF9tpqMytzBhmhjIzM3P7/8sqk7PTmZF0LxCJiU3brY8ucBgwa2Vz+06t9TPOQkBMGxlzbeO01vQxFiaTMDVNX7Guyjcn1/fzDGDSVNWUcW7fNv2gElE4nG0tHebz285Dq4PFgsyg6uyk1zMH1YbXxRddEqDhlku7lxdP7Q7iY0oUwHuvP1c0NVn8QrzbIzH27bXf0mrSyLrYG6aVRfzr/h4t66vHAWKUjvIpRAwKVu4TcUikt8BiiD279EHzTJyCQSg8F/FfEUeiYpyi9w1TZEkUJVmhcgM4EwjGgfgHbQ4jpxP2hocAAAAASUVORK5CYII=',
      'searchUrl': 'http://axelbg.net/browse.php?search=%search_string%&cat=0&place=intitle',
      'matchRegex': /Nothing found!/,
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'both': true},
  {   'name': 'BitSearch',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAALVBMVEUAAABpMeY+LupRL+hbMef///9HL+lxT+uLcu+nlPO/sPbTyfn18v7j3fvs6P0FKMLaAAAAAXRSTlMAQObYZgAAArdJREFUSMd9lc9rE1EQxx9paX6csrCgVbzswbtsIPHW1cUkSg+iDzVJezBlbT0lTUhbT61Ni70FpFqhij9BpHgy+Bd48OhB8C6l/0Zn3subeZts+80lyXzzeTNvdiYirlwuJ87RgaO0cUY445A2k+Lp0GG1kuJh4LquE2jHswl+CHLOYYQo+HUAL61BLN4PlSgOuhhLoBAaRPIhHT/UgiRdY7hgAXzfQriMYIBPCI4zIgNxQqy3Jy90ykfp+Du5sEWMvNC66RPispTyESPoBELsS9DWWJozTd8ggl9o+EOEWWXoRYSoSNQDrkQZoogQVW2IJ5GOIkJowl2+zjymEDGiPE64BIbdyEJ8QcNDBxDc0luRhbiChrrVVJWjhQiO0NFnhBBZDDMieLE3lCeB3Y6r2sHXWR4udgnREtOeNpTe9E1HbiOC6kx5CrF8LBvbIwTU8rUNCGNQiB0szyDuwIefTEDEkurSS98vfv8HWcD7RttxVbs+eohYlqh6v3woG90wHMKHDy46kICIp5L1GR4LajoSQMkGRMwCARH6iIWDPYBvQxnooyNQlGTp728o5FjKxa6aESQoBJZZw+sswiNcxTJxRpjgrcB3r0xHduCicAZgEPNixtOIjW+vTUdK+HOUIqQ9LW5qYb8W0qS2RGZkME1dW3srf5hJVe32bMTSoQR1eNiFMjBiHuM1HnY0rNqIodRdNYgyGFIW4ol+7H1CzOFceIxYUYb7vC9wcLImTk29x/tC7cLHjNCE/7QvAoFKMULn8Ike8KrecR5JVdHo0L4Y7TmPEfNYJc+I0HrOjuaRrPdozCpmj1qI5nqPx4w26So77Em9Joym2WBP6pwg3UhCFAQrnYRgQHIWRWErM4kY+2ucGkeYA0i7ccR1wWIHI0qJf72MaIlEZUeQijhb7webAxHTKcR6cpKOAKdYAAAAAElFTkSuQmCC',
      'searchUrl': 'https://bitsearch.to/search?q=%search_string_orig%+%year%&category=1&subcat=2',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Found <b>0</},
  {   'name': 'BitSearch',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAALVBMVEUAAABpMeY+LupRL+hbMef///9HL+lxT+uLcu+nlPO/sPbTyfn18v7j3fvs6P0FKMLaAAAAAXRSTlMAQObYZgAAArdJREFUSMd9lc9rE1EQxx9paX6csrCgVbzswbtsIPHW1cUkSg+iDzVJezBlbT0lTUhbT61Ni70FpFqhij9BpHgy+Bd48OhB8C6l/0Zn3subeZts+80lyXzzeTNvdiYirlwuJ87RgaO0cUY445A2k+Lp0GG1kuJh4LquE2jHswl+CHLOYYQo+HUAL61BLN4PlSgOuhhLoBAaRPIhHT/UgiRdY7hgAXzfQriMYIBPCI4zIgNxQqy3Jy90ykfp+Du5sEWMvNC66RPispTyESPoBELsS9DWWJozTd8ggl9o+EOEWWXoRYSoSNQDrkQZoogQVW2IJ5GOIkJowl2+zjymEDGiPE64BIbdyEJ8QcNDBxDc0luRhbiChrrVVJWjhQiO0NFnhBBZDDMieLE3lCeB3Y6r2sHXWR4udgnREtOeNpTe9E1HbiOC6kx5CrF8LBvbIwTU8rUNCGNQiB0szyDuwIefTEDEkurSS98vfv8HWcD7RttxVbs+eohYlqh6v3woG90wHMKHDy46kICIp5L1GR4LajoSQMkGRMwCARH6iIWDPYBvQxnooyNQlGTp728o5FjKxa6aESQoBJZZw+sswiNcxTJxRpjgrcB3r0xHduCicAZgEPNixtOIjW+vTUdK+HOUIqQ9LW5qYb8W0qS2RGZkME1dW3srf5hJVe32bMTSoQR1eNiFMjBiHuM1HnY0rNqIodRdNYgyGFIW4ol+7H1CzOFceIxYUYb7vC9wcLImTk29x/tC7cLHjNCE/7QvAoFKMULn8Ike8KrecR5JVdHo0L4Y7TmPEfNYJc+I0HrOjuaRrPdozCpmj1qI5nqPx4w26So77Em9Joym2WBP6pwg3UhCFAQrnYRgQHIWRWErM4kY+2ucGkeYA0i7ccR1wWIHI0qJf72MaIlEZUeQijhb7webAxHTKcR6cpKOAKdYAAAAAElFTkSuQmCC',
      'searchUrl': 'https://bitsearch.to/search?q=%search_string_orig%&category=1&subcat=2',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Found <b>0</,
      'TV': true},
  {   'name': 'BTDigg',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAGFBMVEXl5eUAAADGxsYfHx96enqoqKhRUVE5OTmYayJ6AAAAZElEQVQoz2MYAGAoAmMpCgoKigVgCAmKYgoJogkFMCQihFgEDcBCihQKhRSKMgGtEkAIAXnimEKC6EIpgYIK6MYPCiFHhFAi3PVAbwsKgUMV7kcGVpiQKFSoiAGoQwgaQ4MCAAB0ISJb0ohTWAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.btdig.com/search?q=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|the security check/,
      'matchRegex': />0 results found/},
  {   'name': 'BTDigg',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAGFBMVEXl5eUAAADGxsYfHx96enqoqKhRUVE5OTmYayJ6AAAAZElEQVQoz2MYAGAoAmMpCgoKigVgCAmKYgoJogkFMCQihFgEDcBCihQKhRSKMgGtEkAIAXnimEKC6EIpgYIK6MYPCiFHhFAi3PVAbwsKgUMV7kcGVpiQKFSoiAGoQwgaQ4MCAAB0ISJb0ohTWAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.btdig.com/search?q=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|the security check/,
      'matchRegex': />0 results found/,
      'TV': true},
  {   'name': 'Comando4K',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAVFBMVEUAAAAQS7UenusOMJAPbdjt7ewLFENGUXbLzMzX2NjFxcU3dMBWbJTR0dKhssF6iqJdq9+y1bSbnai4vLwlLli37rl+weiixuG9z93S5ePi4uK+3OvCHKvGAAAAAXRSTlMAQObYZgAAAZpJREFUOMttk9uShCAQQxeE4SrgFXT+/z833aOuY22esHIqHVv8+dYyDMPt8em6KY15HNO/0LCkbLqPzOiWp59S7G4yaftGchbdXULEr5AYBemyQwgituXpX4TILTFx95VSBxJy6nUNoovb3Q+lBMVE9tbpFnDMywfAOYS0VwZwnrzbdaBjW44Ak5NlgDUiQVc6FQKMEZ3Jo3ctqCOCgD3QyRFAe4nj1DsAEPqkXSNCQXUg4PWaAViX1KFCwE78OmDCDAAlvOvDSTQNrUpKBpDwMplmZEGuRAQBmwRguSMiGJh4YVIquXGEXOsJvLiEi/hKDLw1EwUlo+l4xpgATAIEkrklC29BJXmGd86lQAml6QcAcQnX+1LK2na9rRsDvEkGzAew3k++31GwrHWt+J7XDLTs+xOokvUeCIifCKyKAait2AVtAQF/EYYjaoEkRF03BHDEPF8zmjyEiPd1KQ0RHc+w5SLq7VrP84yrjAhr6wk09v8yjJKZAM8RmM/+HYkZM/ASiew39XsqY9uWiGSXy34I//X0+Ld/AV0KHMalEY8kAAAAAElFTkSuQmCC',
      'searchUrl': 'https://comando4kfilmes.site/?s="%search_string_orig%"',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nenhum Arquivo Encontrado/,
      'both': true},
  {   'name': 'Deildu',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAdVBMVEUAAAD//wD6/gCYmgCJiwAJCgBQUQBNTgDy9gBhYgA5OgAcHQDe4QDKzADGyACfoQCRkwCChABwcQBkZQBFRQAQEQD3+gD1+ADp6wDm6ADNzwC7vQC6vACqrQCLjQCKjQB5egB3eABJSgA/QAAzNAAmJgAhIgAGhVfNAAAAg0lEQVQY00XIRxaDMAADUQ2ODYTe0nu7/xGDiSH/aaORZ0sj1aXVzMArg7MmqVUPEsSSkxp/zE6Kjj62qkmkHA1sfWikCivoOlBGpRGJheIEA8jLSYgYt+Eg704UkGryD/rZExQhPC6xy94uNusQbB+3xqRu/msWH3lXFjd5zqwC85S+fkgEtfHKD5YAAAAASUVORK5CYII=',
      'searchUrl': 'https://deildu.net/browse.php?search=%tt%&cat=0&Lysing=1',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /Ekkert fannst!/,
      'both': true},
  {   'name': 'DevilTor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUBAADGAgKJAwMrAgKpAQFcAwMmHR5TS07t7vKmQEOSaGimISKdi4xyLC3hVlbBsbOT0IBuAAABd0lEQVQoz12RsUvDQBTGD0Oyv+M6SBDblxTBIqRJ6uylcdApbdLBLSCI6GBBbEEKrlU62EkcdHDoWP8AJyehLoqiCCK4ORXcVDp4TdpC803vfnx87z4eibVJEsoZCZBPJYAMniVNXGKSeMq0dD9+ljFrkBIEWsAiT5kDyxo2MGrDamSxmetoJkBGp+hFgZwhFgAQqeXHFqCIAOqNNt7C3Ry69By08eKAI2cLzba7QsKohakjyyw2v92ickcCEWyZSPPrzWOaVmpkxjFk49FJ7c41W46nhER2LT2doakd9tOqhAJIiL6IpEftr9ZSlQgZFjGB0ffb+RN134+7a8Lx1lOvQE/HP3WFY+O6DZ9xXcUJAOjH2T3EbUO5KHMBXhpt5g2LeHZazgC9fNr+uzCGiSozKiWudk/3Gr2oKuJy0ea0/3BI6tGOA6dQnNHVfmeL1CLwrJmehLO/IRmpoJQ9UlC7VTJRRSStDTqJ4w7q08B8rU0DyR8N/+KWVOOQU8J2AAAAAElFTkSuQmCC',
      'searchUrl': 'https://devil-torrents.pl/szukaj.php?search=%search_string_orig%+%year%&cat=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Nie zalogowany/,
      'matchRegex': /Nic tutaj nie ma/},
  {   'name': 'DevilTor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUBAADGAgKJAwMrAgKpAQFcAwMmHR5TS07t7vKmQEOSaGimISKdi4xyLC3hVlbBsbOT0IBuAAABd0lEQVQoz12RsUvDQBTGD0Oyv+M6SBDblxTBIqRJ6uylcdApbdLBLSCI6GBBbEEKrlU62EkcdHDoWP8AJyehLoqiCCK4ORXcVDp4TdpC803vfnx87z4eibVJEsoZCZBPJYAMniVNXGKSeMq0dD9+ljFrkBIEWsAiT5kDyxo2MGrDamSxmetoJkBGp+hFgZwhFgAQqeXHFqCIAOqNNt7C3Ry69By08eKAI2cLzba7QsKohakjyyw2v92ickcCEWyZSPPrzWOaVmpkxjFk49FJ7c41W46nhER2LT2doakd9tOqhAJIiL6IpEftr9ZSlQgZFjGB0ffb+RN134+7a8Lx1lOvQE/HP3WFY+O6DZ9xXcUJAOjH2T3EbUO5KHMBXhpt5g2LeHZazgC9fNr+uzCGiSozKiWudk/3Gr2oKuJy0ea0/3BI6tGOA6dQnNHVfmeL1CLwrJmehLO/IRmpoJQ9UlC7VTJRRSStDTqJ4w7q08B8rU0DyR8N/+KWVOOQU8J2AAAAAElFTkSuQmCC',
      'searchUrl': 'https://devil-torrents.pl/szukaj.php?search=%search_string_orig%&cat=7',
      'loggedOutRegex': /Cloudflare|Ray ID|Nie zalogowany/,
      'matchRegex': /Nic tutaj nie ma/,
      'TV': true},
  {   'name': 'Dl4All',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAGoSURBVDhPrZTJTsJQFIb/W8uk4BA3xhUxvoxv4sq4IC59B7e+hWEhCQSMw8ZE48aFwQJCHOIACEYo3nvruSWNUjot+JOm0+nXv/89p8wiYYbSZsiyUZGAb98S1y8i0rsjAc9bErnycDbAztDCU1/ipCnQ6MpQaKjDYo0jNgckdSBXCXcZCPw0LVQ7EjpVpXSGY4Oj1Qt2GQgsECBB7pQYbYtxht1SsEtfYJuyq1FmuqZQY6nPLtY5DHLtJ19gpUHZ0V32x6NjhvkYw/6Zv0tPYHsgcfcxzs6tFLk8qgoYXe++9ASW6gJxyk45cktdy8SAvbLp+dVTwJ5J7tre7v5nmb/ndn+6NQUsGIJaxNud87ByuZpk2ClOZzkBVFMxXtnQgUCCXlqihXNPz8SjaipsGDmQ9Ffj0oIpLAw4oNqoP6JzbkHQdeUySc3unh7m/A+Vu4PLkd1rxLD3awsa1jMMmysabt8lLh4Frp4Ebl4FulSfIKDaG9tpbFCNPQAOMF/9sachu6whu6QhTVMRpOcvidMmR+VBQC3N4VZqEhieWrSKCPFHAzlVv6uCuBktyJ5MAAAAAElFTkSuQmCC',
      'searchUrl': 'https://dl4all.org/index.php?do=search&subaction=search&story=%tt%&titleonly=0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /yielded no results/,
      'rateLimit': 5000,
      'both': true},
  {  'name': 'DDLValley',
      'icon': 'data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuw0oB7sNKMu7DSjLuw0oBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuw0oQ7sNKee7DStLuw0rS7sNKee7DShAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7sNKX+7DStLuw0pK7sNKS+7DStLuw0peAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO7DSl7uw0o27sNKhe7DSoTuw0o27sNKXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuw0oY7sNKle7DSv3uw0r97sNKle7DShgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO7DSgHuw0oh7sNKtO7DSvruw0r/7sNK/+7DSvruw0q07sNKIe7DSgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuw0oR7sNKru7DSv3uw0r/7sNK1+7DStfuw0r/7sNK/e7DSq7uw0oRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7sNKP+7DSvruw0r/7sNK6e7DSjLuw0oy7sNK6e7DSv/uw0r67sNKPwAAAAAAAAAAAAAAAAAAAAAAAAAA7sNKAe7DSpHuw0r/7sNK8+7DSnHuw0oC7sNKAu7DSnHuw0rz7sNK/+7DSpHuw0oBAAAAAAAAAAAAAAAAAAAAAO7DSh7uw0rZ7sNK/u7DSo7uw0oHAAAAAAAAAADuw0oH7sNKj+7DSv7uw0rZ7sNKHgAAAAAAAAAAAAAAAO7DSgHuw0pc7sNK8+7DSsDuw0ocAAAAAAAAAAAAAAAAAAAAAO7DShzuw0rB7sNK8+7DSlzuw0oBAAAAAAAAAADuw0oI7sNKqu7DSt7uw0o0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7sNKNO7DSt7uw0qq7sNKCAAAAAAAAAAA7sNKIO7DSuHuw0pc7sNKAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO7DSgLuw0pc7sNK4e7DSiAAAAAAAAAAAO7DSmnuw0qK7sNKCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7sNKCu7DSoruw0ppAAAAAO7DShDuw0p37sNKDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuw0oN7sNKd+7DShDuw0oN7sNKFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO7DShXuw0oN//8AAP5/AAD9vwAA/n8AAPw/AAD4HwAA8A8AAPGPAADjxwAA48cAAOfnAADP8wAA3/sAAN/7AAD//wAA//8AAA==',
      'searchUrl': 'https://www.ddlvalley.me/?s=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /no posts matched your criteria/},
  {  'name': 'DDLValley',
      'icon': 'data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuw0oB7sNKMu7DSjLuw0oBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuw0oQ7sNKee7DStLuw0rS7sNKee7DShAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7sNKX+7DStLuw0pK7sNKS+7DStLuw0peAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO7DSl7uw0o27sNKhe7DSoTuw0o27sNKXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuw0oY7sNKle7DSv3uw0r97sNKle7DShgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO7DSgHuw0oh7sNKtO7DSvruw0r/7sNK/+7DSvruw0q07sNKIe7DSgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuw0oR7sNKru7DSv3uw0r/7sNK1+7DStfuw0r/7sNK/e7DSq7uw0oRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7sNKP+7DSvruw0r/7sNK6e7DSjLuw0oy7sNK6e7DSv/uw0r67sNKPwAAAAAAAAAAAAAAAAAAAAAAAAAA7sNKAe7DSpHuw0r/7sNK8+7DSnHuw0oC7sNKAu7DSnHuw0rz7sNK/+7DSpHuw0oBAAAAAAAAAAAAAAAAAAAAAO7DSh7uw0rZ7sNK/u7DSo7uw0oHAAAAAAAAAADuw0oH7sNKj+7DSv7uw0rZ7sNKHgAAAAAAAAAAAAAAAO7DSgHuw0pc7sNK8+7DSsDuw0ocAAAAAAAAAAAAAAAAAAAAAO7DShzuw0rB7sNK8+7DSlzuw0oBAAAAAAAAAADuw0oI7sNKqu7DSt7uw0o0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7sNKNO7DSt7uw0qq7sNKCAAAAAAAAAAA7sNKIO7DSuHuw0pc7sNKAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO7DSgLuw0pc7sNK4e7DSiAAAAAAAAAAAO7DSmnuw0qK7sNKCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7sNKCu7DSoruw0ppAAAAAO7DShDuw0p37sNKDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuw0oN7sNKd+7DShDuw0oN7sNKFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO7DShXuw0oN//8AAP5/AAD9vwAA/n8AAPw/AAD4HwAA8A8AAPGPAADjxwAA48cAAOfnAADP8wAA3/sAAN/7AAD//wAA//8AAA==',
      'searchUrl': 'https://www.ddlvalley.me/?s=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /no posts matched your criteria/,
      'TV': true},
  {   'name': 'DonTor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMAgMAAAC6+bm4AAAADFBMVEUAAAABPKf5+v2GoM92jUKqAAAAAXRSTlMAQObYZgAAAVZJREFUOMu91LFtwzAQBVClyAjZJyOkiERABdNrBDWZwiOo8CeIVEQm4RJsUqUJYDt3lqHzN1m4SQgX0sPdkabI67qu5yHSPd7YyxZGgQ+VPVuqJTftqbLXpvX1+DvLDfs6fd+aK4Ag2QwgsDnoSGTz2eLFLOx0DNfm12olX1lBAKRCMpPUT40bFzOPMKj5aDYjekSxvVlBHrGIhc0cgoQmMs2bsNOHzUYkTSeb5R3oyaagJdnKvh+wPxcxizpNZbo8LWy26PLUAttOJyObkPXBbFr6cq4E2wMf1wiHaHtwkAi27c1jIVsue2E26JsuiL5lWrebTCPA31wjXMM8n5dRbUZi07+IXWVApnpiejrYNDaSDZJWkMgckoM4n+fkEao7UxDJ3uQHJDKf+x8gs30csabSGbdUuwuXWfnOfJPpeD/8R9+wcW9fu7dPNntsPXGzZ7d6+y+u2i95hsgMCwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://dontorrent.equipment/buscar/%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /encontrado <b>0</,
      'spaceEncode': ' ',
      'both': true},
  {   'name': 'DW',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAA3Qlb///+Ll51jbH62uL7N0M/k6+4F/wX/AQH/5x7Nze6M+I38+Zn/ZmbwyM37p+M4AAAAAXRSTlMAQObYZgAAA3tJREFUSMetlT+P00AQxVEa6sWbNBTkxrGNCCDF3kCJ1lnSxwmhRDgHNTqBoKZKwRdIAz0SBaGku4qCihKJho7mkBAg0fFmdn3EKA0SUySbnV/mvdk/9pl/iM5jCvG4vzd/RKeR9ffn03mBGNcgHuzLr4ybFAU+xntqIG9cEcJNQLTzmc/vEkctAaIF8jvETaIHLYEY+RaR74qcJbKTNmBcjRJ/ChxygTYxpeyPgxT9/R22QolG4bUUaIfrUf9Uwe4D7DZrCgz03wqTrDC2DBodGrUs3CZKczLGRUReIdUA8jhANXEMHTRqr0EDAKak25ieFzld+fjpE9Eb56DRFwsz5wxWTmJRX3mJ4JFzXTHRQQ+O81dPTr5SRpx/RdeInNNEYkE5d52Ifm02mxfkC8T4R6xtlTEQwwLRKr+6QXy+hPwHMgX2YmRLBuhA65pW2OAvXOIK59GRuUmxOkd99minFMNGzSWeEzpIjN9wC5cARqomN3GuhAsAnJ8gj3W6Gwlge3SINlZQPdl8pqEcHoNlqGINoEMqT1mAoMqhSlogj+iRPeqf6aSaC3Bbjm/EUCn2yICmWQUg6ZJ1iCrVqnf5GSlVDrXjsPlBDiAuY82/IrKqvLg+HikeydQ0FiC/65xSSmO6erc+PlBqO1MI9CFAko+UCsC39fp4CI2B8lM/xMNSNYAmADRT52LlY1lzF3MZQ1lFlwFUiYqSAIx3gTIW4IOm1yrbBYYBqAeqC4AXym7tDkAe6GJPuhfXzxKg8Smw5d28Jb8qZC5cXD8dsBsKjc3pAQOHGE9hntep5iXAsvuqtwSY/zRuTAn7fIKVRuiaYouvasynlh5WhBgx8O7YL1Fe8wOtTqZ87o8GEX6KaPkenAAL+dPdc3JoE+UK6+e/QVsGI10s7xmVM9AhZL2nNLUBmPlvIn+zApCn35uRV8KR9HczTE+WbUBOvb9aIXoNWnmgyprnQ2OiAWrxIldTTByE+Sg0oe9bUWALojFsgCQAj3wdUdjtQ9/brdRlhWCiOUF3rPdyKK1wD0GjKXHD2702k0UQhaAROr258GeVuSpYDCUGXnwln3zGzlPWfl9IcX3LSh0WQIH2G0f8jQ2o8UjpbeuNIyKykxE2fmL4SGV73noGBF98G+17c3bk2cO3ulhi2M6HXjnuvyXa916VGvfuk4eW+P//i996sTilZguE0AAAAABJRU5ErkJggg==',
      'searchUrl': 'https://forum.dirtywarez.com/search/search?keywords=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|You must be logged/,
      'matchRegex': /No results found/,
      'both': true},
   {   'name': 'Energy Torrent (BG)',
      'icon': 'data:image/png;base64,R0lGODlhEAAMAPABAOwPNf///yH+FUNyZWF0ZWQgd2l0aCBUaGUgR0lNUAAh+QQFCgABACwAAAAAEAAMAAACHIxvgMvKD9xbcdIgLd46eS1lR0SOSWUp4oR2UwEAOw==',
      'searchUrl': 'http://energy-torrent.com/browse.php?search=%tt%&cat=0&incldead=1&descrbox=1',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Нищо не е намерено/,
      'both': true},
  {   'name': 'ETpl',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADDUExURQAAAAAAFQAVAAAVFRUAABUAFRUVABUVFRUVKhUqFRUqKioqFSoqKioqPyo/Kio/Pz8qKj8qPz8/Pz8/VT9VPz9VVVU/P1VVP1VVVVVValVqVVVqampVVWpqVWpqamp/amp/f39qf39/an9/f39/lH+Uf3+UlJR/lJSUf5SUlJSUqpSqqqqUlKqUqqqqlKqqqqqqv7+qqr+qv7+/qr+/v7/Uv9S/v9S/1NTUv9TU1NTp1NTp6enp6enp/+n/6f/p/////+3hzTsAAAMJSURBVFjD1ZdtQxQhEMc5T50ToTUuE1NJpTI0w3Qz167k+3+qBthV94R9OF81L/f4/5gnBo6whFFgg42kPko1HJECULkotaB0dQ/AOFddzAchkgBaVM49VGY+o6sBvAsLtOq434k0gIoKCdViYQVdCcBm5g8C0MoPdCUA3f0dAVWp6CoAxq6C/rYsewg5ANUe8Kssr8urfU/gxUiADP6jWWslEoQcCShs0P9AvTWCsUIdFnRMDtiXAPByY04ZZULJYgxgpp705qvE1jiUUowAwEEV9JfGaK1PsaH2ZIqQBVAZ9N+MOdNaKUzheykShB6A91/rY6WOCiaCFYNzcFAnwO+PHsidnfEAn76gx+j3UDyoD5paUxW3r/UZ+TKAc/7YcB7w+aV+e6vbA1s2LqjW/sEpCsE6ANQ4WwO41CH9j3p4siwATv8uLhoPhFTP3AcYApB39/fnNQCw7lImtgdYA54GvL2sft7ZGACG68/wsnpjfZMQAhkPsPdubuwchby9ZW0ESLQ1xpMAfX1lv1ucPy09SRgkAfzTuTk3lyf4I4YJayRvUKQAc419iyYZTKak09IA+fHoBI+dOhBAemyaDOGdL9p+mBp9AJKsQjitc7GDKegH8PxxziS+F8Dp5ixbtiGAAshkQoZaGjDCXguYJqowEBBXQQdgvUsurIEcgMfuAWNFVq+cKxEwBdoBuHVOp6Nh1jln/Jr0PODR+TNcVcmUHp9+zimvp8mJxOO+0i9LOCHCd8fIJmylZ2ITQxkJy4AItksBtM5CXQcVVprl6rHwWSzrWxNp+5kLirTOJMQQdKigyI51nLiTOlq73EBlHYA/9jkA33oWrsWbofFBae312ERBz7Me8OgCETGRTSJi/kpfwRleWCJ/N/JmloGydc68aVQbCaEAQu523c5PJwqY1KbuBhAxmKgvOt8HbzpuA6/fffHKejEToUOPgN5XGueQl+PM7n8j8aQTUS+GvlRpazZvhDcFH/pKC2EERutFktPn3omx2eJFMQvXFh/7l+dV/53/L8A/4yPVgnco2bcAAAAASUVORK5CYII=',
      'searchUrl': 'https://elitetorrent.pl/torrents.php?search=%search_string_orig%+%year%&category=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Connect Error/,
      'matchRegex': /Nie ma torrentów/,
      'both': true},
  {   'name': 'EXTTor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAeUExURT9RtT9RteLl9OPm9Ojq9vDx+fHy+vHz+vT1+////1he4nYAAAABdFJOUwBA5thmAAAAWklEQVRIx2NgYBTEAwQY8MuDVBBUIEgAjCpAVSAWigYC0RRIzkQDE4eqgon4wmEEKZiibAwHWBUgg0GrYEZ6ORyM5NgcDAqQ46K8cFgWIKP1BSEFlNfdhJoHAFcHWeyBUYH6AAAAAElFTkSuQmCC',
      'searchUrl': 'https://ext.to/search/?c=movies&q=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/},
  {   'name': 'EXTTor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAeUExURT9RtT9RteLl9OPm9Ojq9vDx+fHy+vHz+vT1+////1he4nYAAAABdFJOUwBA5thmAAAAWklEQVRIx2NgYBTEAwQY8MuDVBBUIEgAjCpAVSAWigYC0RRIzkQDE4eqgon4wmEEKZiibAwHWBUgg0GrYEZ6ORyM5NgcDAqQ46K8cFgWIKP1BSEFlNfdhJoHAFcHWeyBUYH6AAAAAElFTkSuQmCC',
      'searchUrl': 'https://ext.to/search/?c=tv&q=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'TV': true},
  {   'name': 'EZTV (Fake)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAWlBMVEX///8Pf/BMf/C3zPmPw/g/mfO/3furw/jP5fwvkPLy9v7n7v3P3fuv1PqfzPmUsvZkkPIfiPHf7v1vsvaIqvVfqvV8ofRYiPEjf/Db5fygu/d/u/dPofRwmfPh5p4UAAAAg0lEQVQY022NSQ6DMBAEy2O8sNoGAmT7/zcjW4QQibqMVN2j5gJvlJqwKlMDTW0ZVNUPYJIHqhLdgEn1ZJFrlKTa7whY+tICxmQ8dvDJAC9yaLbtiTlWoImaP94iUURaLbIb0bSrhtD9BI8AMyfRrU3nzoKoQ3sI58AtC1/mXLlL+fgAB2MD+pRQ5EwAAAAASUVORK5CYII=',
      'searchUrl': 'https://eztvx.to/search/%search_string%',
      'matchRegex': /No torrents found!/,
      'TV': true},
  {   'name': 'GloTor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEW7iES7iER/fwC7iET///+8ikf+/fzr28fy6Nv7+PT17eLhy63SsIPRrn/MpnPLpG/Dllq9i0r59O738uravZjXuZLInmfBkVO/jk38+vfw5dfu4dDs3szo18Dn1b3m07rcwp7l0bbfyKjdxKPUtInNp3XGm2L17uXv49PjzbHFmmAWc7RYAAAAA3RSTlPmfAI6nT8aAAABCklEQVQ4y52T2W6DMBBFTbjYZgsGwpKwpUmTLv//gR0T1NYQB4n7YsnngIYZhu0c5lrDnB1z3JdxGHstEF/JNmHfS5HYheQTlA+bUL9B51hYhCTXuI1qSw0HTliUtiK9gXAWW78iFcSb6uF6SyFtiQ8ewbjP4X8vhI54qLsQQOcwF84TLzjGnGdCSfcdnbGGfrB4gycBmVIhGTXpUr0DkSnQja90ATiGSh9ITCGYHlHx2MMIuBlCAgj3X8S8hiv4/Q8rPbDeEASa335HLQflZAgNtWDM/ZIRXAoCsnLr/VViih/EhkBt5BmfWFeU6XyaVY5H8q+b93TcKpTBaSjKzb/99tViq8u7uv4/rJwU3R6VapwAAAAASUVORK5CYII=',
      'searchUrl': 'https://glodls.to/search_results.php?search=%search_string%+%year%&cat=1&incldead=1&inclexternal=0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'rateLimit': 8000,
      'matchRegex': /Nothing Found/},
  {   'name': 'GloTor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEW7iES7iER/fwC7iET///+8ikf+/fzr28fy6Nv7+PT17eLhy63SsIPRrn/MpnPLpG/Dllq9i0r59O738uravZjXuZLInmfBkVO/jk38+vfw5dfu4dDs3szo18Dn1b3m07rcwp7l0bbfyKjdxKPUtInNp3XGm2L17uXv49PjzbHFmmAWc7RYAAAAA3RSTlPmfAI6nT8aAAABCklEQVQ4y52T2W6DMBBFTbjYZgsGwpKwpUmTLv//gR0T1NYQB4n7YsnngIYZhu0c5lrDnB1z3JdxGHstEF/JNmHfS5HYheQTlA+bUL9B51hYhCTXuI1qSw0HTliUtiK9gXAWW78iFcSb6uF6SyFtiQ8ewbjP4X8vhI54qLsQQOcwF84TLzjGnGdCSfcdnbGGfrB4gycBmVIhGTXpUr0DkSnQja90ATiGSh9ITCGYHlHx2MMIuBlCAgj3X8S8hiv4/Q8rPbDeEASa335HLQflZAgNtWDM/ZIRXAoCsnLr/VViih/EhkBt5BmfWFeU6XyaVY5H8q+b93TcKpTBaSjKzb/99tViq8u7uv4/rJwU3R6VapwAAAAASUVORK5CYII=',
      'searchUrl': 'https://glodls.to/search_results.php?search=%search_string%&cat=41&incldead=1&inclexternal=0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'rateLimit': 8000,
      'matchRegex': /Nothing Found/,
      'TV': true},
  {   'name': 'HD4fun',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUjIyMyMjNCQkNRUVGfn59oaGjS0tIdHR1TmeddAAAAmUlEQVQoz9WO0Q3CMAxEQ7pAYy+Q2IF+xy4s0HYBpGwQMgDsL+FWgh16lizf00lndyoFE6QQxr8Hqipk6PCXEOjaF1Uj4+GBNfdXtdCBBlHhubUqrKpcHGKhkrdWUbGEZ3IICeW29AZ3LJHCDnx5rH0DHqK3IhjiZZrXdfnIO/rJEnt/rnlDiXYn5xOrso0QC0H8vZ725U6lLyCaGbl/gBoIAAAAAElFTkSuQmCC',
      'searchUrl': 'https://hd4fun.com/?s=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /no results found/,
      'both': true},
  {   'name': 'HDenc',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA7VBMVEUAAAAAAAIAAAILHiYKHiUAAgTqAAAACA8ABAgAAAIACA8WAAIAAAIjAAEACA8AAAJgAAAJAAEUKjITKTETKTEAAwYLEBUAAAA/FBngAAAAAAMAAAIKHiYKHiXhAADXAAA+AAFoAAEACA7oAAAKHiYqAAK9AABwAACdAAAKAAL6AAMVAAIAAALXAAAAAALnAACHAADyAAB+AAAmAAGTAAByAAAAAAIADBOeAADLAAAHGyH5AAIBDhW5AABYAACrAADxAABnAAD4AAHYAABeGiC0AAAaKDDxAABbAAD2AAATKS/AAAAIHCT7AAAQKDDB3IOLAAAAT3RSTlMA+c3rvS0U9vHu4N3Y082sgz4tKCUjHgoI++np5d3b29XTzc3JycnJxcG9ubm5tbW1sa+tqZuZi4uFg4N7e2lhW1lRSzczLScjIRcVEwsFQvxaaQAAAIdJREFUGNOtz0MWxUAARNF2bH7btm3ufznp7CE1vKcmDySx3+N6D/+O69q2845hw0jW/1YJwRjn1hzar7JAPVnXhcVWFj0AzqMaVFWIUJoGfWjxy7FQ6hgiQhkadKH15FJJ9XZaC0FjLkn+nsMgf1nVm42ipigT0+TAGACf22E5HY5npzCJlAgCbg1Rw5Wd3AAAAABJRU5ErkJggg==',
      'searchUrl': 'https://hdencode.com/?s=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No content available/},
  {   'name': 'HDenc',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA7VBMVEUAAAAAAAIAAAILHiYKHiUAAgTqAAAACA8ABAgAAAIACA8WAAIAAAIjAAEACA8AAAJgAAAJAAEUKjITKTETKTEAAwYLEBUAAAA/FBngAAAAAAMAAAIKHiYKHiXhAADXAAA+AAFoAAEACA7oAAAKHiYqAAK9AABwAACdAAAKAAL6AAMVAAIAAALXAAAAAALnAACHAADyAAB+AAAmAAGTAAByAAAAAAIADBOeAADLAAAHGyH5AAIBDhW5AABYAACrAADxAABnAAD4AAHYAABeGiC0AAAaKDDxAABbAAD2AAATKS/AAAAIHCT7AAAQKDDB3IOLAAAAT3RSTlMA+c3rvS0U9vHu4N3Y082sgz4tKCUjHgoI++np5d3b29XTzc3JycnJxcG9ubm5tbW1sa+tqZuZi4uFg4N7e2lhW1lRSzczLScjIRcVEwsFQvxaaQAAAIdJREFUGNOtz0MWxUAARNF2bH7btm3ufznp7CE1vKcmDySx3+N6D/+O69q2845hw0jW/1YJwRjn1hzar7JAPVnXhcVWFj0AzqMaVFWIUJoGfWjxy7FQ6hgiQhkadKH15FJJ9XZaC0FjLkn+nsMgf1nVm42ipigT0+TAGACf22E5HY5npzCJlAgCbg1Rw5Wd3AAAAABJRU5ErkJggg==',
      'searchUrl': 'https://hdencode.com/?s=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No content available/,
      'TV': true},
  {   'name': 'Hurtom',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAElBMVEUAAAD///9Hch8uXwRghT6Cn2jOc2jEAAAAAXRSTlMAQObYZgAAAMhJREFUSMftldENwiAQhnUD/9YOUBoHKOgAygSNcf9VjBzHlUQ4H0g0pt/b0a8HhOS/XRv2eMuBv6NI9X/pgQpKA2qhCqjSSvCOuQC9SyThbpgZ6FIxfS74tdBbLtZb0OJEHRwVVjoAfVgbERiCfuZbyNqESLJFQCb4V3HdhKKwgLgVBOMipiQwXxTkkOo1f/kt/lAYM+HIgrzcLEKKkBMCXRBsFmIxQCjEqDANQ0wX9CAdHswSCqZJmDeYOMoe6ljUBqs6mpvwBCj8syvic6jeAAAAAElFTkSuQmCC',
      'searchUrl': 'https://toloka.to/tracker.php?prev_sd=0&prev_a=0&prev_my=0&prev_n=0&prev_shc=0&prev_shf=1&prev_sha=1&prev_cg=0&prev_ct=0&prev_at=0&prev_nt=0&prev_de=0&prev_nd=0&prev_tcs=1&prev_shs=0&f[]=117&f[]=84&f[]=42&f[]=124&f[]=125&f[]=129&f[]=219&f[]=118&f[]=16&f[]=32&f[]=19&f[]=44&f[]=127&f[]=55&f[]=94&f[]=144&f[]=190&f[]=70&f[]=192&f[]=193&f[]=195&f[]=194&f[]=196&f[]=197&f[]=225&f[]=21&f[]=131&f[]=226&f[]=227&f[]=228&f[]=229&f[]=230&f[]=136&f[]=96&f[]=173&f[]=139&f[]=174&f[]=140&f[]=120&f[]=66&f[]=137&f[]=138&f[]=237&f[]=72&f[]=45&o=1&s=2&tm=-1&shf=1&sha=1&tcs=1&sns=-1&sds=-1&nm=%search_string_orig% %year%',
      'loggedOutRegex': /Cloudflare|Ray ID|>Вхід</,
      'matchRegex': />DL</,
      'positiveMatch': true,
      'spaceEncode': ' ',
      'both': true},
  {   'name': 'iDope',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQMAAABtzGvEAAAABlBMVEUAAADpQjWXqLtEAAAAAXRSTlMAQObYZgAAAHlJREFUGNOd0MEJQyEQBNAJOfxjSrAUS/OXZilbgkcP4mT+DoGE3P6iPFhXBhZwld6mqEGeQBtkNwOgWGYb+k2jLURH7SJQ1BCqg+PiacCZKONq1PVN+eG17+Dv5j/BsWDy0NU5TGGAqg/dnAbJNstME0kuKydQc2VvvJ2u5Jy7+qoAAAAASUVORK5CYII=',
      'searchUrl': 'https://idope.se/torrent-list/%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Oops!/},
  {   'name': 'iDope',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQMAAABtzGvEAAAABlBMVEUAAADpQjWXqLtEAAAAAXRSTlMAQObYZgAAAHlJREFUGNOd0MEJQyEQBNAJOfxjSrAUS/OXZilbgkcP4mT+DoGE3P6iPFhXBhZwld6mqEGeQBtkNwOgWGYb+k2jLURH7SJQ1BCqg+PiacCZKONq1PVN+eG17+Dv5j/BsWDy0NU5TGGAqg/dnAbJNstME0kuKydQc2VvvJ2u5Jy7+qoAAAAASUVORK5CYII=',
      'searchUrl': 'https://idope.se/torrent-list/%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Oops!/,
      'TV': true},
  {   'name': 'ilCorSaRoNeRo',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAD9/f0ICAiNjY3eyTnSAAAAAXRSTlMAQObYZgAAAOFJREFUKM9tksENgzAMRdMDI7API3AARYrUDNB7L+zRETjUEeopo2SJsEEv1D9OiIAagngx3/4oVkrdxhSdQow58N4U6BnaAgO+2kPkOrqAEkkyES0QJYhEDgC9Jo7AFQAW4DMYwAwQvVS4wie67zvDw5vFFpi8me3yFxZcGWzuU8ELFG+A6hog/7ODgV5gFVgBmrwlrJDA6W0LkV4A3kYvZFDYyQMABRYg7fJ99na1Y2Dnkqmac7W29hkYigNA9TaoRksldt0zIIFU6PmAkUAqdHz0T4H7eB6KOi7HQTqM2A8RQfXApJc3dAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://ilcorsaronero.link/search?q=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /trovati <strong>0</,
      'both': true},
  {   'name': 'InternetArchive',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAUVBMVEUAAAD///8FBQX8/PyysrKxsbGvr6/6+vq0tLSurq59fX1tbW0JCQm3t7d4eHhnZ2ckJCTq6urX19fGxsafn5+KiopxcXFwcHBcXFwpKSkeHh5WXThKAAABmUlEQVQ4y4VUiZaDMAgUMMbe557//6E7kNQxm74nVUdgMkDUDjoMgyrBj0AHt+WOHogvkt8SyCxSTBGpXpDX3/3jNh5qgf+Cx4o/H3cRE7ecvq5H9sZ+rt/PGzg5SxbDIYbbx/kaBDYiBh2/LAZamN3Ba3R7R99sjNfz7uKkGUw4MMDzGYmoF216oCxqypRsmEnwgEHNUGx3kAVo6wdQz4vkA/BT5OCBgxgQIBdqHR1HkT1K7LJNHptFEqI7k5G60cOIkEMQwBCb4J7EkmdZXmcB0YWDD4bM1V0PzVCqmWm1LmyDmHpiWjKpEicHM0BjE4YhoSgqS/fEqpjeK7JmdFBbVn07DImtmzqiLRmtLbBlvqHqUoVwcneuGw4gS+swaQjCbiiPEFMD4LYvfRRRJ5zYo2L5pM0brmPZHsD0WofknEvL2kz9BH8neR6iBXNMJgBdj7MXuSCyNznDDXQQABv0g6j9x7v+CsOyXwy/5svVNTOihrM36/4MeiPlWO9zCLaK9gpl5RL21ZvJWj60t023G92m9Okt+h9+/Qkuis/yIgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://archive.org/details/moviesandfilms?query=%search_string_orig%&and[]=mediatype:%22movies%22&and[]=subject:%22Movie%22',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results matched/},
  {   'name': 'Knaben',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAASlJREFUKM+F0DFOAzEQBdBZrYQbJFNSoPgKlBQIcxSOkSLCQSlccgRuAku1JVewlCKtURpHWB7+jINAoogL++2u/T2zdGKc6+y5Xck6MNcbgfmBBZZ9C5fcETtCMocOsp+KFZAkcUl2nxbAA7l9CsA9ue3Eaw3YvvPUMXNS7J65J+1euHS8hirgufrWUVzVyuZsCxB4TiZLzYBFzghMDslG4HGXjTyvH7H3YgQ0D3gqvdW4yUeYJCCOON3xlhQhclb4yOX4iase+oXhpsFsmf/CAB+81jcuasu+uVFbHttiUAztlkIW1BV5wYj/7QpgaiZt2R4SeYH7ShSagOvA7QyBLGOFSrHspEZ5nlH1INjgjlEw8KRohIJMJlspIBjXFrojukTmNeb/4xvYntCh3HJ6hAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://knaben.org/search/?cat=All&q=%search_string_orig%+%year%&fast=0',
      'loggedOutRegex': /Cloudflare|Ray ID|please wait/,
      'rateLimit': 525,
      'matchRegex': />Total hits: 0</},
  {   'name': 'Knaben',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAASlJREFUKM+F0DFOAzEQBdBZrYQbJFNSoPgKlBQIcxSOkSLCQSlccgRuAku1JVewlCKtURpHWB7+jINAoogL++2u/T2zdGKc6+y5Xck6MNcbgfmBBZZ9C5fcETtCMocOsp+KFZAkcUl2nxbAA7l9CsA9ue3Eaw3YvvPUMXNS7J65J+1euHS8hirgufrWUVzVyuZsCxB4TiZLzYBFzghMDslG4HGXjTyvH7H3YgQ0D3gqvdW4yUeYJCCOON3xlhQhclb4yOX4iase+oXhpsFsmf/CAB+81jcuasu+uVFbHttiUAztlkIW1BV5wYj/7QpgaiZt2R4SeYH7ShSagOvA7QyBLGOFSrHspEZ5nlH1INjgjlEw8KRohIJMJlspIBjXFrojukTmNeb/4xvYntCh3HJ6hAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://knaben.org/search/?cat=TV&q=%search_string_orig%&fast=0',
      'loggedOutRegex': /Cloudflare|Ray ID|please wait/,
      'rateLimit': 525,
      'matchRegex': />Total hits: 0</,
      'TV': true},
  {   'name': 'KZ',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABCFBMVEUAAAARFSY7R4A8SIFAS4JKVIZPWIhdZI5pd6FwfKNwfaNxfqR1gKV5hKZ7haeDjKmJAACKmLiQnLqSnrqVCwiVGBWVobqXHBiYoruZDgmbpbydEAyeEw6fEw6kGRGoGhSoHBSpQDeqHRSsSUCssr+xKh+yVEjANCPCPC3Cyc7Dys7ESTbEys7FQzDFXErHSDfIz9LLgW/Lh3TOj3vSlYDU1c7V1s7V19jYXUPYcFzY2dHY2djZpY7bf2jbqJHcZk7h3c7khmfk4dXomnrqpoHq487q5NPt7d7w587w7N/x6M7x7dry2Lr269D37ND47dD53rr57dH64b767tH77tH87cz9787978+9KzODAAAAAXRSTlMAQObYZgAAAMlJREFUGBlFwdciA1EABNCZ0S4JFldfyeqi96jREgRBiMn//4n15BxQIiiJoERA+82p/qHL1+pc3+jLhQA1252Oc92P96dnAZz5jjn7ZmmjFQhA7VoWaz5fmF5uCQB7u86ir9aPbQ8QCBN2KZ7NLjo3HgBV7VJMDv2nIkCPdhbLk9fO3QoI93Ya73aSrTd7MwAcsdPoz9Vk98fDBCDX07Tuh/lkzwLAomPOXwdryVEgoIb/nQjQWKPQU9huVIoaPF0RQIlgUCAoEb/q0ya7wj1izQAAAABJRU5ErkJggg==',
      'searchUrl': 'http://kinozal.tv/browse.php?s=%search_string%+%year%&g=0&c=1002&v=0&d=0&w=0&t=0&f=0',
      'matchRegex': 'Нет активных раздач, приносим извинения. Пожалуйста, уточните параметры поиска'},
  {   'name': 'KZ',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABCFBMVEUAAAARFSY7R4A8SIFAS4JKVIZPWIhdZI5pd6FwfKNwfaNxfqR1gKV5hKZ7haeDjKmJAACKmLiQnLqSnrqVCwiVGBWVobqXHBiYoruZDgmbpbydEAyeEw6fEw6kGRGoGhSoHBSpQDeqHRSsSUCssr+xKh+yVEjANCPCPC3Cyc7Dys7ESTbEys7FQzDFXErHSDfIz9LLgW/Lh3TOj3vSlYDU1c7V1s7V19jYXUPYcFzY2dHY2djZpY7bf2jbqJHcZk7h3c7khmfk4dXomnrqpoHq487q5NPt7d7w587w7N/x6M7x7dry2Lr269D37ND47dD53rr57dH64b767tH77tH87cz9787978+9KzODAAAAAXRSTlMAQObYZgAAAMlJREFUGBlFwdciA1EABNCZ0S4JFldfyeqi96jREgRBiMn//4n15BxQIiiJoERA+82p/qHL1+pc3+jLhQA1252Oc92P96dnAZz5jjn7ZmmjFQhA7VoWaz5fmF5uCQB7u86ir9aPbQ8QCBN2KZ7NLjo3HgBV7VJMDv2nIkCPdhbLk9fO3QoI93Ya73aSrTd7MwAcsdPoz9Vk98fDBCDX07Tuh/lkzwLAomPOXwdryVEgoIb/nQjQWKPQU9huVIoaPF0RQIlgUCAoEb/q0ya7wj1izQAAAABJRU5ErkJggg==',
      'searchUrl': 'http://kinozal.tv/browse.php?s=%search_string%+%year%&g=0&c=1001&v=0&d=0&w=0&t=0&f=0',
      'matchRegex': 'Нет активных раздач, приносим извинения. Пожалуйста, уточните параметры поиска',
      'TV': true},
  {   'name': 'LimeTor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAAAi1xf2/wZi4huX4xi7/w/d791b4GKl+JnM/4+i+Fb1/2GZuJskrC1iqGL5/ziuoDUXAAAAAXRSTlMAQObYZgAAAYlJREFUKM9Vj79PwkAUx29iQpKXMzYxwnChs2muhMSRloWxlAUXXComOjQMZSCOcC7OXBiIERLT/4B0EBYnB4kJkya66KILK0N9x8/4nfo+fd/v9x1ZyRPP7RrZKtFptj3R2pFO27uQnne7Iefteleg6q21oSlEV8obITpfqwURCokS4cP10vTdCaXsjaQM+d0HzslDM4xkFMne0MofIDhrnJxGoygaPcb3Who9n41cHCPoxfMy9cck8UpzLF70F/05cw14IUkNTIcdD6sOYxbQGUkBNcO5Pig5rGoZ2pECRT0cWKYdOmjJkD2gBaaXOEejvgWsnG/8AzrG8S3ADNfi1Cw6WQVUi11xOS9WXMugGXUHxWXbXhqxNgFgMqYX9II6DGYkMfURZB1WxC4AfP/E33eYy1hFbaTHhFxRrMHfrlPBzBrBEMO08aqyaRnGjKAmDapKLQ4ajBVIab7BUQC+cqgVzQelIP1ElkpOgwBAC+CNrHU51YIAZzRsyO8U3n92M3Z7nrf6+gPXPYo0rGmcOwAAAABJRU5ErkJggg==',
      'loggedOutRegex': /Ray ID|security check to access|Please turn JavaScript/,
      'searchUrl': 'https://www.limetorrents.lol/search/movies/%search_string%+%year%/seeds/1/',
      'matchRegex': /csprite_dl14/,
      'positiveMatch': true},
  {   'name': 'LimeTor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAAAi1xf2/wZi4huX4xi7/w/d791b4GKl+JnM/4+i+Fb1/2GZuJskrC1iqGL5/ziuoDUXAAAAAXRSTlMAQObYZgAAAYlJREFUKM9Vj79PwkAUx29iQpKXMzYxwnChs2muhMSRloWxlAUXXComOjQMZSCOcC7OXBiIERLT/4B0EBYnB4kJkya66KILK0N9x8/4nfo+fd/v9x1ZyRPP7RrZKtFptj3R2pFO27uQnne7Iefteleg6q21oSlEV8obITpfqwURCokS4cP10vTdCaXsjaQM+d0HzslDM4xkFMne0MofIDhrnJxGoygaPcb3Who9n41cHCPoxfMy9cck8UpzLF70F/05cw14IUkNTIcdD6sOYxbQGUkBNcO5Pig5rGoZ2pECRT0cWKYdOmjJkD2gBaaXOEejvgWsnG/8AzrG8S3ADNfi1Cw6WQVUi11xOS9WXMugGXUHxWXbXhqxNgFgMqYX9II6DGYkMfURZB1WxC4AfP/E33eYy1hFbaTHhFxRrMHfrlPBzBrBEMO08aqyaRnGjKAmDapKLQ4ajBVIab7BUQC+cqgVzQelIP1ElkpOgwBAC+CNrHU51YIAZzRsyO8U3n92M3Z7nrf6+gPXPYo0rGmcOwAAAABJRU5ErkJggg==',
      'loggedOutRegex': /Ray ID|security check to access|Please turn JavaScript/,
      'searchUrl': 'https://www.limetorrents.lol/search/tv/%search_string%/seeds/1/',
      'matchRegex': /csprite_dl14/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'MIRCrew (IT)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACVBMVEUAAAAW3scCyrPrShZdAAAAAXRSTlMAQObYZgAAAiRJREFUOMtNkzGu2kAURa9HAcW/SgMKVCkg0vcqTFbggjfCvzJfeApWMUtw8R1hKhcIwawy9zE24UoUPh7OexcbDAlHvMYI419A6xiLZya834kUTyCOOTqHIalI2WmqAaytde4aQtgOQA3d+XwObbxORA1Bkz9n0HEnaKCZiTqC5jIqKDkruEeF1HQ8JVSog4o+C6HXLWRwwIRwezglLgJE0MqjSrj8IgjjkFK6008sdYyhgg7jLitMQ/CcqtlhcVrgTUHKy7ouML1lCvq4hnz65LTwyQis3RTmkOVGwVo0mx2+lj3nnnSvWurNAatMwY0g52cjWC2bCCwL202Nb/MemYKdrr8R/31xwpKgLaTCeu9yk92QKdiLRbqXyryfCALoE28+LXe9YjqACg3bTDu8Kfij1X64A29HUIlsAX7SO1hGp4gA1vG2Nw8woxWtIDkTcLHtROoc8xom5BEkOmZW+uSeQ4HweIE5Vz32EfiUc7X0R6NgzfPtFlNXgSf0J9TbFpOyQNdg2RBY9UxcoeezXh9DziXUs/xSwKEfXCRhmeyCt/HJ5Um5xXtQgAiMdY+6AFoFBeSM6f0BZhG4mnWhWcen33VIgsf40m1ZxpsIkghmXT4AiFhx+H0k6IHRym9W6b3BKKlZ93YNBKPEp21bdjkGiZbh614jZhbLdN3u+Se0rjLu6ioMaXX3Uv5iTOoc29UVnmnLHVqL/zFaxuM1Fwz5B716D5RuUWhfAAAAAElFTkSuQmCC',
      'searchUrl': 'https://mircrew-releases.org/search.php?keywords=%search_string%&terms=all&author=&fid[]=25&fid[]=33&sc=1&sf=titleonly&sr=topics&sk=t&sd=d&st=0&ch=300&t=0&submit=Cerca',
      'loggedOutRegex': /Cloudflare|Ray ID|Non ti è permesso/,
      'matchRegex': /Search found 0 matches|La ricerca ha trovato 0 risultati/,
      'both': true},
  {   'name': 'Mkvking',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEUnZOn4+v6ivPZslO2tyxFwAAAAeUlEQVQY02MIhQIsDDgojAkX7U2OuAZmeAaFTGU4/OGPPQgzrIIChlWzQNSyVQwMF0BaWID4AjOMwVgAY4TDGKEFMEY4jBFagM4Ig0klQBlhMO0JKFYgLF0VBXXGfyhg2LRmtVbf4hWvEI7fvOaF1bnNa17D1eAJBABb3lrP+lHrAQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://mkvking.icu/?s=%search_string%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nothing Found/},
  {   'name': 'Mkvking',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEUnZOn4+v6ivPZslO2tyxFwAAAAeUlEQVQY02MIhQIsDDgojAkX7U2OuAZmeAaFTGU4/OGPPQgzrIIChlWzQNSyVQwMF0BaWID4AjOMwVgAY4TDGKEFMEY4jBFagM4Ig0klQBlhMO0JKFYgLF0VBXXGfyhg2LRmtVbf4hWvEI7fvOaF1bnNa17D1eAJBABb3lrP+lHrAQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://mkvking.icu/?s=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nothing Found/,
      'TV': true},
  {   'name': 'MovieParadise',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQMAAABtzGvEAAAABlBMVEX///9qod7G9e/zAAAAtklEQVQY00WQ0QnDMAxErzU0n/7uV1boBNEqHaEDBCejeRSPoE8HTJWTY0gIPBndwekAhAL/tj/8YZaJaKbEbNZ8lYMvrf+PBsiOULnOmJTigqnAx0hvUMw7ZbXjXSEAPq3jt2IhNCFR4XD9gpXuC3GgChowa4eUC7vju0EoKckRtIGGqLXjcKRwKBIHK4QwPVZCMhojMVQlogeM+YWgDP/sUHAch40zr6PvCoSFjHrusmCu6Gac489ij03y9hMAAAAASUVORK5CYII=',
      'searchUrl': 'https://movieparadise.org/?s=%tt%',
      'matchRegex': /No results to show with/,
      'both': true},
  {   'name': 'MVG',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEX///8AAGbxExcTAAAAMUlEQVQI12N4nszwP5nhNhCVM9y2Y7gtw3CYgwEImA8wsD9g4Etg4GFg4AExgFygIABzUw1AjNdQdQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://forums.mvgroup.org/maintracker.php?filter=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID|forgotten my password/,
      'matchRegex': /btsmall.gif/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'MVG-F',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEX///8AAGbxExcTAAAAMUlEQVQI12N4nszwP5nhNhCVM9y2Y7gtw3CYgwEImA8wsD9g4Etg4GFg4AExgFygIABzUw1AjNdQdQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://forums.mvgroup.org/forumtracker.php?filter=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID|forgotten my password/,
      'matchRegex': /btsmall.gif/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'MyWarez',
	  'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAWlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACLSV5RAAAAHXRSTlMA9w1wlQT72Ms0kMMi4du5sqI/KiTu7b5sZmNVUwmENWYAAACNSURBVBjTZU9HDoAwDHNIFy17r/z/mwQqTvgQKZEd23hQGk/kTYmMIjb1LLLUTSzevV0tBucG2NQ+FyMbYEOwAItRPVGFCvuhYyIqlZBgu0LRWSSleGGMdAEnjarxIBe5l8AcpOfo6H/IkhO4suT/VG0ndTz2z1Yp/AXbxLzR0xd9bXMZ09SLyJzL/erfaRgISxm8Fy4AAAAASUVORK5CYII=',
      'searchUrl': 'https://mywarez.org/search.php?keywords=%tt%&sr=topics',
      'loggedOutRegex': /Cloudflare|Ray ID|you are not permitted|ucp.php?mode=register/,
      'matchRegex': /Search found 0/,
      'both': true},
  {   'name': 'NNM',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://nnmclub.to/forum/tracker.php?f[]=731&f[]=733&f[]=730&f[]=732&f[]=230&f[]=659&f[]=231&f[]=660&f[]=661&f[]=890&f[]=270&f[]=218&f[]=219&f[]=954&f[]=888&f[]=217&f[]=1293&f[]=1298&f[]=320&f[]=677&f[]=1177&f[]=319&f[]=678&f[]=885&f[]=908&f[]=1310&f[]=909&f[]=910&f[]=911&f[]=912&f[]=221&f[]=222&f[]=882&f[]=889&f[]=225&f[]=226&f[]=227&f[]=1296&f[]=891&f[]=1299&f[]=682&f[]=694&f[]=884&f[]=1211&f[]=693&f[]=913&f[]=228&f[]=1150&f[]=1313&f[]=1312&f[]=321&f[]=255&f[]=906&f[]=623&f[]=622&f[]=621&f[]=632&f[]=627&f[]=626&f[]=625&f[]=644&f[]=635&f[]=634&f[]=638&f[]=646&f[]=1155&f[]=1156&f[]=1099&f[]=1098&f[]=892&f[]=668&f[]=669&nm=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': 'Не найдено'},
  {   'name': 'NNM',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://nnmclub.to/forum/tracker.php?f[]=658&f[]=232&f[]=1221&f[]=1220&f[]=768&f[]=1300&f[]=922&f[]=770&f[]=1320&f[]=780&f[]=781&f[]=1322&f[]=769&f[]=706&f[]=577&f[]=894&f[]=578&f[]=580&f[]=579&f[]=953&f[]=581&f[]=806&f[]=714&f[]=761&f[]=809&f[]=924&f[]=812&f[]=591&f[]=588&f[]=589&f[]=598&f[]=652&f[]=593&f[]=587&f[]=584&f[]=586&f[]=585&f[]=596&f[]=614&f[]=623&f[]=622&f[]=621&f[]=632&f[]=627&f[]=626&f[]=625&f[]=644&f[]=635&f[]=634&f[]=638&f[]=646&nm=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': 'Не найдено',
      'TV': true},
  {   'name': 'Nyaa',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEURbOIIN2/+//8me+Uzqvs1ieohoP075v7s9v3S6fwAbvJA+f4cdOQMjf4Aevk0yv6q0vne7fxtwvxarPe/3vtw3/yEuvWLzPsPfPST5PxR1PoPb+q76f0AS96b8jbXAAABoUlEQVQ4y4WRbZOkIAyEWUIQPFx5EVBn7v//zUuiN7iftmuKmqp+7E5Aff0i9QWgngoAsNbj+q8UAfjDBzRmNbWqEMBMp+GEp4/WXMA6TX9YnAAPm8TEUacBKIAg3YiLAKR6TqQbCEDa94Vl/0es6wDmef5m3YRMMYgBCIGggCKKAKQLGIRsbGzOI+IJ7OKDyfkeox6TAKx9l+8loVAJUWfVxzTdAK3xuQ401lJLfmtdBXgFeO37uK2SjTW5J++OC1AQ5hk/b4WtGFt6j+l4nysDQAnDDxDNUhzt0f17Pb0AVD8EbbGbLkv2ca3OScXw+VkKBWgXN9ejFgDU8JFKliVrlvd8EPCpV5KF38vGvnN8HgMIVxLSs3r9UX4m8A8QEfoA3AMACWC12/Q/Z+BlAwIqjJv2LhHxTGCTUljFFb9ttOfYosSG5ASgE1vUbfOEcEAXABOxEV70rFhidMk5n/gatmYEaNdMbWtF68T1ThORDSIDoJIWUa8jICXBfSwYrCXgb9GXYpOxopYz9aiCNQzEG2heLKZS9yn6ABYJ+EX/AOlXGhjq/xOWAAAAAElFTkSuQmCC',
      'searchUrl': 'https://nyaa.si/?q=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID|the security check/,
      'matchRegex': /No results found/,
      'both': true},
  {   'name': 'Nyaa (Mirror)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEURbOIIN2/+//8me+Uzqvs1ieohoP075v7s9v3S6fwAbvJA+f4cdOQMjf4Aevk0yv6q0vne7fxtwvxarPe/3vtw3/yEuvWLzPsPfPST5PxR1PoPb+q76f0AS96b8jbXAAABoUlEQVQ4y4WRbZOkIAyEWUIQPFx5EVBn7v//zUuiN7iftmuKmqp+7E5Aff0i9QWgngoAsNbj+q8UAfjDBzRmNbWqEMBMp+GEp4/WXMA6TX9YnAAPm8TEUacBKIAg3YiLAKR6TqQbCEDa94Vl/0es6wDmef5m3YRMMYgBCIGggCKKAKQLGIRsbGzOI+IJ7OKDyfkeox6TAKx9l+8loVAJUWfVxzTdAK3xuQ401lJLfmtdBXgFeO37uK2SjTW5J++OC1AQ5hk/b4WtGFt6j+l4nysDQAnDDxDNUhzt0f17Pb0AVD8EbbGbLkv2ca3OScXw+VkKBWgXN9ejFgDU8JFKliVrlvd8EPCpV5KF38vGvnN8HgMIVxLSs3r9UX4m8A8QEfoA3AMACWC12/Q/Z+BlAwIqjJv2LhHxTGCTUljFFb9ttOfYosSG5ASgE1vUbfOEcEAXABOxEV70rFhidMk5n/gatmYEaNdMbWtF68T1ThORDSIDoJIWUa8jICXBfSwYrCXgb9GXYpOxopYz9aiCNQzEG2heLKZS9yn6ABYJ+EX/AOlXGhjq/xOWAAAAAElFTkSuQmCC',
      'searchUrl': 'https://nyaa.iss.one/?q=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID|the security check/,
      'matchRegex': /No results found/,
      'both': true},
  {   'name': 'Pahe',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAAAAISMkISMkISMkISMkISMkISMkISMkISMkISMkISMkISMkISMkISMkISMkISMkISMl7Agq5AAAAEHRSTlMAQMCAoPAgEFDg0DCwYJBwNaJkkwAAANRJREFUOMvt0MuOwyAMhWHH5h6g//s/7eC0aRVplN0sRupZHAn4MBLyL7J58g3gSLWPsSunWRkzMs6NnXkF5j3o7zfRK9i8E3oPjHALUiStfmwvsFm5gNww2StQdwcBfGKJaF6gWCP4kD6UuADEDkn8hgr1ybM+ZqywZ1aJrou0ogga+vHgHvFsAlMcGEP2BZo8U+kp1QOUAyjdfALnB8YsMjGB9AIrH5Cjru4H2BxY4LG230AC09QP1Q8CYRC1IeH8whQitLUaDkqzJVfklyT55g/yA0LYCswBu8k/AAAAAElFTkSuQmCC',
      'searchUrl': 'https://pahe.ink/?s=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|the security check/,
      'matchRegex': /Please try again|nothing matched|Nothing Found/,
      'both': true},
  {   'name': 'Partis',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGAgMAAAAMQAoXAAAACVBMVEUAAAB1dnbkmQdwRkMRAAAAAXRSTlMAQObYZgAAANZJREFUOMvN0sENhCAQBdAPWS/cbYIqLIFNoB9K4Wimyl1AYXDUeNv9xxfnO07Er/KSNJ3QIkg5SV5SkF3hWDaH4I7PfDNSlnFSFfJD0xUtosrLKnekd57TkW3l6zcmRku9xMoIqrzPdvLbVW1s5DYyidGr0sqoRlM/3zWB4iWpTjbdkGu0b3FLhvZDn5AXNHXqi7X6G0JYBM2FNECNJle6OalCFroTyhYEy2iuJyWi4bc3RJzgAJtl7ZTnchInI4lKoiSIwQRRjzG2CzuyyDMyj0jjj/IBZ05ftNQK2woAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.partis.si/torrent/search?q=%search_string_orig%+%year%&cat=7,20,55,32,40,41,42,43,44,45,4,2,30,24',
      'goToUrl': 'https://www.partis.si/portal#torrent/search?q=%search_string_orig%+%year%&cat=7,20,55,32,40,41,42,43,44,45,4,2,30,24',
      'loggedOutRegex': /Cloudflare|Ray ID|Pozabljeno geslo/,
      'matchRegex': /cols":\["id/},
  {   'name': 'Partis',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGAgMAAAAMQAoXAAAACVBMVEUAAAB1dnbkmQdwRkMRAAAAAXRSTlMAQObYZgAAANZJREFUOMvN0sENhCAQBdAPWS/cbYIqLIFNoB9K4Wimyl1AYXDUeNv9xxfnO07Er/KSNJ3QIkg5SV5SkF3hWDaH4I7PfDNSlnFSFfJD0xUtosrLKnekd57TkW3l6zcmRku9xMoIqrzPdvLbVW1s5DYyidGr0sqoRlM/3zWB4iWpTjbdkGu0b3FLhvZDn5AXNHXqi7X6G0JYBM2FNECNJle6OalCFroTyhYEy2iuJyWi4bc3RJzgAJtl7ZTnchInI4lKoiSIwQRRjzG2CzuyyDMyj0jjj/IBZ05ftNQK2woAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.partis.si/torrent/search?q=%search_string_orig%&cat=17,31,38,51,52,53,30,2',
      'goToUrl': 'https://www.partis.si/portal#torrent/search?q=%search_string_orig%&cat=17,31,38,51,52,53,30,2',
      'loggedOutRegex': /Cloudflare|Ray ID|Pozabljeno geslo/,
      'matchRegex': /cols":\["id/,
      'TV': true},
  {   'name': 'PB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEXN/wAAAAA5RwBuiQCcwwANEQBUaQApNACx3QCn0AC97ACRtQCGpwBiegBFVwAcIwB6mADOJ1nPAAAAmUlEQVQ4y9WQSxKEIAxEiXT4qKNz/9NOQg2oKWStvekAj0rS7jGaSMUbpIYXBYphtoBqdc7XmlMHoHQAFC5ABPTJFwBYmIgvwCQWibYCSP1Rs4BaBRaxPAIglkbAOmhRZ9jvAeCrG1kAdc0aQy+o3AD2PSC0qG2L9uk/5BzlaKMuuZxzgN3iUQCAKJZuAZVejQHOQ2APyb1GPxX4A4UYVbGOAAAAAElFTkSuQmCC',
      'searchUrl': 'https://pb.wtf/tracker/?ss=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Не найдено|No matches found/,
      'both': true},
  {   'name': 'PornoLab',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEXv7+/j4+M8YLr6KALSJa5RAAAALElEQVQI12MIBQIGBwYGRgavVQ0fgcQCIMGAREDEoLIMDCgE/38IATYAbBQARLca03YyTIcAAAAASUVORK5CYII=',
      'searchUrl': 'https://pornolab.net/forum/tracker.php?f[]=1768&f[]=60&f[]=1111&f[]=508&f[]=555&f[]=1712&f[]=1713&f[]=1775&o=1&s=2&tm=-1&pn=&nm=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|Введите ваше имя и пароль/,
      'matchRegex': /Не найдено|не найдено/},
  {   'name': 'PornoLab-ID',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEXv7+/j4+M8YLr6KALSJa5RAAAALElEQVQI12MIBQIGBwYGRgavVQ0fgcQCIMGAREDEoLIMDCgE/38IATYAbBQARLca03YyTIcAAAAASUVORK5CYII=',
      'searchUrl': 'https://pornolab.net/forum/search.php?po=1&dm=1&nm=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Введите ваше имя и пароль/,
      'matchRegex': /сообщений не найдено/},
  {   'name': 'PSArips',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEUAAAD+/v4QEBA5ODhGRkYoKChbW1tRUVGDg4NsbGxjY2Ojo6P19fXLysqUlJSsrKy1tbXq6urCwMB3d3fc3Nzw8PDg4ODV1dWIWFi4jIzi0dG5qKiLOzuPGBhT4c7lAAAAAXRSTlMAQObYZgAAAbBJREFUOMt1k9mOnTAQROndu7HNMpPl/38zeOYmChK3JJ5O0dCu8nITtOKClh1geRJsnZBQhP0GT/wkCrUd3aGGJ0NSynM27A65Pjga6fljn45UxAo8TPj4+PXRpyOjPHwEVvr92X5OsDNSf3Dkz/a9IEQk2x/2mPRlEMnLe8GKPNa3FKYBQ3uHq78eU67whFPvbJA8indw6Y6PfDrypJDZmEYq3sNt+OYphhGtBUEKYxOl8z98uGhSuh6uBFPhUKTq+o+XWoeEaNm5yGqoHDiEXr7gpXZW55Rj9NWrEpmQMdpYZ7qxRCJeAfbsBxOpMImxxnxyvAJQ5wRFfNp8EJGLK7I3Yj6h65ItBEV3RFFCRvHIRCyEyDYA8sJ4SdZZIyQ0tGnToKU3x7DAglOWoMt8B0l4/gEar1BsHhOhsGuwkeDl8IEQKXYfAx9ZZ14+71/xOWMjP0p0FUcC6HweNCvxugFH2urQrVUNDi1dDR0x+RVuhSvtGrQWxBkR1JBOO+9hQVdCktmErxFw3EdAFbxEGb7v6QC48c3ja+e/5YFbl4p8c3q8uNN/5GtXi/ud/wGyiBNPa2asYgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://psa.wf/?s=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /try another search/},
  {   'name': 'PSArips',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEUAAAD+/v4QEBA5ODhGRkYoKChbW1tRUVGDg4NsbGxjY2Ojo6P19fXLysqUlJSsrKy1tbXq6urCwMB3d3fc3Nzw8PDg4ODV1dWIWFi4jIzi0dG5qKiLOzuPGBhT4c7lAAAAAXRSTlMAQObYZgAAAbBJREFUOMt1k9mOnTAQROndu7HNMpPl/38zeOYmChK3JJ5O0dCu8nITtOKClh1geRJsnZBQhP0GT/wkCrUd3aGGJ0NSynM27A65Pjga6fljn45UxAo8TPj4+PXRpyOjPHwEVvr92X5OsDNSf3Dkz/a9IEQk2x/2mPRlEMnLe8GKPNa3FKYBQ3uHq78eU67whFPvbJA8indw6Y6PfDrypJDZmEYq3sNt+OYphhGtBUEKYxOl8z98uGhSuh6uBFPhUKTq+o+XWoeEaNm5yGqoHDiEXr7gpXZW55Rj9NWrEpmQMdpYZ7qxRCJeAfbsBxOpMImxxnxyvAJQ5wRFfNp8EJGLK7I3Yj6h65ItBEV3RFFCRvHIRCyEyDYA8sJ4SdZZIyQ0tGnToKU3x7DAglOWoMt8B0l4/gEar1BsHhOhsGuwkeDl8IEQKXYfAx9ZZ14+71/xOWMjP0p0FUcC6HweNCvxugFH2urQrVUNDi1dDR0x+RVuhSvtGrQWxBkR1JBOO+9hQVdCktmErxFw3EdAFbxEGb7v6QC48c3ja+e/5YFbl4p8c3q8uNN/5GtXi/ud/wGyiBNPa2asYgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://psa.wf/?s=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /try another search/,
      'TV': true},
  {   'name': 'PuZo',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUdNlJwg5fvPCO1OjA9U2lVZHh9PUBGNkfoouAqAAAA2UlEQVRIx+3SMQuDMBAF4Cu0uhpI9qKga0mHrg0GZwvtLhbsKv7/oQ4SyCWX61x8q5/h7iWwx+UayTSDS17GUn0QCHPjQDlzoIEtmhIsGDYwUuC8gYUbIqNA7YbgwMKBXDMAMs0AyCfvLrXbgsixezPA2nYFlxSwYwo81MtadxfuLxcjhFDrEbMHDsKPbCtIAtHVPjAYyAYNhoFCS4gADBxA3QRA+uAUgILZUgADJAKGOICsoccAfb9DCqhn5ImEk0VrKEhw+BH0JDB4eKIGICM44D+BvYY/zRdXF11b49kGEQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.puzo.org/index.php?app=core&module=search&do=search&fromMainBar=1&search_term=%tt%&search_app=forums',
      'loggedOutRegex': /Cloudflare|Ray ID|An Error Occurred|Please wait at least/,
      'rateLimit': 30000,
      'matchRegex': /No results found/,
      'both': true},
  {   'name': 'RareFilm',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA7VBMVEUAAAD//////////////////+3///L///L/3r3/4L3/3br/3rr/2bP/2rL/wIH/v3z/v37/vnr/vHb/u3X/uXL/uHD/t2v/smT/o0b/oUH/nDj/lyz/lin/lCX/lSf/kiL/jRf/jRf/jBb/ixT/ihH/iQ//iA7/hwz/hgn/hAf/hQf/gQH/ggD/ggD/hAD/igD/jQX/jgD/jwH/lAH/nhn/nxD/owL/pi//pw7/sQz/sVL/uV7/uj7/wTD/xFX/xkL/x3L/0oz/24T/3GL/3Xz/3an/56v/7Yv/7cL/87r/+tn/++f//vr//vv///6LyAiWAAAALXRSTlMAAgQFBg4TFD5CQ0ZKTH2AgIKGh4uNkZm3vMTS09bW2+Tm6Onr7e/y8/X2+/xz1yocAAAAo0lEQVQYGQXBCU7DMAAAMOcoXTpxTuL/70MTYqjHupIEOyCfpnLu8329VzLj8/tpeDmGvl7XQzJePrM2Pg7Dq73F/HyBnOByjrm8QcxPED4ecSqQQwRTyQXE1GNDKPEMYggZTBlIqUcgLiCHEMEaNzBICfoSlxWykGHe4v0HaqsN/XtPrYaJv9N+6/r1tyZ1f6Shtrn25et2CMjjVKY+b9ve+AepX0NhemW8QgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://rarefilm.net/?s=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nothing Found/,
      'both': true},
  {   'name': 'RareFilmm',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAPFBMVEUfHx//1wCLeA8rKB0lJB1ORhh/bhGzmArxywE8NxpJQRlmWRWCcBGdhg3FpwfOrwbWtQXbuQToxAP40QAA2V62AAAASElEQVQ4y+3KtxHAMAwEwX8KRt7236tmlBPIRV56i/8mtbG4u8h6jTVQSE4HGYKTIfjaSwhuBSLwzIjBhgRoBoYOcqBmJmiyF4tRAW83CTNaAAAAAElFTkSuQmCC',
      'searchUrl': 'https://rarefilmm.com/?s=%search_string%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No search results/},
  {   'name': 'Rarelust',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAwUExURQAAAAQIEA0ZMBAQDxIhQB86cChLjzAvLTZkvzpsz0A/PEN970iF/4+Nh7+8tP/78BtqQJIAAADPSURBVCjPY2BAB8xVq5YbqriAgJMASID93ru3RRkdINCmABLgev//35KeMyBwMgSkBkng9AyQGiQBoJogAVSB09MUwIaW9ACVd3TuOXPmhAPYWpMeoIEurnPAAiDA0gNiMWXuQRVgVJ2DpAUkBRGHGooQgFpLlADUUIQA1FqooRCHgZwOtRbidJDnoA6D+w1FAKwAqgUhADUUoQVq7ekZoOBACrGTIaDgACmBOwzkLhSXglyO6n2o0xEBBPUcCDBlgKMRSgEBowo4oqEUGgAA7xjvsO09qI8AAAAASUVORK5CYII=',
      'searchUrl': 'https://rarelust.com/?s=%tt%',
      'matchRegex': 'Nothing Found'},
  {   'name': 'RlsBB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJUExURf///+KWHP7+/g40ZLEAAAABdFJOUwBA5thmAAAAxUlEQVQ4y83Uu3EFIQyFYRKX4L4c+CdQCfSjEhToVOlAsHcWrh+JxyZivmEEOrvQGrfR2ssd3trrHd5PYBt/BSZJSZck+QJFQUJjKHotQXIaJjCBnK6gYQldjhxGTkCBHOwALRg/hX6suIoO33eZEBdQB/N10pzABIvqJanm+iwzvEBKQJJYoCjQqjHOPGLPI/fmcjbnE0zPgV+GfA79i8/wSepjtW8z5OuHUYVsuiL0ijCg0WvyCPmfXI8Dvr/Zx2OwPxcfV/CgxyM3gh4AAAAASUVORK5CYII=',
      'searchUrl': 'https://search.rlsbb.cc/Home/GetPost?phrase=%tt%&pindex=1&content=true&type=Simple',
      'goToUrl': 'https://rlsbb.cc/?serach_mode=light&s=%tt%',
      'loggedOutRegex': /Ray ID|security check to access/,
      'matchRegex': /"results":\[\]|Not Found/,
      'rateLimit': 250,
      'both': true},
  {   'name': 'RMZ',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADzUExURf///zY2Njc3Nzg4ODk5OTw8PD4+PkFBQUNDQ0VFREVFRUZGRkdHR0hISExMTE5OTlRUVFVVVVZWVldXVllXUVtbW1xcXF9fX2VlZWdkWmtra3BsY3Bwb3NuYnNzc3R0c3h4eH5+fn9/f4B5ZoJ6ZIKAe4KCgIKCgoN/dIOBeYR8YIV+ZIWEg4d9YYd+Yoh+Y4uCZ4yDaIyMjI6Eao6Fa5CGbJKSkpOSjpOTk5SLcpaWlpeOdpmUh5qRepycnJ+XgKCYgqaknKempKqkkaqkk6ykkaymlKynma2ola6pnbOxqLW1tbiyoru3qLy4rr27t8TBt6S1Q0UAAAABdFJOUwBA5thmAAAAm0lEQVQY043NuwrCMABA0ds0TUmwImhRHASpII7+/+w3ODi4FlFaaPqgT4dmcvKOZ7nwk2d8vKkgQd1JEA8hbWPLI8bs2RhzQcA1ngYN7VYDCJAZ9RrqOHSAQPjQHtRihlSzssipDxw8c3P6YNRLhTMsRXQDosF0M5x1vgIkunQX1e+AgODtLnJQQINfOOiwQMU0OqhIgWws+Ksvvwcr+/YPaK8AAAAASUVORK5CYII=',
      'searchUrl': 'https://rmz.cr/search/%search_string%/titles/exact/m',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No movy available/},
  {   'name': 'RMZ',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADzUExURf///zY2Njc3Nzg4ODk5OTw8PD4+PkFBQUNDQ0VFREVFRUZGRkdHR0hISExMTE5OTlRUVFVVVVZWVldXVllXUVtbW1xcXF9fX2VlZWdkWmtra3BsY3Bwb3NuYnNzc3R0c3h4eH5+fn9/f4B5ZoJ6ZIKAe4KCgIKCgoN/dIOBeYR8YIV+ZIWEg4d9YYd+Yoh+Y4uCZ4yDaIyMjI6Eao6Fa5CGbJKSkpOSjpOTk5SLcpaWlpeOdpmUh5qRepycnJ+XgKCYgqaknKempKqkkaqkk6ykkaymlKynma2ola6pnbOxqLW1tbiyoru3qLy4rr27t8TBt6S1Q0UAAAABdFJOUwBA5thmAAAAm0lEQVQY043NuwrCMABA0ds0TUmwImhRHASpII7+/+w3ODi4FlFaaPqgT4dmcvKOZ7nwk2d8vKkgQd1JEA8hbWPLI8bs2RhzQcA1ngYN7VYDCJAZ9RrqOHSAQPjQHtRihlSzssipDxw8c3P6YNRLhTMsRXQDosF0M5x1vgIkunQX1e+AgODtLnJQQINfOOiwQMU0OqhIgWws+Ksvvwcr+/YPaK8AAAAASUVORK5CYII=',
      'searchUrl': 'https://rmz.cr/search/%search_string%/titles/exact/s',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No tv show available/,
      'TV': true},
  {   'name': 'RuT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEUAAAAFzGM6TufiJEYlksx2AAAAAXRSTlMAQObYZgAAAJNJREFUGNNVyjsOwjAQBNBJUJo0bnBP7YobOEeIkPc+lrhISrSnQJzIora0rH8Iptmn2cF/rgOp39OAyR2+wYh8IW2qaGtplYVkI0mx+XyXpyL4dGQoyL8faQCorxfHClmZtaOQZmbGRAG30ixEtDMfsIrgOFZQQdXKAJaBiXa4AtDmmGMBOuzAGS7OCo1DzwU/+QByikW28lk0SgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://rutracker.org/forum/tracker.php?f=100,101,103,1105,1114,1213,1235,124,1247,1278,1280,1281,1327,1363,1389,1391,140,1453,1457,1467,1468,1469,1475,1543,1576,1577,1666,1670,187,1900,1908,1936,194,1950,2076,208,2082,209,2090,2091,2092,2093,2107,2109,2110,2112,212,2123,2139,2159,2160,2163,2164,2166,2168,2169,2176,2177,2178,2198,2199,22,2200,2201,2220,2221,2258,2323,2339,2343,2365,2380,2459,249,2491,251,2535,2538,2540,294,312,313,33,352,376,4,484,500,505,511,521,539,549,552,56,572,599,656,671,672,7,709,752,821,822,851,863,876,877,893,905,921,93,930,934,941,97,979,98&nm=%search_string_orig%',
      'loggedOutRegex': /Введите ваше имя|Форум временно отключен/,
      'matchRegex': 'Не найдено'},
  {   'name': 'RuT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEUAAAAFzGM6TufiJEYlksx2AAAAAXRSTlMAQObYZgAAAJNJREFUGNNVyjsOwjAQBNBJUJo0bnBP7YobOEeIkPc+lrhISrSnQJzIora0rH8Iptmn2cF/rgOp39OAyR2+wYh8IW2qaGtplYVkI0mx+XyXpyL4dGQoyL8faQCorxfHClmZtaOQZmbGRAG30ixEtDMfsIrgOFZQQdXKAJaBiXa4AtDmmGMBOuzAGS7OCo1DzwU/+QByikW28lk0SgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://rutracker.org/forum/tracker.php?f=103,1102,1105,1114,1120,1214,1242,1248,1278,1280,1281,1288,1301,1327,1359,1363,1389,1391,1453,1459,1460,1463,1467,1468,1469,1475,1493,1498,1531,1537,1539,1574,1690,1803,193,1938,1939,1940,195,2076,2082,2104,2107,2110,2112,2123,2139,2159,2160,2163,2164,2166,2168,2169,2176,2177,2178,2323,235,2380,2412,242,249,2491,251,2535,2538,266,294,315,325,387,489,500,534,552,56,594,599,607,656,671,672,694,704,717,718,721,752,775,781,815,816,819,821,825,842,851,863,864,876,893,915,97,979,98&nm=%search_string_orig%',
      'loggedOutRegex': /Введите ваше имя|Форум временно отключен/,
      'matchRegex': 'Не найдено',
      'TV': true},
  {   'name': 'Rutor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAQlBMVEUAAAD//wDGAQCqAwDiAQD/AACNAwHooAH/4gDcaAH0xgOnOABvAgK4VwD//zn//1vGOAD//3///xnbjUfpOAD/4hyoVs/kAAAAAXRSTlMAQObYZgAAAiJJREFUSMfVlG1z4jAMhInkSHZeaAL0///Vs1ZO1ZBMD+a+XHcYYBg/2V3Z5vLbdL1eP94jOtPtTQJ62ejDVg/vMFg7T6Piy6tEnicWKWCur4USYSIWHsC8EKoYQGwqfwu3IpQtNaYsxDLmH42uCIXlKRFpxRfhH6awgpgBQFRu9oSYwnnvkQ3wV5/YUrEsMLqtZ4QK2+pFB9WiqScwmMJxX28RikrnSsZgHsSjj/t5UqNsrZHRGvXgS2Xkadweyos3Qtna9H1S2BC1cW+hYOHFNw9r1RtiT19wFkS/GCNkCg9PyZUAk2FpzDR/Q8aJHUFLqBwQ3iHFTarQo4DpXRXJ5DYaCKKDSA+c4++MGTcEl3ub1yhArK4KJwbz2Fw6xMaDYuO1IZXxQ1m8zw4ZgEQyrPTCILUxj64hzD7jSMaB4N0ZTWXbZp6BBFMMwfJNhIEPuTUlblUiGXsZ2838cOZrX/1iZyD7ZJUon9nWlB0zItfScgWjSEadS0tCnTCJXGHDccZQQhVlECAl4uGILOz/EMNQcrcXc6IRufZMZlaQLLxBWVnbvdQgwga/zsJkB2DRqplFOIORIwKBsMlViCEi974Lcp0wBYQfNVel5d51K8ofER2niqTkTBOY9a7nSCVwb57FIhOQI6PTkUBAnqbuHOnEqkCJQswxrwMyWxcoVhsg8nlEtosGZFNzqK85iMOYc5W94XOvyymz1z8jl/9ffwC/QRWscvyjfQAAAABJRU5ErkJggg==',
      'searchUrl': 'http://rutor.info/search/0/0/010/0/%tt%',
      'loggedOutRegex': /Connection refused|Gateway Time-out/,
      'matchRegex': 'Результатов поиска 0',
      'both': true},
  {   'name': 'Rutor-Title',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAQlBMVEUAAAD//wDGAQCqAwDiAQD/AACNAwHooAH/4gDcaAH0xgOnOABvAgK4VwD//zn//1vGOAD//3///xnbjUfpOAD/4hyoVs/kAAAAAXRSTlMAQObYZgAAAiJJREFUSMfVlG1z4jAMhInkSHZeaAL0///Vs1ZO1ZBMD+a+XHcYYBg/2V3Z5vLbdL1eP94jOtPtTQJ62ejDVg/vMFg7T6Piy6tEnicWKWCur4USYSIWHsC8EKoYQGwqfwu3IpQtNaYsxDLmH42uCIXlKRFpxRfhH6awgpgBQFRu9oSYwnnvkQ3wV5/YUrEsMLqtZ4QK2+pFB9WiqScwmMJxX28RikrnSsZgHsSjj/t5UqNsrZHRGvXgS2Xkadweyos3Qtna9H1S2BC1cW+hYOHFNw9r1RtiT19wFkS/GCNkCg9PyZUAk2FpzDR/Q8aJHUFLqBwQ3iHFTarQo4DpXRXJ5DYaCKKDSA+c4++MGTcEl3ub1yhArK4KJwbz2Fw6xMaDYuO1IZXxQ1m8zw4ZgEQyrPTCILUxj64hzD7jSMaB4N0ZTWXbZp6BBFMMwfJNhIEPuTUlblUiGXsZ2838cOZrX/1iZyD7ZJUon9nWlB0zItfScgWjSEadS0tCnTCJXGHDccZQQhVlECAl4uGILOz/EMNQcrcXc6IRufZMZlaQLLxBWVnbvdQgwga/zsJkB2DRqplFOIORIwKBsMlViCEi974Lcp0wBYQfNVel5d51K8ofER2niqTkTBOY9a7nSCVwb57FIhOQI6PTkUBAnqbuHOnEqkCJQswxrwMyWxcoVhsg8nlEtosGZFNzqK85iMOYc5W94XOvyymz1z8jl/9ffwC/QRWscvyjfQAAAABJRU5ErkJggg==',
      'searchUrl': 'http://rutor.info/search/0/0/100/0/%search_string_orig%',
      'loggedOutRegex': /Connection refused|Gateway Time-out/,
      'matchRegex': 'Результатов поиска 0',
      'both': true},
  {   'name': 'Rutor.org',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAQlBMVEUAAAD//wDGAQCqAwDiAQD/AACNAwHooAH/4gDcaAH0xgOnOABvAgK4VwD//zn//1vGOAD//3///xnbjUfpOAD/4hyoVs/kAAAAAXRSTlMAQObYZgAAAiJJREFUSMfVlG1z4jAMhInkSHZeaAL0///Vs1ZO1ZBMD+a+XHcYYBg/2V3Z5vLbdL1eP94jOtPtTQJ62ejDVg/vMFg7T6Piy6tEnicWKWCur4USYSIWHsC8EKoYQGwqfwu3IpQtNaYsxDLmH42uCIXlKRFpxRfhH6awgpgBQFRu9oSYwnnvkQ3wV5/YUrEsMLqtZ4QK2+pFB9WiqScwmMJxX28RikrnSsZgHsSjj/t5UqNsrZHRGvXgS2Xkadweyos3Qtna9H1S2BC1cW+hYOHFNw9r1RtiT19wFkS/GCNkCg9PyZUAk2FpzDR/Q8aJHUFLqBwQ3iHFTarQo4DpXRXJ5DYaCKKDSA+c4++MGTcEl3ub1yhArK4KJwbz2Fw6xMaDYuO1IZXxQ1m8zw4ZgEQyrPTCILUxj64hzD7jSMaB4N0ZTWXbZp6BBFMMwfJNhIEPuTUlblUiGXsZ2838cOZrX/1iZyD7ZJUon9nWlB0zItfScgWjSEadS0tCnTCJXGHDccZQQhVlECAl4uGILOz/EMNQcrcXc6IRufZMZlaQLLxBWVnbvdQgwga/zsJkB2DRqplFOIORIwKBsMlViCEi974Lcp0wBYQfNVel5d51K8ofER2niqTkTBOY9a7nSCVwb57FIhOQI6PTkUBAnqbuHOnEqkCJQswxrwMyWxcoVhsg8nlEtosGZFNzqK85iMOYc5W94XOvyymz1z8jl/9ffwC/QRWscvyjfQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://rutor.org/search/1/0/100/0/%search_string_orig%',
      'loggedOutRegex': /Connection refused|Gateway Time-out/,
      'matchRegex': /d.gif/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'SceneSource',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAABklBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpExMAAAAAAAA6EAu1razXi1LabiidoqTK0NHBxsiRlZmjTx6kHR6yXiCGioyHiotgY2R9gIFbJxFjKxIlJicAAABFHg3R19nBx8q6vsGqr7Kkf4XY3uCjqKze5OadoqaalZmupqbh4+G9QUrcwKm+trPiaCrJISXibyrlYCrlVSrjQSrhNiraLCjRIyblTCrV0MqhpqjRq46coaXfSindQCnZNCjPKibjaCriXiniVCmXlJjBxsjKz9GzuLqjNh6bZE2SSUSfT1KMio2MT0ebalK3vL+xtrmcRxyZHxuAMBeChoiNIhqtFiCOkZR8f4J9gYNNUFKIjI1TVlghIiKrOR9YW11UEQ9qNxNqORRwNxVwIBVRHg/i6Orc4uTW3N7O1NfGzM/Ny8u+w8a2u76us7a2srSmq6+gpam3RSzYcSjWaCfPIibKXCXOKSXELyS3RCFFkMZbAAAAcnRSTlMADhYHChgSJTkFKiEeLzJCGz41KCxJI05C6+rlrq2trZuYlIhvbl1UUE5IOvT09PT08/Py8u/u6+vp5eXl5OTk5OTk5OPd3NzZ19fX19bW1dLPzMfGubizsrGuraufnZiVk5GJiW1ta2JeXVlVS0lIRzFYFUliAAABSUlEQVQoz61R1XLDMBC0ZZDMsR1OGuaUmZmZmZmZGf+7spM2M3nOvZxm92ZPu0cUuCiKJmmK4jjc8YP7x0kWAMCSNO4MACRmsjgQ7VAQGcBYBAgFhqW5DM4IfFFDyKpDyMfq3KfQghlzHuOXfW8hhFCsqsftOckwGNd9VxE18B5IRSsm1bin5QwyLEUAkfdd72lIWflcLJ5QkJZoGkkLDElY9KWbiCzJqmPmrtGhaJKcaB1NiywhLt/uIImXULTE9bOmyLxVjreNXQBCnLrfMgh1vdT1Om0SzoHuQ4ClvA9hzZBaeKo9UJAkOQfbz7EU/qz3MYyXb3zPlvUmkeYc6rDZ8XLDhv95Ww1+raZ2K/uTx8OdNojNZwz6X+Y+gtjgfvV4c5eJc9lI5ss3cSS69aim3mYaz4Vo/wtRNOZzsTN5sWcZOu9Qha1fFpctFIMdnYYAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.scnsrc.me/?s=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /no posts matched your criteria/,
      'both': true},
  {   'name': 'seleZen',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABU1BMVEUAAAALCCoMCjEOCzgPCjoMCy8KByYJBiQNDDMOCTYNCjIOCzUODjQNDTAMCywPDToMCS8KCCcOCjkCAQgMCi0KBygPDTcODTYQEDoNDzIIBSENCzMHBR4BAAUQEDwPEDcLCCwMCioDAgwPDDoiJ00REz4FBBcvOFsRFjsMDS7///9JUnUbH0oVG0IPFDcEAxP5///y/v/X5/XW3uivuMlcZoRVXnwlLVQXHkcGBBri8//z9/rt8/ji7fbAzt+1v89vfJ1QWXlNVHZETnI5Q2QyPGATFkIUGTwUEi4EAg7p+//o9/35+vzd4+zO2efM1uHK0d+tu9GbqcOirMCHk6uAjah6iKV1hKR0gaAcJEwREzMPDSoMCyDr+Pzq7fLM2/DX5O3E1evS1+K1xN21xNvEyteptsqWoruYpbqHl7R4fZNudY1ibIU8SWpBQGAuM1EpLk0jAgWyAAAAAXRSTlMAQObYZgAAAnRJREFUOMttk+eyokAQRgFBFIakgkRFwZyzN+ecc9yc877/r+0BLe/e3VMURc13upuqmSFmOHtztsmyu4/FPYf4l2TRZKNRlo0+RFnTbiWfxU6LVaKYHDgYs+X8VW5HFSXId0EImUs+yU1VVRSsPOzCGzswzk7OclINIXNipSKCA/nMcEwSyIk5UdgprX0fbPy+FxVVgccO/6OYSjEMIwhGs3S1vNRZOP4wvBcqoijmcsVgAAkpxEZz8/zgRe+kt3j4rWkIgaLgIXO4AThG47L7+vpHaXP49ReE0ADmPjpEUpXlwDBKJ+3PftMABJGcAC1aMoA7oM3jxctxU6gwKcintAhblqlAMLaWl1a2yobAgDFVXJtQKYahKCEWQ36/utAf+mWElQA35UaJFIVjyFF5/W21+rI/GJVRTIAygYHhLiGDwMWwkW3U+ovVw6OVtUYW4RUOIhkEbHCBUR4NLo7a1d5wZ2JwFke4YGAmyl3tYqG9MsoihGK8ZVkUQVIhKAsKQtmd0sdOt6YjxAMW7xImR3EA5f+EJYTS+nj1YGmgp9N8AEsUIQcsDdaAbGG82n21pmvwjaUikXR5mMXzac1fL9UbjbuN9/PvtnRJ07SIFpFht0wNkHS9UDs9/XRz+2V5vrtaL2R0XZIkz4TdzFsSxJnCdq3X7nT29+ff3Iy2CxlAkvg8AdjQC+xMff326uzs/HoD6iXA8zw7PHJqHMNremHs+/XtjBTBJBI0OTn6eTceAKue5ME7DmmCpjkYMDHk+FQJi2nPg3wPoqlBzkKoDXChfoZjW4kQOiRuPr/AeZOK0FMsNv/f+61wcZqOcOrTa/kHBvJWMrMSoPMAAAAASUVORK5CYII=',
      'searchUrl': 'https://selezen.net/index.php?do=search&subaction=search&story=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /никаких результатов/,
      'both': true},
  {   'name': 'SkT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAGUExURVK1Kf///+GCUfEAAABnSURBVAgdBcGxFYIwAAXAyyfPR2GR1kpGYRj3kFEchVEYgTIFj3hXBgI673TOnB49vK56WD6ZHPLcrGnrKSdi6UsgvV0tkGu+56BGjdwhShX6zz7GFIZwi28VhUCWfatpzJkPrQwE/ih/HTMOrpnSAAAAAElFTkSuQmCC',
      'searchUrl': 'https://sktorrent.eu/torrent/torrents.php?search=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nenasli ste co ste/,
      'both': true},
  {   'name': 'SoftArchive',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5BAMAAAB+Np62AAAAJFBMVEUiIiL////IyMhZWVmRkZEwMDBMTEzj4+PV1dWenp6Dg4M+Pj6+dWnwAAAAUklEQVQ4y2MYBaOAgYFJEA6EqS3rAGWNylIqq+ICAdhkWfDGAmsjPlmGKCUYUCMx4QQbI4BB8gY0WwsFEUBAUQBVllkQnyybEhJQmKTAMApGAQBFThXw5LBQoAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://sanet.st/search/?q=%search_string_orig%&exact=&or=&sub=&subcategory=&category=3&user=&filehosting=any&isbn=&age=Any+time',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No data found/},
  {   'name': 'SoftArchive',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5BAMAAAB+Np62AAAAJFBMVEUiIiL////IyMhZWVmRkZEwMDBMTEzj4+PV1dWenp6Dg4M+Pj6+dWnwAAAAUklEQVQ4y2MYBaOAgYFJEA6EqS3rAGWNylIqq+ICAdhkWfDGAmsjPlmGKCUYUCMx4QQbI4BB8gY0WwsFEUBAUQBVllkQnyybEhJQmKTAMApGAQBFThXw5LBQoAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://sanet.st/search/?q=%search_string_orig%&exact=&or=&sub=&subcategory=&category=11&user=&filehosting=any&isbn=&age=Any+time',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No data found/,
      'TV': true},
  {   'name': 'SunXDCC',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3BAMAAABa9c91AAAAGFBMVEX77W345Tj69LLTynWhm2DMvChtakwyMCPudtGvAAACVklEQVQ4y2XUUY6bQAwGYE/oAbAQ72iyBwBM9rlaZvMcVLhAFdEDVNq9fn/bM0lQnQjEfLKxB2mILdptY7Jo8RRqW6wLpsSmwdcytoveeE3bApLmMlBoH7jpPbDVrWZJPXCpQ0ZLDSw9UERQG29w5O3T7nVFh8DijVjr0v8RuP2puNX+rLld9+D2ZsiuQiL9SyoQfS7a6HTdLVJBGxja1PS+73++EeA5qyEPXCUzxBdUZ+WMgS/pCgT45Z4+ZfB9pLCltGNpjIjzVTGlX2wNNZcViaB3LXyPUa6Kve6MYZq7CWQvnWM37fe5RyaFRtaZfuy7ivc7dlWaxRpqhNCs43EYINGUDL98FESae0dkGs7xrPj7PAFRVQy9IZ3DEPepYOBmWyVaaL827Buwt8zqsspo+Pb9/TdqTBnbpRItE0t4WTPaFpJLQnwUOusTzJEqnyUJYsJO6oYZtkA6YekZwA9HZsXuVVH15BhqXCIJuiiJM9oDPkOsFZH4dk8xY42fxSnmeEfbSToSam6GQlTsfE9jnIUqGVbHyhLL3mj1nkS2Wyn63IBRUdDp4O88JJ5H4OhJ7KmPRG+aMvJLLooa9gWzqomI3/pKpBwOmuk2Ogo+xfZE8Dlb1MmBmyI+mkU239ZqWzAnr2mpIdpDdHz0AvwEVoqn2J0i4Z8DuFlxTGbLwMcYjksZRz+7U2jRrR8YhseDpuBylMoQ4XjMFHthuziaciEZsArkjEoh5zYDs1d9bShjqO0QPiDTM1ATasiKdrJ7OQq69IIejlysLQcjiiv6XH5F5j8wNtT4DZH87QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://sunxdcc.com/deliver.php?sterm=%search_string_orig% %year%',
      'goToUrl': 'https://sunxdcc.com/?sterm=%search_string_orig% %year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /botrec":\[]/,
      'spaceEncode': ' '},
  {   'name': 'SunXDCC',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3BAMAAABa9c91AAAAGFBMVEX77W345Tj69LLTynWhm2DMvChtakwyMCPudtGvAAACVklEQVQ4y2XUUY6bQAwGYE/oAbAQ72iyBwBM9rlaZvMcVLhAFdEDVNq9fn/bM0lQnQjEfLKxB2mILdptY7Jo8RRqW6wLpsSmwdcytoveeE3bApLmMlBoH7jpPbDVrWZJPXCpQ0ZLDSw9UERQG29w5O3T7nVFh8DijVjr0v8RuP2puNX+rLld9+D2ZsiuQiL9SyoQfS7a6HTdLVJBGxja1PS+73++EeA5qyEPXCUzxBdUZ+WMgS/pCgT45Z4+ZfB9pLCltGNpjIjzVTGlX2wNNZcViaB3LXyPUa6Kve6MYZq7CWQvnWM37fe5RyaFRtaZfuy7ivc7dlWaxRpqhNCs43EYINGUDL98FESae0dkGs7xrPj7PAFRVQy9IZ3DEPepYOBmWyVaaL827Buwt8zqsspo+Pb9/TdqTBnbpRItE0t4WTPaFpJLQnwUOusTzJEqnyUJYsJO6oYZtkA6YekZwA9HZsXuVVH15BhqXCIJuiiJM9oDPkOsFZH4dk8xY42fxSnmeEfbSToSam6GQlTsfE9jnIUqGVbHyhLL3mj1nkS2Wyn63IBRUdDp4O88JJ5H4OhJ7KmPRG+aMvJLLooa9gWzqomI3/pKpBwOmuk2Ogo+xfZE8Dlb1MmBmyI+mkU239ZqWzAnr2mpIdpDdHz0AvwEVoqn2J0i4Z8DuFlxTGbLwMcYjksZRz+7U2jRrR8YhseDpuBylMoQ4XjMFHthuziaciEZsArkjEoh5zYDs1d9bShjqO0QPiDTM1ATasiKdrJ7OQq69IIejlysLQcjiiv6XH5F5j8wNtT4DZH87QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://sunxdcc.com/deliver.php?sterm=%search_string_orig%',
      'goToUrl': 'https://sunxdcc.com/?sterm=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /botrec":\[]/,
      'spaceEncode': ' ',
      'TV': true},
  {   'name': 'TamilBlasters',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAD+/v43msJKqs4hjbhgudqY1ep4yONpqcHv8/R/tsm23eiYwM7k8PPl6OrV5OhWXu2yAAAAAXRSTlMAQObYZgAAA2xJREFUSMetlTFoE1EYx+Om4OA3iF6TUEgyFOyU52HUiBBuEHQ7Hg214mbACiJ4zaCD9AxWVPAEhQ4KomlirIiW1moXsVC0DWgER6GLTh3aOigFwf/33r1rm7bi4C8EAvf/fvl/73Ik9l9YmJ1trFJv1DVD9Y/6+s7+/ql+5gwzwJRBD7iuAjMTE+pSiSkznudJT0rpFudZMMXDGh4OpyVjX0HguxGwoswKDyiB6/YhMLdeMMACoAT2IQRGNmsAWCDE7Vjs6dYNwCKW+JtAzMMQCUCbQLBhZK3ACwUuI8AiDFs3QCA0YP+SOUAP40aQRQc2nJubGxhtzqhXTR5oNptVLTCGsy36+YE01kqlRZQQTDab1R1KLXp1gQyTt4iSLIgMJRhWnlgBxi2yKJFHQAnAPALoAMNo+TlZjdroElHlGQxakOZAqeS1aNwr91ESK9wgms5TnAWR4fJcQAvN2ZOUxBn0Eo0d1l+RBgjUypeI6YChijNs0VgeAS1IcaDnNDF7lEHKljYw2nDNOzmM/sNfuAMgepSnTsHjgAM9vb0BvWnUYKhI+yg2gCHN4zpQrXrFgMak7LOs2UZtie4KdGBBZOiBYVzKw6RIumIfDCAMVDzJBreYJ8ZKDIpu6kyxIDJIY1DcS2uDCVSlMhTdvJWsV6vnLXrXTUktyGiDNAYLu3ct0W4YUhCYDtrguujOd+C6lUAHNQ/YIJWhYrMBHKTO4zAoCgXuEBksdQeOUPwEBzLrDWP2qiFuDAVlqBRdlw3h+e1/aCVOUBzjwFljyNn7yML22KIDBkw7TiHs4KLDSwEDTTYar4mWu/GpDq46zm21ps0dcAc01uBx0lzUHfAQGYPiRwoGJp5xnE9ssHMBTQpjWEmlugJiOtCDO+ApDOgOFsS3Fut+BkfgDzGooDrYdq5Fcf4JpUIKjqbg6A5+9gXRr6FBfzDiKr+dyIDTIwrWQ8FyQQceCV8cok14HBlyOXGKNpB0woAvQHb099f13P/sAHUOgkl3KdJdKYOjmOcO5jkE4U3UmA7CPIfmFJg1AT8reHxzgTGkGT3OAocFUQd/ywbGsEEAheHYrlhsWo1vISjgD+XbhgZr6EZgu2mQaReAKwhs840AhjbBsbcxsBcCNb+xwc2Y4n3OzLetgOuaHQ/aGX4wDGL/wh9MyU9TkMmPTwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.1tamilblasters.pm/index.php?/search/&q=%search_string_orig% %year%&type=forums_topic&search_and_or=and&search_in=titles',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'spaceEncode': ' ',
      'matchRegex': /Found 0 results/},
  {   'name': 'TamilBlasters',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAD+/v43msJKqs4hjbhgudqY1ep4yONpqcHv8/R/tsm23eiYwM7k8PPl6OrV5OhWXu2yAAAAAXRSTlMAQObYZgAAA2xJREFUSMetlTFoE1EYx+Om4OA3iF6TUEgyFOyU52HUiBBuEHQ7Hg214mbACiJ4zaCD9AxWVPAEhQ4KomlirIiW1moXsVC0DWgER6GLTh3aOigFwf/33r1rm7bi4C8EAvf/fvl/73Ik9l9YmJ1trFJv1DVD9Y/6+s7+/ql+5gwzwJRBD7iuAjMTE+pSiSkznudJT0rpFudZMMXDGh4OpyVjX0HguxGwoswKDyiB6/YhMLdeMMACoAT2IQRGNmsAWCDE7Vjs6dYNwCKW+JtAzMMQCUCbQLBhZK3ACwUuI8AiDFs3QCA0YP+SOUAP40aQRQc2nJubGxhtzqhXTR5oNptVLTCGsy36+YE01kqlRZQQTDab1R1KLXp1gQyTt4iSLIgMJRhWnlgBxi2yKJFHQAnAPALoAMNo+TlZjdroElHlGQxakOZAqeS1aNwr91ESK9wgms5TnAWR4fJcQAvN2ZOUxBn0Eo0d1l+RBgjUypeI6YChijNs0VgeAS1IcaDnNDF7lEHKljYw2nDNOzmM/sNfuAMgepSnTsHjgAM9vb0BvWnUYKhI+yg2gCHN4zpQrXrFgMak7LOs2UZtie4KdGBBZOiBYVzKw6RIumIfDCAMVDzJBreYJ8ZKDIpu6kyxIDJIY1DcS2uDCVSlMhTdvJWsV6vnLXrXTUktyGiDNAYLu3ct0W4YUhCYDtrguujOd+C6lUAHNQ/YIJWhYrMBHKTO4zAoCgXuEBksdQeOUPwEBzLrDWP2qiFuDAVlqBRdlw3h+e1/aCVOUBzjwFljyNn7yML22KIDBkw7TiHs4KLDSwEDTTYar4mWu/GpDq46zm21ps0dcAc01uBx0lzUHfAQGYPiRwoGJp5xnE9ssHMBTQpjWEmlugJiOtCDO+ApDOgOFsS3Fut+BkfgDzGooDrYdq5Fcf4JpUIKjqbg6A5+9gXRr6FBfzDiKr+dyIDTIwrWQ8FyQQceCV8cok14HBlyOXGKNpB0woAvQHb099f13P/sAHUOgkl3KdJdKYOjmOcO5jkE4U3UmA7CPIfmFJg1AT8reHxzgTGkGT3OAocFUQd/ywbGsEEAheHYrlhsWo1vISjgD+XbhgZr6EZgu2mQaReAKwhs840AhjbBsbcxsBcCNb+xwc2Y4n3OzLetgOuaHQ/aGX4wDGL/wh9MyU9TkMmPTwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.1tamilblasters.pm/index.php?/search/&q=%search_string_orig%&type=forums_topic&search_and_or=and&search_in=titles',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'spaceEncode': ' ',
      'matchRegex': /Found 0 results/,
      'TV': true},
  {   'name': 'TFPDL',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0BAMAAAA3VgbYAAAAD1BMVEX7/fs+iD0UFBTN2M2JnonIfb6nAAABMUlEQVQ4y93T4ZWDIBAEYDwoIBgbYGMBJlhAkO2/ptu4A/vUlwLu5k8SviAjivs7ycwlxolrPo+P1BPrYrLSMal2GuXXxFnCHHecMdHTVM8XT2ohubwyf0owZxlbBZVec4g94tJxa/R4xkN4eYG2W4nHLG0WveMpbZan/I0C+QttoBS02vM7+XKmYQa5ZpMD/cwDBpw/0Qt0/zwD0Ah6PEFqSu5Cfv/mKV3IF9AMGkCQeA8gqwGJ70APUFASAQ2dfMFG2e7enO5Gv5Ld8VuJZBU2sTt2gcTcaiTdCe/auFsujWqg5DRBbFqcX0svOLtu+jL7zEULavdmxPvSOdde0CwxDhBJQYvf9ABxzQtaWNaRkBFLWXKhlpsNIv1w1na8Gqgyx0k+bZJl2f+LaWd1/yC/Hh5VaR+WTLEAAAAASUVORK5CYII=',
      'searchUrl': 'https://tfpdl.mobi/?s=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /nothing matched/,
      'both': true},
  {   'name': 'TGx (Fake)',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://torrentgalaxy.one/get-posts/keywords:%tt%',
      'matchRegex': /magnet download/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'TheRARBG',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAAA3YLu9DUt5AAAAAXRSTlMAQObYZgAAAHRJREFUKM+t0DEOgCAQBMAzFJY+wafwNHgaT+EJlFcQVpNjTQQrdaupbjcn/8cDiEQhlKhEIzAj3qCyIhkcsbyCuw4S3vA4o02blciEdDSDBnRsSIYV2eBQDAshUKJ2BMI3Ah07sSES83/ygLPMINABVvYpB5v7oLp5P2HDAAAAAElFTkSuQmCC',
      'searchUrl': 'https://therarbg.com/imdb-detail/%tt%/',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /imdb_icon/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'TheRostrum',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEUAAABkKQkyNz7fqm7ZmlzSikr////y3K/GdzO7bS2tYiaoXiSOShmAPxSBPxLs7Ork5OGgoJ/frIHWlVXOgkDBdC2/by20aCynXyilWyKYUR1uMQzn5+XGxsLExMDm0rqqqqakpaLFs5/pw4/BoIBydHZrbG/BjFe0e1DMkU6TakhBQEHLfDm/dzK+by6GRRsXFhRdLQ4AAAD/bafhAAAAAXRSTlMAQObYZgAAAJBJREFUGNNdjlcSwyAMRC0EtoEY95ree73/4UIIzhDvjD70ZrVa7yPw/gUw3JUeIwsqBcEaC9HvSkKAefU7hFGBeefkQMibO7iRnD+zQ+Q4LrfMf50aQoh1MErjc3ic+zNLMEBaX/e7h28AjCkiq+VmmsYWtIyFQq6SZPIFkSm9TRdLYnuJVv8kWn3RsuycXm8bQQcuQK7zFQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.therostrum.net/search.php?keywords=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|>Registe-se<|>Register<|cannot use search/,
      'matchRegex': />Jump to post<|>Ir para a mensagem</,
      'positiveMatch': true,
      'both': true},
  {   'name': 'TorDL',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAbFBMVEUFMFwLNmINfsASgcMUP2sYhcYeSXUeicoljc4lmt4oU38tktIwn+AyXYk1l9Y7ZpE8peM9nNtFod9Jq+ZOpuRWq+hXsuldsOxktfBluOxrufRxvPdzv/B2v/qBxvOOzPaa0vml1/uu2/213v9ENtEwAAAAb0lEQVQYGQXBQU7DABAEMCdaBDcKPfP/17XqEaTMDvbxAwCY/QAAv2cBgM4WAOy0nuAbdLa+PNwV7LSIvnCj57btdXX3c5/tThdrY2N1EkQuuUQmQWVlRSbBXSIRmQaoh1v0eHsHAH+zAQB7nACAfwQvUdbdx9fFAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.torrentdownloads.pro/search/?new=1&s_cat=0&search=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'both': true},
  {   'name': 'TPB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8BAMAAAAkp6FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAkUExURQAAABkZGTMZAEwzM0xMM0xMTGZMM2ZMTGZmTH9mZn9/Zv///0CpG+oAAAGySURBVDjLxdXNitNgFMbxx2NlHHMThz8DfmRTBnfdSDeDuhFczc5LKINQ0M2Ay16CFyDSTYxgnT435yLph0lqVXA8q5D8kpf3Oe8h8pHS7YF5tzpgrH6V+yDoV/FHYOA55X8CkhSHQBBczOfzKUEMgPzoa2y7zoWrAXBir8K26/v2OvqgtN2AYnejC/gVKLaJHwB37VUD2qtuN3PiV00AOfGs06ybaHNo48oATvdAPRT16Bg4+SdAABkHQAYGKOsG9sDjunAFace6C74GUPjUFeTS99zdpgU8qvMpwNkzPveOfZ2QQgFIKUDL3x7evHMERE6OgLbzA/Xals1BUKmw7DdwAIx50HyBeDEIZhSWK0gUiwEApeUZ+WQq9cgKkbYMYa+nktiRT0jNAMvXKleLlsQ72+u3SCARnDRRq8n9AyhICSm4tMekZbuOpnPft6dt2bYwtmDk1XkGqBmJJmRZ0SwRIAUSF0tfKYjndkW+3LT7C6TEZbuFK4XiIeRkA74FZz+lMBUJ2h6YmuxkeHO+GW/ZdjXQrs1LLRj1GxH5freEigGwt8Rg5TFQ6bb/en8PfgCTTMM5Mqng0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://apibay.org/q.php?q=%search_string%&cat=201,202,207,209',
      'goToUrl': 'https://thepiratebay.org/search.php?q=%search_string%&cat=201,202,207,209',
      'loggedOutRegex': /Ray ID/,
      'matchRegex': /No results/},
  {   'name': 'TPB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8BAMAAAAkp6FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAkUExURQAAABkZGTMZAEwzM0xMM0xMTGZMM2ZMTGZmTH9mZn9/Zv///0CpG+oAAAGySURBVDjLxdXNitNgFMbxx2NlHHMThz8DfmRTBnfdSDeDuhFczc5LKINQ0M2Ay16CFyDSTYxgnT435yLph0lqVXA8q5D8kpf3Oe8h8pHS7YF5tzpgrH6V+yDoV/FHYOA55X8CkhSHQBBczOfzKUEMgPzoa2y7zoWrAXBir8K26/v2OvqgtN2AYnejC/gVKLaJHwB37VUD2qtuN3PiV00AOfGs06ybaHNo48oATvdAPRT16Bg4+SdAABkHQAYGKOsG9sDjunAFace6C74GUPjUFeTS99zdpgU8qvMpwNkzPveOfZ2QQgFIKUDL3x7evHMERE6OgLbzA/Xals1BUKmw7DdwAIx50HyBeDEIZhSWK0gUiwEApeUZ+WQq9cgKkbYMYa+nktiRT0jNAMvXKleLlsQ72+u3SCARnDRRq8n9AyhICSm4tMekZbuOpnPft6dt2bYwtmDk1XkGqBmJJmRZ0SwRIAUSF0tfKYjndkW+3LT7C6TEZbuFK4XiIeRkA74FZz+lMBUJ2h6YmuxkeHO+GW/ZdjXQrs1LLRj1GxH5freEigGwt8Rg5TFQ6bb/en8PfgCTTMM5Mqng0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://apibay.org/q.php?q=%search_string%&cat=205,208',
      'goToUrl': 'https://thepiratebay.org/search.php?q=%search_string%&cat=205,208',
      'loggedOutRegex': /Ray ID/,
      'matchRegex': /No results/,
      'TV': true},
  {   'name': 'TPB-ID',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8BAMAAAAkp6FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAkUExURQAAABkZGTMZAEwzM0xMM0xMTGZMM2ZMTGZmTH9mZn9/Zv///0CpG+oAAAGySURBVDjLxdXNitNgFMbxx2NlHHMThz8DfmRTBnfdSDeDuhFczc5LKINQ0M2Ay16CFyDSTYxgnT435yLph0lqVXA8q5D8kpf3Oe8h8pHS7YF5tzpgrH6V+yDoV/FHYOA55X8CkhSHQBBczOfzKUEMgPzoa2y7zoWrAXBir8K26/v2OvqgtN2AYnejC/gVKLaJHwB37VUD2qtuN3PiV00AOfGs06ybaHNo48oATvdAPRT16Bg4+SdAABkHQAYGKOsG9sDjunAFace6C74GUPjUFeTS99zdpgU8qvMpwNkzPveOfZ2QQgFIKUDL3x7evHMERE6OgLbzA/Xals1BUKmw7DdwAIx50HyBeDEIZhSWK0gUiwEApeUZ+WQq9cgKkbYMYa+nktiRT0jNAMvXKleLlsQ72+u3SCARnDRRq8n9AyhICSm4tMekZbuOpnPft6dt2bYwtmDk1XkGqBmJJmRZ0SwRIAUSF0tfKYjndkW+3LT7C6TEZbuFK4XiIeRkA74FZz+lMBUJ2h6YmuxkeHO+GW/ZdjXQrs1LLRj1GxH5freEigGwt8Rg5TFQ6bb/en8PfgCTTMM5Mqng0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://apibay.org/q.php?q=%tt%',
      'goToUrl': 'https://thepiratebay.org/search.php?q=%tt%',
      'loggedOutRegex': /Ray ID/,
      'matchRegex': /No results/,
      'both': true},
  {   'name': 'TurkSeed',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEXl5eXtHiYCAgLsOUDqZms/Pz/cp6mHh4dS1HxgAAABw0lEQVRIx7XUwYqDMBAG4MC2em1I2QcQQq8NkZ4tBh9ASL0G2nWvUrB9/XXjJBM3WmGX/Q9tDx//TDVK3ugQRpYjLCiWAbVZBcfVhr8CdvzPBrHWIG0A/Co3VambGlOkutF900UjIOyYZjXP+BTQILtt9p0XIAWw0nBZa2jWADcxyG0KC3AGAtbamGQEvPsJ9gRSj6JZBH0WCTo59lsAvFloSGsUs4DcMyeesyPIR+bFI26AGZBDFwOogDTRCKjw6YIGzBMBN3Mg6RFccEQotBcaG8KkKLopiBc9eJCUUuZVJLgBkJSCKlVhx93NgCVLyqrWbmiI/f6EjgsAQXMzPmhVewqvaDOAkRj4j4wW4RragRMBIABABXegAHAVVJqxAkE4QZVMmXAGgD0A0l7zBH7PA7Kp8ISHAG9Vi8czasBEgM2AevI3YXJ0S7UDOWxgEMCVFDBj3O1WeNDDvZA0WDMJdrkDOFOIrColTzjBnYeSeiFFbnBF9yp5o5h98XTR/kxuQkA0r2vNhw98+jYCwTvJMDCBJGcEOwTB43t9AYYCNyMG+Corl8Chg+sv54F+EMhNzgAevm4TJdkQD2rOtXvJfQGxDp98uYX4AAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://trendfilm.net/browse.php?do=search&keywords=%tt%&search_type=t_genre&category=0&include_dead_torrents=yes',
      'loggedOutRegex': /Cloudflare|Ray ID|Recover Password|Şifre Sıfırlama|signup.php/,
      'matchRegex': /\/details\.php/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Videoteka',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEUAAAAAEIb///9ycnOEhIQAJJWmuN0qO16Rj4sEM6AqLDBiYWBVVlhHR0YoU68ZQJju8vpOcro8Y7OYmJgVKVf9/fnk6/d2jMgcSKegoKAsT5bO1fL///DZ1MbDwbyQ4FuhAAAAAXRSTlMAQObYZgAAAJ5JREFUGNNFzgcOwyAMQFEPzIbsnfT+xywhrfKFkPyQJeApMgd4Y6XssG32Pwe+pdCQ6pwiF6mo6nqIIXBkq9hWyaR8SAPNbTkawGN7+RRpdpr6vjMw4kLJMy2oz72CrGT9hxrU0557A17wuDwdeMOaDYDgcirqClDjVgAw2EzUOrlBDJTuN42u3CLPT9F1jTjJGeHXiOLKzghvpgS1L/8fB1zhxK/kAAAAAElFTkSuQmCC',
      'searchUrl': 'http://videoteka.org/?p=torrents&pid=10&keywords=%tt%&search_type=description',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /no results found|Nič ni najdeno/,
      'both': true},
  {   'name': 'W-v3',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAANR6G2x+Opvd2bs9iAn87F0+h2l8ppjcVPebpXf73Y4fCRrNRfhcGJpdHn7fboqHMQAAAAAXRSTlMAQObYZgAAAfJJREFUOMtiIAwEwQBDmFEQCgQwxBEymOKYMoIoAF0cAdAMwjRMEAPgkcA0adaqhTCzBFcshIjNnCgo2V4aGt4F1SJ1+BRYXDa0oqPO2cRZyaYKLMEooa0OlhA1fl56WE3ZOC3NXFAAIpE3ESSxJOlFe9yRc3HOaTkTwRJSbjqNIInLmyIlV62cKLncbfNFAbBjH6lEgSSaNhVCHBH2qVEQLFFifALEL9rciCZxz8kUyJUKSoE4W/LZ5ouCYO/NOJQzEUge1psIlpA4lDJRUAAkIfUIqETwqrM7WHxFDJABkRAs2tQItMnkLUh8upOSXSNYAuaexzaVIIk72btVJ4IlID4QlHTTA9s91SjNphMmAdiUpBOCstbqEDe1HjGG2yFq7HpRQlsDGvDX3VIWQiUkDptUimvbQiWknm1qhEpIhRiduGrmBRaGuAUqIdinplNn/BAmcWlbICjcwU7RTnZxKYRLfAsUhCYFcf3fyq4X4UYhJGTt/28ChTAsdAthElLe/z9FgTzRsVJQ8rpbMih0wbZLHvsPVAU00tnnaYyRkinIboizivM3g6yQU0tSNspOfguUgJq11NluIliHMTD5AJ0BT6GSN7ogkVEeGhp+U1AQM4lKrloFCnSSUzvejIPQQjgTEsjOmAUA/iIDs5AhCADTkKvh4m7FyQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://warez-v3.org/search.php?keywords=%tt%&sr=topics',
      'loggedOutRegex': /Cloudflare|Ray ID|you are not permitted/,
      'matchRegex': /Search found 0/,
      'both': true},
  {   'name': 'WB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAgMAAAAog1vUAAAACVBMVEUAAAA6ZK////9fhjPHAAAAAXRSTlMAQObYZgAAAQdJREFUOMvd072VgzAMAGClyAjskxFSxC7cX3HsoyuuVyFNefrBFjhe4KLHE/gDCZtnALZyiRfArUzxgPtMz6zLygWVt/hPhJa/LDXR4E40SLCAj9jS7kRB9UR8kBhJRAG2LivCJATxLmjVoimJguxRcpKJ0M5sDb0gqC5JdJBEF5KgpoSDEIQPkpwX+3pJKaIsSXTwK1wP4YNaEhlVP1o+tcuP8IlEyRpZu04I43U5r+ZkN/oanXBFrVMTBv8MK9LMg8qSWC877Wei8UZLcRkNzoS+eqfYEG0QvlMxKrHFglipXomMuFh08n0fxEHoRE7fSvPf8Sm0zfRa0X2mJ9xmegBsSVH3B1BBPkcvLzXWAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.warezbook.org/?q=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /<ul>\s*<\/ul>/,
      'both': true},
  {   'name': 'WC',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFMSURBVDjLY3iKCo6GibNIxpxACDCgyi/hZAAB3vWYCjbGWjsVbuRlgACRq2gKHsczoIJaNAWVaPIMHqgKbvGiK3BCVbAMXZ4hC1XBJHR51sOoCtagK2hD8+YDcVR57Zy86l0ovpjLhOEKIVC4WmvCAmq2EIaKh4/rQeEKs+vWlCxOVAV7jMAUUkSgOYSVAV2BJAM2gNsEdAUPdgigxRcnTMHDE9Pmz5+/5IwYmi+OWoKo+cneEb3bwGZooMjzARNBBzASt12HW3KmvqTExdEeCJwKS+r3g4TOnUBLck/dwLpdcKbJpydkgfKyuBPt5YXT3DQ8pi28iksBLN7Xk63g3hLHicGHJWffw+nI4L1bo5724/bF3qinR4OfPtbcjEtB4Jmnl32Bqdwah4JtecCYcQMybFdhVxB8A0h4A/EuM6wK1reAyBAwsRgqBgBT7TkJcA3cwgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://worldscinema.org/?s=%tt%',
      'matchRegex': /Nothing Found/,
      'both': true},
  {   'name': 'WF',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQMAAABtzGvEAAAABlBMVEUAAAAYP4l76Fq/AAAAAXRSTlMAQObYZgAAAD9JREFUGNNjoAVg/Pjj5/8GgtQHoMrPPz6CqT+YFMPnPR+BKuHUXDD1G4X6Px+oEoOSh1IPkSl+ZKoeRNECAACMh1jDPasv+QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://warezforums.com/search/1234567/?q=%tt%&o=date',
      'loggedOutRegex': /Cloudflare|Ray ID|You must be logged/,
      'matchRegex': /No results found/,
      'both': true},
  {   'name': 'WH',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAGFBMVEUAAACZYWCVVVedcXCee3SPaFqRdWGRkWvQggiCAAAAAXRSTlMAQObYZgAAARlJREFUOMvtkkFug0AMRWfUhGznDwxswTdAkwMUwQHY0DVUPUDa+y9qxxYlm0rZxxIz3372tzTCveK/8HjMi2ACqF1SpY21Ed/BIYgYzMFApNbFJJV+Plp70OzRiOyDWtuOnoImHvMRBIDdW6nEHVxucifdJ6cC/U7sfyLphYKKi4ml9IFWa7VrMPBJ9LEsf6DAHazuh4g6oDLAtS24snQ8wQGbaBpm3J05JYnOQFUJaC5T4mk6vFHEO2pUp14s0xHwKDZMvewXE3Q72NbvnK/Bne/gq5sVEKdAzsFMiHQCFEvnp7EU4B4AGldMIxcLzAL4MMAPlK/SLcpTayCK81gOrN+CgF7BmaQUkxoziN7UctOfaAfuFU/FL2vuIcsAMdmRAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.warezheaven.com/?do=search&subaction=search&story=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /search yielded no results/,
      'both': true},
  {   'name': 'XDCC',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAARVBMVEUAAAD///9Yur4ybEUlUT4XMiPx+PdOpKhDfGmc1dhuycxljnLg8e/D5ubF1sqatqRFj5KAo4zh6uTV39iWy7xvvK5QsI64z6uoAAAAAXRSTlMAQObYZgAAAbBJREFUSMeNlVmSwyAMBccgdmzwMnP/ow4YErGYwq/in6Q7AuQSP7OQO8+/0ZiaxvTwJ+gIUmbAo0K69DgG+TJjnsq/RwF5qHFzXb9jI/IM4pNxt/GF21XpRAkAoAKNG2IMGEu8CXiKVTckGYSPQCEbmd+P5Rt+GxKEFkzmEln4LkiekUQjCwQoColnyXB8qY1BBcZSDbktdda4B+kBRFMhPkDBnI1gNfEQ4qtTwqCAaxIhZSPkF95d7EATq1I/ugrmOg/Okcca3Kq60/n4ke2dVZcCtmscq+u3dbfLJCsKIXj646jEpxg+F+zvT5HlRWQp8BeCKYXzhbCXgnshuFK43lSgyBNtp/xhKC0Goppu29FKIOvEOA0NQX5Sw26BRyEbq31+u49zc/Jx6GrVL+xwbjdyNKUFWVthkzAY6957QUYCQCuIPBkUbwUcWpVAmY+zoesgdzcP0AoAWj+d7rHjFG2ExDe74BsdCJSJLOjSOEzaAvK46fClzwbPOM/9ZSGQBTS89AJ7Hv992z8NgxDkg9BFqyv1F4P86IalI358h3c4ZnqDI98rIuDzoDLD/wFhzhZVt2Lv3gAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.xdcc.eu/search.php?searchkey=%search_string_orig%+%year%',
      'matchRegex': /No result found/},
  {   'name': 'XDCC',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAARVBMVEUAAAD///9Yur4ybEUlUT4XMiPx+PdOpKhDfGmc1dhuycxljnLg8e/D5ubF1sqatqRFj5KAo4zh6uTV39iWy7xvvK5QsI64z6uoAAAAAXRSTlMAQObYZgAAAbBJREFUSMeNlVmSwyAMBccgdmzwMnP/ow4YErGYwq/in6Q7AuQSP7OQO8+/0ZiaxvTwJ+gIUmbAo0K69DgG+TJjnsq/RwF5qHFzXb9jI/IM4pNxt/GF21XpRAkAoAKNG2IMGEu8CXiKVTckGYSPQCEbmd+P5Rt+GxKEFkzmEln4LkiekUQjCwQoColnyXB8qY1BBcZSDbktdda4B+kBRFMhPkDBnI1gNfEQ4qtTwqCAaxIhZSPkF95d7EATq1I/ugrmOg/Okcca3Kq60/n4ke2dVZcCtmscq+u3dbfLJCsKIXj646jEpxg+F+zvT5HlRWQp8BeCKYXzhbCXgnshuFK43lSgyBNtp/xhKC0Goppu29FKIOvEOA0NQX5Sw26BRyEbq31+u49zc/Jx6GrVL+xwbjdyNKUFWVthkzAY6957QUYCQCuIPBkUbwUcWpVAmY+zoesgdzcP0AoAWj+d7rHjFG2ExDe74BsdCJSJLOjSOEzaAvK46fClzwbPOM/9ZSGQBTS89AJ7Hv992z8NgxDkg9BFqyv1F4P86IalI358h3c4ZnqDI98rIuDzoDLD/wFhzhZVt2Lv3gAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.xdcc.eu/search.php?searchkey=%search_string_orig%',
      'matchRegex': /No result found/,
      'TV': true},
  {   'name': 'xTorrenty',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAGFBMVEUAAACqAABW/VSKYCB8ii6aMBBh51FpwkGjI1kwAAAAAXRSTlMAQObYZgAAAStJREFUOMudlEFugzAQRekNioBk3R9k1qTtAZxG3SNEsgflAFhFvX49GPgQQ6VkNh75ef6MZ2QHQfASevYacN8n4aoxwAvZBOGG/Q/enVkvklVPoIZYZr29OG8TqD4A9ZOLWxr1VcxynJA5J6mbRfIroHtnr4oFiIDGhTasatQq5IDK78DOaV1S3mNMioNdTEcwadm0saQmYF1HG0Uw1XVIaj0H1LpmhQ+kTfVt0V3WhfwOsK4loFa7BKwrXQUXQOVryc0v0K2AWFU1tQikHUcWTCDtiIGb38RMIDK/7fYstQgi2Rm0CDhT40ZPkJh2vKSeAzfTSYuAMzVQBJJas2EtQXlSn26//AbSagAiPEjv0Fs3gOhsTfe5z73JlR5/g0+88w2t7U9m81v6A07RbOJZ3JKeAAAAAElFTkSuQmCC',
      'searchUrl': 'https://xtorrenty.org/?do=search&subaction=search&story=%search_string_orig%+%year%&catlist[]=0',
      'loggedOutRegex': /Cloudflare|Ray ID|odzyskaj hasło/,
      'matchRegex': /przyniosło żadnych rezultatów/},
  {   'name': 'xTorrenty',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAGFBMVEUAAACqAABW/VSKYCB8ii6aMBBh51FpwkGjI1kwAAAAAXRSTlMAQObYZgAAAStJREFUOMudlEFugzAQRekNioBk3R9k1qTtAZxG3SNEsgflAFhFvX49GPgQQ6VkNh75ef6MZ2QHQfASevYacN8n4aoxwAvZBOGG/Q/enVkvklVPoIZYZr29OG8TqD4A9ZOLWxr1VcxynJA5J6mbRfIroHtnr4oFiIDGhTasatQq5IDK78DOaV1S3mNMioNdTEcwadm0saQmYF1HG0Uw1XVIaj0H1LpmhQ+kTfVt0V3WhfwOsK4loFa7BKwrXQUXQOVryc0v0K2AWFU1tQikHUcWTCDtiIGb38RMIDK/7fYstQgi2Rm0CDhT40ZPkJh2vKSeAzfTSYuAMzVQBJJas2EtQXlSn26//AbSagAiPEjv0Fs3gOhsTfe5z73JlR5/g0+88w2t7U9m81v6A07RbOJZ3JKeAAAAAElFTkSuQmCC',
      'searchUrl': 'https://xtorrenty.org/?do=search&subaction=search&story=%search_string_orig%&catlist[]=89',
      'loggedOutRegex': /Cloudflare|Ray ID|odzyskaj hasło/,
      'matchRegex': /przyniosło żadnych rezultatów/,
      'TV': true},
  {   'name': 'YTS.do',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5BAMAAAB+Np62AAAAGFBMVEUAAAAVKQktfCBsrTZenjEnTxM8aR5NiSmj225UAAABbUlEQVQ4y+WTQU/CQBCFp8bKdUsEr7JJ+QODcCau9roUi9dCtVxBCv37vsXE7kIyP0DnMFnyzXu8ZVj6r6UkmEgwshIdKkk6kqR3pUTfReOTaDyX6P1Oom9Woo0YyiiKBoqSn6JBsfBonBH1tY10qlGjGE15kWeY0DbWxZnmaJ62Bxrpsj+Oio0uEp3CvatbR6HBj52P3Sm8LihtUm1dB02vaa7H6I5s9DqgE7Q+DM+uOGkbUIXgrQVt3Uje7v1UDHrTosXtI7mZo38jxvIfMmdgSkJ9vPoL5B3sMzcHOkyS5sWjMWO/y6lLwJYqYzDdVcQg1RNhBAkOzLNgZweEXrlLDmuiwfYUrrviUvrn8Fygd903dWG60zOXwrNb8lR4dj0OxeGzg3UojsIlMu/9zzmkgXhiPd9gFCtini1+4Ze6yFgxT9bqfFw1a7qo+ACc1UVRN+ZIVzUAZoPqYKDeIpoxmWcbyld1/ZnQX65vDoc/lpvrtC8AAAAASUVORK5CYII=',
      'searchUrl': 'https://yts.do/movie/%search_string%-%year%/',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'positiveMatch': true,
      'spaceEncode': '-',
      'matchRegex': /movie-poster/},
  {   'name': 'YTS.mx',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5BAMAAAB+Np62AAAAGFBMVEUAAAAVKQktfCBsrTZenjEnTxM8aR5NiSmj225UAAABbUlEQVQ4y+WTQU/CQBCFp8bKdUsEr7JJ+QODcCau9roUi9dCtVxBCv37vsXE7kIyP0DnMFnyzXu8ZVj6r6UkmEgwshIdKkk6kqR3pUTfReOTaDyX6P1Oom9Woo0YyiiKBoqSn6JBsfBonBH1tY10qlGjGE15kWeY0DbWxZnmaJ62Bxrpsj+Oio0uEp3CvatbR6HBj52P3Sm8LihtUm1dB02vaa7H6I5s9DqgE7Q+DM+uOGkbUIXgrQVt3Uje7v1UDHrTosXtI7mZo38jxvIfMmdgSkJ9vPoL5B3sMzcHOkyS5sWjMWO/y6lLwJYqYzDdVcQg1RNhBAkOzLNgZweEXrlLDmuiwfYUrrviUvrn8Fygd903dWG60zOXwrNb8lR4dj0OxeGzg3UojsIlMu/9zzmkgXhiPd9gFCtini1+4Ze6yFgxT9bqfFw1a7qo+ACc1UVRN+ZIVzUAZoPqYKDeIpoxmWcbyld1/ZnQX65vDoc/lpvrtC8AAAAASUVORK5CYII=',
      'searchUrl': 'https://yts.mx/browse-movies/%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'positiveMatch': true,
      'matchRegex': /img-responsive/}
];

var private_sites = [
  {   'name': 'FearNoPeer',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUBAQHY2NhHR0eUlJSEE9rLAAAAwElEQVQoz93NIQ7CMBQG4H9rJiYq52dq8PNc4rUVC6mf2QEWsnCHBYtZQsYBSAhi4Q4NBoFGYTAYeN1usT9pm6/vTx6WkGFYnZ7AZTgyPBG1QEGG744BRtk5INvgwFBWWQYfxG9VJyXXaiAXtpjhIKyoMxdqvvqmZeq8KywiokaWcu3HUOEtSsuRKmoZLyiT3Ii2gDBA0fc7/puxlx9B4EQauKcmMgGpRmyE4YcjGTrWcpqoBrjicf5NkxEhOZaRP01rNfngb+g+AAAAAElFTkSuQmCC',
      'searchUrl': 'https://fearnopeer.com/torrents?tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /torrent-search--list__overview/,
      'seedingRegex': /fa-arrow-circle-up/,
      'positiveMatch': true,
      'both': true},
 {    'name': 'FearNoPeer-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUBAQHY2NhHR0eUlJSEE9rLAAAAwElEQVQoz93NIQ7CMBQG4H9rJiYq52dq8PNc4rUVC6mf2QEWsnCHBYtZQsYBSAhi4Q4NBoFGYTAYeN1usT9pm6/vTx6WkGFYnZ7AZTgyPBG1QEGG744BRtk5INvgwFBWWQYfxG9VJyXXaiAXtpjhIKyoMxdqvvqmZeq8KywiokaWcu3HUOEtSsuRKmoZLyiT3Ii2gDBA0fc7/puxlx9B4EQauKcmMgGpRmyE4YcjGTrWcpqoBrjicf5NkxEhOZaRP01rNfngb+g+AAAAAElFTkSuQmCC',
      'searchUrl': 'https://fearnopeer.com/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
 {    'name':'Nordicq',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAyVBMVEVZWmBaW2BYWV9ZWWBPT19MTGYAAABYWmBYWWBYWGBXWmBWV19ZW15aW2H6+vrMzM74+PhbXGLFxcdeX2VfYGbFxsjy8vJjZGr29vfw8PFpanDs7Ozp6eqOj5NmZ2y7vL62trn09PS/v8F0dXrS0tOmp6uZmp6DhIjk5eXIyMrBwcO5ubyur7KAgIRwcXbh4eLY2NrX19izs7ajpKeSkpaLjJB8fIJtbnPm5ufc3N2Vlprt7e6dnaGHh4x4eX7U1NbOztDExMaztLaeuBsGAAAADXRSTlP2+caUEAoAycFhXFZRxmjojwAAAdpJREFUSMft1lmzmjAYxvHoUc+axzeCLAooqLiC+3qWLt//QzVUxuR02hm4a2f6v8rA+7vIRTJhjfrLA+OFYtXneoPV7xgvXOWuxl4YLxF7Yg+8VFXGygE5X7L/oDAwBP9ThpklB3Rw3CyOXLXfbv18Otn2o9lsFkXf41Qo0CcadhT4RjTlWXbPc5AXLt8UaAIUBTfQBppcFqzxqZ6pATi5UCCYAvBa/ax50wXCraEBUNv+DC4WMB3YpiEzg/ESdD4q4BBoY+rAjEArbWe+C/IVWA8JoRQKBCvQSChgr4C5Aq3BGXDmhgKdE8Id15rJzxrg6YngjAwFPFi+DnrAUAf8Y0VwR6I4EMkJsKQoCGTJKyGMRXHAx0tCN76CYAkn5iohp9q/ArHvAq73E9hfQT1TgcEEGOng2s6CLANiQXD3Bs+z+w6sgw7yfC8H/GMCuPPd+1j2Hk8d0Mz+DRCxmwNxIYDcbtZrCKB74Dq4NZI/r+fh0pUkj5xJcjsPm/V6oYB4m0z219Vh8cVzLcuSwOkd+Q0EnU7ANZGmIl8anXQgmxPofChxaxgLF7B8ozDg5q7VakWJKApktsz8m6/Kfx2wsvPVcuCePVd4iSqP5R8njdpTtSBh94+1xg9A740rqUF6CQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://nordicq.org/torrents?tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /torrent-search--list__overview/,
      'seedingRegex': /fa-arrow-circle-up/,
      'positiveMatch': true,
      'both': true},
 {    'name':'Nordicq-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAyVBMVEVZWmBaW2BYWV9ZWWBPT19MTGYAAABYWmBYWWBYWGBXWmBWV19ZW15aW2H6+vrMzM74+PhbXGLFxcdeX2VfYGbFxsjy8vJjZGr29vfw8PFpanDs7Ozp6eqOj5NmZ2y7vL62trn09PS/v8F0dXrS0tOmp6uZmp6DhIjk5eXIyMrBwcO5ubyur7KAgIRwcXbh4eLY2NrX19izs7ajpKeSkpaLjJB8fIJtbnPm5ufc3N2Vlprt7e6dnaGHh4x4eX7U1NbOztDExMaztLaeuBsGAAAADXRSTlP2+caUEAoAycFhXFZRxmjojwAAAdpJREFUSMft1lmzmjAYxvHoUc+axzeCLAooqLiC+3qWLt//QzVUxuR02hm4a2f6v8rA+7vIRTJhjfrLA+OFYtXneoPV7xgvXOWuxl4YLxF7Yg+8VFXGygE5X7L/oDAwBP9ThpklB3Rw3CyOXLXfbv18Otn2o9lsFkXf41Qo0CcadhT4RjTlWXbPc5AXLt8UaAIUBTfQBppcFqzxqZ6pATi5UCCYAvBa/ax50wXCraEBUNv+DC4WMB3YpiEzg/ESdD4q4BBoY+rAjEArbWe+C/IVWA8JoRQKBCvQSChgr4C5Aq3BGXDmhgKdE8Id15rJzxrg6YngjAwFPFi+DnrAUAf8Y0VwR6I4EMkJsKQoCGTJKyGMRXHAx0tCN76CYAkn5iohp9q/ArHvAq73E9hfQT1TgcEEGOng2s6CLANiQXD3Bs+z+w6sgw7yfC8H/GMCuPPd+1j2Hk8d0Mz+DRCxmwNxIYDcbtZrCKB74Dq4NZI/r+fh0pUkj5xJcjsPm/V6oYB4m0z219Vh8cVzLcuSwOkd+Q0EnU7ANZGmIl8anXQgmxPofChxaxgLF7B8ozDg5q7VakWJKApktsz8m6/Kfx2wsvPVcuCePVd4iSqP5R8njdpTtSBh94+1xg9A740rqUF6CQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://nordicq.org/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
 {    'name': 'SB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUvZbAqXaYnUIsmP2P7yQHwrQMjRXWVjERhb2k4X5ZSbYGNgi+2my3JriTOqRZ3gGfwERnxAAAAdklEQVQI12MQZAADRgYBBtzgaWhMaGjoQgb+8I6umI7SQgb+mJUzw2e2FjFwXnE95eLi0sTAKPXXxaej5BgD4ySlI+7GJs8YuO7edXF5F7KZQaq8vGL37t3GDIJCSsnGxsZmIEYakJHGICiopJYGBECGkBIIAAAnTSIG6J1fTgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://superbits.org/api/v1/torrents?searchText=%tt%',
      'goToUrl': 'https://superbits.org/search?search=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|inloggningscookie/,
      'matchRegex': /seeder/,
      'positiveMatch': true,
      'ignoreEmpty': true,
      'both': true},
 {    'name': 'TT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAhBQTFRFAAAAFxcXfIdXgZNPPUchAAAAAAAAV2RIY3pDPEojAAAAKioqZW9Gq8RfjqdMAAAADBMGeJVJaIk6KDMYAAAAcX1MrsZmjKRLAAAAAAAAAAAABgwGcI8/Y4I6LDsZfpFGlq9RVFw9iJtaj6hZhJ5RaH0/QEsreJdHOk8hSFQnmK5RkahNo75YkKRbo79ffZ1HXXc1bo8+XHo0WXcyGyUOCg8FCQkEISUSDhMHBQoABAgAWmc7JTAVbH4/N0kefY9JRVsnAAAAjKNNVW8vAAAAHBwVExoNY3E+nr1Wg51JgJxIiqtMOUckDw8KDQ0GAAAAYmpFr8Vqo7pesMpnrMZmVWQwLTQcsbGxsLGwIysVYHJEiahXdZVFc5JLY4I9ICwSfI1Gl7JRHSIQAAAAlZWVi4uLAAAAJzAVdZZBOEsfUV4rmbFSkqxPBwcDAAAAAAAAGh8Ud5ZFc5dAWnczICoRPEYio7xXjaZMBwcDFBoKbo0+ZIM3Fx8MAAAAS1YoY3M0KzIWKjcWRFglJjIUAAAAs9Fgep5EuNRjdJhBvNhluNVidZpCcZdAocFXmrpUk7RRja5Npb1jp8ZaocBXhqlKbIo8rctdgKRHla9QpsRag6VIcJA+gJZFaHs4nrxVh6hKSl0paYc6qsdccog+aX05hJ9IfJhEV2wwYnw2f6JHkKhQmLRTfJtGbYlAtdFh////SoNNDAAAAIV0Uk5TAAuJyWsDAWPIjxAGYvzyNyjv/HIIfPf1PAcbKPD4ir/4ncjh4cmX9tVt+/3+/v7+/v79/IkyNXqQMjp5jZ2yw9AM5esdJCfL/v7+/tkwJgJg+f3+/umz+vy04f7+/fpusvpvEtDaIFX4yHT390IhJzHy/vmPYfr3RjHy/HgKi9qIctmeExoMbtgAAAABYktHRK/ObKMxAAAACXBIWXMAAB7BAAAewQHDaVRTAAAA0klEQVQYGVXBvy4EURiH4d/7zZkz50+BRCIalWajkSgVsjcgao3sFYhIlAq1VmdD4kI020zcApEImTtQ7CzrDJXnQQx6SZ7i03LOVympSOkyxnWXOPuOJDRv0MUNls4rxSKt5azqNDFicALc8avehWPowfEAr65/0n690MDcTDJJZo0K70ySSTLnsrTivW1KThrjYYOi2unk/AEEpsCEyCEc8Z9bHdE/82er5sXS27ZynqZ0H6O6Llfvex9h6Wdt+zWu/bJurQthHm9VXDeLEB5/AFWwKWjvya9AAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE1LTA1LTAxVDE4OjA2OjExKzAyOjAwq9Q12QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNS0wNS0wMVQxODowNjoxMSswMjowMNqJjWUAAAAASUVORK5CYII=',
      'searchUrl': 'https://tt.smallfoot.me/t?q=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Reset Password/,
      'matchRegex': /No Torrents Found!/,
      'both': true},
 {    'name': 'TT-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAhBQTFRFAAAAFxcXfIdXgZNPPUchAAAAAAAAV2RIY3pDPEojAAAAKioqZW9Gq8RfjqdMAAAADBMGeJVJaIk6KDMYAAAAcX1MrsZmjKRLAAAAAAAAAAAABgwGcI8/Y4I6LDsZfpFGlq9RVFw9iJtaj6hZhJ5RaH0/QEsreJdHOk8hSFQnmK5RkahNo75YkKRbo79ffZ1HXXc1bo8+XHo0WXcyGyUOCg8FCQkEISUSDhMHBQoABAgAWmc7JTAVbH4/N0kefY9JRVsnAAAAjKNNVW8vAAAAHBwVExoNY3E+nr1Wg51JgJxIiqtMOUckDw8KDQ0GAAAAYmpFr8Vqo7pesMpnrMZmVWQwLTQcsbGxsLGwIysVYHJEiahXdZVFc5JLY4I9ICwSfI1Gl7JRHSIQAAAAlZWVi4uLAAAAJzAVdZZBOEsfUV4rmbFSkqxPBwcDAAAAAAAAGh8Ud5ZFc5dAWnczICoRPEYio7xXjaZMBwcDFBoKbo0+ZIM3Fx8MAAAAS1YoY3M0KzIWKjcWRFglJjIUAAAAs9Fgep5EuNRjdJhBvNhluNVidZpCcZdAocFXmrpUk7RRja5Npb1jp8ZaocBXhqlKbIo8rctdgKRHla9QpsRag6VIcJA+gJZFaHs4nrxVh6hKSl0paYc6qsdccog+aX05hJ9IfJhEV2wwYnw2f6JHkKhQmLRTfJtGbYlAtdFh////SoNNDAAAAIV0Uk5TAAuJyWsDAWPIjxAGYvzyNyjv/HIIfPf1PAcbKPD4ir/4ncjh4cmX9tVt+/3+/v7+/v79/IkyNXqQMjp5jZ2yw9AM5esdJCfL/v7+/tkwJgJg+f3+/umz+vy04f7+/fpusvpvEtDaIFX4yHT390IhJzHy/vmPYfr3RjHy/HgKi9qIctmeExoMbtgAAAABYktHRK/ObKMxAAAACXBIWXMAAB7BAAAewQHDaVRTAAAA0klEQVQYGVXBvy4EURiH4d/7zZkz50+BRCIalWajkSgVsjcgao3sFYhIlAq1VmdD4kI020zcApEImTtQ7CzrDJXnQQx6SZ7i03LOVympSOkyxnWXOPuOJDRv0MUNls4rxSKt5azqNDFicALc8avehWPowfEAr65/0n690MDcTDJJZo0K70ySSTLnsrTivW1KThrjYYOi2unk/AEEpsCEyCEc8Z9bHdE/82er5sXS27ZynqZ0H6O6Llfvex9h6Wdt+zWu/bJurQthHm9VXDeLEB5/AFWwKWjvya9AAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE1LTA1LTAxVDE4OjA2OjExKzAyOjAwq9Q12QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNS0wNS0wMVQxODowNjoxMSswMjowMNqJjWUAAAAASUVORK5CYII=',
      'searchUrl': 'https://tt.smallfoot.me/requests?q=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID|Reset Password/,
      'matchRegex': /torrentNameInfo/,
      'positiveMatch': true,
      'both': true},
 {   'name': 'LDU',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfAgMAAAD7OCcfAAAADFBMVEUOFQiu2Bk5SQx8nBS983KFAAAAT0lEQVQY02MgE2gxMK1qADGmNnCGHlgAY9yAMOIb7kAYEQzXMBjXqc0IAzJMEzgjuEEM1fif4V9jgAze0MrQ0AoggxnEeAB29KJVq4jzHgDikTAb4Q/EagAAAABJRU5ErkJggg==',
      'searchUrl': 'https://theldu.to/torrents?tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /torrent-search--list__overview/,
      'seedingRegex': /fa-arrow-circle-up/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'LDU-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfAgMAAAD7OCcfAAAADFBMVEUOFQiu2Bk5SQx8nBS983KFAAAAT0lEQVQY02MgE2gxMK1qADGmNnCGHlgAY9yAMOIb7kAYEQzXMBjXqc0IAzJMEzgjuEEM1fif4V9jgAze0MrQ0AoggxnEeAB29KJVq4jzHgDikTAb4Q/EagAAAABJRU5ErkJggg==',
      'searchUrl': 'https://theldu.to/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
 {   'name': 'BWT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAADm5uZJRQb6AAAAJUlEQVQI12P4/x+EGtgZGpgZDjSCUTPDASCbEcZtBEoBFUBUAgDM+xMZ0lHWKQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://bwtorrents.cc/index.php?search=%search_string_orig%+%year%&blah=0&cat=0&incldead=0',
      'loggedOutRegex': /Cloudflare|Ray ID|FORGOT PASSWORD/,
      'matchRegex': /Nothing found/,
      'both': true},
  {   'name': 'BWT-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAADm5uZJRQb6AAAAJUlEQVQI12P4/x+EGtgZGpgZDjSCUTPDASCbEcZtBEoBFUBUAgDM+xMZ0lHWKQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://bwtorrents.cc/viewrequests.php?search=%search_string_orig%&filter=true',
      'loggedOutRegex': /Cloudflare|Ray ID|FORGOT PASSWORD/,
      'matchRegex': />No</,
      'positiveMatch': true,
      'both': true},
 {   'name': 'DC',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUAAABESlMiJSoiJSoiJSr+/v58pca90uLSz/MtAAAABXRSTlMA/kB/e7s4J2gAAAA2SURBVAjXY0AARUEgEAEyREOBIBCZYQiSEgIyBMEAyBALDU1LS0SogQEUNaWlQDUIEUw1mAAA8LUL4ehpLh4AAAAASUVORK5CYII=',
      'searchUrl': 'https://digitalcore.club/api/v1/torrents?categories[]=1&categories[]=2&categories[]=3&categories[]=4&categories[]=5&categories[]=6&categories[]=7&dead=false&limit=1&page=search&searchText=%search_string%+%year%',
      'goToUrl': 'https://digitalcore.club/search?search=%search_string%+%year%&cats=1,2,5,6,3,4,7&fc=true',
      'loggedOutRegex': /It doesnt work here/,
      'matchRegex': /imdbid/,
      'rateLimit': 250,
      'positiveMatch': true},
  {   'name': 'DC',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUAAABESlMiJSoiJSoiJSr+/v58pca90uLSz/MtAAAABXRSTlMA/kB/e7s4J2gAAAA2SURBVAjXY0AARUEgEAEyREOBIBCZYQiSEgIyBMEAyBALDU1LS0SogQEUNaWlQDUIEUw1mAAA8LUL4ehpLh4AAAAASUVORK5CYII=',
      'searchUrl': 'https://digitalcore.club/api/v1/torrents?categories[]=8&categories[]=9&categories[]=10&categories[]=11&categories[]=12&categories[]=13&categories[]=14&dead=false&limit=1&page=search&searchText=%search_string%',
      'goToUrl': 'https://digitalcore.club/search?search=%search_string%&cats=8,9,10,11,13,12,14&fc=true',
      'loggedOutRegex': /It doesnt work here/,
      'matchRegex': /imdbid/,
      'rateLimit': 250,
      'positiveMatch': true,
      'TV': true},
 {   'name': 'Milkie',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD9fXmrM5dvAAAAAXRSTlMAQObYZgAAABVJREFUCNdjgIP6ZyCUlgBGaegIBgDorwkfv0B7AgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://milkie.cc/api/v1/torrents?query=%search_string%+%year%&oby=created_at&odir=desc&categories=1&pi=0&ps=50',
      'goToUrl': 'https://milkie.cc/browse?query=%search_string%+%year%&categories=1',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /hits":0/},
  {   'name': 'Milkie',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD9fXmrM5dvAAAAAXRSTlMAQObYZgAAABVJREFUCNdjgIP6ZyCUlgBGaegIBgDorwkfv0B7AgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://milkie.cc/api/v1/torrents?query=%search_string%&oby=created_at&odir=desc&categories=2&pi=0&ps=50',
      'goToUrl': 'https://milkie.cc/browse?query=%search_string%&categories=2',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /hits":0/,
      'TV': true},
 {   'name': 'upscalevault',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAVFBMVEUAAACpeRqWZRbOnRu6iibZuFjGrGSdZBSXYxjGljXt2H2tfi2EVhru2X3gyHKqdBzx4YrXsVNENBpNMhIUEAkBAQEUDgddRBhEMRMoHg5yUhn2yAyAdzjZAAAAFXRSTlMA/v3+9fsOuk2c9SsYvkB0bGzHjM4PDUZWAAACQklEQVRIx8WV2ZaqMBBFu5IwCYjYN5VU+f//eQ/GBLodeerzoCvLs1Oj8PVnqo/1Pv/p0O0ijodDddwVAMBcf3r7aRzhh7q5/6DY8VBRiCISg3G2e5MY7C6yz+JoXNe/8sPufyqSa5/6Twdl/1usbnrmr4J/pADijZ+FPfOalmsf1qslbQvWWQpcYtxXXo+UfhS6QOrt5QLkFtF0v+31qZL0o14WBQDWWsP5lrbeDn6ZraZshGkFiH3QdI1rmmmTDlZB0vVuIayKD8YSPgGlEETNkIF+rCqT87HCt1mLsNob4NUY05cIw/nWxIBsHMOrurQo2gIwy7a33+xLBAVXQSToTgagf8OmR2PwOYIVH5EhSjCMkRWAqa9vdvQoDzkSIQAtR1YX8aFaANd1Q1oJKC8poxi2lq9wSOcCOGoWYIbfxrw1ZJidlSU9il4MznnaRDSlLZo7m2uw1olXa4SjMYIL3ApMU7t2SQoAlsk6IhOXAa8RzsO2rX4FiL0omcUvBK60td78889RMrAsdS5WTAEkntt1NVxONdilUpUrE5GcJgAotJbQOQcjFPHFBomjcjQIh6DpJvibtYi+6xpNka9+Agf/tQ5OLWqaBgE2ak0eBW2AkHes3L5qyjsgahYAdo2cL3nwFBiaULZAImYWJZ8FE36gPhH3EsK7YgcRXfHfEyr3T8qnfmj41vADYfRs/nqlttGQq2UJ+Wn/GjGqAVLMdoL9vYZ2agjutv/8RTpbMu2u1+5eoO5osz2f1QH/3+g/jLFL2gO05E8AAAAASUVORK5CYII=',
      'searchUrl': 'https://upscalevault.com/torrents?tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /torrent-search--list__overview/,
      'seedingRegex': /fa-arrow-circle-up/,
      'positiveMatch': true,
      'both': true},
 {    'name': 'upscalevault-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAVFBMVEUAAACpeRqWZRbOnRu6iibZuFjGrGSdZBSXYxjGljXt2H2tfi2EVhru2X3gyHKqdBzx4YrXsVNENBpNMhIUEAkBAQEUDgddRBhEMRMoHg5yUhn2yAyAdzjZAAAAFXRSTlMA/v3+9fsOuk2c9SsYvkB0bGzHjM4PDUZWAAACQklEQVRIx8WV2ZaqMBBFu5IwCYjYN5VU+f//eQ/GBLodeerzoCvLs1Oj8PVnqo/1Pv/p0O0ijodDddwVAMBcf3r7aRzhh7q5/6DY8VBRiCISg3G2e5MY7C6yz+JoXNe/8sPufyqSa5/6Twdl/1usbnrmr4J/pADijZ+FPfOalmsf1qslbQvWWQpcYtxXXo+UfhS6QOrt5QLkFtF0v+31qZL0o14WBQDWWsP5lrbeDn6ZraZshGkFiH3QdI1rmmmTDlZB0vVuIayKD8YSPgGlEETNkIF+rCqT87HCt1mLsNob4NUY05cIw/nWxIBsHMOrurQo2gIwy7a33+xLBAVXQSToTgagf8OmR2PwOYIVH5EhSjCMkRWAqa9vdvQoDzkSIQAtR1YX8aFaANd1Q1oJKC8poxi2lq9wSOcCOGoWYIbfxrw1ZJidlSU9il4MznnaRDSlLZo7m2uw1olXa4SjMYIL3ApMU7t2SQoAlsk6IhOXAa8RzsO2rX4FiL0omcUvBK60td78889RMrAsdS5WTAEkntt1NVxONdilUpUrE5GcJgAotJbQOQcjFPHFBomjcjQIh6DpJvibtYi+6xpNka9+Agf/tQ5OLWqaBgE2ak0eBW2AkHes3L5qyjsgahYAdo2cL3nwFBiaULZAImYWJZ8FE36gPhH3EsK7YgcRXfHfEyr3T8qnfmj41vADYfRs/nqlttGQq2UJ+Wn/GjGqAVLMdoL9vYZ2agjutv/8RTpbMu2u1+5eoO5osz2f1QH/3+g/jLFL2gO05E8AAAAASUVORK5CYII=',
      'searchUrl': 'https://upscalevault.com/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
 {   'name': 'Lat-Team',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAADTv6rv2Ln6+Pd/fHSvqJuXURXyrgbrICSpw93T3+vvgYQ4bbZ1msIiMIsoeT9y64EHAAAAAXRSTlMAQObYZgAABVFJREFUSMd1lVlo1EAYx2PzYiuCExNURDCzLh5FSHcUTWuFXSdqPcm6QeqJUDeKx0OrjW+iQh1YkOrqw5aqC9GHLZ4tQiAvgiK0bEtxEans6osH1doXD1CQ9cusR+vxDTm/3/y/b/J9YYSJJtZfCImEaML/rEp5GhLd/wKiNuXcm7aatJ4V/4mQCKnqqABTTpF/zC/NClV1vGzT0zlt5dnj2b+B4jYisldt+oWctsjZ2vmn2xW7R0YIA4XzGc1zylr95Dwa+4XG/KDmvWzV3Qxhzhfh9rZJArvyWX2w6HrjrTm3q+Hsya9i+dNEidp7+TXiYLHgjbXmSNfKsyeHl607+WEC0OA/8UkxP1BroUyPO9spu4l1J9dMDOH7/owbI5ndFMwwF37TPw5u1X67e0HC79UvgTemWnSz+ey28XCDQH4iVWx+le/fvR7Mxgghi+544dBO8Rew4kRKm+urFCyKFEWxLHqJfoKyhn5EcOwTZ6b0JgIgbipK3FQV42qBkDqm/YhgOywUpjyCpGIpjONyc88o8dj8isKis077aRCwzGgAIFUKq0Z30WOnKgqa6DlO2KAUYUWVVElBpmLKzY9YquIXN86fwlpllDAUhFTwKUjBktzksZlCJECqX6dCK08beAFfogQaGAals/tE7EASUMXaFFZiOEytGEYmADAwLIgsdJw2AG4NRbEvm4qkJAwJYw4gidIN4Hc2ALCnaW4qZKmQAE7EsYSRYiITwZIXOseG3kESdX5v7d0oRjAgRWqBBmCw6oWbxllvkGXE6w3HOIARvI8GKngBpfJrNvPHQucqXBurMBEIfpugO1O8FnUmmhlZCsuXQEOtfO9gvTj8mNTnLmcFufyZddAozDAC79pksoUaCWoZiG7K50udQrgcW9+R3I/BA9bCzz9u9yPoM1CIr+9w9qu2k7Sddmo7YO3wAOMAY+yOsLf8kXXY+5fbyfakAxPt4GzDud05dBcpnYJirWXMblkLwFoQOMoBxwYR53A+nx+GdUDr2DAb9NtpRSF4cGz7YA8h/DNE5kL0dgiRjFJQgrn8wT7iBm6ihhpYEiwBRwzLSW780lIc7NGEWtZXxxISMrGFLIRk3tpQO0mNeksu5zuFOtYXYfdMFAyoaAIACUgFiuodHgEFws4Qdq9SLBVjAAwcPKjyzn254qAmiOw08dXoBCDKASyDu6sHAK+PRPwnWIURljAIIAkHwyq5uWJ/sAxoiNRFHASFXgKBcHCN46ahUU10ecFZKrQsqlTaFTKA/wZgec3N97zrhSkstUZ/EvQRB+K40vjy7D53Nv+1pqVIaWg0wRMDAEkqv21axEK1/OcUSePQezIvFpbgS4WpYloIoi14TDy9MJfHaBwf1VaeAo8iobChIgAURBe2iavH0kJgq/u1Kpa6FkMQXDWwBDFMuclxNH3oAQdqNKGB9dZDdKRiqAFckCG/OdYq6FkOBGn4daHrBlKgHnCKo8SORS9b1oV+bzTpEUL6ZWqZpqRYlkWj3ZGOj9tbtV8CN8fd6QN6AgiEwG+kr9xf2eI4v4Hn41p3ofuCRbk13xxtHBW9l20c4GmOPxDzbr4hdQ/0mzOZnvH6Ma3h3Hzhl3VrjYPz+qcyNqfQ2HW5lL7yZMuw6Gu/ASLcKHQX6jy2eGBVupRxV72/8RZeTjCIUMyS66o+sKrQY5KaMX1MEyYBI3q/QCipHrgxDBfyPF0EYBKx6oHYbJHqfgByOe3W2782Rj1bUy4XAqA+U9KqHwh/W3W5/KF6YNWwXiql/7n31uzlQKGm1EX+s3nnsgEguv/f/rWaZ3panPTqOxo0HgEGsbMiAAAAAElFTkSuQmCC',
      'searchUrl': 'https://lat-team.com/torrents?tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /torrent-search--list__overview/,
      'seedingRegex': /fa-arrow-circle-up/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Lat-Team-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAADTv6rv2Ln6+Pd/fHSvqJuXURXyrgbrICSpw93T3+vvgYQ4bbZ1msIiMIsoeT9y64EHAAAAAXRSTlMAQObYZgAABVFJREFUSMd1lVlo1EAYx2PzYiuCExNURDCzLh5FSHcUTWuFXSdqPcm6QeqJUDeKx0OrjW+iQh1YkOrqw5aqC9GHLZ4tQiAvgiK0bEtxEans6osH1doXD1CQ9cusR+vxDTm/3/y/b/J9YYSJJtZfCImEaML/rEp5GhLd/wKiNuXcm7aatJ4V/4mQCKnqqABTTpF/zC/NClV1vGzT0zlt5dnj2b+B4jYisldt+oWctsjZ2vmn2xW7R0YIA4XzGc1zylr95Dwa+4XG/KDmvWzV3Qxhzhfh9rZJArvyWX2w6HrjrTm3q+Hsya9i+dNEidp7+TXiYLHgjbXmSNfKsyeHl607+WEC0OA/8UkxP1BroUyPO9spu4l1J9dMDOH7/owbI5ndFMwwF37TPw5u1X67e0HC79UvgTemWnSz+ey28XCDQH4iVWx+le/fvR7Mxgghi+544dBO8Rew4kRKm+urFCyKFEWxLHqJfoKyhn5EcOwTZ6b0JgIgbipK3FQV42qBkDqm/YhgOywUpjyCpGIpjONyc88o8dj8isKis077aRCwzGgAIFUKq0Z30WOnKgqa6DlO2KAUYUWVVElBpmLKzY9YquIXN86fwlpllDAUhFTwKUjBktzksZlCJECqX6dCK08beAFfogQaGAals/tE7EASUMXaFFZiOEytGEYmADAwLIgsdJw2AG4NRbEvm4qkJAwJYw4gidIN4Hc2ALCnaW4qZKmQAE7EsYSRYiITwZIXOseG3kESdX5v7d0oRjAgRWqBBmCw6oWbxllvkGXE6w3HOIARvI8GKngBpfJrNvPHQucqXBurMBEIfpugO1O8FnUmmhlZCsuXQEOtfO9gvTj8mNTnLmcFufyZddAozDAC79pksoUaCWoZiG7K50udQrgcW9+R3I/BA9bCzz9u9yPoM1CIr+9w9qu2k7Sddmo7YO3wAOMAY+yOsLf8kXXY+5fbyfakAxPt4GzDud05dBcpnYJirWXMblkLwFoQOMoBxwYR53A+nx+GdUDr2DAb9NtpRSF4cGz7YA8h/DNE5kL0dgiRjFJQgrn8wT7iBm6ihhpYEiwBRwzLSW780lIc7NGEWtZXxxISMrGFLIRk3tpQO0mNeksu5zuFOtYXYfdMFAyoaAIACUgFiuodHgEFws4Qdq9SLBVjAAwcPKjyzn254qAmiOw08dXoBCDKASyDu6sHAK+PRPwnWIURljAIIAkHwyq5uWJ/sAxoiNRFHASFXgKBcHCN46ahUU10ecFZKrQsqlTaFTKA/wZgec3N97zrhSkstUZ/EvQRB+K40vjy7D53Nv+1pqVIaWg0wRMDAEkqv21axEK1/OcUSePQezIvFpbgS4WpYloIoi14TDy9MJfHaBwf1VaeAo8iobChIgAURBe2iavH0kJgq/u1Kpa6FkMQXDWwBDFMuclxNH3oAQdqNKGB9dZDdKRiqAFckCG/OdYq6FkOBGn4daHrBlKgHnCKo8SORS9b1oV+bzTpEUL6ZWqZpqRYlkWj3ZGOj9tbtV8CN8fd6QN6AgiEwG+kr9xf2eI4v4Hn41p3ofuCRbk13xxtHBW9l20c4GmOPxDzbr4hdQ/0mzOZnvH6Ma3h3Hzhl3VrjYPz+qcyNqfQ2HW5lL7yZMuw6Gu/ASLcKHQX6jy2eGBVupRxV72/8RZeTjCIUMyS66o+sKrQY5KaMX1MEyYBI3q/QCipHrgxDBfyPF0EYBKx6oHYbJHqfgByOe3W2782Rj1bUy4XAqA+U9KqHwh/W3W5/KF6YNWwXiql/7n31uzlQKGm1EX+s3nnsgEguv/f/rWaZ3panPTqOxo0HgEGsbMiAAAAAElFTkSuQmCC',
      'searchUrl': 'https://lat-team.com/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
 {   'name': 'HDT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAHlBMVEUAAABRUVFhYWEdHR13d3dCQkKRkZGwsLDt7e3Pz89GPqTkAAAArElEQVQoz2MYQBAoKCgYCgQGUD6Lk5KSkiAQKEEFFGEqGQXAFLMDXC+ExazA7MwQwurmysDgDBEQYJ3MoMHePiMBJqAAFNBkT2BqQhaQZEtgSIcJODA2hXoCBcQNlGECHR3TgQLhCIHGUHc2B2SBZgZxFgcGNwZhqADQ0DAWBeYimIACWCBRPQEhkMwQwpSexAATQPhFAUI5ovmWwcxJCQQUBV0QIQYBAQz0AgBNDR38O7n/UwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://hd-torrents.org/torrents.php?active=0&options=2&search=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|not authorized to view this/,
      'matchRegex': /No torrents here/,
      'both': true},
  {   'name': 'HDT-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAHlBMVEUAAABRUVFhYWEdHR13d3dCQkKRkZGwsLDt7e3Pz89GPqTkAAAArElEQVQoz2MYQBAoKCgYCgQGUD6Lk5KSkiAQKEEFFGEqGQXAFLMDXC+ExazA7MwQwurmysDgDBEQYJ3MoMHePiMBJqAAFNBkT2BqQhaQZEtgSIcJODA2hXoCBcQNlGECHR3TgQLhCIHGUHc2B2SBZgZxFgcGNwZhqADQ0DAWBeYimIACWCBRPQEhkMwQwpSexAATQPhFAUI5ovmWwcxJCQQUBV0QIQYBAQz0AgBNDR38O7n/UwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://hd-torrents.org/requests.php?search=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|not autorized to view this/,
      'matchRegex': /No results/,
      'positiveMatch': true,
      'both': true},
 {   'name': 'ULCX',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUCAgL////39/fm5uZwcHBKSkoyMjKgoKDkmP8gAAAAWElEQVQI12MAAvYCBghwUoHQLIKCDmCGo5KSCFhAKNhUESTErspsEARRzmwAJPAy0tKYFNLSGBiCBQVDXAUFTRkUgUSwYLkwgyAYlAoyOENYJgwsSmDgAADO1wwnzE+V3gAAAABJRU5ErkJggg==',
      'searchUrl': 'https://upload.cx/torrents?tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password|Service Unavailable/,
      'matchRegex': /torrent-search--list__overview/,
      'seedingRegex': /fa-arrow-circle-up/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'ULCX-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUCAgL////39/fm5uZwcHBKSkoyMjKgoKDkmP8gAAAAWElEQVQI12MAAvYCBghwUoHQLIKCDmCGo5KSCFhAKNhUESTErspsEARRzmwAJPAy0tKYFNLSGBiCBQVDXAUFTRkUgUSwYLkwgyAYlAoyOENYJgwsSmDgAADO1wwnzE+V3gAAAABJRU5ErkJggg==',
      'searchUrl': 'https://upload.cx/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password|Service Unavailable/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
 {   'name': 'TL',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAAUJw7///8NuwAbThRea1qVnpPEycMaFYrfAAAAAXRSTlMAQObYZgAAAJxJREFUKM/V0kEKwjAQBdDpDfIx1f2AupZ4gaGC6/QGih7AUO/vzFiNWMR1/ybM4ydkMUQNcIBHgEBEQM8DNF3aAVaIzFudY0rJKsCSmbW9UNBjhPwXLhV0tmwq9OzJbyhPOH3DbXLl96M46nyVycfmAnf5gJY1awUXBbBFHPYOZ4McK6wcMEIDxKIAdAaBrNIWHuAiRFZ5LUREoAdZbkWyP3MLEQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.tlgetin.cc/torrents/browse/list/imdbID/%tt%',
      'goToUrl': 'https://www.tlgetin.cc/torrents/browse/index/imdbID/%tt%',
      'loggedOutRegex': /Signup With Invite/,
      'matchRegex': /"numFound":0/,
      'rateLimit': 250,
      'both': true},
  {   'name': 'TL-Title',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAAUJw7///8NuwAbThRea1qVnpPEycMaFYrfAAAAAXRSTlMAQObYZgAAAJxJREFUKM/V0kEKwjAQBdDpDfIx1f2AupZ4gaGC6/QGih7AUO/vzFiNWMR1/ybM4ydkMUQNcIBHgEBEQM8DNF3aAVaIzFudY0rJKsCSmbW9UNBjhPwXLhV0tmwq9OzJbyhPOH3DbXLl96M46nyVycfmAnf5gJY1awUXBbBFHPYOZ4McK6wcMEIDxKIAdAaBrNIWHuAiRFZ5LUREoAdZbkWyP3MLEQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.tlgetin.cc/torrents/browse/list/categories/8,9,11,12,13,14,15,29,34,35,36,37,43,47/query/%search_string% %year%',
      'goToUrl': 'https://www.tlgetin.cc/torrents/browse/index/query/%search_string% %year%/categories/8,9,11,12,13,14,15,29,34,35,36,37,43,47',
      'loggedOutRegex': /Signup With Invite/,
      'matchRegex': /"numFound":0/,
      'rateLimit': 4100,
      'spaceEncode': '%2B'},
  {   'name': 'TL-Title',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAAUJw7///8NuwAbThRea1qVnpPEycMaFYrfAAAAAXRSTlMAQObYZgAAAJxJREFUKM/V0kEKwjAQBdDpDfIx1f2AupZ4gaGC6/QGih7AUO/vzFiNWMR1/ybM4ydkMUQNcIBHgEBEQM8DNF3aAVaIzFudY0rJKsCSmbW9UNBjhPwXLhV0tmwq9OzJbyhPOH3DbXLl96M46nyVycfmAnf5gJY1awUXBbBFHPYOZ4McK6wcMEIDxKIAdAaBrNIWHuAiRFZ5LUREoAdZbkWyP3MLEQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.tlgetin.cc/torrents/browse/list/categories/26,27,29,32,34,35,44/query/%search_string%',
      'goToUrl': 'https://www.tlgetin.cc/torrents/browse/index/query/%search_string%/categories/26,27,29,32,34,35,44',
      'loggedOutRegex': /Signup With Invite/,
      'matchRegex': /"numFound":0/,
      'rateLimit': 4100,
      'spaceEncode': '%2B',
      'TV': true},
  {   'name': 'TL-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAAUJw7///8NuwAbThRea1qVnpPEycMaFYrfAAAAAXRSTlMAQObYZgAAAJxJREFUKM/V0kEKwjAQBdDpDfIx1f2AupZ4gaGC6/QGih7AUO/vzFiNWMR1/ybM4ydkMUQNcIBHgEBEQM8DNF3aAVaIzFudY0rJKsCSmbW9UNBjhPwXLhV0tmwq9OzJbyhPOH3DbXLl96M46nyVycfmAnf5gJY1awUXBbBFHPYOZ4McK6wcMEIDxKIAdAaBrNIWHuAiRFZ5LUREoAdZbkWyP3MLEQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.tlgetin.cc/user/requests/index?requestCategorySearch=0&requestSearch=%search_string_orig%&status=New',
      'loggedOutRegex': /Signup With Invite/,
      'matchRegex': />Found <b>0</,
      'rateLimit': 250,
      'both': true},
 {   'name': 'ItaTorrents',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAD///8BgTesFyI9EBFDSUUypm11dXXKP0nj6OPkyctqvZTYbnWm2L6qqqrlnKLyi49eAAAAAXRSTlMAQObYZgAAAslJREFUSMetlTFo20AYhT1UuGtGdWkxiTtklAMaSyKRtRifNRgyZNAiAqGNqiHUixrw4CV0qUJNhg6tTZpsXoyntqDB4Nk16lQQGKIlS2oM7ru72DpZ8pYPb/+773+HbSn3yNi2TWx77dgx6pPJ5DZyjOPs4057gyGHJCtBDjaWfM1I2KdeHHh2T1bn0sH5eRyQvXsjOc+TwBMNncufr5ML3nveKA5cdNpXJLHAGLVaQuB55+bih6iw+95oJBqmnX+iQqoFrSAI4sDlfH5zcxYrJGs0CoK+EJhO51M3Vhi9VjAeC4HPc3B39mJxx9oRzvdFwxCBmVpdVOz2xz0gGAaD2WymLHZUu/0+5kdCYEhxd3jNpzWz1+t2u1bCAFyFB6RTEwLLOloJDF3V4BVMs9c1TVMwfPIHvg/DDr+kZVpWMnDVbA6aNHDMAuYhxklDw/f9hquUWIkaZjSwHQe+NSmKwlpK72A4BEUh0AC+UmKGfNEs0k9xOxEAMOxTA44XVgwfG24DFZSSzgJmsVBcMahcwA2HMFBexoEvLoCgpCHwBvsLhVUDgGCPrrC5ABnBoEAQG9CBsi0E1AeFYEh2wCw2YH16haosO/zK6sAF3CDBkO7AFNwgYbaug6ZzQ3qF+tBhnxvWd6CBfBXDjA60gvYqB0hmB34J9osqZ6xQmWCPBz6s6QCBxv8XGR2ELxOBcnYHCHAJym7GirgCqGQEeIXjnLhD7MAaaKjAA/rW1layAxcsH6akXE6vgAAbOE9IygABNizRy3BUl/PzOyrAHZackE04PE+WN2RZ9ry/JQ2Iz3KqqLbbHqPz+y3OiwIoNLJJrr9Trq//RCcaayBS2S0b0YRyG0X1E1wBAhFJq5AwjKIoDEPHqWgaSb2S9N2oXsen7iCw+JqSNQwndIBtV3iBtEM3HMcwCNFxPgsJqxlGbh15CPDafVz+A2/8isiYLYP4AAAAAElFTkSuQmCC',
      'searchUrl': 'https://itatorrents.xyz/torrents?tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Password Dimenticata|Service Unavailable/,
      'matchRegex': /torrent-search--list__overview/,
      'seedingRegex': /fa-arrow-circle-up/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'ItaTorrents-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAD///8BgTesFyI9EBFDSUUypm11dXXKP0nj6OPkyctqvZTYbnWm2L6qqqrlnKLyi49eAAAAAXRSTlMAQObYZgAAAslJREFUSMetlTFo20AYhT1UuGtGdWkxiTtklAMaSyKRtRifNRgyZNAiAqGNqiHUixrw4CV0qUJNhg6tTZpsXoyntqDB4Nk16lQQGKIlS2oM7ru72DpZ8pYPb/+773+HbSn3yNi2TWx77dgx6pPJ5DZyjOPs4057gyGHJCtBDjaWfM1I2KdeHHh2T1bn0sH5eRyQvXsjOc+TwBMNncufr5ML3nveKA5cdNpXJLHAGLVaQuB55+bih6iw+95oJBqmnX+iQqoFrSAI4sDlfH5zcxYrJGs0CoK+EJhO51M3Vhi9VjAeC4HPc3B39mJxx9oRzvdFwxCBmVpdVOz2xz0gGAaD2WymLHZUu/0+5kdCYEhxd3jNpzWz1+t2u1bCAFyFB6RTEwLLOloJDF3V4BVMs9c1TVMwfPIHvg/DDr+kZVpWMnDVbA6aNHDMAuYhxklDw/f9hquUWIkaZjSwHQe+NSmKwlpK72A4BEUh0AC+UmKGfNEs0k9xOxEAMOxTA44XVgwfG24DFZSSzgJmsVBcMahcwA2HMFBexoEvLoCgpCHwBvsLhVUDgGCPrrC5ABnBoEAQG9CBsi0E1AeFYEh2wCw2YH16haosO/zK6sAF3CDBkO7AFNwgYbaug6ZzQ3qF+tBhnxvWd6CBfBXDjA60gvYqB0hmB34J9osqZ6xQmWCPBz6s6QCBxv8XGR2ELxOBcnYHCHAJym7GirgCqGQEeIXjnLhD7MAaaKjAA/rW1layAxcsH6akXE6vgAAbOE9IygABNizRy3BUl/PzOyrAHZackE04PE+WN2RZ9ry/JQ2Iz3KqqLbbHqPz+y3OiwIoNLJJrr9Trq//RCcaayBS2S0b0YRyG0X1E1wBAhFJq5AwjKIoDEPHqWgaSb2S9N2oXsen7iCw+JqSNQwndIBtV3iBtEM3HMcwCNFxPgsJqxlGbh15CPDafVz+A2/8isiYLYP4AAAAAElFTkSuQmCC',
      'searchUrl': 'https://itatorrents.xyz/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Password Dimenticata|Service Unavailable/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
 {
      'name': 'extremlymtorrents',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAAmJiYmJiYmJiYmJiYmJibi7nArAAAABnRSTlMA+scvk2JNeUGiAAABLUlEQVQ4y31UQY7DIAy0VO0DNtoPYKV3S7Qf6MJ9Fcj/v7LGlusATXxD4xk82AbGuD3CN8cyA1UAnICnAJgm4IGNsO4nSvcIkYMOSi+5OhPsHNEJuwD4C5A4yqC0rIWBF2KOkxID2BLIAHVXoDE0QyJqTeufkplCphRUSa5rKaV3R3IITZS8JkkzrVz6muxCTXJ31gDJ6pRc6x47JaVsokVvd2+gciZmiq7Uax3dGUW0nqgE6tu55E2VIjhDtPg1palGcPMK5CNQw4nUJpfW4XJrSV+uG9zJ29c/CRcnABZXkmLGR5REPflQjY1iimpdt7bOwxDhZHwKXQ1c0vaZV/eY0N/HPP4UGNfg67AGKeVPizOuWrVhPF/OG9DHdb7+AOYvY0l2HutaZkA9hn9CLmNULjLvIwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://extremlymtorrents.ws/torrents-search.php?search=%search_string%+%year%&cat=0',
      'loggedOutRegex' : /Cloudflare|Ray ID|Recover Account|Recuperare Cont/,
      'matchRegex': /Nothing found|Nimic gasit/,
      'both': true},
 {    'name':'estone',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEVrWER+alWYhXGqmojp5tzJwrfEKH+AAAABmklEQVQ4y72Ti43cMAxErQ5IpYGIRgo4Ce7AbiBa9t9KZkjLiK+AewsbFkfDj4TdfhjZtlLKWnGh+InI0kX0FrBXXjvXjuCdlJTcrqpGFHYKqQgEG4eDLv85+K7j+Jzn6fP345CScScfb4w9jjocDLPj6rJapPGXn9fsbSt/WCRR6Lp/Lu+NO0ajkG1uZffTu0biqplJgRQ05F/bCzNrWo/znF0rvqP1EMiOCXyw4fmU7qPbflBw53x/9RYGhMHQ5VCvbEFCGEZDgpaF0SWs+IUhwBL6cvhkIhF9p3JHOVUteCiQLD7NrGogmWrQwrNStd1arbTsoUDg6Fr3Y0JmawNwcrZqFSP5l7blyNGvyWqfqy9HzE4hbvakQEeHsBvuYxGC3MX761RuIRRU8Ts+Wg7Y02GYZZ1KCoYLQREqDmanoWxMhXg3QtlYQCUcwIZZawpKvAqFneTxcV0gSTgMhqApkSxBhyX0EP4N02HdksYyRZgJPPEKIhX2k7W5BizMpkC7G+VDCggH7d+QOJJXoAjAB3gE+At4lv8AsSV7XCu9ZrEAAAAASUVORK5CYII=',
      'searchUrl': 'https://estone.cc/bongeszo.php?kereses_nev=%search_string%+%year%',
      'matchRegex': /kategoria_torrent/,
      'loggedOutRegex' : /name="login"/,
      'positiveMatch': true,
      'both': true},
 {    'name': 'IPT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAb1BMVEVCQkMZGRtGRkgZGRsZGRtDQ0QZGRsAAAAZGRtGRkhAQEFEREUrKy0tLS8ZGRtHR0n9+/vR0NCLiouioaKura6ZmJg0NDbn5eXFw8Rvbm9SUlNpaWsjIyXy8PHw7u7b2trMysu/vr65uLmAgIFCQUNIcGJiAAAADnRSTlNymYZ3h5QxAID9OzWMfjsgHNAAAAB+SURBVBjTZcpZEoIwEADRETRh0cxMVgi4e/8zGqUKE+nPVw2yg6xOQt9iVttDhUXVPxwSaEbL7OIKhpCZyWIwPzA4XC0Fm+C0HOZsJ3pMeIR6duRv4f58eXJ+3kOtNKlBqxQ5pQrgy/iFqNUYP+D1AnlbaECUIECKZrfWCPkGWrMN2RQ0B4AAAAAASUVORK5CYII=',
      'searchUrl': 'https://imdbscout.octopus.town/t?q=%tt%',
      'loggedOutRegex': /Ray ID|security check to access|Forgot your password/,
      'matchRegex': /No Torrents Found!/},
  {   'name': 'IPT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAb1BMVEVCQkMZGRtGRkgZGRsZGRtDQ0QZGRsAAAAZGRtGRkhAQEFEREUrKy0tLS8ZGRtHR0n9+/vR0NCLiouioaKura6ZmJg0NDbn5eXFw8Rvbm9SUlNpaWsjIyXy8PHw7u7b2trMysu/vr65uLmAgIFCQUNIcGJiAAAADnRSTlNymYZ3h5QxAID9OzWMfjsgHNAAAAB+SURBVBjTZcpZEoIwEADRETRh0cxMVgi4e/8zGqUKE+nPVw2yg6xOQt9iVttDhUXVPxwSaEbL7OIKhpCZyWIwPzA4XC0Fm+C0HOZsJ3pMeIR6duRv4f58eXJ+3kOtNKlBqxQ5pQrgy/iFqNUYP+D1AnlbaECUIECKZrfWCPkGWrMN2RQ0B4AAAAAASUVORK5CYII=',
      'searchUrl': 'https://imdbscout.octopus.town/t?72=&73=&q=%search_string%&qf=ti',
      'loggedOutRegex': /Ray ID|security check to access|Forgot your password/,
      'matchRegex': /No Torrents Found!/,
      'TV': true},
  {   'name': 'IPT-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAb1BMVEVCQkMZGRtGRkgZGRsZGRtDQ0QZGRsAAAAZGRtGRkhAQEFEREUrKy0tLS8ZGRtHR0n9+/vR0NCLiouioaKura6ZmJg0NDbn5eXFw8Rvbm9SUlNpaWsjIyXy8PHw7u7b2trMysu/vr65uLmAgIFCQUNIcGJiAAAADnRSTlNymYZ3h5QxAID9OzWMfjsgHNAAAAB+SURBVBjTZcpZEoIwEADRETRh0cxMVgi4e/8zGqUKE+nPVw2yg6xOQt9iVttDhUXVPxwSaEbL7OIKhpCZyWIwPzA4XC0Fm+C0HOZsJ3pMeIR6duRv4f58eXJ+3kOtNKlBqxQ5pQrgy/iFqNUYP+D1AnlbaECUIECKZrfWCPkGWrMN2RQ0B4AAAAAASUVORK5CYII=',
      'searchUrl': 'https://imdbscout.octopus.town/requests?72=&73=&q="%search_string_orig%"',
      'loggedOutRegex': /Ray ID|security check to access|Forgot your password/,
      'matchRegex': /\( 0 requests/,
      'both': true},
  {   'name': 'Yu-Scene',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAKCxnyBwhxBhSwBxJd+PsWLUo/zuYIiN46obvq9PQHU5g2XnLtLETle4iRnaRqUG26AAAAAXRSTlMAQObYZgAAA0RJREFUSMfd1M1r1EAYBvABLVX08polohas0z15ELIJIohgk7lWvIxxqyDxY61WlD3UtSCeFEfw4Iq1rngR/IAB9SK2ZU+rtkqpCm1PYgpST4VWvHgo0vWdJNvOLvkH9DkNmd/O+2wSQv6RbKyo3InWJS2rF3kcbcn9xAxGIF9QGVfL44W1AKZCoqsmLs2zhwlpKwImgNV8TkC9Xv/VoUBtZ72+YsGFSpTf0JOAOSmfwQAhPkxKOQ9feJTeeXATkPsqX8E4rmBZvrAuyRicyCbAN0/SBRlsPdxWNKWcMXtl/C/uNQCvnaa7JZbACnjAefn0gVB53QBtZaB7VAkfzssf5rK8IqJcb4D2I+BSVUJVmNkmn4sWQPKQi0oUQb7sPoMH3GYq4SrgQSYqUe7ACkNcCJdmXUqpAkkJA0s8Btgun2ATcZ1mPQePWANYgr38CTC5NGPyo+JtFpIgSEo4bGEpgJUlrwPBdHcrGIAMO7RU61gMY2AZLmOebVsN0FYzWM/i953hLIIrYhpyZL1LVRqgCIwtfrsYASHuImjJcSwRzn0KWZfpi9I1MGxGD+rAB5wRhiH+9QeixGsAYLidGsAS3oEwnKZd0CeGeH5qIkChgzLYjgK7YJ+4xTH+BBjaEe2XwbZ7QkotsEV1iKvUmqrmsdcBBDi7r1qtVEqc5yGjHVEKDNvBCgj2VlXGOC8C1WbUcIaqgDNiMcLz+oyNZQQuVvBw1t5+JQZ4sEWbcRUMBJDJAkpbnXKDlw0NVGKQ67RQOMzbXx3xL0NWKxHEgKxXAjM6hoCmAOJZgHE+Cv8quPrNbgDC7BiUUoFnk3WMeZD5IIbv6aA9BoZtq8e8rtsYHhxVoLUDgOGod8kyS4Oj71PAhQlQyIJt/Fh1NgWc6/0TKGIO8fv9aaDv4dP8o6mpqWHuFwpdKfdhx02e5FjhdBd0ak8rASLZx09fbpeRAkbx4zWM39A3hQK1MmkAd+KczDa9cxti0F+Ngvun8O1x00Dye4dSfK1TwCl80g5TN7Mbci2AISiobcZw3wODkiaQwesAdhILwO1sBgZeBi04QM+mAJpiuJSkAYdh8ChsQZqz+V20Rz0sSTEHSWsUcGmW/J/5C0x5gAjJEKFdAAAAAElFTkSuQmCC',
      'searchUrl': 'https://yu-scene.net/torrents?tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password|Service Unavailable/,
      'matchRegex': /torrent-search--list__overview/,
      'seedingRegex': /fa-arrow-circle-up/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Yu-Scene-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAKCxnyBwhxBhSwBxJd+PsWLUo/zuYIiN46obvq9PQHU5g2XnLtLETle4iRnaRqUG26AAAAAXRSTlMAQObYZgAAA0RJREFUSMfd1M1r1EAYBvABLVX08polohas0z15ELIJIohgk7lWvIxxqyDxY61WlD3UtSCeFEfw4Iq1rngR/IAB9SK2ZU+rtkqpCm1PYgpST4VWvHgo0vWdJNvOLvkH9DkNmd/O+2wSQv6RbKyo3InWJS2rF3kcbcn9xAxGIF9QGVfL44W1AKZCoqsmLs2zhwlpKwImgNV8TkC9Xv/VoUBtZ72+YsGFSpTf0JOAOSmfwQAhPkxKOQ9feJTeeXATkPsqX8E4rmBZvrAuyRicyCbAN0/SBRlsPdxWNKWcMXtl/C/uNQCvnaa7JZbACnjAefn0gVB53QBtZaB7VAkfzssf5rK8IqJcb4D2I+BSVUJVmNkmn4sWQPKQi0oUQb7sPoMH3GYq4SrgQSYqUe7ACkNcCJdmXUqpAkkJA0s8Btgun2ATcZ1mPQePWANYgr38CTC5NGPyo+JtFpIgSEo4bGEpgJUlrwPBdHcrGIAMO7RU61gMY2AZLmOebVsN0FYzWM/i953hLIIrYhpyZL1LVRqgCIwtfrsYASHuImjJcSwRzn0KWZfpi9I1MGxGD+rAB5wRhiH+9QeixGsAYLidGsAS3oEwnKZd0CeGeH5qIkChgzLYjgK7YJ+4xTH+BBjaEe2XwbZ7QkotsEV1iKvUmqrmsdcBBDi7r1qtVEqc5yGjHVEKDNvBCgj2VlXGOC8C1WbUcIaqgDNiMcLz+oyNZQQuVvBw1t5+JQZ4sEWbcRUMBJDJAkpbnXKDlw0NVGKQ67RQOMzbXx3xL0NWKxHEgKxXAjM6hoCmAOJZgHE+Cv8quPrNbgDC7BiUUoFnk3WMeZD5IIbv6aA9BoZtq8e8rtsYHhxVoLUDgOGod8kyS4Oj71PAhQlQyIJt/Fh1NgWc6/0TKGIO8fv9aaDv4dP8o6mpqWHuFwpdKfdhx02e5FjhdBd0ak8rASLZx09fbpeRAkbx4zWM39A3hQK1MmkAd+KczDa9cxti0F+Ngvun8O1x00Dye4dSfK1TwCl80g5TN7Mbci2AISiobcZw3wODkiaQwesAdhILwO1sBgZeBi04QM+mAJpiuJSkAYdh8ChsQZqz+V20Rz0sSTEHSWsUcGmW/J/5C0x5gAjJEKFdAAAAAElFTkSuQmCC',
      'searchUrl': 'https://yu-scene.net/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password|Service Unavailable/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'AT',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://avistaz.to/movies?search=&imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /class="overlay-container"|class="movie-poster/,
      'positiveMatch': true},
  {   'name': 'AT',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://avistaz.to/tv-shows?search=&imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /class="overlay-container"|class="movie-poster/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'AT-Req',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://avistaz.to/requests?search=%search_string_orig%&condition=new',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /Request Not Fulfilled/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'ReelFliX',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAACAgL9/f1ERETEAhfIxMWFhYXZXmwZIsDkAAAAAXRSTlMAQObYZgAAAjZJREFUSMetlUFu4zAMRVP0AlEEex8GzmwjG8kBBh7M2iqcvR3UJwgw1x+K+rJkK243/Run1RNJUSS1+2k1SjWXzdV3BW0gRindTNPDfV+v609LTnfzinhT2hJUDUrn66Ws970gg9qvAOz/UOoG4rIKYCTWWbFq8WL08oBX7GNpcjotnBjtg1OiEXBqoMYu0YG8u0s8giZR54GCvIkYhaoXQEkwEXNgc4Bl9gHg/zxUYyNQPdt/zOvo4UOOdwoxPNu2/eN84AzWn68+K//91TpZ9gEP2KrJyNc+BfhNnQdMwUnxKwIWVSv6y/tCCAYpdKS27EFEZwCWFJwT3SdLAbAkyXzXFAERAETJMW4DnQAFzTFU/Lsb5xjoCCCkkDwwn4JO2gE1/0CKIeQBgKkJPmqpNBuCsHKhAE4w0Ek14C4A+Aq7NzeCJSLcJn8BBDUkCR8sQd8DWy7o0XwCyIMs0R+1BJkfU41Ii45AmqjKwgDzAN4OSaqvDI+E0kQm08s6lwy70oSPY3bdlp2wQy+G9y8LJgLDPiu5vk8BcxFgnGPwE2aOoVK+7A9z2fsJgzHh2mXdOEPaPzXHiNZjW+nW0fMoagli2bwHMXGVENB7y/YvqGrcNDyqOIG2B8j2CEqnmClXAP5KxuCY5rhAuSWTFJvChEkNIEyYwIQRGAYgaSj4KMCunqsSAzq8CzAQnWDe3yes6/zJupEI78ouExvv0U8PrOfPYjP1/cTLWM8JSH/1MrOZ3c/qP2t3xmIhwQlRAAAAAElFTkSuQmCC',
      'searchUrl': 'https://reelflix.xyz/torrents?tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Forgot Your Password|Service Unavailable/,
      'matchRegex': /torrent-search--list__overview/,
      'seedingRegex': /fa-arrow-circle-up/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'ReelFliX-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAACAgL9/f1ERETEAhfIxMWFhYXZXmwZIsDkAAAAAXRSTlMAQObYZgAAAjZJREFUSMetlUFu4zAMRVP0AlEEex8GzmwjG8kBBh7M2iqcvR3UJwgw1x+K+rJkK243/Run1RNJUSS1+2k1SjWXzdV3BW0gRindTNPDfV+v609LTnfzinhT2hJUDUrn66Ws970gg9qvAOz/UOoG4rIKYCTWWbFq8WL08oBX7GNpcjotnBjtg1OiEXBqoMYu0YG8u0s8giZR54GCvIkYhaoXQEkwEXNgc4Bl9gHg/zxUYyNQPdt/zOvo4UOOdwoxPNu2/eN84AzWn68+K//91TpZ9gEP2KrJyNc+BfhNnQdMwUnxKwIWVSv6y/tCCAYpdKS27EFEZwCWFJwT3SdLAbAkyXzXFAERAETJMW4DnQAFzTFU/Lsb5xjoCCCkkDwwn4JO2gE1/0CKIeQBgKkJPmqpNBuCsHKhAE4w0Ek14C4A+Aq7NzeCJSLcJn8BBDUkCR8sQd8DWy7o0XwCyIMs0R+1BJkfU41Ii45AmqjKwgDzAN4OSaqvDI+E0kQm08s6lwy70oSPY3bdlp2wQy+G9y8LJgLDPiu5vk8BcxFgnGPwE2aOoVK+7A9z2fsJgzHh2mXdOEPaPzXHiNZjW+nW0fMoagli2bwHMXGVENB7y/YvqGrcNDyqOIG2B8j2CEqnmClXAP5KxuCY5rhAuSWTFJvChEkNIEyYwIQRGAYgaSj4KMCunqsSAzq8CzAQnWDe3yes6/zJupEI78ouExvv0U8PrOfPYjP1/cTLWM8JSH/1MrOZ3c/qP2t3xmIhwQlRAAAAAElFTkSuQmCC',
      'searchUrl': 'https://reelflix.xyz/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Forgot Your Password|Service Unavailable/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'PSS',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAxlBMVEX//6r9/aoNDfoAAP8cHPUfH/S3t8H6+qsYGPcEBP3Q0LnX17f29qwUFPg6OusJCfvn57GtrcTx8a4lJfLJybvh4bM0NO29vb/Bwb7r67Dv76/z860iIvMqKvBtbdmamsvc3LVHR+eCgtOlpcfT07gwMO5kZN1oaNyTk82oqMa6usDOzrre3rRDQ+dPT+R3d9aNjc+Rkc6hoci+vr/ExL34+KwuLu9AQOhfX96JidCxscPZ2bbf37Tj47M/P+lYWOBycth9fdQiV6g8AAACGElEQVRIx+2U15aqMBSGk2yYJCq9g1ix9za2ccr7v9QJsECPOtdz43/Byp/sj13CAr300t8J69WrWlGxXat4XlIrg1r+2A5wtjZ6sixbcq567ydAQnSkyozJ7tLMwifzOmNS3HBSd+S855tzIIZp6l0L4jNGtKO5PjWbMjTSJDaT1iHd7rl0Ee4yHH5gNCLkLcWnKrghqiqSnjqbDASwi/Mzx2UfqNCW5Zt4pREPdaGdl/6VAlWotzK3vAEqUg6gMdO6aARSmLnmIgOInzn73XkEtkwboRaDeQunszLFk/bg3UsdDfAj8KaIknYNDrNpeegRkI0y9gpETohxU7PEYIM5ByuhKBc9ElBGuwdgQdrJua0YqTd/FGDr4uJ26zpo3/o90AFet9p+nrvWVEBpljc9cYH3wzsA6Rv/5i0bCaBbVt7ac/imd8CNaIRRVQVm5wkiisIG50P8C1DruPGsiz2WfxqnWex2wqANsvMcwH1rObTAxw0QVyUG11i34YgMRes+BxytibHRnyKHkwRFvRlF+sBDpgsd/BSwNSPtQqSSeQXp1kGsaiL0CxYlYP8HFN1FGjsLQKWZo598dZ0hI6drfbB3st4XMDBREJNTymNDqVeLLpMD532blkMiqhFGkz75nGJEReDqUpsuZdkvKpqomZJyTGNVIUSJV3mAfmDCSYMA/S5aGY8nJi7/AZu3rY7RSy/9pf4BXNUsJ0dDcYcAAAAASUVORK5CYII=',
      'searchUrl':'https://privatesilverscreen.cc/torrents?tmdbId=%tmdbid%',
      'loggedOutRegex':/Cloudflare|Forgot Your Password|Service Unavailable/,
      'both': true,
      'matchRegex':/torrent-search--list__overview/,
      'positiveMatch':true},
  {   'name':'PSS-Req',
      'icon':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAxlBMVEX//6r9/aoNDfoAAP8cHPUfH/S3t8H6+qsYGPcEBP3Q0LnX17f29qwUFPg6OusJCfvn57GtrcTx8a4lJfLJybvh4bM0NO29vb/Bwb7r67Dv76/z860iIvMqKvBtbdmamsvc3LVHR+eCgtOlpcfT07gwMO5kZN1oaNyTk82oqMa6usDOzrre3rRDQ+dPT+R3d9aNjc+Rkc6hoci+vr/ExL34+KwuLu9AQOhfX96JidCxscPZ2bbf37Tj47M/P+lYWOBycth9fdQiV6g8AAACGElEQVRIx+2U15aqMBSGk2yYJCq9g1ix9za2ccr7v9QJsECPOtdz43/Byp/sj13CAr300t8J69WrWlGxXat4XlIrg1r+2A5wtjZ6sixbcq567ydAQnSkyozJ7tLMwifzOmNS3HBSd+S855tzIIZp6l0L4jNGtKO5PjWbMjTSJDaT1iHd7rl0Ee4yHH5gNCLkLcWnKrghqiqSnjqbDASwi/Mzx2UfqNCW5Zt4pREPdaGdl/6VAlWotzK3vAEqUg6gMdO6aARSmLnmIgOInzn73XkEtkwboRaDeQunszLFk/bg3UsdDfAj8KaIknYNDrNpeegRkI0y9gpETohxU7PEYIM5ByuhKBc9ElBGuwdgQdrJua0YqTd/FGDr4uJ26zpo3/o90AFet9p+nrvWVEBpljc9cYH3wzsA6Rv/5i0bCaBbVt7ac/imd8CNaIRRVQVm5wkiisIG50P8C1DruPGsiz2WfxqnWex2wqANsvMcwH1rObTAxw0QVyUG11i34YgMRes+BxytibHRnyKHkwRFvRlF+sBDpgsd/BSwNSPtQqSSeQXp1kGsaiL0CxYlYP8HFN1FGjsLQKWZo598dZ0hI6drfbB3st4XMDBREJNTymNDqVeLLpMD532blkMiqhFGkz75nGJEReDqUpsuZdkvKpqomZJyTGNVIUSJV3mAfmDCSYMA/S5aGY8nJi7/AZu3rY7RSy/9pf4BXNUsJ0dDcYcAAAAASUVORK5CYII=',
      'searchUrl': 'https://privatesilverscreen.cc/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Forgot Your Password|Service Unavailable/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Seedpool',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAw1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ+P/M8f/L7/+73f4aHyUOFBvW/v/X/P/U+//C5/+/5v/A4/+32/+20/GmyvCsyumTsdNre4pdboA/T2E0OTwsMTcgKTQsLzIcJjEWFhTS+f/O8//H7f/J7P/E6f+84P+11vi01fWrz/Ww0O+jxOeXttiGpsqBoMGSqLx9m7yLorl5kq1vg5ljfJlvf49AVGpWYGg3R1lAR04nMT0vMzcLDxQEBwsMCwoHCAnmygrtAAAAB3RSTlMA5bJ+ciy5LvMwCgAAAK9JREFUGNNlT9UOw0AMO2ibK4zKvHbMzPz/X7XrdZsqzQ+RE8uKjQrIlGBMqIw+kECgZkjlrpT72VQPSkW/u1qrn0vcD/ACuG5b3VHPeYKMaDYb7/w620S2lwBQRJYdS50GBtTYiTsJwuvmQGtzGtVjPjHCxtzTdX7Zq7k4ED7TYeMCCweEhYpMbiOcrApG+dsCD59Z+o0T+RvsyGwWAEi/6JnZ1GJQKuXSMBH6X/03UswNMDkCCoYAAAAASUVORK5CYII=',
      'searchUrl': 'https://seedpool.org/torrents?imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /torrent-search--list__overview/,
      'seedingRegex': /fa-arrow-circle-up/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Seedpool-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAw1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ+P/M8f/L7/+73f4aHyUOFBvW/v/X/P/U+//C5/+/5v/A4/+32/+20/GmyvCsyumTsdNre4pdboA/T2E0OTwsMTcgKTQsLzIcJjEWFhTS+f/O8//H7f/J7P/E6f+84P+11vi01fWrz/Ww0O+jxOeXttiGpsqBoMGSqLx9m7yLorl5kq1vg5ljfJlvf49AVGpWYGg3R1lAR04nMT0vMzcLDxQEBwsMCwoHCAnmygrtAAAAB3RSTlMA5bJ+ciy5LvMwCgAAAK9JREFUGNNlT9UOw0AMO2ibK4zKvHbMzPz/X7XrdZsqzQ+RE8uKjQrIlGBMqIw+kECgZkjlrpT72VQPSkW/u1qrn0vcD/ACuG5b3VHPeYKMaDYb7/w620S2lwBQRJYdS50GBtTYiTsJwuvmQGtzGtVjPjHCxtzTdX7Zq7k4ED7TYeMCCweEhYpMbiOcrApG+dsCD59Z+o0T+RvsyGwWAEi/6JnZ1GJQKuXSMBH6X/03UswNMDkCCoYAAAAASUVORK5CYII=',
      'searchUrl': 'https://seedpool.org/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'LST',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAAAAAD///+D3c/SAAAAAXRSTlMAQObYZgAAAKlJREFUKM990rERgzAMBVCnYISk8DQZgQJR0KfxPmwQF9aUkZSzv/8dBwXwsCRzlpJfD5G3Pfo79HRsYwFLyx8roiwOUR6HKItjRAqSZFzI9wqMBVg9HxVyFdm1iap+U24iRZVwDmjH4TglbhdogBWoMxTYrdqAlBliSUABPn0lx69EzuaoBN8n8LKvh/rOhvkMCDfnlgA6+Nv+oI3cYG49hoLHhQeJRuwHxie7qwtJseAAAAAASUVORK5CYII=',
      'searchUrl': 'https://lst.gg/torrents?imdbId=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password|Service Unavailable/,
      'matchRegex': /torrent-search--list__overview/,
      'seedingRegex': /fa-arrow-circle-up/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'LST-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAAAAAD///+D3c/SAAAAAXRSTlMAQObYZgAAAKlJREFUKM990rERgzAMBVCnYISk8DQZgQJR0KfxPmwQF9aUkZSzv/8dBwXwsCRzlpJfD5G3Pfo79HRsYwFLyx8roiwOUR6HKItjRAqSZFzI9wqMBVg9HxVyFdm1iap+U24iRZVwDmjH4TglbhdogBWoMxTYrdqAlBliSUABPn0lx69EzuaoBN8n8LKvh/rOhvkMCDfnlgA6+Nv+oI3cYG49hoLHhQeJRuwHxie7qwtJseAAAAAASUVORK5CYII=',
      'searchUrl': 'https://lst.gg/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password|Service Unavailable/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Krazyzone',
      'icon': 'https://krazyzone.net/favicon.ico',
      'searchUrl': 'https://krazyzone.net/torrents-search.php?search=%search_string%',
      'both': true,
      'matchRegex': /Nothing Found|No torrents found/,
      'loggedOutRegex': /Signup|Recover Account/},
  {   'name': 'Yoinked',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAADliP/zxf/99P/bmAY3AAAAAXRSTlMAQObYZgAAAJtJREFUKM9jAAPeAgYE4ExA4vDWMx+Ac5hCMxuQOKEUcrKmIRndYM+AxIGx7Jn/8G2wP/AfzHl1aLVlzqvm1WDO1EPhljlXm8OwcFaFLY0CEhBOKBgQ5IT9DA3Nnwrj8IaGFpDNsT8wNexvaGj91DDmPwyqBTB7eCPwcbJCoWAlkBMKBwQ5+T+ROB/4EZywA8xT4ZxwBoarg4MDAIQBk3Nt6YfnAAAAAElFTkSuQmCC',
      'searchUrl': 'https://yoinked.org/torrents?imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /torrent-search--list__overview/,
      'seedingRegex': /fa-arrow-circle-up/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Yoinked-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAADliP/zxf/99P/bmAY3AAAAAXRSTlMAQObYZgAAAJtJREFUKM9jAAPeAgYE4ExA4vDWMx+Ac5hCMxuQOKEUcrKmIRndYM+AxIGx7Jn/8G2wP/AfzHl1aLVlzqvm1WDO1EPhljlXm8OwcFaFLY0CEhBOKBgQ5IT9DA3Nnwrj8IaGFpDNsT8wNexvaGj91DDmPwyqBTB7eCPwcbJCoWAlkBMKBwQ5+T+ROB/4EZywA8xT4ZxwBoarg4MDAIQBk3Nt6YfnAAAAAElFTkSuQmCC',
      'searchUrl': 'https://yoinked.org/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
];

var chinese_sites = [
  {
    'name': 'cdfile',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEUAAABorvFQnOwpdOE8iObg7fxDjuqZxvS72Pg8iulSn+4ufOUpduNgpu/E3vre6/z6/P+SrkhCAAAAEHRSTlMA/v39/v4a/v5ArX2/apgvOFYY3wAAAhlJREFUSMetlYtu7CAMRG9Y3oTk/v/XdmxjDFEVtVJnIzUNc5jxsu3++3tF6BfWWErvvcQf2WGttR5Q7a/E2LYONxPlpUXhnd2xyiHivcRTvTysd79EKaXpwn3OfKVrjaASVw6qnCaQw9R1m79X57D2X5VnhD0EYMV5wGRIGBH2MKCTViK/Lu+EPpTMqkDpGxAUsFr8u6tlA0RwZyM2AEcXB0CV+OUABCotHcZTAjIl9KgzNOdkiYGUJGIDDljqnLqTn8QAMI0gKXAsADpxIQUSE4jYE+zzR4AlkEVKbQnQBOIDcGmUegB9dmoPQErhdgBBgFbss7QAw0TEsSfUCYwh/AScRXgF/D61d14B3Njc3jmt5H2fUzf2ayW+1bfWO0nwAJodnRdiJngtxQAS2ABgqJ0e0kqQ8zr3SOD1ZYiTPJpAtxZBQOIEf5aoQINFgIMTmJAIrQSd7Q2QUmgjCSybmoEPA+of71TI+ANBT4mIyxCfkQBwvJzMHQA5foAhVkATjEAbUSIAlwHxhEEA/FTApwnQMq5liJN8AhDCQqkJMPE9IF65jqCAqC1DfKySyecHEFdAPhoEmHjuoIAdNTqNs6VDXSPSkmAnDaCnJPE5Y9nksgDn2Rr2N13Lv/vjsxIBQIWb7aaew5QB2Lhe+mWyq1Q6Yr68ennbeN/3tvd2EmqFWdy76UmY2awvQGmN942Q2d8RLvHX+gIHqyh/qGWQ6wAAAABJRU5ErkJggg==',
    'searchUrl' : 'https://pt.cdfile.org/torrents.php?search=%tt%&search_area=1',
    'loggedOutRegex': /Forget your password|忘记了密码|忘記了密碼/,
    'matchRegex': /Nothing found|Try again/,
    'both':true},
  { 'name': 'cdfile (name)',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEUAAABorvFQnOwpdOE8iObg7fxDjuqZxvS72Pg8iulSn+4ufOUpduNgpu/E3vre6/z6/P+SrkhCAAAAEHRSTlMA/v39/v4a/v5ArX2/apgvOFYY3wAAAhlJREFUSMetlYtu7CAMRG9Y3oTk/v/XdmxjDFEVtVJnIzUNc5jxsu3++3tF6BfWWErvvcQf2WGttR5Q7a/E2LYONxPlpUXhnd2xyiHivcRTvTysd79EKaXpwn3OfKVrjaASVw6qnCaQw9R1m79X57D2X5VnhD0EYMV5wGRIGBH2MKCTViK/Lu+EPpTMqkDpGxAUsFr8u6tlA0RwZyM2AEcXB0CV+OUABCotHcZTAjIl9KgzNOdkiYGUJGIDDljqnLqTn8QAMI0gKXAsADpxIQUSE4jYE+zzR4AlkEVKbQnQBOIDcGmUegB9dmoPQErhdgBBgFbss7QAw0TEsSfUCYwh/AScRXgF/D61d14B3Njc3jmt5H2fUzf2ayW+1bfWO0nwAJodnRdiJngtxQAS2ABgqJ0e0kqQ8zr3SOD1ZYiTPJpAtxZBQOIEf5aoQINFgIMTmJAIrQSd7Q2QUmgjCSybmoEPA+of71TI+ANBT4mIyxCfkQBwvJzMHQA5foAhVkATjEAbUSIAlwHxhEEA/FTApwnQMq5liJN8AhDCQqkJMPE9IF65jqCAqC1DfKySyecHEFdAPhoEmHjuoIAdNTqNs6VDXSPSkmAnDaCnJPE5Y9nksgDn2Rr2N13Lv/vjsxIBQIWb7aaew5QB2Lhe+mWyq1Q6Yr68ennbeN/3tvd2EmqFWdy76UmY2awvQGmN942Q2d8RLvHX+gIHqyh/qGWQ6wAAAABJRU5ErkJggg==',
    'searchUrl' : 'https://pt.cdfile.org/torrents.php?search=%search_string_orig%&search_area=0',
    'loggedOutRegex': /Forget your password|忘记了密码|忘記了密碼/,
    'matchRegex': /Nothing found|Try again/,
    'both':true},
  { 'name': 'ptfans',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAALVBMVEUAAAAFBQEEBAA8PAdZWhOvrwADAwAGBgD8/ADa2gHIyAAmJgijo574+PfZ2dgtKZ2xAAAACHRSTlMA/jz+/v7Stdb85R8AAAG8SURBVDjLnZOxTsJAGMebvkFDogNL0xiZCcUBN3sMtaNcVDYZcFUS4QlMrqxCcnWFJjVMBOLgrY4HT2B9AuQZ7NfrAVeCg7/0Lml/ubt+/y+n/RNL101zO5nye6mXw5TCUDnOhH7KVN6t1Oi9J5yj95CKxxpReS53UnEnhB/IuV9u7YqBTcWcF6MCiJdCtLdidktJcDXfW9HHjus79Wb+DHivJQ/ZCEuIIBieu32vGgRUiFLXAOE7FRtHJGxUbFeIU8P4SJcbhQj+zTBqqbCSoKpBTngtS4OgGjYFUZSChNc9DQ4YQVFTISbJzqBBiKI8NqdJUAPG3Ez4qI4J8UOMyQDRV4xvhBBFJYbQdE/qEym8S5IxnsMxUpAw2nSoSXaFihRtCEdkJYHw25p1gmwXzka2xPXRhQVZiRDLhqSWpdsG4Q89xqYsociydPUS9GOAOOcwPhGOth2EuBbxN1/G8YpTooqfwyLmizj+4kQRk+IBMZ4t12uejBV/o7uijxFyWAWh85ntbgXkpxa4EdBBibqChFiiFKggRbcaqAzPOiAg+QTb2T7ickLyKkebe95WuZdCt3JoEjOH9ge/fwqIarWnVY4AAAAASUVORK5CYII=',
    'searchUrl': 'https://ptfans.cc/torrents.php?search=%tt%&search_area=1',
    'loggedOutRegex': /Forget your password|忘记了密码|忘記了密碼/,
    'matchRegex': /Nothing found|Try again/,
    'both':true},
  { 'name': 'ptfans (name)',
    'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAALVBMVEUAAAAFBQEEBAA8PAdZWhOvrwADAwAGBgD8/ADa2gHIyAAmJgijo574+PfZ2dgtKZ2xAAAACHRSTlMA/jz+/v7Stdb85R8AAAG8SURBVDjLnZOxTsJAGMebvkFDogNL0xiZCcUBN3sMtaNcVDYZcFUS4QlMrqxCcnWFJjVMBOLgrY4HT2B9AuQZ7NfrAVeCg7/0Lml/ubt+/y+n/RNL101zO5nye6mXw5TCUDnOhH7KVN6t1Oi9J5yj95CKxxpReS53UnEnhB/IuV9u7YqBTcWcF6MCiJdCtLdidktJcDXfW9HHjus79Wb+DHivJQ/ZCEuIIBieu32vGgRUiFLXAOE7FRtHJGxUbFeIU8P4SJcbhQj+zTBqqbCSoKpBTngtS4OgGjYFUZSChNc9DQ4YQVFTISbJzqBBiKI8NqdJUAPG3Ez4qI4J8UOMyQDRV4xvhBBFJYbQdE/qEym8S5IxnsMxUpAw2nSoSXaFihRtCEdkJYHw25p1gmwXzka2xPXRhQVZiRDLhqSWpdsG4Q89xqYsociydPUS9GOAOOcwPhGOth2EuBbxN1/G8YpTooqfwyLmizj+4kQRk+IBMZ4t12uejBV/o7uijxFyWAWh85ntbgXkpxa4EdBBibqChFiiFKggRbcaqAzPOiAg+QTb2T7ickLyKkebe95WuZdCt3JoEjOH9ge/fwqIarWnVY4AAAAASUVORK5CYII=',
    'searchUrl': 'https://ptfans.cc/torrents.php?search=%search_string_orig%&search_area=0',
    'loggedOutRegex': /Forget your password|忘记了密码|忘記了密碼/,
    'matchRegex': /Nothing found|Try again/,
    'both':true},
];

var french_sites = [
  {   'name': 'ABN',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA6lBMVEUAAAAAAwNFUGcICAoAAAAxPFAyO04sNEYvOElOW3QWGSYmLTwRFB4rMkElKzkjKjcRFBpFUWo/SWA7RloeJDIlLj9MWHJCTmUbIC5OW3RFUWdNWnM8R1xVYn4+SWAyOk0cIS9GUWdOXHY/SV89R1tIVGs2QFQyPE4YHSgvN0cRERoeJC4yPU8rM0IcIispLz4jJzAXGyUAAAAJCQkKCgpNW3dEUGlkdZVTYn5MWXNzhqxxg6hrfJ5mdpZca4lrfqBgcJBdbYtCTmU/S2Q+SF80PlIpMkUdIC9ic5JIVW9HVG45Q1kuNkgfJjd94MAHAAAANXRSTlMAFM0iDP308+7NzZN7eWtHK/v59fXz8efn4dvZz83Nzc3Jwb+zr62lpZ2Tf2VjWVc7NycdGY2y21IAAACqSURBVBjTXY7VFoJAEEAXMBEEu7s7d2mkMf//d0REBe/LnHvnYQYEYBiIcEgkjpEwQ2Ym7GzuasSJUBjDixmf/nwHIbLviP2GgVCwLV4YfpzhJwuEBI3bBqGZJ2IpQeXk/tvXhneR5nVOlhk/1Mvel7GKqnFn/OVZi/IH5HVF2XirqlssJZMpoiaJ0qkBAOU+HOcG1f1S9IKyAnOS7HbaeA8Do1Y6jdPgnycnrBSm5zgLbgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://abn.lol/Torrent?UserId=&SelectedCats=2&SelectedCats=3&SelectedCats=4&YearOperator=≥&Year=&RatingOperator=≥&Rating=&SortOn=Created&SortOrder=desc&Search=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe oublié/,
      'matchRegex': /Aucune donn&#xE9;e trouv&#xE9;e/},
  {   'name': 'ABN',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA6lBMVEUAAAAAAwNFUGcICAoAAAAxPFAyO04sNEYvOElOW3QWGSYmLTwRFB4rMkElKzkjKjcRFBpFUWo/SWA7RloeJDIlLj9MWHJCTmUbIC5OW3RFUWdNWnM8R1xVYn4+SWAyOk0cIS9GUWdOXHY/SV89R1tIVGs2QFQyPE4YHSgvN0cRERoeJC4yPU8rM0IcIispLz4jJzAXGyUAAAAJCQkKCgpNW3dEUGlkdZVTYn5MWXNzhqxxg6hrfJ5mdpZca4lrfqBgcJBdbYtCTmU/S2Q+SF80PlIpMkUdIC9ic5JIVW9HVG45Q1kuNkgfJjd94MAHAAAANXRSTlMAFM0iDP308+7NzZN7eWtHK/v59fXz8efn4dvZz83Nzc3Jwb+zr62lpZ2Tf2VjWVc7NycdGY2y21IAAACqSURBVBjTXY7VFoJAEEAXMBEEu7s7d2mkMf//d0REBe/LnHvnYQYEYBiIcEgkjpEwQ2Ym7GzuasSJUBjDixmf/nwHIbLviP2GgVCwLV4YfpzhJwuEBI3bBqGZJ2IpQeXk/tvXhneR5nVOlhk/1Mvel7GKqnFn/OVZi/IH5HVF2XirqlssJZMpoiaJ0qkBAOU+HOcG1f1S9IKyAnOS7HbaeA8Do1Y6jdPgnycnrBSm5zgLbgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://abn.lol/Torrent?UserId=&SelectedCats=1&SelectedCats=3&SelectedCats=4&SelectedCats=9&YearOperator=≥&Year=&RatingOperator=≥&Rating=&SortOn=Created&SortOrder=desc&Search=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe oublié/,
      'matchRegex': /Aucune donn&#xE9;e trouv&#xE9;e/,
      'TV': true},
  {   'name': 'ABN-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA6lBMVEUAAAAAAwNFUGcICAoAAAAxPFAyO04sNEYvOElOW3QWGSYmLTwRFB4rMkElKzkjKjcRFBpFUWo/SWA7RloeJDIlLj9MWHJCTmUbIC5OW3RFUWdNWnM8R1xVYn4+SWAyOk0cIS9GUWdOXHY/SV89R1tIVGs2QFQyPE4YHSgvN0cRERoeJC4yPU8rM0IcIispLz4jJzAXGyUAAAAJCQkKCgpNW3dEUGlkdZVTYn5MWXNzhqxxg6hrfJ5mdpZca4lrfqBgcJBdbYtCTmU/S2Q+SF80PlIpMkUdIC9ic5JIVW9HVG45Q1kuNkgfJjd94MAHAAAANXRSTlMAFM0iDP308+7NzZN7eWtHK/v59fXz8efn4dvZz83Nzc3Jwb+zr62lpZ2Tf2VjWVc7NycdGY2y21IAAACqSURBVBjTXY7VFoJAEEAXMBEEu7s7d2mkMf//d0REBe/LnHvnYQYEYBiIcEgkjpEwQ2Ym7GzuasSJUBjDixmf/nwHIbLviP2GgVCwLV4YfpzhJwuEBI3bBqGZJ2IpQeXk/tvXhneR5nVOlhk/1Mvel7GKqnFn/OVZi/IH5HVF2XirqlssJZMpoiaJ0qkBAOU+HOcG1f1S9IKyAnOS7HbaeA8Do1Y6jdPgnycnrBSm5zgLbgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://abn.lol/Request?SelectedCats=2&SelectedCats=3&SelectedCats=4&Filter=all&SortOn=Created&SortOrder=desc&Unfilled=true&Search=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe oublié/,
      'matchRegex': /Aucune donn&#xE9;e trouv&#xE9;e/},
  {   'name': 'ABN-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA6lBMVEUAAAAAAwNFUGcICAoAAAAxPFAyO04sNEYvOElOW3QWGSYmLTwRFB4rMkElKzkjKjcRFBpFUWo/SWA7RloeJDIlLj9MWHJCTmUbIC5OW3RFUWdNWnM8R1xVYn4+SWAyOk0cIS9GUWdOXHY/SV89R1tIVGs2QFQyPE4YHSgvN0cRERoeJC4yPU8rM0IcIispLz4jJzAXGyUAAAAJCQkKCgpNW3dEUGlkdZVTYn5MWXNzhqxxg6hrfJ5mdpZca4lrfqBgcJBdbYtCTmU/S2Q+SF80PlIpMkUdIC9ic5JIVW9HVG45Q1kuNkgfJjd94MAHAAAANXRSTlMAFM0iDP308+7NzZN7eWtHK/v59fXz8efn4dvZz83Nzc3Jwb+zr62lpZ2Tf2VjWVc7NycdGY2y21IAAACqSURBVBjTXY7VFoJAEEAXMBEEu7s7d2mkMf//d0REBe/LnHvnYQYEYBiIcEgkjpEwQ2Ym7GzuasSJUBjDixmf/nwHIbLviP2GgVCwLV4YfpzhJwuEBI3bBqGZJ2IpQeXk/tvXhneR5nVOlhk/1Mvel7GKqnFn/OVZi/IH5HVF2XirqlssJZMpoiaJ0qkBAOU+HOcG1f1S9IKyAnOS7HbaeA8Do1Y6jdPgnycnrBSm5zgLbgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://abn.lol/Request?SelectedCats=1&SelectedCats=3&SelectedCats=4&SelectedCats=9&Filter=all&SortOn=Created&SortOrder=desc&Unfilled=true&Search=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe oublié/,
      'matchRegex': /Aucune donn&#xE9;e trouv&#xE9;e/,
      'TV': true},
  {   'name': 'Cpasbien',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAPUExUReYbI/8AAP///+YbI/8AAFZq/VQAAAADdFJOUwAAAPp2xN4AAAECSURBVDjLpdXtDQIhDAbgah1ANrjoAo3vAl7C/jP54xDpByXm+u/yAMmVttAjDTrLG/2CAfSPq2G0iBk9xDMDxhUD1keGCc0M7wM7hQzsNwMDBwrpHG0GOoeKV2PW2Zqx6Ox+Dzfalothfa/9x9hsPo4Xw6TLoifVbyaCGCYiuuyllFLKnZgCvtW9MRmWg6vjp+K64Boyda4L3nOue871fYYXh///Y9O0bHlS1Y0dVzbl2YVCVDkM1cK+mMZaC0pRNbCrRVXnvg10l7Bx1j3Get6x6VAa5xG5/l5NB85nSzg98sEl+djLZ6po5nwiG/evARu1j4WZfu6paQv0S3TimfsA3CnPz7CoD14AAAAASUVORK5CYII=',
      'searchUrl': 'https://cpasbien.cz/recherche/%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|la nouvelle adresse officiel/,
      'matchRegex': /Pas de torrents disponibles/,
      'spaceEncode': ' ',
      'both': true},
  {   'name': 'Francomac',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMVEUAAACap4p6pJqisJiwrIS0to9pmpaYu5uNqqOOfT9mi3yGmoDExZOdvLCwmlRIf3Udke/SAAAAAXRSTlMAQObYZgAAAulJREFUOMvtjzGL1EAYhucvfJvIiVs5YgxnNY5hA2IRdlIpwnEJCp6FIwwSq/M4ZwstdgM6KBaWUbjiioA58NhTD7kBbdwujQruFqYQLFyU/ICziJO9fyE+MJDwfO8376D//GOoU3QzZmBdXbGGVm/D7k0fTKu7nAv86JGUaHTSOt8HgN66DZY81hu4Usq7QnDnDmzE6C6WG1IOl5bWgSjZk/f45np3jDnXr37YIZrKliUIlgaWlA/ksnhfz190zmxGV+bZwZGmNoBZUlUPBrl4mWXZd3n/4zzLNGrthkd7BKxWSyfJDM+ulh/nv7KfqDTa6km5DnJaTQczt9vqrcvlpK5/vUZlWcYsJGZo8+pAOtjsbvXvlehKPaZGG792Xa+VkxUHVzwx2vC28+ZKTVs9mZTlNWKGHPe2/1UcaY5Pskv0IooZC8uJfxbIPn/6GStnoZ/nHO+dcFMU2PFafH1vljs5V0Lw2UK/yJNtvCxuIS+K7CieKcwf7m5j7NzJWnRR5ImZR0/AgkvUVQ5/XGzHPheL3TxpDpN3TxUqCrG/K0xMFMVt75x77mVWZJlFm2bnYjVDy8Xhi0Lrg6JpjH54u2O+s621smn+VJVCB8+LBY1BfXt8ajTuagCV7h6evWh0V2stTCIvmlytftgpdosiSVJKUhaau8s4YtCFfkckfKQS0ZY4FOl5xur6p0LjS1pwnJgjzBkphdVy7qR1Xc+36jE6W+S54A7HBp5SSoBYhFJ74beQHdgAgBeI05RSCGMDi72IaI1s1kI7Joudm9RjXmtXFyMsRMCOACxM/hhlcRnHUTvhBUZ3CQvPmwvCoOMI96Rncob+l9CjbTogNgsIgBXHZGj5qRdGYUxtn8arNgkRUYwFT3Y0WKaSV1HKzL+vfEVcdQHQp1aPdRfAXg29trnN+v4IK9yC/D3THQKtCAQAQNTQSoEed4+3T+FoxU9Nhb5SykjreFp9ufFp3IUhaL0vXPSff4u/Gsl2CI3KRskAAAAASUVORK5CYII=',
      'searchUrl': 'https://kebekmac.forum-canada.com/search?search_keywords=%tt%&search_by=text',
      'loggedOutRegex': /Cloudflare|Ray ID|Vous pouvez vous enregistrer/,
      'matchRegex': /Aucun message/,
      'both': true},
  {   'name': 'G-Free',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAJFBMVEUAAAABAwFcX1xCSEICjwJzdnMYLRgJZgkxjDFIpkhjvWOGz4ZXC3j+AAAAAXRSTlMAQObYZgAAAlpJREFUOMuNlM1vElEUxUcM3V9bhy6bV9s0rqovReKuyQvDEmnGlJ2PL3U5hpRWd7QK4o5aC8NOXQzD1kRg/jnPfcOXton9JZCZc+4995I3g3UHkkLkb5ETaSmErO3/qx89dQ3bpb/1lwfujKPqqn6f9b4/7HPPalrJdYujCEyvXHc3vwyCHg2hHftR1y0swpJV93gUuEzhc9QUi5Y11x3EuhCiMxGiuphQnOwY9QqfL9/F7mKlwceCAANUi72pwGLx6OIYAqRoKrilK0pxEi5x33j3aBQafyzTZqeSGApw0aiHYVNsS+nL9BbvJPYCNnpKhf1zCZ5fylfGeNxlw1cqlzNG5ofkhaXoNKFvhwqcy7Qmuy3LMMqiLwTqRkPlSJkmoMpps1RPMm2OedbQMOq6xh2ZQM5pKD84Iap4dt5KljOXM7WhVCeaXhNteLRlJWDEcp31yQnBOFwamQvsNIiuNcXGvpVYZyNjzq+na7Q0iI1OGA5b2j77TTSPSlIKRg3QaTj9RiAeblHKYdkf0vvw6yEBrEt5GLZDNU2nDqXaDhnqmvADNSkCKU1zINgwnnDBjM1PBBCxDuMeVUyyaRt7/J2lh3wefEFvWqb2Fy65kA8qQTaGfAg0GwEbSmNbM73ukd2LDQ9J2M1iXtCGg1uPjZ/aJD2IHzg0e5sIsf12C6bSPCLOqjjUV/ptkFMgy0lxFqqyZ8rpK4PGsjFJTFA5h0WnrjzCTosWqijVABzEo5ct9FoZ+GRX3vY1XhXl/PBgpRV2aQGCbnVKN/4aNAH7wLoJ3rYd6//8ARCX27OsDBPsAAAAAElFTkSuQmCC',
      'searchUrl': 'https://generation-free.org/torrents?imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe oublié/,
      'matchRegex': /torrent-search--list__overview/,
      'seedingRegex': /fa-arrow-circle-up/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'G-Free-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAJFBMVEUAAAABAwFcX1xCSEICjwJzdnMYLRgJZgkxjDFIpkhjvWOGz4ZXC3j+AAAAAXRSTlMAQObYZgAAAlpJREFUOMuNlM1vElEUxUcM3V9bhy6bV9s0rqovReKuyQvDEmnGlJ2PL3U5hpRWd7QK4o5aC8NOXQzD1kRg/jnPfcOXton9JZCZc+4995I3g3UHkkLkb5ETaSmErO3/qx89dQ3bpb/1lwfujKPqqn6f9b4/7HPPalrJdYujCEyvXHc3vwyCHg2hHftR1y0swpJV93gUuEzhc9QUi5Y11x3EuhCiMxGiuphQnOwY9QqfL9/F7mKlwceCAANUi72pwGLx6OIYAqRoKrilK0pxEi5x33j3aBQafyzTZqeSGApw0aiHYVNsS+nL9BbvJPYCNnpKhf1zCZ5fylfGeNxlw1cqlzNG5ofkhaXoNKFvhwqcy7Qmuy3LMMqiLwTqRkPlSJkmoMpps1RPMm2OedbQMOq6xh2ZQM5pKD84Iap4dt5KljOXM7WhVCeaXhNteLRlJWDEcp31yQnBOFwamQvsNIiuNcXGvpVYZyNjzq+na7Q0iI1OGA5b2j77TTSPSlIKRg3QaTj9RiAeblHKYdkf0vvw6yEBrEt5GLZDNU2nDqXaDhnqmvADNSkCKU1zINgwnnDBjM1PBBCxDuMeVUyyaRt7/J2lh3wefEFvWqb2Fy65kA8qQTaGfAg0GwEbSmNbM73ukd2LDQ9J2M1iXtCGg1uPjZ/aJD2IHzg0e5sIsf12C6bSPCLOqjjUV/ptkFMgy0lxFqqyZ8rpK4PGsjFJTFA5h0WnrjzCTosWqijVABzEo5ct9FoZ+GRX3vY1XhXl/PBgpRV2aQGCbnVKN/4aNAH7wLoJ3rYd6//8ARCX27OsDBPsAAAAAElFTkSuQmCC',
      'searchUrl': 'https://generation-free.org/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe oublié/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'HD-F',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABRFBMVEUAAAAAAgMAAQMAAAEAAAAAAAAAAgQAAAEAAAEhVnMADx4AAAAAAAAjWIwgSX4NTnsENFYGFSkSR2YGPmMBBgsWTncMLkwGJDsCCg8AAAAAAAAbRF4MMUkNOFcAAAAAAAAAAAAAAQMAChMAAwdkg6gQQ2cKMU8DGSoACA9WfrFui6xhgKRHcaQobJZBZY4gYIhAX4Y3Z4A2V30qWnY7YXMyWm9IYG0NPl9CRUcCHDEhJikDFSQCER5LiMx4lr1Thrlag7eWpLZ7lLNNeLA7dK5niKxJeqtqhKNngaEodqE/bp07aJ1Da5hlfJYlWZJGZIslY4o5bIhHY4cUWoYOS4ExZX9HYH4rUX1EX3kwTnQQTHQ9XXA2VHAGQWo7TmcaSGYlS2JMWF8UO1IXM0kIK0c2QEY9QUMGJ0EaMDw7OzsmMDQvLy+hP9njAAAAIHRSTlMACAY7+14UmTj+6mJd/v7+/v78/Pru7Ozs7OqbmZaVkzEgOCQAAADgSURBVBjTNY/FksMwEERlyxRYZh7JGGbOMjNTmPH/74nspG9dPTX1HrLDYY8Hc2geXl4nACDIvNOlzb7RgQKxyLZk7xuh93TZ0k0js7TFbvZSsft0qPgWcY3yrf3pP1fvO6bnPpPZ4Tg/WOUQXo5WHl7+b/6S2dpHeAEj0dSCmu/57vTp1Xd+suhFouoP3p4FApr/+vgivOJFmFx+RR/j8Z+E9XulFxXECWqh0aW0GVHVamJtiisDrRtAMiaBduqAge3QEgVg8MTN2+juHDjZlWZyhwKrwhHbZ/qKKCqO/gRFzSEvASbhrwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://hdf.world/torrents.php?searchstr=%search_string_orig%+%year%&order_by=time&order_way=desc&group_results=1&action=basic&searchsubmit=1',
      'loggedOutRegex': /Cloudflare|Ray ID|>Se souvenir de moi</,
      'matchRegex': /Aucun fichier trouvé/,
      'both': true},
  {   'name': 'HD-F-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABRFBMVEUAAAAAAgMAAQMAAAEAAAAAAAAAAgQAAAEAAAEhVnMADx4AAAAAAAAjWIwgSX4NTnsENFYGFSkSR2YGPmMBBgsWTncMLkwGJDsCCg8AAAAAAAAbRF4MMUkNOFcAAAAAAAAAAAAAAQMAChMAAwdkg6gQQ2cKMU8DGSoACA9WfrFui6xhgKRHcaQobJZBZY4gYIhAX4Y3Z4A2V30qWnY7YXMyWm9IYG0NPl9CRUcCHDEhJikDFSQCER5LiMx4lr1Thrlag7eWpLZ7lLNNeLA7dK5niKxJeqtqhKNngaEodqE/bp07aJ1Da5hlfJYlWZJGZIslY4o5bIhHY4cUWoYOS4ExZX9HYH4rUX1EX3kwTnQQTHQ9XXA2VHAGQWo7TmcaSGYlS2JMWF8UO1IXM0kIK0c2QEY9QUMGJ0EaMDw7OzsmMDQvLy+hP9njAAAAIHRSTlMACAY7+14UmTj+6mJd/v7+/v78/Pru7Ozs7OqbmZaVkzEgOCQAAADgSURBVBjTNY/FksMwEERlyxRYZh7JGGbOMjNTmPH/74nspG9dPTX1HrLDYY8Hc2geXl4nACDIvNOlzb7RgQKxyLZk7xuh93TZ0k0js7TFbvZSsft0qPgWcY3yrf3pP1fvO6bnPpPZ4Tg/WOUQXo5WHl7+b/6S2dpHeAEj0dSCmu/57vTp1Xd+suhFouoP3p4FApr/+vgivOJFmFx+RR/j8Z+E9XulFxXECWqh0aW0GVHVamJtiisDrRtAMiaBduqAge3QEgVg8MTN2+juHDjZlWZyhwKrwhHbZ/qKKCqO/gRFzSEvASbhrwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://hdf.world/requests.php?submit=true&search=%search_string_orig%&showall=on',
      'loggedOutRegex': /Cloudflare|Ray ID|>Se souvenir de moi</,
      'matchRegex': /Aucun résultat/,
      'both': true},
  {   'name': 'HD-O',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA81BMVEUAAABAQkUwMTRrbXBZW15kZmhQUlSurq9UVlknKSuqqquXmZyLjpB1eHteYGNWW19XWlxRUlZCREc4O0AhJCcLDxIoUOa5ubqrq6ugoKGCkp2Ch4uAhIeBgYJvdHdrb3NqbG5iZ2xdX2FTVVhPT1EsU/A1XO8uVuwsUuMwVd/P0tXKztKzsrOPn6mcnJ2OkZOIiox6f4N8gIJ3en1vcnRiY2VTWF1LTlFITE9GSEtGR0k0NzkrLjIUGBtLc/k9X+JEbOAqUN7U1NVDYc+2v8W1v8W+vr6fr7mir7h9jZmOkpNna3RkaW5aX2RdYGNiZGBKUFnRS2y9AAAAA3RSTlMA8exebbpxAAAAz0lEQVQY04XPRZbCUBQA0Qdf40qMeIK7Nd7uBvtfDRymDKjRnRbcrhp0g97g7fPjddALul9V+Avv6toki+NsotXPBEmRZ6NQkmUpHM1k5Rv6Q9Fnouu67x7zxaEHCYlwlvwmyjN77LQbETBfGoseKfvsp2lEzXuYI4TmyIzJodEaFy8twHRqcqz/a/rKOU6dDlC+XJYGNUpBeXhqOyvIC53nKkpTpOacFzqkm8WaGEhVESXrxYaAgG0s0K1pbumFUKlZNWu/s+3d3jqzcjV7AqzjF808X1e/AAAAAElFTkSuQmCC',
      'searchUrl': 'https://hd-only.org/torrents.php?action=advanced&description=%search_string_orig%+%year%',
      'loggedOutRegex': />Entrer</,
      'matchRegex': /Aucun résultat/},
  {   'name': 'HD-O',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA81BMVEUAAABAQkUwMTRrbXBZW15kZmhQUlSurq9UVlknKSuqqquXmZyLjpB1eHteYGNWW19XWlxRUlZCREc4O0AhJCcLDxIoUOa5ubqrq6ugoKGCkp2Ch4uAhIeBgYJvdHdrb3NqbG5iZ2xdX2FTVVhPT1EsU/A1XO8uVuwsUuMwVd/P0tXKztKzsrOPn6mcnJ2OkZOIiox6f4N8gIJ3en1vcnRiY2VTWF1LTlFITE9GSEtGR0k0NzkrLjIUGBtLc/k9X+JEbOAqUN7U1NVDYc+2v8W1v8W+vr6fr7mir7h9jZmOkpNna3RkaW5aX2RdYGNiZGBKUFnRS2y9AAAAA3RSTlMA8exebbpxAAAAz0lEQVQY04XPRZbCUBQA0Qdf40qMeIK7Nd7uBvtfDRymDKjRnRbcrhp0g97g7fPjddALul9V+Avv6toki+NsotXPBEmRZ6NQkmUpHM1k5Rv6Q9Fnouu67x7zxaEHCYlwlvwmyjN77LQbETBfGoseKfvsp2lEzXuYI4TmyIzJodEaFy8twHRqcqz/a/rKOU6dDlC+XJYGNUpBeXhqOyvIC53nKkpTpOacFzqkm8WaGEhVESXrxYaAgG0s0K1pbumFUKlZNWu/s+3d3jqzcjV7AqzjF808X1e/AAAAAElFTkSuQmCC',
      'searchUrl': 'https://hd-only.org/torrents.php?action=advanced&description=%search_string_orig%',
      'loggedOutRegex': />Entrer</,
      'matchRegex': /Aucun résultat/,
      'TV': true},
  {   'name': 'HD-O-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA81BMVEUAAABAQkUwMTRrbXBZW15kZmhQUlSurq9UVlknKSuqqquXmZyLjpB1eHteYGNWW19XWlxRUlZCREc4O0AhJCcLDxIoUOa5ubqrq6ugoKGCkp2Ch4uAhIeBgYJvdHdrb3NqbG5iZ2xdX2FTVVhPT1EsU/A1XO8uVuwsUuMwVd/P0tXKztKzsrOPn6mcnJ2OkZOIiox6f4N8gIJ3en1vcnRiY2VTWF1LTlFITE9GSEtGR0k0NzkrLjIUGBtLc/k9X+JEbOAqUN7U1NVDYc+2v8W1v8W+vr6fr7mir7h9jZmOkpNna3RkaW5aX2RdYGNiZGBKUFnRS2y9AAAAA3RSTlMA8exebbpxAAAAz0lEQVQY04XPRZbCUBQA0Qdf40qMeIK7Nd7uBvtfDRymDKjRnRbcrhp0g97g7fPjddALul9V+Avv6toki+NsotXPBEmRZ6NQkmUpHM1k5Rv6Q9Fnouu67x7zxaEHCYlwlvwmyjN77LQbETBfGoseKfvsp2lEzXuYI4TmyIzJodEaFy8twHRqcqz/a/rKOU6dDlC+XJYGNUpBeXhqOyvIC53nKkpTpOacFzqkm8WaGEhVESXrxYaAgG0s0K1pbumFUKlZNWu/s+3d3jqzcjV7AqzjF808X1e/AAAAAElFTkSuQmCC',
      'searchUrl': 'https://hd-only.org/requests.php?submit=true&search=%search_string_orig%',
      'loggedOutRegex': />Entrer</,
      'matchRegex': /Pas de résultat/,
      'both': true},
  {   'name': 'Sharewood',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMVEUAAAAXi6IAoqJcubkAorkAi6IXi4sXc4pd0NBFoqVcudBcoaIwi6IuoqYXoqJcorkX2sIOAAAAAXRSTlMAQObYZgAAAtBJREFUOMvNlM9rE0EUx1+2MdEGcWe624IH6SyxvRVhLkl/4E5Y0/NCcwhY2BbRayzFXgu5SD3V0puC0KMHe6w9KdKbN/EqFgSviv+A772Z7OTSHMUvZMPMJ+/N983bF/i/dG8yvj4ZT72YiButXxP5yVXh9R8Gn8PWFfiRkl2AMz1m/uZYsBFCptAY7tv1DfxM/yxxVaCiAs5XeHntC5X5shhhI0gGbllvS5rwqnE0uGQs5+GEc/UZtzdCi6WwUjBFywczjPVFl2lFORwNCAd3jwhP6+MNWxUzzt6gXLkmPKVX89RV5WSXfb3CuJ0rSpaXmJbVeEa/oQ5oHUf4vdYrMS234yO9zx3QX2WIDg9LjktQ+R+MZnwoUsT3L0q+ADWzqe3Va/QWFdiIdpyPwtNA9PXyB8Lnei3Hm4Rl5C4+KsiZ7es0bgu5DtDS7Y+9nKNhJ/5EZTvrGBBi/MnKq7iHGWKQbJw11BcY0UR+fqDb30Sv1wORH7EzPvxYON5YPtDvX3+ehTy3R9O9IWY+B/SD5wf6LahN/Q6chr9tRYkZAOsU1EP/wp05LGRn1m2pfsvPxWrZDtk0s0/29rZEfx9K4b3IJBFWSZZlKr596vHNXJrHNeX43DNp4hC8aopavOPyU/Pj72M4uBPS07WLrS2O4SSyOcpXCWTkaUXJsTHgU7fFfImlEB5bU4Fo+mCHFTsr7LjJdISdHZCMR9PYLcsSi/ikA1HRKOMouq7QR6XThV2H6wJDvDeDv6zifuCS7yZpTfl7Uw5XHZZioa7Yohu+FJMbPLuZKUweifUafTtVydrWAFSnqG8vhVDN5ivUBV84X0UyoOqUjUihlKGpepqw11qHLkHRjj88SvhUwHgps06GRr0C5cY6ahZcnr8z34wU55Ieys2wV9WOQcC3nyFPPLN/LM2CSuCk0aVrlw9HyiXwvnTBXrYBO8b2MIR/oL8lvI3zMdnr3QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.sharewood.tv/filterTorrents?_token=666&search=%search_string_orig%+%year%&categories[]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe oublié/,
      'matchRegex': /table-responsive-line/,
      'positiveMatch': true},
  {   'name': 'Sharewood',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMVEUAAAAXi6IAoqJcubkAorkAi6IXi4sXc4pd0NBFoqVcudBcoaIwi6IuoqYXoqJcorkX2sIOAAAAAXRSTlMAQObYZgAAAtBJREFUOMvNlM9rE0EUx1+2MdEGcWe624IH6SyxvRVhLkl/4E5Y0/NCcwhY2BbRayzFXgu5SD3V0puC0KMHe6w9KdKbN/EqFgSviv+A772Z7OTSHMUvZMPMJ+/N983bF/i/dG8yvj4ZT72YiButXxP5yVXh9R8Gn8PWFfiRkl2AMz1m/uZYsBFCptAY7tv1DfxM/yxxVaCiAs5XeHntC5X5shhhI0gGbllvS5rwqnE0uGQs5+GEc/UZtzdCi6WwUjBFywczjPVFl2lFORwNCAd3jwhP6+MNWxUzzt6gXLkmPKVX89RV5WSXfb3CuJ0rSpaXmJbVeEa/oQ5oHUf4vdYrMS234yO9zx3QX2WIDg9LjktQ+R+MZnwoUsT3L0q+ADWzqe3Va/QWFdiIdpyPwtNA9PXyB8Lnei3Hm4Rl5C4+KsiZ7es0bgu5DtDS7Y+9nKNhJ/5EZTvrGBBi/MnKq7iHGWKQbJw11BcY0UR+fqDb30Sv1wORH7EzPvxYON5YPtDvX3+ehTy3R9O9IWY+B/SD5wf6LahN/Q6chr9tRYkZAOsU1EP/wp05LGRn1m2pfsvPxWrZDtk0s0/29rZEfx9K4b3IJBFWSZZlKr596vHNXJrHNeX43DNp4hC8aopavOPyU/Pj72M4uBPS07WLrS2O4SSyOcpXCWTkaUXJsTHgU7fFfImlEB5bU4Fo+mCHFTsr7LjJdISdHZCMR9PYLcsSi/ikA1HRKOMouq7QR6XThV2H6wJDvDeDv6zifuCS7yZpTfl7Uw5XHZZioa7Yohu+FJMbPLuZKUweifUafTtVydrWAFSnqG8vhVDN5ivUBV84X0UyoOqUjUihlKGpepqw11qHLkHRjj88SvhUwHgps06GRr0C5cY6ahZcnr8z34wU55Ieys2wV9WOQcC3nyFPPLN/LM2CSuCk0aVrlw9HyiXwvnTBXrYBO8b2MIR/oL8lvI3zMdnr3QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.sharewood.tv/filterTorrents?_token=666&search=%search_string_orig%&categories[]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe oublié/,
      'matchRegex': /table-responsive-line/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'Sharewood-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMVEUAAAAXi6IAoqJcubkAorkAi6IXi4sXc4pd0NBFoqVcudBcoaIwi6IuoqYXoqJcorkX2sIOAAAAAXRSTlMAQObYZgAAAtBJREFUOMvNlM9rE0EUx1+2MdEGcWe624IH6SyxvRVhLkl/4E5Y0/NCcwhY2BbRayzFXgu5SD3V0puC0KMHe6w9KdKbN/EqFgSviv+A772Z7OTSHMUvZMPMJ+/N983bF/i/dG8yvj4ZT72YiButXxP5yVXh9R8Gn8PWFfiRkl2AMz1m/uZYsBFCptAY7tv1DfxM/yxxVaCiAs5XeHntC5X5shhhI0gGbllvS5rwqnE0uGQs5+GEc/UZtzdCi6WwUjBFywczjPVFl2lFORwNCAd3jwhP6+MNWxUzzt6gXLkmPKVX89RV5WSXfb3CuJ0rSpaXmJbVeEa/oQ5oHUf4vdYrMS234yO9zx3QX2WIDg9LjktQ+R+MZnwoUsT3L0q+ADWzqe3Va/QWFdiIdpyPwtNA9PXyB8Lnei3Hm4Rl5C4+KsiZ7es0bgu5DtDS7Y+9nKNhJ/5EZTvrGBBi/MnKq7iHGWKQbJw11BcY0UR+fqDb30Sv1wORH7EzPvxYON5YPtDvX3+ehTy3R9O9IWY+B/SD5wf6LahN/Q6chr9tRYkZAOsU1EP/wp05LGRn1m2pfsvPxWrZDtk0s0/29rZEfx9K4b3IJBFWSZZlKr596vHNXJrHNeX43DNp4hC8aopavOPyU/Pj72M4uBPS07WLrS2O4SSyOcpXCWTkaUXJsTHgU7fFfImlEB5bU4Fo+mCHFTsr7LjJdISdHZCMR9PYLcsSi/ikA1HRKOMouq7QR6XThV2H6wJDvDeDv6zifuCS7yZpTfl7Uw5XHZZioa7Yohu+FJMbPLuZKUweifUafTtVydrWAFSnqG8vhVDN5ivUBV84X0UyoOqUjUihlKGpepqw11qHLkHRjj88SvhUwHgps06GRr0C5cY6ahZcnr8z34wU55Ieys2wV9WOQcC3nyFPPLN/LM2CSuCk0aVrlw9HyiXwvnTBXrYBO8b2MIR/oL8lvI3zMdnr3QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.sharewood.tv/filterRequests?_token=666&search=%search_string_orig%&categories[]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe oublié/,
      'matchRegex': /btn-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'TCTG',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAgMAAADzfxo+AAAADFBMVEUAAACBf38pJyfY2NgHQ0FwAAAAAXRSTlMAQObYZgAAA29JREFUOMu1lL/L00AYxy8GAoKtk0PVwd3FxYrij+pf4PJEEqkVaVqSKApSBbHGyVEKepX+0L6iMeTyUqugoKCNq4M4+L6SOrhopX0RXVpQrGfuWvGCk4Pf4Z7wyfPjnnu4Q/9Xr+dmr7AiyZvbNb6aiCv7PceMXA+ZuZXjsDyr8YA5zPfYmuoURiGDT7jLZw6jn61pm4W3ONzMwqedaOpYXxFKBxzuWgo3TvzZXdmb+BdRus9zfrmPie/oIdpTWCVt+RXLJi+vERf0dvxlAdgozWFv25gQj/Wwj5Ag5FCqoQODTrjTPHERpXynp3C4jC5/PCkR6PpfFfVlbzeH1xEq2VmHds8t7y5dCDM8ZwOlmsEWOnlQCcZugEq861KoHD16mk4eVsnaNzvVQEyDzjdzY59OH1abFzdrVplDxSL1F306OFSt904R3OZQxiT/nNJIqnbv4xLJIS4rf+MWnb2Rzt/uwrW3aK6NslGi9I3k3Lm3yvwWinQGq3d8TRhkFij9IFWXjKIAUziG66rHjRoSVHYYXBqeEeHnAoejUISnOvTT/srJYU5g8rMCHY/BjHoClB4doR8Jtp7URM9WFVYA4PFxEd4AlRD33OMlsZDhgo91aCQ8B0dmcL68aoow7U8Lk8pN450I1+kAE13FdgJavu66ph6IUDKIr6m46SYg7v/YlNc193ACtlEEluvWEm1+kg0MYIq9y4++68dcOBKJEN2cedOjFWeYgAYUIt8BOxRhZGkDM9JbSFT2nqq6ZW0tAdNNN+8dq+9NQrMFK+eaZxJQarQqR7TGcgLKYANojUaYKITNFRhcqLdFR/Omft4pDXxbgEodfwewhxYRTmRMmhgASF0N6CLtjhTRrKBA1aaBLbJof0gaxq3dALqfARMWcARYPXslnzefKrjxG2ZU0NJXYaV0STZ09ze0jGK6+wji84hUvKj/0VJrcv80fNiOFICTv09YzcnBp/e1DShjQnFx4yCe4jhzLhf/r4O2mK/qF9Ge3WX2fB3Eash7BFPR0AYlrhDbSOWHuh7aUv0MkmOPqIgU3J7fwRwy7vJEbD8jm9VxvfiHxjLtYaGpgEE2mWyVPVYer7yVwQ4L7Jjxs+b8ua98C/ZP76c3raGEss6q74zCJJQNSidsM0nXDvWZY9J1NLiI/tI+D/27fgFdZpTM+ngbBgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://tctg.pm/torrents-search.php?search="%search_string_orig% %year%"&cat=0&incldead=0&freeleech=0&lang=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Entrer le total/,
      'matchRegex': /Aucun torrent trouvé/,
      'spaceEncode': ' '},
  {   'name': 'TCTG',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAgMAAADzfxo+AAAADFBMVEUAAACBf38pJyfY2NgHQ0FwAAAAAXRSTlMAQObYZgAAA29JREFUOMu1lL/L00AYxy8GAoKtk0PVwd3FxYrij+pf4PJEEqkVaVqSKApSBbHGyVEKepX+0L6iMeTyUqugoKCNq4M4+L6SOrhopX0RXVpQrGfuWvGCk4Pf4Z7wyfPjnnu4Q/9Xr+dmr7AiyZvbNb6aiCv7PceMXA+ZuZXjsDyr8YA5zPfYmuoURiGDT7jLZw6jn61pm4W3ONzMwqedaOpYXxFKBxzuWgo3TvzZXdmb+BdRus9zfrmPie/oIdpTWCVt+RXLJi+vERf0dvxlAdgozWFv25gQj/Wwj5Ag5FCqoQODTrjTPHERpXynp3C4jC5/PCkR6PpfFfVlbzeH1xEq2VmHds8t7y5dCDM8ZwOlmsEWOnlQCcZugEq861KoHD16mk4eVsnaNzvVQEyDzjdzY59OH1abFzdrVplDxSL1F306OFSt904R3OZQxiT/nNJIqnbv4xLJIS4rf+MWnb2Rzt/uwrW3aK6NslGi9I3k3Lm3yvwWinQGq3d8TRhkFij9IFWXjKIAUziG66rHjRoSVHYYXBqeEeHnAoejUISnOvTT/srJYU5g8rMCHY/BjHoClB4doR8Jtp7URM9WFVYA4PFxEd4AlRD33OMlsZDhgo91aCQ8B0dmcL68aoow7U8Lk8pN450I1+kAE13FdgJavu66ph6IUDKIr6m46SYg7v/YlNc193ACtlEEluvWEm1+kg0MYIq9y4++68dcOBKJEN2cedOjFWeYgAYUIt8BOxRhZGkDM9JbSFT2nqq6ZW0tAdNNN+8dq+9NQrMFK+eaZxJQarQqR7TGcgLKYANojUaYKITNFRhcqLdFR/Omft4pDXxbgEodfwewhxYRTmRMmhgASF0N6CLtjhTRrKBA1aaBLbJof0gaxq3dALqfARMWcARYPXslnzefKrjxG2ZU0NJXYaV0STZ09ze0jGK6+wji84hUvKj/0VJrcv80fNiOFICTv09YzcnBp/e1DShjQnFx4yCe4jhzLhf/r4O2mK/qF9Ge3WX2fB3Eash7BFPR0AYlrhDbSOWHuh7aUv0MkmOPqIgU3J7fwRwy7vJEbD8jm9VxvfiHxjLtYaGpgEE2mWyVPVYer7yVwQ4L7Jjxs+b8ua98C/ZP76c3raGEss6q74zCJJQNSidsM0nXDvWZY9J1NLiI/tI+D/27fgFdZpTM+ngbBgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://tctg.pm/torrents-search.php?search="%search_string_orig% %year%"&cat=0&incldead=0&freeleech=0&lang=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Entrer le total/,
      'matchRegex': /Aucun torrent trouvé/,
      'TV': true},
  {   'name': 'Tigers',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzAgMAAABHz9i5AAAACVBMVEUAAADf5+dGXFsv904iAAAAAXRSTlMAQObYZgAAAF9JREFUKM9joANgWgUHQJ4WgtfAwLAKiQdUGAoDUUDeUmQeFypvKpyXhZsXBrSPC2Q0UA+QXIHCWwB0GILXAHGqFpAHYo7ygLwsFN4qZF7YKigTEqGovBUIHhconOkDAFUlbuqEOsBqAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.tigers-dl.net/torrents-search.php?search=%22%search_string_orig%%22',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nothing found/,
      'both': true},
  {   'name': 'Tor911',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACbSURBVHjaYjQ2Nv7PMACAiWGAwMizmAXGePToEcPr169pZhE7OzuDqKgog7i4OKrFr1+/Zjhz5gzNLH769ClDWFgY3OLRxDWCUrWoqCiDiYkJXsVBQUEMVVVVWBOOv78/Uakaw2I5OTkGOTk5nBrfvHlD0GAdHZ3ROB61eNTiUYtHLR61eAhbzEhKTwJXSxS9BUl1i0fjmBIAGAAcECVlm4BIrAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.torrent911.ps/recherche/%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Pas de torrents disponibles/,
      'spaceEncode': ' ',
      'both': true},
  {   'name': 'TOS',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEUAAADyFXnyWZ7vMofMliBtAAAAAXRSTlMAQObYZgAAAdFJREFUOMudk71KxEAUhcOk2oRg5SOIoGS3WgQrH8K7YyGrj5DSzmF9BvuUElGrgIg/eQiHbacUKxthETSeO7mTKHZe2GHnY3Luz5yJ/h2qqswvcNm2rz/3lY9hn3zxelMOBy543bruFVdYIDoJupMy+Yrb1iUrAY/Rts6ITvBHvlDv+wBHTr5J3TYd5IQjqeskzAMVU4A51L2EsnRsCWE6kVVK1HjgJl7T5aTPWg6XNqxpatKq4ihjVl0zlmah5jcs44Wlg9DFLX53SFLwZnTaumuGnJUBkhVjzhpZarwAap14UOuuB2gBqJcylyTnNE9NpMr7bN6BKekEwDyPJCsqVgaFLuOiAyMAB2Ab14E4gCIUbvXCg5NQOMAxg3kAtYBZABsCdAC5ALQieUUUzUrepeqA5M0UAwUQSt9bKm6uptBcscPNuSvS0v5hkhoMKKcwIB35iWUURqjNJg85JRkyAA95N1l+eoCTjsHY4A59VoBbf5VRP9IFXyUy9UNXztshbTkiC081wTAIZWGY3lJEOkbWRzFdDTDL2HTBlgCHGduyNy4ufhqMCxGuqViHtQfzw4FPZW9+1qq8eiTR9ZIASiQfwxP7+wiHZ/r3If83vgHfvOgPcdehwgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://theoldschool.cc/torrents?imdbId=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|title>Login|Mot de passe oubli/,
      'matchRegex': /torrent-search--list__overview/,
      'seedingRegex': /fa-arrow-circle-up/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'TOS-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEUAAADyFXnyWZ7vMofMliBtAAAAAXRSTlMAQObYZgAAAdFJREFUOMudk71KxEAUhcOk2oRg5SOIoGS3WgQrH8K7YyGrj5DSzmF9BvuUElGrgIg/eQiHbacUKxthETSeO7mTKHZe2GHnY3Luz5yJ/h2qqswvcNm2rz/3lY9hn3zxelMOBy543bruFVdYIDoJupMy+Yrb1iUrAY/Rts6ITvBHvlDv+wBHTr5J3TYd5IQjqeskzAMVU4A51L2EsnRsCWE6kVVK1HjgJl7T5aTPWg6XNqxpatKq4ihjVl0zlmah5jcs44Wlg9DFLX53SFLwZnTaumuGnJUBkhVjzhpZarwAap14UOuuB2gBqJcylyTnNE9NpMr7bN6BKekEwDyPJCsqVgaFLuOiAyMAB2Ab14E4gCIUbvXCg5NQOMAxg3kAtYBZABsCdAC5ALQieUUUzUrepeqA5M0UAwUQSt9bKm6uptBcscPNuSvS0v5hkhoMKKcwIB35iWUURqjNJg85JRkyAA95N1l+eoCTjsHY4A59VoBbf5VRP9IFXyUy9UNXztshbTkiC081wTAIZWGY3lJEOkbWRzFdDTDL2HTBlgCHGduyNy4ufhqMCxGuqViHtQfzw4FPZW9+1qq8eiTR9ZIASiQfwxP7+wiHZ/r3If83vgHfvOgPcdehwgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://theoldschool.cc/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|title>Login|Mot de passe oubli/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'xThor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAAFBQUYHR8xMjMTTHRDRUUSOVRaX2J0d3gjYo4xdqZop9KSlZc+jsaMssxthpcVflnHAAAAAXRSTlMAQObYZgAAAm9JREFUOMuFkTFoE1EYx28oXTq9U7vnJZ442vOataaPg4wSHgluvRwHnaW+IEjGvmKhgrFycRVKHhQcXDTqXOhRupdD95bMNS7+v3fJkdrB/xL4//L7vvfeOWVWxhTnVsbf8zwH+fRPf2yOlNIHp+PJTfJ1tCOlbCudXYIs9B+lb3uts8nlwt606wdSqp7OMpBfJfiy6fsSQO9nIGflsJXDKgFSssnViT69nAtR1UcS0VS9s6tsd//HXOAE4tQYc41hundazFpqAARqaI7zi28gWh0UD/CZk9FHn1+MrzOAzh+rhBbUpwZv8lNnJ1rJ1wRWGgSgEDjSmQboj2nFFufc94P29Dg3Pdx9V8lODhBXALBd9o15T0DhcWhJyDj3OEBnOmr3qEdeATQAkoiufvCurZTaWQ9k6+W54zxhLhdhFaCzI9G3ml3ZenbuLG8x5jVFhFk2re3RpmzVL3AoAgNSbNaH5m3gByMLas2UlEIw5hCHN85SBUCkpARWsMAvQQrgkzADQwJuTTQHXZ/SxtuP8N14AR4LEeLySP330KSH1TWe2uXrQkScW6WfYqoFywQg8Jmyl6Z4bu8Dbg5Awgz10kEE8Ibeit1PKu6MrNX3CNQAQsbuPWUMtRcRUzT24YbjJIy5jxiDEidk1V9wXtl2HDpvEU+EVnnOORMAOJaNGwthFQjuwEEac4GuSWHs7gaBZC4gEbOJqcfdqYdAil3oYsV81h1VAMyxk2xi+tuD3QH6Li8n0bns+mpbyZbtVyGUCsXFz6IAJWQLqZUCDhaxMquhs5A4Knsc9QZJigVe2ZdEJJGXiNC5nUSg/n/+AlXbHvvxgWGxAAAAAElFTkSuQmCC',
      'searchUrl': 'https://xthor.tk/browse.php?c118=1&c119=1&c107=1&c1=1&c2=1&c100=1&c4=1&c5=1&c7=1&c3=1&c6=1&c8=1&c122=1&c94=1&c95=1&c12=1&c31=1&c33=1&c9=1&searchin=title&incldead=0&group=0&state=0&accent=0&price=0&gang=0&mqr=0&staff=0&sch=%search_string_orig% %year%',
      'loggedOutRegex': /Cloudflare|Ray ID|autoriser les cookies|Cliquer sur le bouton marqué/,
      'matchRegex': 'Aucun résultat'},
  {   'name': 'xThor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAAFBQUYHR8xMjMTTHRDRUUSOVRaX2J0d3gjYo4xdqZop9KSlZc+jsaMssxthpcVflnHAAAAAXRSTlMAQObYZgAAAm9JREFUOMuFkTFoE1EYx28oXTq9U7vnJZ442vOataaPg4wSHgluvRwHnaW+IEjGvmKhgrFycRVKHhQcXDTqXOhRupdD95bMNS7+v3fJkdrB/xL4//L7vvfeOWVWxhTnVsbf8zwH+fRPf2yOlNIHp+PJTfJ1tCOlbCudXYIs9B+lb3uts8nlwt606wdSqp7OMpBfJfiy6fsSQO9nIGflsJXDKgFSssnViT69nAtR1UcS0VS9s6tsd//HXOAE4tQYc41hundazFpqAARqaI7zi28gWh0UD/CZk9FHn1+MrzOAzh+rhBbUpwZv8lNnJ1rJ1wRWGgSgEDjSmQboj2nFFufc94P29Dg3Pdx9V8lODhBXALBd9o15T0DhcWhJyDj3OEBnOmr3qEdeATQAkoiufvCurZTaWQ9k6+W54zxhLhdhFaCzI9G3ml3ZenbuLG8x5jVFhFk2re3RpmzVL3AoAgNSbNaH5m3gByMLas2UlEIw5hCHN85SBUCkpARWsMAvQQrgkzADQwJuTTQHXZ/SxtuP8N14AR4LEeLySP330KSH1TWe2uXrQkScW6WfYqoFywQg8Jmyl6Z4bu8Dbg5Awgz10kEE8Ibeit1PKu6MrNX3CNQAQsbuPWUMtRcRUzT24YbjJIy5jxiDEidk1V9wXtl2HDpvEU+EVnnOORMAOJaNGwthFQjuwEEac4GuSWHs7gaBZC4gEbOJqcfdqYdAil3oYsV81h1VAMyxk2xi+tuD3QH6Li8n0bns+mpbyZbtVyGUCsXFz6IAJWQLqZUCDhaxMquhs5A4Knsc9QZJigVe2ZdEJJGXiNC5nUSg/n/+AlXbHvvxgWGxAAAAAElFTkSuQmCC',
      'searchUrl': 'https://xthor.tk/browse.php?c104=1&c13=1&c15=1&c14=1&c98=1&c17=1&c16=1&c101=1&c32=1&c110=1&c123=1&c109=1&c30=1&searchin=title&incldead=0&group=0&state=0&accent=0&price=0&gang=0&mqr=0&staff=0&sch=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|autoriser les cookies|Cliquer sur le bouton marqué/,
      'matchRegex': 'Aucun résultat',
      'TV': true},
  {   'name': 'YGG',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAGFBMVEUAAAADBgZg17Je1tIoTkdMm5B+39+WyLoJ73F8AAAAAXRSTlMAQObYZgAAAPVJREFUOMvtj7FOwzAYhCMGmK9ydjg3sKIaZ3ebPECSeq9AYo5g6OtzietCOtOt32DL9+n/Lylu/BefC37zD7egzvm9u+CQB3x0zkcfhzj4aKOt88Abdq5DgEGpQ4/DqcGjdAEZiTpXB+MVtPvp6M7iaLVnyqysmfe6VPKtBxCM20A7fZrIJTAdhumya4nX9FWkDVg9wQQATcDOjrN4l1Bjhcz2JW3akAwg9+k/mrNQXqHkfK3INbbkLL7So2p6zZi+Q8/nWdyRekiKAEE+zuJBFUZ7FJrJtuRYnHbFSJmm7Rkb5SrPI0s0sDSXuczxD2Nx49r8AJ3bR5C4bo7GAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www3.yggtorrent.wtf/engine/search?name=%search_string_orig%&category=2145&sub_category=all&do=search',
      'loggedOutRegex': /Ray ID|security check to access/,
      'matchRegex': 'Aucun résultat',
      'both': true},
  {   'name': 'Zone Telechargement',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEURERH+/v5EREShoaFmb2g0AAAAsUlEQVQY013OoQrCUBiG4deJYYgm1ywKw2TUbBQsIn4eBYUV+zCpaXgP65Zdgn3Zvr5L8RzPQPAN///ED41lewtllUWWs2YqXRmxJ5BKQhK+BT/07XlCl0I+Zv4b5nROl/w+YUB8qKN0wpDZrXSAqiRKgUCZR2uHR3hs0Fk3yJMG1cKjbQhrh9DQ89jSKx0KN93hZdGWyYD/zQsa7OlKCS02xNKRGAWyPSK0clgKGYezPhUiNw3ZqfRIAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.zone-telechargement.meme/index.php?q=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': />Found/,
      'positiveMatch': true,
      'both': true}
];

var german_sites = [
  {   'name': 'AnimeWorld',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAABAQGnp6////9BQUN0dHba2tzNzc81Mc34AAAAAXRSTlMAQObYZgAAArtJREFUSMflVD134jAQNLykzyoyafEakRoP4BYZk2uxiR/1xZdcHbjk99/K2EaQu1+QeS52tePRfkgKvhNs+HXtmc72cGT0dbzIfm1752aHxZVG9ITkrvcGMTBZ+fFbBcAjIARsEBhLAl0GQV4jqrOzXkprLJTVFXPJldWTNeYUb86EhKhGseEWEw1YIfgKIpFwj1gEfMJgSaSBMwEohKC8KkhXceopJJWltzuvD1bzFSx5fbi9L6prQqXnXmdUVF4TTDgbnwn57CthVPid/+AvWCuPcPPE099+9POFP+4uZsNT4KULi53wZOsrZI9vkNU44TJOJI7lwaz8HPZocMTrHgkaJP4WeYwWi3VnJbmfQk+Y94Q02p6C4Xhoy/q1KuEwu4eDEZf1eFhsg5ucKGNERCE+haBEHIXzDhOiXAhZM39LRMoAUQhUEQngpmtWDWGKhBysEDWWunF2SFrCEUBEDR5AdJyf7NB1Qwi3qgb+UAsjCXV2BkDaOVTH5Jn+ic1u+S4jD7Gg/2CNyF1CpI2XW+qhc3KIsZE5RTs0oTA2ZHWVFbJ7WjQ0JGoVDGiEn21SC6vk1tAehhwUZrQKhlp3SZSG9lI6Zca2KRRWktQmhm031mBG0aWDZekmGpVTkTphhAP3zgMSVu40Ka6ljq69j33VMfj0aGiZxXs3C3fedJtiwvZ03jKOl82uxh1LoDwJLNmo05HRzGgmVKNRgLOfwFyMuweNuXbzBPBRAq4oJemaUIKdhJRPWgTC5zVQkGsI2/5yRqF4oiAlqskDDmLrkgvlvZqa8qrK4VK5B5xNF69vQe6Bi7huDi2LYGU1neNEkmKZ21gkRkCq80r8AXkSlrQuzfqINEb6KtPK6fptJkEz1x8oyOEyPiD5yqjpIStDKhjcXRIkEVmx7kqRlC//i+ujW6iq9odvhr+HrLg+UuvKUAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://animeworld.cx/torrents?tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password|Passwort vergessen|Service Unavailable/,
      'matchRegex': /"Download">/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'AnimeWorld-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAABAQGnp6////9BQUN0dHba2tzNzc81Mc34AAAAAXRSTlMAQObYZgAAArtJREFUSMflVD134jAQNLykzyoyafEakRoP4BYZk2uxiR/1xZdcHbjk99/K2EaQu1+QeS52tePRfkgKvhNs+HXtmc72cGT0dbzIfm1752aHxZVG9ITkrvcGMTBZ+fFbBcAjIARsEBhLAl0GQV4jqrOzXkprLJTVFXPJldWTNeYUb86EhKhGseEWEw1YIfgKIpFwj1gEfMJgSaSBMwEohKC8KkhXceopJJWltzuvD1bzFSx5fbi9L6prQqXnXmdUVF4TTDgbnwn57CthVPid/+AvWCuPcPPE099+9POFP+4uZsNT4KULi53wZOsrZI9vkNU44TJOJI7lwaz8HPZocMTrHgkaJP4WeYwWi3VnJbmfQk+Y94Q02p6C4Xhoy/q1KuEwu4eDEZf1eFhsg5ucKGNERCE+haBEHIXzDhOiXAhZM39LRMoAUQhUEQngpmtWDWGKhBysEDWWunF2SFrCEUBEDR5AdJyf7NB1Qwi3qgb+UAsjCXV2BkDaOVTH5Jn+ic1u+S4jD7Gg/2CNyF1CpI2XW+qhc3KIsZE5RTs0oTA2ZHWVFbJ7WjQ0JGoVDGiEn21SC6vk1tAehhwUZrQKhlp3SZSG9lI6Zca2KRRWktQmhm031mBG0aWDZekmGpVTkTphhAP3zgMSVu40Ka6ljq69j33VMfj0aGiZxXs3C3fedJtiwvZ03jKOl82uxh1LoDwJLNmo05HRzGgmVKNRgLOfwFyMuweNuXbzBPBRAq4oJemaUIKdhJRPWgTC5zVQkGsI2/5yRqF4oiAlqskDDmLrkgvlvZqa8qrK4VK5B5xNF69vQe6Bi7huDi2LYGU1neNEkmKZ21gkRkCq80r8AXkSlrQuzfqINEb6KtPK6fptJkEz1x8oyOEyPiD5yqjpIStDKhjcXRIkEVmx7kqRlC//i+ujW6iq9odvhr+HrLg+UuvKUAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://animeworld.cx/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password|Passwort vergessen|Service Unavailable/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'BTF',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABNVBMVEUAAAABAQD2lAARDgP+mABaOwUHBgOYYAUOCwL7lgDujwDoiwCnp6eXlpNkRAdhQQe6cgRFLgSUXAMJBwJUNAExHwH8lwD4lQDzkgC4bgCSWAA3IACmpaOenpxhYWH3uFihg1T1s05FRUXunyrJghTwlAlwSgfCdwS/dQOybQJ2SgLHeAHkiQDghwDTfgDPfACkYgAoGACgnpiYmJjDsZSRkZG+qouLi4uJh4CAgICMiX6GhH58fHx1dXXruWzPpmqrkGh0cWhtamPJnlxaVkxQTUXJlUOtgz2TcDy9iDk5NiwrKyvjmCUlJSVjTyQxLSOzeCHYjx7xmx18VRrYihOeaBLAeg8UEw+eZgzmjgrqjwdgQAclHgcZFAWoaQTLfAPJewMdFANMMAHVgABnPgBiOwBdOADYnnXuAAAAAXRSTlMAQObYZgAAAOJJREFUGNMty1WWwkAUBNDXGg9xEgIMMMDgMu7u7u62/yXQEO5fVZ2Cocnixmbh6PoJxiZm5xZW86WTm0qS12f0rLG4tXv8gLqj3dD13D5VcEgQ6oj/fC47vXxwq2i11zfy3YHiknGqBM/n6alUq90mEeysrVyFZfooCq1rkV8o5LfL6l1aCpqm+v4ix3BY2rvXVFylnybGmMRweXZhaVUs0Q8zqDPXgwonlupgidkpKhHkQOtProVYacguo47bjwB+uM2YLSP05fk8A0IPcY4SDRipx0nsiz3R7P37vpeJQBgAvNQbP4KjuDwAAAAASUVORK5CYII=',
      'searchUrl': 'https://bittorrentfiles.me/browse.php?search=%tt%&search_where=4',
      'loggedOutRegex': /Cloudflare|Ray ID|Server nicht zur Verfügung/,
      'matchRegex': /keine Torrents/,
      'both': true},
  {   'name': 'Data-Load',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAABHPnB/RKTzQfzFR+dVY6eUc/pXrvt/ApnCAAAAAXRSTlMAQObYZgAAAKxJREFUKM+FkuENwiAQhcsGvab6H9AB8FigtQto0gE0hhFkfR9ognBN+jVpwpd75ODoviiivvuDMs0alHVtVBF9XQBKQSmRgiqEaBLIJDEYvd4OK/iJkXV4xBjf4QmBMutHf84iaEqCnfXHgMT9NUEgYdidZgL4dznBml0RfMnKgAURJKZrVsx+wabKssmKwZz6GAwaw5cgCNH67mn3b6zJiDHIQdVmc9jiOXwA+nIrbK/VvwoAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.data-load.in/search/12345678/?q=%tt%&c[container_only]=1&o=date',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort vergessen|Forgot your password/,
      'matchRegex': /No results found|Keine Ergebnisse gefunden/,
      'both': true},
  {   'name': 'DDLW',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJXSURBVHjapJO7axRRFIe/O3eemUmym90QdzdP39Ei2KQRTGVlbyWxUFCw1yZFAqKFjdra6n9j418gqGChaHZ2XnvvzL0WsyLBYOOpDhzOj+93HsJay/+E+6/iw6PnNukusbC4SJIk+J6PxaK1JssLiixDnEZw7+DI9ocjBoMBy/0+cRLj+z5SugigMQ3VVJFl+d8CD56+sGe3thitrdLpdoniBON6GMchlJLaWrCGAINW+qTA/cNn9sr2VQYb68SdDm4Uo6RDZcAVDsqAJyzCGqQQLEiB87t5//GB3Tp3ge5oiJhfRIcR2nXJrGAlCthdW8IKw/mFkN2NZT6lBZ+z6s8Qe8MRcb+PmYshCBHSBcfBGoNFAPC9qinjlnisFMLKlmD/yaGNuj1sFOOHEY4rwREIAZO64YeqASgM6JnjBrB2tkYTxzhRTBCGTK0gKxS4DYUVfK0a4o5smwSYGfG40ihbzWYQhHiBT40grSoSCdIYpGkYRh4rkQeAMlCbFmE1Dul6siVwvQAhJIWu8aXL3qW1Uw+r0jWZbu3c3tkCaNd49+Ubu765yXyvx7dSMa0NbjiH4/sI3wcpaRBkusYzDV6tsWVFMy1bgsZYVNMwyUsmacHO5pAgjLDSRbguCMlEaz6kKYM4YHUhwSgfo6NWQGuN1g3pz2OKvOLW7s1TLbz/+IXLZzpc314/+UxlUTFViqmFtCh49PotThDieB6Fgb2L69y5cY0yHVPrXvsvr94hG90KFEVOnpcoBGHgow3ggOOAmuTkkxSA6fgYXZZtXmYsJjG/BgCm4wqyWfJJYwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://ddl-warez.cc/?s=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Keine Treffer/,
      'both': true},
  {   'name': 'DokuJunkies',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABNVBMVEUGBgb///8AAACkpKQAAAAAAADq6ure3t7Ly8uVlZV8fHxgYGBISEh0dHQSEhIGBgaQkJAoKCixsbEQEBC2tranp6eUlJSCgoL///+Ghob////////MzMz///8AAABoaGgsLCxmZmZvb28hISEICAjZXTFkZGRfX19YV1beaDjngEc2NjbwllQ7OzuPbF2IaFv1n1rTh1jqk1VRUVF7Wk/si05KSkqdWULjdEBVOzQzMzO0Sy6PcmO2gGGjeGF2Z2CBal/Xj17fk13umlubbVqudFhiWle/eVaCYlXPf1PXglK6cFBmVlDKdk3Sd0yaYUujY0pUTEm9akhpUEjFa0amWkLcckFBQUFVREDIYjxAODbCVzVrPzTKWTODQTKZRjEwMDCrSS+iSC8oKCgcHBwaGhoKCgrj1CZbAAAAH3RSTlMUSgolDwBiYmIlJSX++vj2yKyZfWJiYmJUTjYpGRYEcH0zhQAAAMZJREFUGNNNyNV2wkAUQNHbadIidXcCtCNJcIe2uLu7y/9/AsMLyV7rvBz4Et5Ojt6RCJ83Ns3lHYIXm0Un+AFnFquO45QP/Jd2p/4xxkn3Lx/n1oTq9XjVOCEe1anwgZ2BUiabdxFSDLj4MBBak2W5nKO0KheiRjBQ6q+3euFGxdcJ+xdGePCFWDcYYow1h6wtmeDxYvBzMOZN+2sTPDmUyDy2nIxmsVVEsZvhOSrpbMzwKtk12ysA4Xb3fXR9j0BEoBGQuAeikyXq3szNIwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://dokujunkies.org/serie/search?q=%search_string_orig%',
      'loggedOutRegex': /Seite nicht gefunden/,
      'matchRegex': /<a href="\/serie\//,
      'positiveMatch': true},
  {   'name': 'FilmFans',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEX///8NnJxH41Un2ZYqv8UBxDoLbZABGS03RRLkAAAAaElEQVQI11XJLQ6AMAyG4W+M+TbhAASDXajAktADYOaZ4QIk4/rsJwjemif9cMsy5WZ467sxH0TaCx61DhszuRB+ANxRpovhwlEQYRoAQ3mi9OGpsCCUMiIPqrsITkP91nuLFFlVZX0BgjkQdzSCN3QAAAAASUVORK5CYII=',
      'searchUrl': 'https://filmfans.org/api/v2/search?q=%tt%',
      'goToUrl': 'https://filmfans.org/',
      'loggedOutRegex': /Cannot GET/,
      'matchRegex': /"result":\[\]/},
  {   'name': 'HD-Source',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAXVBMVEUAAAAAY5eRFxbMODgJEhy0LCsBLUeoJybUODjGMjIBRWm9MC+aIiJLEhLaNDAyS25qFRSiHRvdPDy9KCZ+HR13OEYZWIQnV4CZPEdYSmWGRli0JCFCMEJzJzCyNzvubZtLAAAAAXRSTlMAQObYZgAAAedJREFUWMPtlu3SmyAQhVtB8As1CULMq7n/y+xhCWutvNN28qMf4/mR4ZxlH8mOyfDlbX19UycgAA7T/K3kBPwvgD//Jv77AOg7O0A55waSd+7QvQMsBbTsnCJSwbLr4j4HrAUkm5ez7CjfGEsOwC1jAriCXMz3Wj4BeG5J574YmVDWmHEcmZAFDJfQol5ujo5zqSA5XgLXqixgunQdA6KTilBb3qwwyLMAqvEMOzjMMKFS3oRcmyYH6LTWRRqB05CVnDN4/dD6w6gMwKNSbjNk5zVWhCJNVMgB5lDp1inqDneLMwyr8RcA062EbknBEGDGsjWKt5HNAe6o7NRq2aScVrytzgKeLVQnhXUnU643QNlCsAeAr9GizUgyFk5Y+coFoUgDbcsB5r6uq1GqqCU4ozjnETyCJTIDuCIEWvbukHshyGYA9x4l/qrPSlQ13D6P7qphjwCBFh62E7QvoTA0PhgKOMAR4CtUeFZDD2flD7nD8ylvMoA5tNCs2MUZRpTD/+JD9PFgyI+AB7XkZyjqGh99XyHk/g3w8xmir0JzaK9G9GcB2HPlWfkKrpSUX6uoK1RbiS1ZgHvi7eWfnG/hDLmpfEl31kh6fP4EjYSYrtg1SiYpRcmm86583pVPwHlX/rsA7+obvAcqGK4t9SEAAAAASUVORK5CYII=',
      'searchUrl': 'https://hd-source.to/?s=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Private Computer/,
      'matchRegex': /No search results/,
      'both': true},
  {   'name': 'Immortuos',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAGFBMVEUBAQEUFBQuLi5OTU1wb2/f39+urq6SkpINuAOcAAABzElEQVQ4y6WSQW7bQAxFZ4wegKQDdGtyjHZbDQf1NrUG0QEK6wCFLW2DVpCvXwqGJWuSTRBqxyd+/o+h+0wh83tt2l8u7bAr2160OVm1VdkPeewuE9kV/Sa/XLpp5vdKn0JKnU1MIz8e7FCI6XAyMNWfhwGJkvJ17K/dqe17mDegSEh1nXMemtOQZy1EUc3pkOvU5PGcnxcQJKoZrjUP13Y43pU8SYqKTIM216brF2C7t0mQv6emNwv1vDuKyLYifspdXzcv5xmwkHBE96UZ/8lhbGHONwEG2GZB/7NrZ1fBpBjNHKP36fy0u2tRJBFECojg5S/dAdFtgtj69hfCkpwZDVQOASmLW4CglVTeuOwrN+8wIRYNR0ZTTcuDkIAHippVo0XdPbys+WciPeQo+PV5ARSqDRKTjQh8e308BoRNZUEM0PgKC5gCVM6HWkTH2/KF2Ue2e68AjwARGUVZw6/iFsFQZAlyLG8dkCMRKvsCeBS2gAFhTbxD0ZxjYHSwIoCkOcVUsVsTMC0JUSOi9VeEUIKGEsAUkvaVyNsJcHSIJseuAA5kX2tMJTDHRKmOOl1RQTyJaBCL4kqCGIIgTqRkG+ub6juFNycfrv9FQVzbpVv8JQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://immortuos.life/filterTorrents?imdb=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Hast du dein Passwort vergessen/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'Immortuos-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAGFBMVEUBAQEUFBQuLi5OTU1wb2/f39+urq6SkpINuAOcAAABzElEQVQ4y6WSQW7bQAxFZ4wegKQDdGtyjHZbDQf1NrUG0QEK6wCFLW2DVpCvXwqGJWuSTRBqxyd+/o+h+0wh83tt2l8u7bAr2160OVm1VdkPeewuE9kV/Sa/XLpp5vdKn0JKnU1MIz8e7FCI6XAyMNWfhwGJkvJ17K/dqe17mDegSEh1nXMemtOQZy1EUc3pkOvU5PGcnxcQJKoZrjUP13Y43pU8SYqKTIM216brF2C7t0mQv6emNwv1vDuKyLYifspdXzcv5xmwkHBE96UZ/8lhbGHONwEG2GZB/7NrZ1fBpBjNHKP36fy0u2tRJBFECojg5S/dAdFtgtj69hfCkpwZDVQOASmLW4CglVTeuOwrN+8wIRYNR0ZTTcuDkIAHippVo0XdPbys+WciPeQo+PV5ARSqDRKTjQh8e308BoRNZUEM0PgKC5gCVM6HWkTH2/KF2Ue2e68AjwARGUVZw6/iFsFQZAlyLG8dkCMRKvsCeBS2gAFhTbxD0ZxjYHSwIoCkOcVUsVsTMC0JUSOi9VeEUIKGEsAUkvaVyNsJcHSIJseuAA5kX2tMJTDHRKmOOl1RQTyJaBCL4kqCGIIgTqRkG+ub6juFNycfrv9FQVzbpVv8JQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://immortuos.life/filterRequests?imdb=%nott%&unfilled=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Hast du dein Passwort vergessen/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'JME',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAGFBMVEUAAADLbx70hyXaeCDugyS2YxnkfiKcVBQj4lv1AAAAAXRSTlMAQObYZgAAAMJJREFUGNNtj0EOgjAQRX9j0C21ilsZCm6rqKwlqFtCOADiBYgx8frCFEET/6Z5fdNpPv5G/AC5X7CjatSLKA0heu1kqgwGKhJMdIPcvjoZOKkLw+R1l7sKktUBYolig2VHsoGMzDSEYgLmlIsAR6BbLHR9R4SnJc+PQ+zx6Aevs4tZoGypHUwNymQLj6soyuHECjd0mesGSIzw+fd2P59r6+jMtQyTIi1bVbuf5tHq5fmwkUQ6oy36KCIKeNDaeoAxbxiGFqQE92uiAAAAAElFTkSuQmCC',
      'searchUrl': 'https://jme-reunit3d.de/torrents?imdbId=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort vergessen|Under Maintenance/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'JME-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAGFBMVEUAAADLbx70hyXaeCDugyS2YxnkfiKcVBQj4lv1AAAAAXRSTlMAQObYZgAAAMJJREFUGNNtj0EOgjAQRX9j0C21ilsZCm6rqKwlqFtCOADiBYgx8frCFEET/6Z5fdNpPv5G/AC5X7CjatSLKA0heu1kqgwGKhJMdIPcvjoZOKkLw+R1l7sKktUBYolig2VHsoGMzDSEYgLmlIsAR6BbLHR9R4SnJc+PQ+zx6Aevs4tZoGypHUwNymQLj6soyuHECjd0mesGSIzw+fd2P59r6+jMtQyTIi1bVbuf5tHq5fmwkUQ6oy36KCIKeNDaeoAxbxiGFqQE92uiAAAAAElFTkSuQmCC',
      'searchUrl': 'https://jme-reunit3d.de/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort vergessen|Under Maintenance/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'MaDsRevolution',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA2FBMVEUAAAAwaagABYskYa4AAABz4ZMPbA9Yq/o2iebc3NwOZA7///86mPgves5Hfb48crMiXKIVUZM0bI8AG1UucFIdZx9b6f9LxP9Iu/9Fsv8+of285vlirvhHsvZ+u/Bco+pLluU9id0zg9uQzc5MhcQsdMQlbr9Ce7oqbrooaLAaXqkoY6QsaaFCi54jWJw4b5s5ZIgYP4NawIAGP4BSiHkAFnkQNnBckG1BDmlLfmc+ZGNPpl5KNlgIHU4AHEgDGEQtekIAETcAEC0TDikVnBUOaA4NUQsnFQhE40ePAAAAAXRSTlMAQObYZgAAAI9JREFUGNOdzdUOg1AQRVEGuYJDoe7u7u79/z9qMy03fea87ZVJRoo5bhj8v2s74LKsRJmj0zvQD0SSz2iaDiBOimYKAWB/QyiZ6SQhsJYXXgKhzLIFSl4TxZ1/oWIxtn0+zn1YHRGq7YY1IHro2+OrhGsqnSAM/JZ9Un9/u73NyKk7B2zczHOHywu2mCryDV8aC0bbO6APAAAAAElFTkSuQmCC',
      'searchUrl': 'https://madsrevolution.net/torrents.php?type=&userid=&searchstr=%search_string_orig%+%year%&searchtags=&tags_type=0&order_by=s3&order_way=desc&filter_cat[52]=1&filter_cat[3]=1&filter_cat[4]=1&filter_cat[47]=1&filter_cat[2]=1&filter_cat[1]=1&filter_cat[20]=1&filter_cat[53]=1&filter_cat[24]=1&filter_cat[22]=1&filter_cat[49]=1&filter_cat[23]=1&filter_cat[21]=1&filter_cat[7]=1&filter_cat[5]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort vergessen/,
      'matchRegex': /No search results/},
  {   'name': 'MaDsRevolution',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA2FBMVEUAAAAwaagABYskYa4AAABz4ZMPbA9Yq/o2iebc3NwOZA7///86mPgves5Hfb48crMiXKIVUZM0bI8AG1UucFIdZx9b6f9LxP9Iu/9Fsv8+of285vlirvhHsvZ+u/Bco+pLluU9id0zg9uQzc5MhcQsdMQlbr9Ce7oqbrooaLAaXqkoY6QsaaFCi54jWJw4b5s5ZIgYP4NawIAGP4BSiHkAFnkQNnBckG1BDmlLfmc+ZGNPpl5KNlgIHU4AHEgDGEQtekIAETcAEC0TDikVnBUOaA4NUQsnFQhE40ePAAAAAXRSTlMAQObYZgAAAI9JREFUGNOdzdUOg1AQRVEGuYJDoe7u7u79/z9qMy03fea87ZVJRoo5bhj8v2s74LKsRJmj0zvQD0SSz2iaDiBOimYKAWB/QyiZ6SQhsJYXXgKhzLIFSl4TxZ1/oWIxtn0+zn1YHRGq7YY1IHro2+OrhGsqnSAM/JZ9Un9/u73NyKk7B2zczHOHywu2mCryDV8aC0bbO6APAAAAAElFTkSuQmCC',
      'searchUrl': 'https://madsrevolution.net/torrents.php?type=&userid=&searchstr=%search_string_orig%&searchtags=&tags_type=0&order_by=s3&order_way=desc&filter_cat[54]=1&filter_cat[28]=1&filter_cat[26]=1&filter_cat[48]=1&filter_cat[27]=1&filter_cat[25]=1&filter_cat[8]=1&filter_cat[53]=1&filter_cat[24]=1&filter_cat[22]=1&filter_cat[49]=1&filter_cat[23]=1&filter_cat[21]=1&filter_cat[7]=1&filter_cat[5]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort vergessen/,
      'matchRegex': /No search results/,
      'TV': true},
  {   'name': 'MovieHunterz',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAALVBMVEUAAAAfIi0uMkMaHCb///8oKzrY2Nk5PVGqq691d37o6OlDSWJaXGTGx8mMjZFcFpyfAAAAAXRSTlMAQObYZgAAAP5JREFUKM9l0bFKw0AcBvA6dO95CnVw8EDiWoJvcMQQopiDv4g4Hg7OhQydlOYBFB06dEv7BqVzoX2DLt37IP3ucg2X9Jvu+/HdLdc5zRmzIZOsB2CX4lYgQZ6PlpkZKFFntOgBiGoIlhWoFniTI6g2UAN0SvQmf/W3uItyCzHRugEJ0bgB5YbK0odx8Z5oH/5mr7H+1/OPTwcXDy8pQErp4PppOAPsJtMosHD1uP8C4A0HTOoVoFA1bBNmQPQjUcE+tnDTj1QFw5TpH10wB37OLQxc4xVwCDeVQ+6fsRigQ0A4YhGGOJrCcTU04AfQ5X7HlU7mA8PfdpkXDNo5AO94aL0yZTbuAAAAAElFTkSuQmCC',
      'searchUrl': 'https://moviehunterz.cc/search/1234567/?q=%tt%&o=date',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort vergessen|Forgot your password/,
      'matchRegex': /No results found|Keine Ergebnisse gefunden/,
      'both': true},
  {   'name': 'myGully',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADPUExURQAAAAkJCQsLCwsgABAQDxUhDhYWFRYWFhkZGRklEhoZGRoaGRoaGhsbGh4eHR4eHh8fHyIiISMiIiMjIiQkIycmJicnJikpKCsrKiwrKywsKy4tLS4uLS87JzEwMDMyMjMzMzU1NDkvJzo6OT08Oz8/PklIR0tBOExLSk5NTFBQTlVUU1lZV1pKO1pZWFxcWl1cWl5dXGJhX2JhYGJiYGtZSG1aSXVjUnZkU3h4eHtoWHxqWX9sXIBuXYVzYod0Y499a5F+bayNcczMzP///xQAxwgAAACvSURBVBjTNY9XEsJACEDRVRN77zXGrmuPil2S+59JWOMbPuANQ4FAIINJwZRPxA2+jWJBd5zMG+1tHz8kgq7uOK6ErsOGBTquL4DaIws6N2znN04NDlMCKlabvQBASeyOLLBYawXg+yxhhSzsWKnGhRHLtXSkcuVAKRYKFtJxiqbz4VCYvbSsTWTCtYDmDi9igaCSo4c2p3toZQuVegdv9H9uiFnEC+nwW1GatDbpF7GULSad5I+2AAAAAElFTkSuQmCC',
      'searchUrl': 'https://mygully.com/search.php?do=process&quicksearch=1&childforums=1&exactname=1&query=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|404 Not Found|Du bist nicht angemeldet/,
      'matchRegex': /lastpost.gif/,
      'positiveMatch': true,
      'rateLimit': 4200,
      'both': true},
  {   'name': 'NewHeaven',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAJFBMVEUNA636+v0JCA7n5vfRz/CEf9SgneC6t+lnYcpKQ8MrI7kvLVA9F1K7AAACS0lEQVRIx4XTP2vbQBjH8cOjt+I3YH4QcOopqO+gBg/dDEoL3kqrDF6NNXQzODhk8yTFi+mm81QnaQJ5c3n+SD7pniFHMunD9+TTPS5a3pfldpNmN/nka/KJlnlelcU2vc7yySS5UtDD0Onq4TMFCgksNaAAAVBgew4EMAyAN0izfDlJOGBBFd5QAwMBOAN9wxAYJAo08ReXcSBpgz4BE/jCYKh7eAImMBFAfxQgMDKBFvB+h9dwyHVgKsABFKgI1IGrcyAXwP90yHs8m8CqAWNfMTCBTIED6DPf47kd4OerBvT4jO7xv/WVBrRBnv0WwGc0Lhjc0AadQKrAe6DYzPFCG3QDCvrenzBKCZjADwGez2CcLvBiAtvmopXA7QJP4ZDrgAK+yTtcEAhfqQ7cCeCbPMf4D55MoBQgowDM8UjPuwEBl3LR1ngjEAcenDvWF20B4LEdSDngXf9YX7QVgX8hwBtQwDt/bC7ajIEGdAMOMGgu2jcG4Yw0cHB+j5EO47QGM/zSQAl456o9LjhAh/xTwGCG7/VPBA7OmWFMCGiglHEww8hAAw8Colmiz7zGtQa8ADtLBDSgwMwSgVs5ZK/ABKZrbOSQ/UGACeQENOAEmFlioAEFZpZWOxQaUGCGMSOgAQXdAH+lE8Ii0BlGDqQRMMMYgyUFurMUATtLJ/Ab8hJghlGAC8AE7ggcWsAEyhP6rgXMMBJwbWBmKQYm4CNghjEGJmBAGEYJGGCHsWcABdrDaEF4Qw5YEA6ZAwbEAbNMwIAPAi75IPAOyO3s7lig3o8AAAAASUVORK5CYII=',
      'searchUrl': 'https://newheaven.nl/index.php?strWebValue=torrent&strWebAction=search&sort=&by=&dirs7=1&dirs8=1&dirs37=1&dirs41=1&dirs101=1&dirs102=1&dirs103=1&dirs104=1&dirs106=1&dirs109=1&dirs108=1&searchstring=%search_string_orig%+%year%&type=2&do_search=suchen&time=0&details=title#search',
      'loggedOutRegex': /Cloudflare|Ray ID|Du Dich identifiziren/,
      'matchRegex': /Keine Torrents/},
  {   'name': 'NewHeaven',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAJFBMVEUNA636+v0JCA7n5vfRz/CEf9SgneC6t+lnYcpKQ8MrI7kvLVA9F1K7AAACS0lEQVRIx4XTP2vbQBjH8cOjt+I3YH4QcOopqO+gBg/dDEoL3kqrDF6NNXQzODhk8yTFi+mm81QnaQJ5c3n+SD7pniFHMunD9+TTPS5a3pfldpNmN/nka/KJlnlelcU2vc7yySS5UtDD0Onq4TMFCgksNaAAAVBgew4EMAyAN0izfDlJOGBBFd5QAwMBOAN9wxAYJAo08ReXcSBpgz4BE/jCYKh7eAImMBFAfxQgMDKBFvB+h9dwyHVgKsABFKgI1IGrcyAXwP90yHs8m8CqAWNfMTCBTIED6DPf47kd4OerBvT4jO7xv/WVBrRBnv0WwGc0Lhjc0AadQKrAe6DYzPFCG3QDCvrenzBKCZjADwGez2CcLvBiAtvmopXA7QJP4ZDrgAK+yTtcEAhfqQ7cCeCbPMf4D55MoBQgowDM8UjPuwEBl3LR1ngjEAcenDvWF20B4LEdSDngXf9YX7QVgX8hwBtQwDt/bC7ajIEGdAMOMGgu2jcG4Yw0cHB+j5EO47QGM/zSQAl456o9LjhAh/xTwGCG7/VPBA7OmWFMCGiglHEww8hAAw8Colmiz7zGtQa8ADtLBDSgwMwSgVs5ZK/ABKZrbOSQ/UGACeQENOAEmFlioAEFZpZWOxQaUGCGMSOgAQXdAH+lE8Ii0BlGDqQRMMMYgyUFurMUATtLJ/Ab8hJghlGAC8AE7ggcWsAEyhP6rgXMMBJwbWBmKQYm4CNghjEGJmBAGEYJGGCHsWcABdrDaEF4Qw5YEA6ZAwbEAbNMwIAPAi75IPAOyO3s7lig3o8AAAAASUVORK5CYII=',
      'searchUrl': 'https://newheaven.nl/index.php?strWebValue=torrent&strWebAction=search&sort=&by=&dirs18=1&dirs19=1&dirs20=1&dirs49=1&dirs51=1&dirs52=1&dirs53=1&dirs54=1&dirs66=1&dirs110=1&dirs108=1&searchstring=%search_string_orig%&type=2&do_search=suchen&time=0&details=title#search',
      'loggedOutRegex': /Cloudflare|Ray ID|Du Dich identifiziren/,
      'matchRegex': /Keine Torrents/,
      'TV': true},
{   'name': 'NIMA4K',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAALVBMVEUAAADBUiDDWCbIXyzLZjPObjrciEXWeD+biYC+dVGQcmPVZi3Njmi3pp3llFL5M/BLAAAAAXRSTlMAQObYZgAAAXFJREFUOMvtzj9Lw0AYBvB3aEwFW7jazakXHcRFuQr+Waq9UrtVaNFPkIKDS60Bp6AILoK4FwIiSEYXhTipFcdOOgiOBb+FT3N3oYi4uPYZnt69v3B9aZz/5NN194mm0D5uA9f9MjIYlazruq9qjhGSyAt+Ai1vnucdQtA+ZVqet0c6rVHJ4tI1jzWRHaJJtE+9uFXeRyXTaTaPSOdAIlVIQ1Z9W8rKhXlMyo4SCXmWsmYe+5CVa3wIQZ83pEwea8vaaVGL7OEUaJgQYtcWYhkihCjj1NfyJNYDKxGkqCVzK1b7lpMIolezOd8ii/M5CFe5V/LInS6lOJ/tx+Js4iMl25wXy7hyWR/K2hXUN8JYjqNLECdAFUpKmA6EsWmfNhib/yGLSi4Zm4n3bgtkCSDqSlI4x3ufDXOC2Y2vJF1gbIVMUpgRKRn+Uf53OcaufiI5nodwvoCRlTN7I3YU3amGpKMoejCSDsNQNYRChMb5K9+9gH5c6E3PJwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://nima4k.org/search',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Keine Ergebnisse gefunden/,
      'mPOST': 'search=%search_string_orig%+%year%'},
{   'name': 'NIMA4K',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAALVBMVEUAAADBUiDDWCbIXyzLZjPObjrciEXWeD+biYC+dVGQcmPVZi3Njmi3pp3llFL5M/BLAAAAAXRSTlMAQObYZgAAAXFJREFUOMvtzj9Lw0AYBvB3aEwFW7jazakXHcRFuQr+Waq9UrtVaNFPkIKDS60Bp6AILoK4FwIiSEYXhTipFcdOOgiOBb+FT3N3oYi4uPYZnt69v3B9aZz/5NN194mm0D5uA9f9MjIYlazruq9qjhGSyAt+Ai1vnucdQtA+ZVqet0c6rVHJ4tI1jzWRHaJJtE+9uFXeRyXTaTaPSOdAIlVIQ1Z9W8rKhXlMyo4SCXmWsmYe+5CVa3wIQZ83pEwea8vaaVGL7OEUaJgQYtcWYhkihCjj1NfyJNYDKxGkqCVzK1b7lpMIolezOd8ii/M5CFe5V/LInS6lOJ/tx+Js4iMl25wXy7hyWR/K2hXUN8JYjqNLECdAFUpKmA6EsWmfNhib/yGLSi4Zm4n3bgtkCSDqSlI4x3ufDXOC2Y2vJF1gbIVMUpgRKRn+Uf53OcaufiI5nodwvoCRlTN7I3YU3amGpKMoejCSDsNQNYRChMb5K9+9gH5c6E3PJwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://nima4k.org/search',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Keine Ergebnisse gefunden/,
      'mPOST': 'search=%search_string_orig%',
      'TV': true},
  {   'name': 'NRW',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAADAwMxMTGIiIj09PRbW1uqqqrLy8swI8iVAAAAAXRSTlMAQObYZgAAAf5JREFUSMftlUFvozAQhTnkD4wtk7ON6B1GTq7VKipnG7l7btmSc0V28/f3ESgQCsmlUi99B2vw+zz2WMBE0GFVMG/5UOcX5xWdQAB4qsKyyt0RwKZock2thBmlLxPJ/vQYbZ4y6mRMGjr5niD55zE6NK7zhTBzabU/RIe/Q4LPot8A3npALAHPp6h4XU7QzT6sAZpmgJiv/gSIBX8E4C/aIzDffQ6Iub2egZYAQeP6OwAtA2bdF1eAvg3AvwPQLeC58nNP2Rzl90D6K6lmO0irtyPw8FbpmNkPLod3xVvXA6EFbKxFwmyDLpmRXJd2qykdAOZMshMEwfRAgpc0Aq8XIEtsCFoFJ4IXwakrwHoYaYAEAGOE0WYC5DAAqBAMBBeVOTcCcXdZGsvSoEPAaUvOsgnwcgGwhS9ZJ3AhPwI6xhkwmSWMQUjUiSAdAWqB5ANQEgMCOZzBU5yzlT3AKiAqMUETABnUBUBu57pIzQBKOEMJqAWRw62ZKYCFpLymXkIDcANgkCHX0qcopKrr+tjYEm4GwPSAfCdR1hWX7W2narerGq9eJgAda3Z0pcTSAGBriWH1ney9bwHGz/8H+BIAHeeG0HE2jVv3xb7tenn/gKbHXNcV2/DxS0vQ9aKicpO2yLCD7/+JCi0LnbeoeEW7U9e8z//qRR3Pd9s/zP9veT8VEZXBIQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://nrw-tracker.eu/site/torrent_suche.php?showsearch=1&search=%search_string_orig%+%year%&incldead=0&orderby=added&sort=desc&cat=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort vergessen/,
      'matchRegex': /keine Torrents/},
  {   'name': 'NRW',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAADAwMxMTGIiIj09PRbW1uqqqrLy8swI8iVAAAAAXRSTlMAQObYZgAAAf5JREFUSMftlUFvozAQhTnkD4wtk7ON6B1GTq7VKipnG7l7btmSc0V28/f3ESgQCsmlUi99B2vw+zz2WMBE0GFVMG/5UOcX5xWdQAB4qsKyyt0RwKZock2thBmlLxPJ/vQYbZ4y6mRMGjr5niD55zE6NK7zhTBzabU/RIe/Q4LPot8A3npALAHPp6h4XU7QzT6sAZpmgJiv/gSIBX8E4C/aIzDffQ6Iub2egZYAQeP6OwAtA2bdF1eAvg3AvwPQLeC58nNP2Rzl90D6K6lmO0irtyPw8FbpmNkPLod3xVvXA6EFbKxFwmyDLpmRXJd2qykdAOZMshMEwfRAgpc0Aq8XIEtsCFoFJ4IXwakrwHoYaYAEAGOE0WYC5DAAqBAMBBeVOTcCcXdZGsvSoEPAaUvOsgnwcgGwhS9ZJ3AhPwI6xhkwmSWMQUjUiSAdAWqB5ANQEgMCOZzBU5yzlT3AKiAqMUETABnUBUBu57pIzQBKOEMJqAWRw62ZKYCFpLymXkIDcANgkCHX0qcopKrr+tjYEm4GwPSAfCdR1hWX7W2narerGq9eJgAda3Z0pcTSAGBriWH1ney9bwHGz/8H+BIAHeeG0HE2jVv3xb7tenn/gKbHXNcV2/DxS0vQ9aKicpO2yLCD7/+JCi0LnbeoeEW7U9e8z//qRR3Pd9s/zP9veT8VEZXBIQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://nrw-tracker.eu/site/torrent_suche.php?showsearch=1&search=%search_string_orig%&incldead=0&orderby=added&sort=desc&cat=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort vergessen/,
      'matchRegex': /keine Torrents/,
      'TV': true},
  {   'name': 'NRW-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAADAwMxMTGIiIj09PRbW1uqqqrLy8swI8iVAAAAAXRSTlMAQObYZgAAAf5JREFUSMftlUFvozAQhTnkD4wtk7ON6B1GTq7VKipnG7l7btmSc0V28/f3ESgQCsmlUi99B2vw+zz2WMBE0GFVMG/5UOcX5xWdQAB4qsKyyt0RwKZock2thBmlLxPJ/vQYbZ4y6mRMGjr5niD55zE6NK7zhTBzabU/RIe/Q4LPot8A3npALAHPp6h4XU7QzT6sAZpmgJiv/gSIBX8E4C/aIzDffQ6Iub2egZYAQeP6OwAtA2bdF1eAvg3AvwPQLeC58nNP2Rzl90D6K6lmO0irtyPw8FbpmNkPLod3xVvXA6EFbKxFwmyDLpmRXJd2qykdAOZMshMEwfRAgpc0Aq8XIEtsCFoFJ4IXwakrwHoYaYAEAGOE0WYC5DAAqBAMBBeVOTcCcXdZGsvSoEPAaUvOsgnwcgGwhS9ZJ3AhPwI6xhkwmSWMQUjUiSAdAWqB5ANQEgMCOZzBU5yzlT3AKiAqMUETABnUBUBu57pIzQBKOEMJqAWRw62ZKYCFpLymXkIDcANgkCHX0qcopKrr+tjYEm4GwPSAfCdR1hWX7W2narerGq9eJgAda3Z0pcTSAGBriWH1ney9bwHGz/8H+BIAHeeG0HE2jVv3xb7tenn/gKbHXNcV2/DxS0vQ9aKicpO2yLCD7/+JCi0LnbeoeEW7U9e8z//qRR3Pd9s/zP9veT8VEZXBIQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://nrw-tracker.eu/site/torrent_request.php?search=%search_string_orig%&filter=true',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort vergessen/,
      'matchRegex': />Nein</,
      'positiveMatch': true,
      'both': true},
  {   'name': 'RocketHD',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8AAABzxoNxAAAAAXRSTlMAQObYZgAAALpJREFUKM990rENxSAMBNCIMqNkH6dgBKZgifRpkOCm/IdtPogiViTy4Nxgju86gTr+A1iv4+qAA1p5dMzchSaSAE89ImK5wANW1NzJg9jkVlwQ6UnUjsYIiiQQKB3ccaQSwaZ8BMYTO0QUXAzvcXKxLxHtA6ybiH80Q+mIK1JZgMfh/RPNoWv5RNqBBYGwQsczkIlisZs4BiL03gxJAQOq3fXEnMI2H59cBNaZVkUw5P0d7C+ER+zY6wdFUso28xDDuwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://rocket-hd.cc/torrents?imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort vergessen|Service Unavailable/,
      'matchRegex': /torrent-search--list__overview/,
      'seedingRegex': /fa-arrow-circle-up/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'RocketHD-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8AAABzxoNxAAAAAXRSTlMAQObYZgAAALpJREFUKM990rENxSAMBNCIMqNkH6dgBKZgifRpkOCm/IdtPogiViTy4Nxgju86gTr+A1iv4+qAA1p5dMzchSaSAE89ImK5wANW1NzJg9jkVlwQ6UnUjsYIiiQQKB3ccaQSwaZ8BMYTO0QUXAzvcXKxLxHtA6ybiH80Q+mIK1JZgMfh/RPNoWv5RNqBBYGwQsczkIlisZs4BiL03gxJAQOq3fXEnMI2H59cBNaZVkUw5P0d7C+ER+zY6wdFUso28xDDuwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://rocket-hd.cc/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort vergessen|Service Unavailable/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'SerienFans',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAbFBMVEUAAAD+/v6/ZR/lwEHUmDXgtDzDbiLnxUPSlDHOiSzJfCjiuT7WnjXLgyrGdCXfsTzQjS7IeSbqzUbdrDrNhivLgSnKfijy4KvjvEDbqDjRkC/v28Dnx6XoyJPZpE3ZpDbAaCDkwJrZpTfBaSClNokQAAAAAXRSTlMAQObYZgAAAKhJREFUGNM9iwkOgzAMBG3nDuEqJJwF2v7/j3VS1JFW8o7WAEurKqYdzmBdzL0Sxhgxq+GU6+hh4P5gzKwWniRoZ2PwJsgughICUROVyK7+CcKSW7Ah0hw8DhbthFPZ8MOGW4SBl4KoCD49vLMQQqkQsughZIGFLBqwT8SJB1LKHXFvoGPz50UaamcRrV1XN/KDvqBP9eicG+vo+0Z/CKDpvU/J56ovgi+gYgi5MRk34gAAAABJRU5ErkJggg==',
      'searchUrl': 'https://serienfans.org/api/v2/search?q=%tt%',
      'goToUrl': 'https://serienfans.org/',
      'loggedOutRegex': /Cannot GET/,
      'matchRegex': /"result":\[\]/,
      'TV': true},
  {   'name': 'SerienJunkies',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABNVBMVEUGBgb///8AAACkpKQAAAAAAADq6ure3t7Ly8uVlZV8fHxgYGBISEh0dHQSEhIGBgaQkJAoKCixsbEQEBC2tranp6eUlJSCgoL///+Ghob////////MzMz///8AAABoaGgsLCxmZmZvb28hISEICAjZXTFkZGRfX19YV1beaDjngEc2NjbwllQ7OzuPbF2IaFv1n1rTh1jqk1VRUVF7Wk/si05KSkqdWULjdEBVOzQzMzO0Sy6PcmO2gGGjeGF2Z2CBal/Xj17fk13umlubbVqudFhiWle/eVaCYlXPf1PXglK6cFBmVlDKdk3Sd0yaYUujY0pUTEm9akhpUEjFa0amWkLcckFBQUFVREDIYjxAODbCVzVrPzTKWTODQTKZRjEwMDCrSS+iSC8oKCgcHBwaGhoKCgrj1CZbAAAAH3RSTlMUSgolDwBiYmIlJSX++vj2yKyZfWJiYmJUTjYpGRYEcH0zhQAAAMZJREFUGNNNyNV2wkAUQNHbadIidXcCtCNJcIe2uLu7y/9/AsMLyV7rvBz4Et5Ojt6RCJ83Ns3lHYIXm0Un+AFnFquO45QP/Jd2p/4xxkn3Lx/n1oTq9XjVOCEe1anwgZ2BUiabdxFSDLj4MBBak2W5nKO0KheiRjBQ6q+3euFGxdcJ+xdGePCFWDcYYow1h6wtmeDxYvBzMOZN+2sTPDmUyDy2nIxmsVVEsZvhOSrpbMzwKtk12ysA4Xb3fXR9j0BEoBGQuAeikyXq3szNIwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://serienjunkies.org/serie/search?q=%search_string_orig%',
      'loggedOutRegex': /Seite nicht gefunden/,
      'matchRegex': /<a href="\/serie\//,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'SFP',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEX+AAZ/AAN/AAT9fH/9uLn9UVT8zc7+CxH89fX+Mjf9p6j+X2NAAAL8nZ/+ICX9gobtCjzaAAAAb0lEQVQI12M4qCioKCgoJMMgZxzAAASMDMKXE0AMJgbhgASIiJwfw2ZrEENhSoErWESAcwGEIR+Q4MrAbDyRQbrDwcu0wvYigwIDgytDGedCBgEURkXHJxBjJ0MZyByQuWVAKwQgDEaQMwQVlYRkAAKIFa90L3ECAAAAAElFTkSuQmCC',
      'searchUrl': 'https://s-f-p.dyndns.dk/browse.php?do=search&keywords=%tt%&search_type=t_genre&category=0&include_dead_torrents=yes',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort Vergessen/,
      'matchRegex': /\/dl.png/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'SFP-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEX+AAZ/AAN/AAT9fH/9uLn9UVT8zc7+CxH89fX+Mjf9p6j+X2NAAAL8nZ/+ICX9gobtCjzaAAAAb0lEQVQI12M4qCioKCgoJMMgZxzAAASMDMKXE0AMJgbhgASIiJwfw2ZrEENhSoErWESAcwGEIR+Q4MrAbDyRQbrDwcu0wvYigwIDgytDGedCBgEURkXHJxBjJ0MZyByQuWVAKwQgDEaQMwQVlYRkAAKIFa90L3ECAAAAAElFTkSuQmCC',
      'searchUrl': 'https://s-f-p.dyndns.dk/viewrequests.php?do=search_request',
      'mPOST': 'keywords=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort Vergessen/,
      'matchRegex': /input_true.gif/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'SoR',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPBAMAAADJ+Ih5AAAAMFBMVEUAAAD///8QEBDOzs5CQkLn5+djY2MpKSn39/e1tbXW1tacnJyEhIRzc3NSUlKtra15q+CoAAAAAXRSTlMAQObYZgAAAHZJREFUCNdjgAPeAoZyBQY1BgbFD8WCkgqJCgwbQwIFBUMWbmDwNRYUFJRc+4CBgR/IEFYAqZ6SmGcN0saTlPzoDIjBEhokFQJiMP0IltgEpEu8rHNPGhcpMBjKvGhs9BQ0YChewNYYx9TpwMDuwKCkwJCOsBwAy2saNxtk/KkAAAAASUVORK5CYII=',
      'searchUrl': 'https://sor-next.tk/selection.php?scat[]=30&scat[]=134&scat[]=138&scat[]=137&scat[]=160&scat[]=186&scat[]=143&scat[]=133&scat[]=182&scat[]=183&scat[]=174&scat[]=173&scat[]=191&scat[]=147&search=%search_string_orig%+%year%&blah=0&orderby=added&sort=desc#1',
      'loggedOutRegex': /Cloudflare|Ray ID|Angemeldet bleiben/,
      'matchRegex': /Nicht gefunden was du/},
  {   'name': 'SoR',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPBAMAAADJ+Ih5AAAAMFBMVEUAAAD///8QEBDOzs5CQkLn5+djY2MpKSn39/e1tbXW1tacnJyEhIRzc3NSUlKtra15q+CoAAAAAXRSTlMAQObYZgAAAHZJREFUCNdjgAPeAoZyBQY1BgbFD8WCkgqJCgwbQwIFBUMWbmDwNRYUFJRc+4CBgR/IEFYAqZ6SmGcN0saTlPzoDIjBEhokFQJiMP0IltgEpEu8rHNPGhcpMBjKvGhs9BQ0YChewNYYx9TpwMDuwKCkwJCOsBwAy2saNxtk/KkAAAAASUVORK5CYII=',
      'searchUrl': 'https://sor-next.tk/selection.php?scat[]=140&scat[]=135&scat[]=136&scat[]=180&scat[]=184&scat[]=179&scat[]=173&scat[]=191&scat[]=147&search=%search_string_orig%&blah=0&orderby=added&sort=desc#1',
      'loggedOutRegex': /Cloudflare|Ray ID|Angemeldet bleiben/,
      'matchRegex': /Nicht gefunden was du/,
      'TV': true},
  {   'name': 'TNT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVAQMAAABrbCoMAAAABlBMVEXm5uYmLzenm8r7AAAC9klEQVRIx73Tz27TMBgAcIcgBSE074R2GMsLIAHiAIeqZuJF9gZw7KFqslNv9AWQhsQL8ASQnXJj10G7OlMOHJcKafXWLB9tbH92Yrb2Aj641q/x5+/zH/Jv2v1V5zXtUW3xWtup+6Rhz+v+oGHvsTctq/vXNnnSOrb5MvqebYHMgtpG8S/T9jCEaR1cylTWU4NZbCoTaiDM5BeFGvRNdbmO08VKvFRPCXexipEOTT9gFUdoJ1hFiP+msa6ii1Hy5A7r9DGDWaatRLvS1jMmCm0CK0K7Mlbq4cyyngry21jVv932c8s62/XvW9u60nLb1K7ObWNyYWiYuN3sXCJldh13WHRl9qqEQpowJtAqPA9trBygzSBTxvB8z5WFlbEcEmkQ4t1I0UZ4r0ZoKVqojIK5kwxiZTO8u5GyIBJ4x2GuEj0q9fs4h+9qdAL6HaXwUZ8vjFTKo6qPUXIZeYth5IrNZFa7ER5NNBTSdoDqrFhRyTf1UkSZrqjUb/oQdJUUsF6I9a4B4AB3HPTJQIWnBaBOGko86QitQDO7lqGFQLbkGglaADEV9XdIy4WToKpP1ZgHmb8KyUpiWlR4q1ARLisnQbYKYVkAq28CsOjBciYTy/0hMdoWgSIUJBK+MQqhWH4EKRjzIS1p6QHmJ68+BFUgLz1OFmwINJNTcQOHKYQU7DoAzlPYZWDPZZBfwFcGWaOOY4AyBGK3MF5UgiYN65JXcOBnDeuRd/CFFKTZOD8l7TbnvTZ5n6dP2+bvTx47djzZa9u9w8lDJ543uU8cnJCNzJ+6FgR/sZFrlMeOhTxxjPHMsYgXjgEXTsrASyflOR846f0aMSeVE37UToZRPmwnU4b8uL3wmydnyfYmdQzGbh3VWGxiXjUuNzG//+PSuQfXP683mns5dvaKVmOI23u1tMQplzsFR9/4RbtgAA6ibRGft21wc7Zoz2U3Z9BeIwTu5EIXUydnfzGt1t8XfIPr798z/mmjOx7wde8I35vbTsn/bH8ANSe+EaJ+o2YAAAAASUVORK5CYII=',
      'searchUrl': 'https://tntracker.org/api/browse?cats=6,7,17,18,19,20,22,24,34,35,36,37,38,39,43,45,46,48&orderC=4&orderD=desc&start=0&length=1&search=%search_string_orig%+%year%',
      'goToUrl': 'https://tntracker.org/browse/?search=%search_string_orig%+%year%&perPage=100&cats=6,7,17,18,19,20,22,24,34,35,36,37,38,39,43,45,46,48&page=1',
      'loggedOutRegex': /:"no access/,
      'matchRegex': /recordsTotal":0/},
  {   'name': 'TNT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVAQMAAABrbCoMAAAABlBMVEXm5uYmLzenm8r7AAAC9klEQVRIx73Tz27TMBgAcIcgBSE074R2GMsLIAHiAIeqZuJF9gZw7KFqslNv9AWQhsQL8ASQnXJj10G7OlMOHJcKafXWLB9tbH92Yrb2Aj641q/x5+/zH/Jv2v1V5zXtUW3xWtup+6Rhz+v+oGHvsTctq/vXNnnSOrb5MvqebYHMgtpG8S/T9jCEaR1cylTWU4NZbCoTaiDM5BeFGvRNdbmO08VKvFRPCXexipEOTT9gFUdoJ1hFiP+msa6ii1Hy5A7r9DGDWaatRLvS1jMmCm0CK0K7Mlbq4cyyngry21jVv932c8s62/XvW9u60nLb1K7ObWNyYWiYuN3sXCJldh13WHRl9qqEQpowJtAqPA9trBygzSBTxvB8z5WFlbEcEmkQ4t1I0UZ4r0ZoKVqojIK5kwxiZTO8u5GyIBJ4x2GuEj0q9fs4h+9qdAL6HaXwUZ8vjFTKo6qPUXIZeYth5IrNZFa7ER5NNBTSdoDqrFhRyTf1UkSZrqjUb/oQdJUUsF6I9a4B4AB3HPTJQIWnBaBOGko86QitQDO7lqGFQLbkGglaADEV9XdIy4WToKpP1ZgHmb8KyUpiWlR4q1ARLisnQbYKYVkAq28CsOjBciYTy/0hMdoWgSIUJBK+MQqhWH4EKRjzIS1p6QHmJ68+BFUgLz1OFmwINJNTcQOHKYQU7DoAzlPYZWDPZZBfwFcGWaOOY4AyBGK3MF5UgiYN65JXcOBnDeuRd/CFFKTZOD8l7TbnvTZ5n6dP2+bvTx47djzZa9u9w8lDJ543uU8cnJCNzJ+6FgR/sZFrlMeOhTxxjPHMsYgXjgEXTsrASyflOR846f0aMSeVE37UToZRPmwnU4b8uL3wmydnyfYmdQzGbh3VWGxiXjUuNzG//+PSuQfXP683mns5dvaKVmOI23u1tMQplzsFR9/4RbtgAA6ibRGft21wc7Zoz2U3Z9BeIwTu5EIXUydnfzGt1t8XfIPr798z/mmjOx7wde8I35vbTsn/bH8ANSe+EaJ+o2YAAAAASUVORK5CYII=',
      'searchUrl': 'https://tntracker.org/api/browse?cats=2,6,7,16,27,28,29,40,41,42&orderC=4&orderD=desc&start=0&length=1&search=%search_string_orig%',
      'goToUrl': 'https://tntracker.org/browse/?search=%search_string_orig%&perPage=100&cats=2,6,7,16,27,28,29,40,41,42&page=1',
      'loggedOutRegex': /:"no access/,
      'matchRegex': /recordsTotal":0/,
      'TV': true},
  {   'name': 'TorSyndikat',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAQAFKAUhniENRg00yzQlpyUwvTAdgh0uqy0otCgdkR0VZBUZchkslCw3njdBp0A8K5mgAAABPElEQVQoz2KgBmAUhAAgy9jYECggU75qlZJqaLgAc21H6/WNDAxWqpEz01xc/AR2pKVldGgLwAQ8hFvc0jo6eg0YxFcpTUtJS8sTd3FpB2o6wMBsbB3mMv3MaSEXt8M2Ea2FQMOFw1x8DQUtXNw2Wl8NAgowMIcBjWQwc3E7aHz8zAa4gIWLSzfIOSCBEJAA0NCMw0AeRMBXgIH5mltm10EgF6wlV4CBwTYtc4a6AVQAsHQBIFU6c2rQYohAyhwBIC1cFBoEVsKsmQYUEDYWkF6kpLQBLDAzWoDB7v9lRnMlpUKIgDbQHWntgtaLIAKqIAGjmeHWp6ECSyNBwRAadP85TCBUB+jS0NC4R0paG+AC3KpKQACxdpES0D2Mh0AC1SAHMR4vB/lBumrVqmoDsGcEBUHiQKcZg2nKAQDVkV5eM0/GfQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://torrent-syndikat.org/browse.php?search=1&sterm=%tt%&stype=imdb&genre=0&ttype=all&timespan=all',
      'loggedOutRegex': /Cloudflare|Ray ID|Domain erwerben/,
      'matchRegex': /Keine Ergebnisse/,
      'both': true},
  {   'name': 'TorSyndikat-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAQAFKAUhniENRg00yzQlpyUwvTAdgh0uqy0otCgdkR0VZBUZchkslCw3njdBp0A8K5mgAAABPElEQVQoz2KgBmAUhAAgy9jYECggU75qlZJqaLgAc21H6/WNDAxWqpEz01xc/AR2pKVldGgLwAQ8hFvc0jo6eg0YxFcpTUtJS8sTd3FpB2o6wMBsbB3mMv3MaSEXt8M2Ea2FQMOFw1x8DQUtXNw2Wl8NAgowMIcBjWQwc3E7aHz8zAa4gIWLSzfIOSCBEJAA0NCMw0AeRMBXgIH5mltm10EgF6wlV4CBwTYtc4a6AVQAsHQBIFU6c2rQYohAyhwBIC1cFBoEVsKsmQYUEDYWkF6kpLQBLDAzWoDB7v9lRnMlpUKIgDbQHWntgtaLIAKqIAGjmeHWp6ECSyNBwRAadP85TCBUB+jS0NC4R0paG+AC3KpKQACxdpES0D2Mh0AC1SAHMR4vB/lBumrVqmoDsGcEBUHiQKcZg2nKAQDVkV5eM0/GfQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://torrent-syndikat.org/rsystem/requests.php?cats[]=Serie&cats[]=Film&sname=%search_string_orig%&rtype=all&rfill=unfilled',
      'loggedOutRegex': /Cloudflare|Ray ID|Domain erwerben/,
      'matchRegex': /Keine Ergebnisse/,
      'both': true},
  {   'name': 'TorSyndikat-Produkt',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAQAFKAUhniENRg00yzQlpyUwvTAdgh0uqy0otCgdkR0VZBUZchkslCw3njdBp0A8K5mgAAABPElEQVQoz2KgBmAUhAAgy9jYECggU75qlZJqaLgAc21H6/WNDAxWqpEz01xc/AR2pKVldGgLwAQ8hFvc0jo6eg0YxFcpTUtJS8sTd3FpB2o6wMBsbB3mMv3MaSEXt8M2Ea2FQMOFw1x8DQUtXNw2Wl8NAgowMIcBjWQwc3E7aHz8zAa4gIWLSzfIOSCBEJAA0NCMw0AeRMBXgIH5mltm10EgF6wlV4CBwTYtc4a6AVQAsHQBIFU6c2rQYohAyhwBIC1cFBoEVsKsmQYUEDYWkF6kpLQBLDAzWoDB7v9lRnMlpUKIgDbQHWntgtaLIAKqIAGjmeHWp6ECSyNBwRAadP85TCBUB+jS0NC4R0paG+AC3KpKQACxdpES0D2Mh0AC1SAHMR4vB/lBumrVqmoDsGcEBUHiQKcZg2nKAQDVkV5eM0/GfQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://torrent-syndikat.org/psystem/products/products.php?term=&type=title&idterm=%tt%&idtype=imdb',
      'loggedOutRegex': /Cloudflare|Ray ID|Domain erwerben/,
      'matchRegex': /Keine Ergebnisse/,
      'both': true},
{   'name': 'WCX',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAilBMVEUAAAAAAAAAAAAAAAAFAAD0FBkIAADsBSkAAAAFAAAAAAD1FBkAAAAAAAD/FhwAAAACAAAAAAAAAAAAAAAFAADmExgAAAABAAAAAAB6CQy2DxOdDRAAAAAAAAAAAAAAAAAAAADGDRU/BQb/Fhz/Fh7/FyBTBgr/FyG9DRP/Hij0FBohAgOKCw5iCApaqhxhAAAAKnRSTlMA/g3yLtn6BaMZZ0fEX/zTmpR0NyX77lgI/v353rOsjEwS/KpbVkk2JxlIJll+AAABG0lEQVQ4y9WQ6XaDIBBGZ4QiUnGPW9ySdDd5/9friB6jjf5vrh6B+S6MB/gfdPFewjszRCxItuIkZNE4QRQB34gRx6rqjz0KuVJ4IJDK4wlZ75VIkDLHSJRer8zSSa9eWRzPiI0DDr0S8XwsSu/KHDBkWBy8w01kOudVFYPO2I0KBWow5NC5KJgbAygkqHFcCyHcDu5YiUOfBg2NRX25M4dt2Latpm0VTlAbiOqmrmU+bDY1l45fEIFrRmsQUkSBrsQV0gipEdgyCMLlij0ICkCLfcHnYNvA/T0hhIlwU2Dq83XiO2OPgv9x+Zl5T/y/QvB1ObzcebPlWlBgn2huDw9xooWahXT4+w24P10Uyhw2ySUaQcMu2oKn4BcxihFxFx1o8wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://api.warez.cx/start/search?q=&selectedTypes=&selectedGenres=&types=movie%2Cseries&genres=&page=1&per_page=24&sortBy=latest&sortOrder=desc&search=%search_string_orig%',
      'goToUrl': 'https://warez.cx/search',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /total":0/,
      'both': true},
  {   'name': 'WoT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACDUlEQVQ4jdWRT2iScRjHP+9Pc07NXuTNYJC9mYSJLJIWS7M/S/ozKKIigjrsUO0UidgOiw6DTiGxgugQMQ+RwU471oZEsUbRH4JBI3Yws7WBAzMRtXfv22EOjNqlW9/bw/M8n+/zB/57SQCJCEqpRuz8dk55XfgffeDo4DiFXJIe4DYQVVOUckkCwBjQr6bIAohEhAvAe93gmG7QDQQ1nbsnAyRmFxlqxqGmYS/gAzwrEwjgfqnGw/Q7znldXAE4spXR7o08VezLhW++cjUeJqgb7Gj2TbQCgGUHIfEawG1n28ATpmUrNoCOtXjKdfYWq5wAZtQUhVZAv2zlUF+ISy2J3lwSBVAAPDLzA1HSshXb7CK+eJjOFYBp6gtvI5tQNZ3rUZWF4AYmLSb2A36gE8gDXrPgp0nQM/eDkec5Dsd8LL0q8NEE8DLP2MEtyN/r3JheQDcLhjuc7AbagGHgeHNNm9vBgWKViWKV7L7NvJBaf5rcw9lKg0ylQcmvkPWvZ/R0hse5JJ9bLm9XU1T7QpxxtXPtN0AT4tENhsp1YjUNp2LjWcDNnGcdNZeNb7vucRMgHiYmJMb/AAAkImSAgpBoNJYYLNdBSORta9BqGrLDgsUscOgG8+JvAGAnkNQNRu5MIbnauShbmTELSs42NCFR0Q3SQJd5FcAD4DJQbsafAE1IdN2aRF+l59/0C0a0pLzBV8MNAAAAAElFTkSuQmCC',
      'searchUrl': 'https://w-o-t.pro/browse.php?showsearch=1&c87=1&c64=1&c91=1&c66=1&c11=1&c49=1&c90=1&c48=1&c47=1&c60=1&c62=1&c89=1&search=%search_string_orig%+%year%&incldead=0&orderby=added&sort=desc',
      'loggedOutRegex': /Cloudflare|Ray ID|Registrieren/,
      'matchRegex': /Nichts gefunden/},
  {   'name': 'WoT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACDUlEQVQ4jdWRT2iScRjHP+9Pc07NXuTNYJC9mYSJLJIWS7M/S/ozKKIigjrsUO0UidgOiw6DTiGxgugQMQ+RwU471oZEsUbRH4JBI3Yws7WBAzMRtXfv22EOjNqlW9/bw/M8n+/zB/57SQCJCEqpRuz8dk55XfgffeDo4DiFXJIe4DYQVVOUckkCwBjQr6bIAohEhAvAe93gmG7QDQQ1nbsnAyRmFxlqxqGmYS/gAzwrEwjgfqnGw/Q7znldXAE4spXR7o08VezLhW++cjUeJqgb7Gj2TbQCgGUHIfEawG1n28ATpmUrNoCOtXjKdfYWq5wAZtQUhVZAv2zlUF+ISy2J3lwSBVAAPDLzA1HSshXb7CK+eJjOFYBp6gtvI5tQNZ3rUZWF4AYmLSb2A36gE8gDXrPgp0nQM/eDkec5Dsd8LL0q8NEE8DLP2MEtyN/r3JheQDcLhjuc7AbagGHgeHNNm9vBgWKViWKV7L7NvJBaf5rcw9lKg0ylQcmvkPWvZ/R0hse5JJ9bLm9XU1T7QpxxtXPtN0AT4tENhsp1YjUNp2LjWcDNnGcdNZeNb7vucRMgHiYmJMb/AAAkImSAgpBoNJYYLNdBSORta9BqGrLDgsUscOgG8+JvAGAnkNQNRu5MIbnauShbmTELSs42NCFR0Q3SQJd5FcAD4DJQbsafAE1IdN2aRF+l59/0C0a0pLzBV8MNAAAAAElFTkSuQmCC',
      'searchUrl': 'https://w-o-t.pro/browse.php?showsearch=1&c87=1&c64=1&c76=1&c79=1&c95=1&c78=1&c100=1&c16=1&c77=1&search=%search_string_orig%&incldead=0&orderby=added&sort=desc',
      'loggedOutRegex': /Cloudflare|Ray ID|Registrieren/,
      'matchRegex': /Nichts gefunden/,
      'TV': true}
];

var usenet_sites = [
  {   'name': 'abNZB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUCAgL9/f1+fn44ODjy8vK0tLTW1tbp6ek6AxG8AAAAW0lEQVQI12PAB5iUGZiUlIEMQzEGdhFBBQYGxUADxgTDBAaGNBUFxgLDAAZmIZMARhFxAwYmUUUBFqFABQZWdxdhxgQWAQZ2ByZRRqfAAAbDAGY3NsFSAwYiAADAiQnUTaSwOgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.abnzb.com/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/},
  {   'name': 'abNZB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUCAgL9/f1+fn44ODjy8vK0tLTW1tbp6ek6AxG8AAAAW0lEQVQI12PAB5iUGZiUlIEMQzEGdhFBBQYGxUADxgTDBAaGNBUFxgLDAAZmIZMARhFxAwYmUUUBFqFABQZWdxdhxgQWAQZ2ByZRRqfAAAbDAGY3NsFSAwYiAADAiQnUTaSwOgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.abnzb.com/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/,
      'TV': true},
  {   'name': 'altHUB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAAAAABqCHz+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAA/SURBVCjPY2CgGPz/ix9iKEDXgkMBQhmUi7AMRCNbz4BQjawXzQSCClCMxFRA0Aoi3IDNCiRfkBiSmAFHKQAA3nAtsAtCXGUAAAAASUVORK5CYII=',
      'searchUrl': 'https://althub.co.za/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /nzb_check/,
      'spaceEncode': ' ',
      'positiveMatch': true},
  {   'name': 'altHUB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAAAAABqCHz+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAA/SURBVCjPY2CgGPz/ix9iKEDXgkMBQhmUi7AMRCNbz4BQjawXzQSCClCMxFRA0Aoi3IDNCiRfkBiSmAFHKQAA3nAtsAtCXGUAAAAASUVORK5CYII=',
      'searchUrl': 'https://althub.co.za/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /nzb_check/,
      'spaceEncode': ' ',
      'positiveMatch': true,
      'TV': true},
  {   'name': 'Digital Carnage',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUDAwP39/ejo6NKSkqAAbjJAAAAX0lEQVQoz2OAA/5VexAcvtAcBId3wDmcQI7dKihYCeRYhsIA2ZwomHlrgJz8/1DwB8hJgAYIMocPrCwB7rZBy+FD4fx/g+QfBht0n2bBw4DCEIXED8I05v9w8IEBGQAAoXiN4YV4/UMAAAAASUVORK5CYII=',
      'searchUrl': 'https://digitalcarnage.info/movies?imdb=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember me/,
      'matchRegex': /Download/,
      'positiveMatch': true},
  {   'name': 'Digital Carnage',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUDAwP39/ejo6NKSkqAAbjJAAAAX0lEQVQoz2OAA/5VexAcvtAcBId3wDmcQI7dKihYCeRYhsIA2ZwomHlrgJz8/1DwB8hJgAYIMocPrCwB7rZBy+FD4fx/g+QfBht0n2bBw4DCEIXED8I05v9w8IEBGQAAoXiN4YV4/UMAAAAASUVORK5CYII=',
      'searchUrl': 'https://digitalcarnage.info/search/%search_string_orig%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember me/,
      'matchRegex': /Download/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'DOGnzb',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEUAAAAKCgr5+fmJiYmJYeXXAAAAAXRSTlMAQObYZgAAAUhJREFUOMutk7FOwzAURSMQA1SMfELHqlNHJH7ixlFUuZ2ZOqIMkJ/wJ2TojTpGTJXyE94zZ2ephIKNROxnJiSy+cj3+r2b97J//tbJeYFanK8+0AvwCBwEeAAKATbqcyvAsmqVAPcl7TQNAdxqGucrQCd8r3O2E7YRUCRPEVjBgzwAkztgVWgFFb1rKAMjW0DPoFP+wq4OitJdUEMoyykavMS9klZHcVnNVjSCZ55ULRVdnI9T0EaKBSpnESmW8H0lClNIBTFIxVHVoio286Pk2SvMYW4T+I6i/8kWgFOcVOjCX2BXhOjeLj7d/fykdse47k1F+T+MM4gtMnuhsMigxtjCAewciFq3wCuPUXprIBdTkJ2h2RRighOQ3ZRsDgnofoG9ABWNBCXNkwAYTS+GHNoKsACSXVoh3TbrgRSlG/uegru/7PsXts2sRKnpI9kAAAAASUVORK5CYII=',
      'searchUrl': 'https://dognzb.cr/movies/%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Keep me logged/,
      'matchRegex': />available</,
      'positiveMatch': true},
  {   'name': 'DOGnzb',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEUAAAAKCgr5+fmJiYmJYeXXAAAAAXRSTlMAQObYZgAAAUhJREFUOMutk7FOwzAURSMQA1SMfELHqlNHJH7ixlFUuZ2ZOqIMkJ/wJ2TojTpGTJXyE94zZ2ephIKNROxnJiSy+cj3+r2b97J//tbJeYFanK8+0AvwCBwEeAAKATbqcyvAsmqVAPcl7TQNAdxqGucrQCd8r3O2E7YRUCRPEVjBgzwAkztgVWgFFb1rKAMjW0DPoFP+wq4OitJdUEMoyykavMS9klZHcVnNVjSCZ55ULRVdnI9T0EaKBSpnESmW8H0lClNIBTFIxVHVoio286Pk2SvMYW4T+I6i/8kWgFOcVOjCX2BXhOjeLj7d/fykdse47k1F+T+MM4gtMnuhsMigxtjCAewciFq3wCuPUXprIBdTkJ2h2RRighOQ3ZRsDgnofoG9ABWNBCXNkwAYTS+GHNoKsACSXVoh3TbrgRSlG/uegru/7PsXts2sRKnpI9kAAAAASUVORK5CYII=',
      'searchUrl': 'https://dognzb.cr/series/%tvdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Keep me logged/,
      'matchRegex': /NO NZBS FOUND/,
      'TV': true},
  {   'name': 'DrunkenSlug',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAADnjA/s6uHopUjCva2tppbUzr7QbBXf3NDxwnGii3D49/L545/Cx8+qr7nR1twRDJ5wAAAAAXRSTlMAQObYZgAAAj9JREFUOMtt1EFo01AYB/AwRDaKSNih4KkELJHCJAQZEQ87pI9SZYeZ10OlY6PpIyAeZEqgpxFKeLDDKMKgsJsG8Z1KhkMtDspAHfQwxO2gdB2FXgbtYaC3UV/aNe9l7H98v3z8v8eDCJPEfEnCWKoLV+K7yHIk2UUbUZpCmH7upyQZPY9AxZFGSfnY3ODOY5lGw/fH5mY4uEmh4UtyALKZYHADpBrSJO5jBh8Niy5ruVgORjIMvhgAIR2YdGVKLoO7hj4KQJgOJesMYHCchgawLOwkE6wjD2GeEAihnnHkynoIO5CG0NAZjCsrDB4YaPOivZgnEGC5xEH8HU7tIjNLPN3C5kIIM/NrW05S13t5D1q4xMPL2lZRVeMqoTdKrzBQ1kBrX7RtjRg5N822mlYLRz+KokgBAhOyC34q/DvLNUUxrhEPmDn2HO3jEtEoiNpDD6SfhXBL6r19o1UDmPdAllXc33s6W6uNQC0DQwhz/utgdvvgEvQlVnHepdBqjiG9wKBzygOrmGqf3lO3W/vKCLIJDg4Z3MnWGfQPP18L0xSUEPLRiWoIMAIzIcShwMEfDgwGMQpKjb7HeKLOYPCTA65cCCFOIcvByZADyMFcZ0epfVulT0vB42CvWxQ1sCraAdgc3O7/JQZo2gHYZQpsrWN09OT7GF5zIHwdDM4eXcIrHmJzxP4wAsXORX8A5H25SstV21sSIvm9TInYpNBbj8I0HPQR2hyedIUr2V0edIYXi5lJNYv/QteBE57/B7RpFm5n21SwAAAAAElFTkSuQmCC',
      'searchUrl': 'https://drunkenslug.com/movies?imdb=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember me/,
      'matchRegex': /Download/,
      'positiveMatch': true},
  {   'name': 'DrunkenSlug',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAADnjA/s6uHopUjCva2tppbUzr7QbBXf3NDxwnGii3D49/L545/Cx8+qr7nR1twRDJ5wAAAAAXRSTlMAQObYZgAAAj9JREFUOMtt1EFo01AYB/AwRDaKSNih4KkELJHCJAQZEQ87pI9SZYeZ10OlY6PpIyAeZEqgpxFKeLDDKMKgsJsG8Z1KhkMtDspAHfQwxO2gdB2FXgbtYaC3UV/aNe9l7H98v3z8v8eDCJPEfEnCWKoLV+K7yHIk2UUbUZpCmH7upyQZPY9AxZFGSfnY3ODOY5lGw/fH5mY4uEmh4UtyALKZYHADpBrSJO5jBh8Niy5ruVgORjIMvhgAIR2YdGVKLoO7hj4KQJgOJesMYHCchgawLOwkE6wjD2GeEAihnnHkynoIO5CG0NAZjCsrDB4YaPOivZgnEGC5xEH8HU7tIjNLPN3C5kIIM/NrW05S13t5D1q4xMPL2lZRVeMqoTdKrzBQ1kBrX7RtjRg5N822mlYLRz+KokgBAhOyC34q/DvLNUUxrhEPmDn2HO3jEtEoiNpDD6SfhXBL6r19o1UDmPdAllXc33s6W6uNQC0DQwhz/utgdvvgEvQlVnHepdBqjiG9wKBzygOrmGqf3lO3W/vKCLIJDg4Z3MnWGfQPP18L0xSUEPLRiWoIMAIzIcShwMEfDgwGMQpKjb7HeKLOYPCTA65cCCFOIcvByZADyMFcZ0epfVulT0vB42CvWxQ1sCraAdgc3O7/JQZo2gHYZQpsrWN09OT7GF5zIHwdDM4eXcIrHmJzxP4wAsXORX8A5H25SstV21sSIvm9TInYpNBbj8I0HPQR2hyedIUr2V0edIYXi5lJNYv/QteBE57/B7RpFm5n21SwAAAAAElFTkSuQmCC',
      'searchUrl': 'https://drunkenslug.com/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember me/,
      'matchRegex': /No result!/,
      'TV': true},
  {   'name': 'FileLeechers (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAcExNoFRXhBgKuq6zAwsLU1tb7/PxrWlm9KyTl6OiVi4qqdGztYQiqVz/wtwXX5ytxAAAAAXRSTlMAQObYZgAAAqBJREFUSMfl0E9LFGEcB/Bn7eQh2o0OQhd76CAhEkyXBRGUZ7Y/K0Exz0gIQbI76Ngp1JH1ZJCz7IYsTQl7sEPgZHNLl1zdvLhLW7pF0Hk0kApJzRcQTc/8eXbYnad8AX4v+8x8P89vn2fASUzES/ifLU2wDdmv06UCshOPsPa2ZRFOxItpO00gZLcFjIXiNP2L5hrbibt1mvyEG+dneYzFZNypZ65Jr8ON89tiEkmi6OwLZXrFZqCmpAVjzJ1LnoblJhDJFkdHV+55B4uoxssmcCES4RNqb9h7UlMKBf4l1HEfrCjKtF/SXRPqLQqqDBC6lFJfhOmRWeDi1cwDD7RUmWBgbdIHKRgA55Q3k5CeR5k42wxazg+IUz4YhwHQuaKMQdACIQSwSpYB0KEK49BJO9w0ggB0ZHT9IYSdsft5AqYYYEYwFuH+gDJhg0kGeCQYG52ykeqDBCwyQAXpgmwsLDlnGG4PgqwuSfLCBiRX2dSHgqDrMQG63YMnGek2C0iStER6Ar7LDADTkjRMehtUjT4G6EomhyBwwA9jiQWkwZHL7ledk5YZoIb7X7ng1DOxnAuAKI+Fkf8CEYsUPJXZE27e8UC3uBsEXAwvcy5o7RF3QRCs4WWNAlkDNPl81APvcPkDBboLNM5NzgHfxDqIYi3X6lTR5/u1fnewNpfcXXUBIMBu8/sVged1427UOfoVoQ44tJffriGEsIDQaKnogm7sgwLiEzFSxgTMlznOBT24XAcVxKMbNuAHaxrn3v50D3+dgi+VTwV7fOn9YV7jgBezsL762VtW5rcQKs3uzZummauDn2idgq1KvDh7QNpt4OejWTqog7eHJslX0BBrx/LeWIc7lmX6DQW/jujqj/UbBGNZdHWGLI8BR+Ak5i+wWyAN0BbFggAAAABJRU5ErkJggg==',
      'searchUrl': 'https://fileleechers.com/board/index.php?search/=&q=%tt%&types%5B%5D=everywhere',
      'loggedOutRegex': /Cloudflare|Ray ID|Problemen mit dem Login/,
      'matchRegex': /Es wurde kein mit deiner/,
      'ignore404': true,
      'both': true},
  {   'name': 'GingaDADDY',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAKlBMVEUAAABrrMqUu85el7Lc5+UrcpNKVUGe0+yEjY29v7hvcW8/n8wnhbKqpZegQvVsAAAAAXRSTlMAQObYZgAAAHhJREFUCNdjQAaMLg5gmuOm9kwwvcJwtySIkbb4jLHQBQYGtlR1UWPBywwMLNaKRU7GFkCGoPruokItBgbOqUJC5S5eCxgYpoYaqbiUJjAw3IiJMRIsAopwxMQUC6oAzeZafaawcxLIxNTNHXcZwEanrYBYzpYAIgFdvhy8+IrzHAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.gingadaddy.com/nzbbrowse.php?b=2&st=2&k=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|You need cookies enabled|Forgotten Password/,
      'matchRegex': /Try again with a refined/,
      'both': true},
  {   'name': 'HDUse',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAACVZABZKoFRnQGc8BRj7s6bI+myuUo8I3bAAAAAXRSTlMAQObYZgAAAQJJREFUKM9lkcFugzAQREENnLNByR2rHxBklXOEFvWKKpxcHaXhCxrl9zuzppLVzI3H7Iy1WyTV10MsMl091GffIk1OSqFAjum76sS1YqbJwBuAc2b6MOBlB2AmsUaCYSWREwDvqs7G9gA3RAComXaMIBiL6lvpQSmBMowmmVLmSLDRoUVqSXAiqBRF21QSc8BMA7U6aY4JnAwMBkqWGNgQbIsamWotM0p8LCoCndZMLgAAL7+H2QD35yCFWNLbAgEus15mK8GsYOj5fIwPgLjuXO4hfP600qWldyBuDAMfbmr8/gzL3MrfHf1hWcL5S9hhuuFIdpiYkX/XrZfF9/z/ql/S7TrOY0LmQQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://hduse.net/search.php?action=do_search&postthread=1&forums=all&showresults=threads&keywords=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|not logged/,
      'matchRegex': /keine Ergebnisse gefunden|no results were returned|No se encontraron resultados|aucun résultat|Nic nie znaleziono|нет результатов|sonuç bulunamadı/,
      'positiveMatch': true},
  {   'name': 'House of Usenet (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACVBMVEUAAABDQkIAi//s9KSQAAAAAXRSTlMAQObYZgAAAIdJREFUOMvt06sRgEAMhOEgroRDUA0lIC6GEqiHEkCQKpkhC8vDMAc4Vv7im5jIh4uq6RAqs+EPbwbV1mxUFazobNlUr8Gw2+FqSOthlHWlh34LwUMjPIQEESeIgCACgggIIiCIgCACgggIIk5wMZ1CAJG3oLs1/ghc2oVaohS3A5cXroc93wzg8pjeUhsyUQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://house-of-usenet.com/tags/imdb_%tt%/',
      'loggedOutRegex': /Cloudflare|Ray ID|bist du schon ein Mitglied/,
      'matchRegex': /error-2-r/,
      'ignore404': true,
      'both': true},
  {   'name': 'MIAtrix',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAALLU4oQmA4W3wZlaY5AAAAAXRSTlMAQObYZgAAANBJREFUKM990DEOgkAQBdCJhAIj4iXsLcTaI9AMQWNs7AiJV+AINNzBYCEHsNhL0NvQ09g7C7s7Y6E/2WRfZpr58CfLp0CQtwKYDwIkAWxaiznpPhiMs1wZwBoxbZQD5aEmxKhzm+CNyBxO/YQSoMYEuhEJgI80djjTx4IeIxp+gMJYSGzHLiR8g52CjcTKIS69irGPEoHQ4gVxEVjQ2de3wFGDz2YAQ0mkGmCAKSNEPGjMCKZccxz1bmGVOUCPWDhAh3hxgFpvsiS8msCq4Csf6gJN2xC0qWUAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.miatrix.com/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/,
      'spaceEncode': ' '},
  {   'name': 'MIAtrix',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAALLU4oQmA4W3wZlaY5AAAAAXRSTlMAQObYZgAAANBJREFUKM990DEOgkAQBdCJhAIj4iXsLcTaI9AMQWNs7AiJV+AINNzBYCEHsNhL0NvQ09g7C7s7Y6E/2WRfZpr58CfLp0CQtwKYDwIkAWxaiznpPhiMs1wZwBoxbZQD5aEmxKhzm+CNyBxO/YQSoMYEuhEJgI80djjTx4IeIxp+gMJYSGzHLiR8g52CjcTKIS69irGPEoHQ4gVxEVjQ2de3wFGDz2YAQ0mkGmCAKSNEPGjMCKZccxz1bmGVOUCPWDhAh3hxgFpvsiS8msCq4Csf6gJN2xC0qWUAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.miatrix.com/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/,
      'spaceEncode': ' ',
      'TV': true},
  {   'name': 'NewzBay (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiBAMAAADIaRbxAAAAElBMVEUaHSBISkzDxcB9f36ipaD29+oztTEkAAAA3ElEQVQoz62QQXbDIAxEB5sDqNjdB7D3YHKA2uYCpeH+V6nimEDWyaz0vkYaAT6r3iC5FgjbQS/UkAiJH9hmxkEYgqwmBQgQcHlu4WoIjjuFLMQkem7pE7i7j+i+8EBde4dywCNBLMYepsPvuLDE0J1tzhQrrnGngc60wC095nxzhEeYdNCz7m24clnusWKzx4PLzesfROL9o0dByS83glSKCsk5e40vX39ti5lM1Ph+EtHnyTieq8TPaRoIqERv0z4SqsQvBZItwbz7MaJVl5O5oJVgQniRCive0T/BTBnUxBXQvwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://newzbay.cc/movies/?imdb=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password?/,
      'matchRegex': /nzb_multi_operations_form/,
      'positiveMatch': true},
  {   'name': 'NewzBay (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiBAMAAADIaRbxAAAAElBMVEUaHSBISkzDxcB9f36ipaD29+oztTEkAAAA3ElEQVQoz62QQXbDIAxEB5sDqNjdB7D3YHKA2uYCpeH+V6nimEDWyaz0vkYaAT6r3iC5FgjbQS/UkAiJH9hmxkEYgqwmBQgQcHlu4WoIjjuFLMQkem7pE7i7j+i+8EBde4dywCNBLMYepsPvuLDE0J1tzhQrrnGngc60wC095nxzhEeYdNCz7m24clnusWKzx4PLzesfROL9o0dByS83glSKCsk5e40vX39ti5lM1Ph+EtHnyTieq8TPaRoIqERv0z4SqsQvBZItwbz7MaJVl5O5oJVgQniRCive0T/BTBnUxBXQvwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://newzbay.cc/search/?t=5000&id=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password?/,
      'matchRegex': /nzb_multi_operations_form/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'NinjaCentral',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUqNFFYaIrmph2HAAAAGklEQVQI12OAA/7/DBySIMQ5Ewk1AhFICgYAhaUF+6V7fTgAAAAASUVORK5CYII=',
      'searchUrl': 'https://ninjacentral.co.za/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/},
  {   'name': 'NinjaCentral',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUqNFFYaIrmph2HAAAAGklEQVQI12OAA/7/DBySIMQ5Ewk1AhFICgYAhaUF+6V7fTgAAAAASUVORK5CYII=',
      'searchUrl': 'https://ninjacentral.co.za/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/,
      'TV': true},
  {   'name': 'NZBcat',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUAAACLjIwNDQ3rf9n/lLT6247MULj///+O5qalAAAAAXRSTlMAQObYZgAAAF9JREFUCNc1zcENgDAMA8Cs4AiJb2M2IOoCiBW6ABULsP+DpFX9uo9tce/eioh0utdCkRNHr0QJqL82ABITQOJZsAkNfMBuCUI1cSOyXQGFaSAGyVxuNkvCkbyPn7z6AdbcD5tU7CBKAAAAAElFTkSuQmCC',
      'searchUrl': 'https://nzb.cat/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember me/,
      'matchRegex': /search did not match/,
      'spaceEncode': ' '},
  {   'name': 'NZBcat',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUAAACLjIwNDQ3rf9n/lLT6247MULj///+O5qalAAAAAXRSTlMAQObYZgAAAF9JREFUCNc1zcENgDAMA8Cs4AiJb2M2IOoCiBW6ABULsP+DpFX9uo9tce/eioh0utdCkRNHr0QJqL82ABITQOJZsAkNfMBuCUI1cSOyXQGFaSAGyVxuNkvCkbyPn7z6AdbcD5tU7CBKAAAAAElFTkSuQmCC',
      'searchUrl': 'https://nzb.cat/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember me/,
      'matchRegex': /search did not match/,
      'spaceEncode': ' ',
      'TV': true},
  {   'name': 'nzbCore (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEVjhwD///86aRovd/sBAAAAMUlEQVQI12OAgNBQIJGZCSOywMRKGJG5EirBmpkZwMAYGuoA1SEaAiRYA4AEowPEIADbhQrnKgUJ3AAAAABJRU5ErkJggg==',
      'searchUrl': 'https://nzbcore.info/nnplus/www/movies?imdb=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|rememberme/,
      'matchRegex': /browsetable/,
      'positiveMatch': true},
  {   'name': 'nzbCore (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEVjhwD///86aRovd/sBAAAAMUlEQVQI12OAgNBQIJGZCSOywMRKGJG5EirBmpkZwMAYGuoA1SEaAiRYA4AEowPEIADbhQrnKgUJ3AAAAABJRU5ErkJggg==',
      'searchUrl': 'https://nzbcore.info/nnplus/www/search/%search_string_orig%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|rememberme/,
      'matchRegex': /browsetable/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'NZBfinder',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAUVBMVEUAAAAPZKETVnZWVRs7PEaFijtISUhlUzpUNR+KOBWec1CKTSw5NiRFXWWYWza/iWWBYkh8QxpFfJ2AkJFucHmzRhWjp6N+azPa1cXEvKK2t7wPPR6IAAAAAXRSTlMAQObYZgAAARtJREFUOMt9klmugzAMRRNs7DgTYSi03f9Cn1O9SlXBPUJ8cA9XdhT3yTiOcRydheZMRDzaOSFtBckw4GDE7bkitkuj4EEq3J9WBZIW4LrvG+JxWcBdIOyc5wTI+cCMmWPLGeBiQoBZ0tRCjMyvjc5LitRGOU7t6OfVprh+dcSYIvGkgFNhhK+SNKmQUq01glu24r6RGpOIhCCiwjKchFmC3CSlNMtcvL8SEOWmSBj8lSDkB5zFzB3pVz+01oaOO6O5/rrfHzrfJcNbWE3B67M+9tU7y1iKJ2ayBFemqRAA+cWqiNvAteq6htDXT7WyCvaYEH40MBcEqFyMHOaUwEF/GeQQnAshmALDSzMF6MGviv87mG3jLeb8KfwB5wsMIOL5gAUAAAAASUVORK5CYII=',
      'searchUrl': 'https://nzbfinder.ws/Movies?imdb=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot password/,
      'matchRegex': /View on IMDB/,
      'positiveMatch': true},
  {   'name': 'NZBfinder',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAUVBMVEUAAAAPZKETVnZWVRs7PEaFijtISUhlUzpUNR+KOBWec1CKTSw5NiRFXWWYWza/iWWBYkh8QxpFfJ2AkJFucHmzRhWjp6N+azPa1cXEvKK2t7wPPR6IAAAAAXRSTlMAQObYZgAAARtJREFUOMt9klmugzAMRRNs7DgTYSi03f9Cn1O9SlXBPUJ8cA9XdhT3yTiOcRydheZMRDzaOSFtBckw4GDE7bkitkuj4EEq3J9WBZIW4LrvG+JxWcBdIOyc5wTI+cCMmWPLGeBiQoBZ0tRCjMyvjc5LitRGOU7t6OfVprh+dcSYIvGkgFNhhK+SNKmQUq01glu24r6RGpOIhCCiwjKchFmC3CSlNMtcvL8SEOWmSBj8lSDkB5zFzB3pVz+01oaOO6O5/rrfHzrfJcNbWE3B67M+9tU7y1iKJ2ayBFemqRAA+cWqiNvAteq6htDXT7WyCvaYEH40MBcEqFyMHOaUwEF/GeQQnAshmALDSzMF6MGviv87mG3jLeb8KfwB5wsMIOL5gAUAAAAASUVORK5CYII=',
      'searchUrl': 'https://nzbfinder.ws/search?id=%search_string%&t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot password/,
      'matchRegex': /No results found!/,
      'TV': true},
  {   'name': 'nzbforyou',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAKlBMVEUAAAD+AAH////8AAD7AAH9/P3///v5AAL/+PT4///kf3/ke3bnCwziDgs/bjd5AAAAAXRSTlMAQObYZgAAAD1JREFUCNdjIAYIuygpBSkJOzMICippNCkZCoMYKZJJYIZKubgTmBErLHwIzFBbLg1VE6QKYSSpKoEYRAAAF9IK6F3BkiEAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.nzbforyou.com/search.php?keywords=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember me/,
      'matchRegex': /No suitable matches were found/,
      'both': true},
  {   'name': 'NZBgeek',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAJFBMVEUAAAD8/P1GR0fi5eURqrp/gIC5ztKmqKdtwt79Hx/9a2v7srI5/PnpAAAAAXRSTlMAQObYZgAAAjNJREFUOMu1lLFr20AUxgMNZP5y+BTI1GfOt/asyoFkCUSDoUst4XjNWUm8Niq2O9ZYhOyGgpSxk+3JFAr+7/okS0mduHTKAwvr/fR939Pdob23qnd7e4OdYHB1QLv6B/QlVrtATCNq7BRQQJ9ftf12n4ZEVy/a+347CkKHdPKyP4Wn4OjGbbLVb1vcUAgRUffy+9/+Fg4pA74SfTt/6rddIwLqCNdARXHDfzK6CNSQtBvQpawbR19XEj8iLlujHg3CCZTwKycExAlxiBqNrAnMx41kf4ImfW25ZDlJ39vYyg3wDSS9h1RigljdmqCDpHSCR/nLHVm3OdQuP8Re+UyQPA+7yOn0MAq6qoGj8ypCoU8aD5ND61C9B1kAi0PSJ8RQmqZFXL8B/CJbjANNakwG6Bs4ygOSAjSJSBvwNKILIKgAR3Q1IJva9RoMYgbXG1BvGb5vsfCOAZ08gx6AgfGIBZwhqoy4MULNOh3kxVOhBK18i+RYKuTlkS3Bfl/HHchIUC4RhR38AoSSJcBmb4u/sgBT4CRPj0mNXC+fi9eqXN38jdFURIUKvLrlfqB2x7+6RxQir6TaQYje8VLwceDkKoJB7uWt01Uc8nilU3XcgLmb1VQQrcByFjxLljhdDdX6sRSUkgnEDGL56yzNyoTqrNvjGbDO5gxEUggqs7OfDNIszURSCkqzTzMcz9M0zbi/VRfZ2cKdL9JH7m/XevH74fZ+/uP1R8HNr6cf/vnN+G/9AUG7l8Pex/aBAAAAAElFTkSuQmCC',
      'searchUrl': 'https://nzbgeek.info/geekseek.php?moviesgeekseek=1&browsecategory=2000&browseincludewords=%search_string% %year%',
      'loggedOutRegex': /Cloudflare|Ray ID|forgot password/,
      'matchRegex': /returned 0 releases/},
  {   'name': 'NZBgeek',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAJFBMVEUAAAD8/P1GR0fi5eURqrp/gIC5ztKmqKdtwt79Hx/9a2v7srI5/PnpAAAAAXRSTlMAQObYZgAAAjNJREFUOMu1lLFr20AUxgMNZP5y+BTI1GfOt/asyoFkCUSDoUst4XjNWUm8Niq2O9ZYhOyGgpSxk+3JFAr+7/okS0mduHTKAwvr/fR939Pdob23qnd7e4OdYHB1QLv6B/QlVrtATCNq7BRQQJ9ftf12n4ZEVy/a+347CkKHdPKyP4Wn4OjGbbLVb1vcUAgRUffy+9/+Fg4pA74SfTt/6rddIwLqCNdARXHDfzK6CNSQtBvQpawbR19XEj8iLlujHg3CCZTwKycExAlxiBqNrAnMx41kf4ImfW25ZDlJ39vYyg3wDSS9h1RigljdmqCDpHSCR/nLHVm3OdQuP8Re+UyQPA+7yOn0MAq6qoGj8ypCoU8aD5ND61C9B1kAi0PSJ8RQmqZFXL8B/CJbjANNakwG6Bs4ygOSAjSJSBvwNKILIKgAR3Q1IJva9RoMYgbXG1BvGb5vsfCOAZ08gx6AgfGIBZwhqoy4MULNOh3kxVOhBK18i+RYKuTlkS3Bfl/HHchIUC4RhR38AoSSJcBmb4u/sgBT4CRPj0mNXC+fi9eqXN38jdFURIUKvLrlfqB2x7+6RxQir6TaQYje8VLwceDkKoJB7uWt01Uc8nilU3XcgLmb1VQQrcByFjxLljhdDdX6sRSUkgnEDGL56yzNyoTqrNvjGbDO5gxEUggqs7OfDNIszURSCkqzTzMcz9M0zbi/VRfZ2cKdL9JH7m/XevH74fZ+/uP1R8HNr6cf/vnN+G/9AUG7l8Pex/aBAAAAAElFTkSuQmCC',
      'searchUrl': 'https://nzbgeek.info/geekseek.php?moviesgeekseek=1&browsecategory=5000&browseincludewords=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID|forgot password/,
      'matchRegex': /returned 0 releases/,
      'TV': true},
  {   'name': 'NZBGrabit',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAElBMVEX///+ryszP4+QkP09aiJwAAACjwlFyAAAAdUlEQVQI1zWNyRHEIAwEB0wAFpi/kZ2A0RIAJQhgD+efyurj/kxXzaMBlCZlt3XnGN2brCrE2OEPqczsEdL1Kb1sWOQqG3MyIXs0IQhFPo+JpRFF+k4EbW/KLcOldlOWDh/kpt+rAlHblLFaK6pWglHAzuoPf3XPDy4yIA+vAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.nzbgrabit.xyz/nzbsearch.php?query=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|You are not logged in/,
      'matchRegex': /There are no posts/,
      'both': true},
  {   'name': 'NZBKing',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAALVBMVEX///8AAAAWFhaTk5MlJSXz8/PDw8Ozs7OHh4dLS0tiYmLl5eXc3NzPz8+pqamHx8n4AAAAT0lEQVQI12PADgKgNN8CKINTAcp4KAUir+1xKJLgakhjSCxYzqm9M1SYgXmuoqCgYMUEBgZHQRAAmpDkAgQaQNVHlIBAHMgINgaCHgY8AABKXA/GCcvtCwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.nzbking.com/?q=%tt%&ft=vi&gr=&po=&so=',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /did not match any/,
      'both': true},
  {   'name': 'NZBnoob',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEVjhwD///86aRovd/sBAAAAMUlEQVQI12OAgNBQIJGZCSOywMRKGJG5EirBmpkZwMAYGuoA1SEaAiRYA4AEowPEIADbhQrnKgUJ3AAAAABJRU5ErkJggg==',
      'searchUrl': 'https://nzbnoob.com/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/},
  {   'name': 'NZBnoob',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEVjhwD///86aRovd/sBAAAAMUlEQVQI12OAgNBQIJGZCSOywMRKGJG5EirBmpkZwMAYGuoA1SEaAiRYA4AEowPEIADbhQrnKgUJ3AAAAABJRU5ErkJggg==',
      'searchUrl': 'https://nzbnoob.com/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/,
      'TV': true},
  {   'name': 'NZBplanet',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUBAQEgVa+H0+gTe9YVK09stNNBm9dWgpStWTJnAAACmElEQVRIx82SQY/aMBCFJ5KjXO0m5Vx5FXoFOWSvzsaUKw11cl4i0isrQfP3O4OJsFm6Uk/tQ9iQ+fzmZRL4OzEzZvqD+sZKKfPuj8hZOuX8cX0tnfqyfeDBIHHlFuvqFe5lDGuwWDbzdjXInSruz2fYIO+VUiuMIHOl7ppUnLm6KmUzl3NFFiEQt1Qmh9y2hOo74Kyc9nLvvIoQEP0VkDmGfcIfyxCYOaC0blIKpUMHe20wzUopHgKr23nUrhzCEEyI/nb+QYhIiBkGJN1C+ED8XQjPACdVHoKUL3MhhAc8larpA0CihTjcWuzUfscDIBdENDdgVfrAJ2xLxMxeM/TlYbgDZCdIbhZ5KdsAWMuJQGSw1or9k9+iSpWaEeFpGLJgkOIzOb/dgNQaHQAzBJrcM5kxz6IiC7y3RuY/J+DZByJBcs87twNBqmBhCEeU10EJqxaRB8CUbHpiB2mPlQ9UaorWOAsphfCBRE1EOlgi7KsQ2gNYfyGmKM9KkIGvX/SSiUA6AJJeofy6gVAI+Eh2X4dvDijLAYOK5eQfpCDt87ZXQ1/Ae0WXJs2c1iU80oaIfUt1DY+JYVBNv+/9eiiWkn8GH8gYA/9AGhilrnBhRsPpXfIlRBz3GoG4szoAGJ1SPOLG6Brzxzo5nmBzYmBGwB1ejEagiHiqeK0UjzXbnlg3dvjdsu58XBOwTCuODWoeFbHeHE+xho59gTfcfyTUoqgFB4EIK2LbwWmN5uwIYzyOnQMoxcIB+P8UA4wXAIPFFwBSXousLurFBUiO7Cvbwoj7NjkikEHEhSiqdKkTAuBsLw64a3bWD0cX7ho0AzBMGxoqfmjVDC8aXAigEmQOiPBSBoxlzEQEVJoAz4FWA+6wW/4H/QYO7boG/L0IgQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://nzbplanet.net/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember Me</,
      'matchRegex': /did not match any/},
  {   'name': 'NZBplanet',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUBAQEgVa+H0+gTe9YVK09stNNBm9dWgpStWTJnAAACmElEQVRIx82SQY/aMBCFJ5KjXO0m5Vx5FXoFOWSvzsaUKw11cl4i0isrQfP3O4OJsFm6Uk/tQ9iQ+fzmZRL4OzEzZvqD+sZKKfPuj8hZOuX8cX0tnfqyfeDBIHHlFuvqFe5lDGuwWDbzdjXInSruz2fYIO+VUiuMIHOl7ppUnLm6KmUzl3NFFiEQt1Qmh9y2hOo74Kyc9nLvvIoQEP0VkDmGfcIfyxCYOaC0blIKpUMHe20wzUopHgKr23nUrhzCEEyI/nb+QYhIiBkGJN1C+ED8XQjPACdVHoKUL3MhhAc8larpA0CihTjcWuzUfscDIBdENDdgVfrAJ2xLxMxeM/TlYbgDZCdIbhZ5KdsAWMuJQGSw1or9k9+iSpWaEeFpGLJgkOIzOb/dgNQaHQAzBJrcM5kxz6IiC7y3RuY/J+DZByJBcs87twNBqmBhCEeU10EJqxaRB8CUbHpiB2mPlQ9UaorWOAsphfCBRE1EOlgi7KsQ2gNYfyGmKM9KkIGvX/SSiUA6AJJeofy6gVAI+Eh2X4dvDijLAYOK5eQfpCDt87ZXQ1/Ae0WXJs2c1iU80oaIfUt1DY+JYVBNv+/9eiiWkn8GH8gYA/9AGhilrnBhRsPpXfIlRBz3GoG4szoAGJ1SPOLG6Brzxzo5nmBzYmBGwB1ejEagiHiqeK0UjzXbnlg3dvjdsu58XBOwTCuODWoeFbHeHE+xho59gTfcfyTUoqgFB4EIK2LbwWmN5uwIYzyOnQMoxcIB+P8UA4wXAIPFFwBSXousLurFBUiO7Cvbwoj7NjkikEHEhSiqdKkTAuBsLw64a3bWD0cX7ho0AzBMGxoqfmjVDC8aXAigEmQOiPBSBoxlzEQEVJoAz4FWA+6wW/4H/QYO7boG/L0IgQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://nzbplanet.net/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember Me</,
      'matchRegex': /did not match any/,
      'TV': true},
  {   'name': 'NZBSin',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAElBMVEVIecH8/P4qov0BAwsK1gvwh/uEsRSQAAAArklEQVRIx83T4QnDIBCG4YtdIOcE5pugkBU6QPefpsfpVSkGqRbrQ4iBvOjlR2g9LP4bcDIUAAMBCw8t+DLAYKCFLvXXFqiOwHQGXDE3YAXxXtWswHwGJGYFj4Z2kHeyNd0rM6jGkOrLYEd28E7R7TQ/DrZa4IePeJJxFMg5uSQtgtPcgUBBEII8mSKgSCbV03ycuxUcV8HGHNeOIOjWDgllKNmnr/Ff5KA0J1jICzcgcUsWZdWOAAAAAElFTkSuQmCC',
      'searchUrl': 'https://nzbs.in/search?category=movies&query=%search_string% %year%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot your username|Lost your password/,
      'matchRegex': /did not match any/},
  {   'name': 'NZBSin',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAElBMVEVIecH8/P4qov0BAwsK1gvwh/uEsRSQAAAArklEQVRIx83T4QnDIBCG4YtdIOcE5pugkBU6QPefpsfpVSkGqRbrQ4iBvOjlR2g9LP4bcDIUAAMBCw8t+DLAYKCFLvXXFqiOwHQGXDE3YAXxXtWswHwGJGYFj4Z2kHeyNd0rM6jGkOrLYEd28E7R7TQ/DrZa4IePeJJxFMg5uSQtgtPcgUBBEII8mSKgSCbV03ycuxUcV8HGHNeOIOjWDgllKNmnr/Ff5KA0J1jICzcgcUsWZdWOAAAAAElFTkSuQmCC',
      'searchUrl': 'https://nzbs.in/search?category=tv-shows&query=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot your username|Lost your password/,
      'matchRegex': /did not match any/,
      'TV': true},
  {   'name': 'NZBsu',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUBEH142f8TLJBpvvQtWa9LjdJAecVYoOE5pohvAAAAcElEQVQI12MAAQUGKFCDsFydGEpANIugEQOzA5DhKKzAwCTEwMBkWJzAwBAMFFFXEQUKA+WAZACDYgJYuSiDMpABFlIESSkxsIkGAo1kM3ZgSBQDCiSqCYcaAjWyCzGoG5skFjAoA5UxMbAaAAkIAAArhAw1h53WmwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.nzb.life/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/},
  {   'name': 'NZBsu',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUBEH142f8TLJBpvvQtWa9LjdJAecVYoOE5pohvAAAAcElEQVQI12MAAQUGKFCDsFydGEpANIugEQOzA5DhKKzAwCTEwMBkWJzAwBAMFFFXEQUKA+WAZACDYgJYuSiDMpABFlIESSkxsIkGAo1kM3ZgSBQDCiSqCYcaAjWyCzGoG5skFjAoA5UxMbAaAAkIAAArhAw1h53WmwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.nzb.life/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/,
      'TV': true},
  {   'name': 'OmgWtf',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUnKCcK/AIhjCEWzhXijGvaAAAA+UlEQVQoz63PMU4DMRAF0MFWChNtS05giQusaGnpaH7sIlrtBSKtqAISwuIMy3KHpE7vQ2DRIBRKIlFSL409s+lx5SeNZv4nmo+B+O2x4r/C6BjGUx0LZpFMV1CHT+ULFhqBNwzmMX4U9ObmuhesI2M4g4xdKEeMmi5ltY1k7sZDjrMhu0aOp90upaeU472gWVKV483x1ZHiRFVrD4O0SH7B25+b1RVD3fb2/6AnmH037rXAAFiOuZN63//cA4549GGXIi+h3ClDOtmQpp1q6WTac+mkPUkKcuGNoQHPYxXQMexxG4bTowLj+ehx+9tOOrlQoBI2dPL+ANGlVMkfLQX5AAAAAElFTkSuQmCC',
      'searchUrl': 'https://omgwtfnzbs.org/browse?search=%tt%&cat=default&sort=3',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot your username/,
      'matchRegex': /returned no results/,
      'both': true},
  {   'name': 'SceneNZBs',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQMAAABtzGvEAAAABlBMVEUAAADQERP/ie4xAAAAAXRSTlMAQObYZgAAALRJREFUGNNN0D0OwjAMBeD+oHZkZajIFRgZqoarcAaWIlUkEuysbFzFE1yhYyUO0LLAgmrsvCUe8inyU2I5iWoFanACH3AOZ5oHclBkMVURaItBE0OpLGmhGEpIsMBR6gWmHJSaZzJCydRo3vpZ6Jyv5M+JfSeJJzB8qxXb/6RHrm8l+Wa5yMs8K4bZgwFMggUOfNEbx1FIr3enmIZlvmx9nMIaDqRsX4nW5hHYXwCWsotB/QHAKUvx8mgJlAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://scenenzbs.com/movies/?imdb=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Register/,
      'matchRegex': />Action/,
      'positiveMatch': true},
  {   'name': 'SceneNZBs',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQMAAABtzGvEAAAABlBMVEUAAADQERP/ie4xAAAAAXRSTlMAQObYZgAAALRJREFUGNNN0D0OwjAMBeD+oHZkZajIFRgZqoarcAaWIlUkEuysbFzFE1yhYyUO0LLAgmrsvCUe8inyU2I5iWoFanACH3AOZ5oHclBkMVURaItBE0OpLGmhGEpIsMBR6gWmHJSaZzJCydRo3vpZ6Jyv5M+JfSeJJzB8qxXb/6RHrm8l+Wa5yMs8K4bZgwFMggUOfNEbx1FIr3enmIZlvmx9nMIaDqRsX4nW5hHYXwCWsotB/QHAKUvx8mgJlAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://scenenzbs.com/search/%search_string_orig%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Register/,
      'matchRegex': /did not match any releases/,
      'TV': true},
  {   'name': 'SceneNZBs-DE',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQMAAABtzGvEAAAABlBMVEUAAADQERP/ie4xAAAAAXRSTlMAQObYZgAAALRJREFUGNNN0D0OwjAMBeD+oHZkZajIFRgZqoarcAaWIlUkEuysbFzFE1yhYyUO0LLAgmrsvCUe8inyU2I5iWoFanACH3AOZ5oHclBkMVURaItBE0OpLGmhGEpIsMBR6gWmHJSaZzJCydRo3vpZ6Jyv5M+JfSeJJzB8qxXb/6RHrm8l+Wa5yMs8K4bZgwFMggUOfNEbx1FIr3enmIZlvmx9nMIaDqRsX4nW5hHYXwCWsotB/QHAKUvx8mgJlAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://scenenzbs.com/search/%search_string_orig%?t=5100',
      'loggedOutRegex': /Cloudflare|Ray ID|Register/,
      'matchRegex': /did not match any releases/,
      'TV': true},
  {   'name': 'Square Eyed',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEX///8CAgJJSUnFxcVSjwsrAAAAYUlEQVQoz2MYDoD//x8QZf//A5DkDA0BcVRDYzA5EcgcsB7+qRDOAbBBcA5fAxLHdAMS5/YBJM78NUicRauROXZInMf7kDg6P5DtQRiwAuQAKxRXY3K4VoGVaa1awDA0AQAxpTGbStAy0AAAAABJRU5ErkJggg==',
      'searchUrl': 'https://squareeyed.org/movies/?imdb=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember me/,
      'matchRegex': /Download/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Usenet4all (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAElBMVEX+/v4ZFRJDPz51cnGkoqHX19cR5JDUAAAA8klEQVQoz22RQXbCMAxE9dL6AKOEfezCvrRkj9ILOM3j/ldhLAHeMO/Fib+kUWRL6C/rRbrSD6iv+tqf4RqfxIDjTVdgiv0HsHC57sC3gzMjKbPAMAr1CVRCWiTgSrDhIPIP5scng6wcwCiNlD0Bp57OatKx+QQwZg+tbgvA9yzGR3IARqfmybLVgbtmAhu9i3sJ+yfMHbSMTaUDeiw4dKBiKKgPcNsxtU8tpfUtRQfM7NQ1bWyZWPYcjoY1lgAejP8XIzjFXGzFcVcHxqw4IT/YCIlPVLlUj7isXdEpWdxLFOnlNzf8UFpBHat07VkXea87OgImlXedLr8AAAAASUVORK5CYII=',
      'searchUrl': 'https://usenet-4all.pw/forum/search.php?do=process&do=process&quicksearch=1&childforums=1&exactname=1&s=&query=%tt%&titleonly=0&showposts=0',
      'loggedOutRegex': /Cloudflare|Ray ID|lostpw/,
      'matchRegex': /no matches|Deine Suchanfrage erzielte keine Treffer/,
      'both': true},
  {   'name': 'Tabula Rasa',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAAAif//MlT/MmJgtVtgAAAAAXRSTlMAQObYZgAAADhJREFUCNdjQICIiaEBDBETWBgY0uawcDCkTmZRYEgMONLAkBBgxgAk1IHEBDMQARIDySaA1KECAE49DdCbdjcGAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.tabula-rasa.pw/Movies?imdb=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember me/,
      'matchRegex': /Director/,
      'positiveMatch': true},
  {   'name': 'Tabula Rasa',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAAAif//MlT/MmJgtVtgAAAAAXRSTlMAQObYZgAAADhJREFUCNdjQICIiaEBDBETWBgY0uawcDCkTmZRYEgMONLAkBBgxgAk1IHEBDMQARIDySaA1KECAE49DdCbdjcGAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.tabula-rasa.pw/search?&t=5000&search=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember me/,
      'matchRegex': /did not match/,
      'TV': true},
  {   'name' : 'Usenet-Crawler',
      'icon' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAFVBMVEUAAACItkGNvEOzu6aPp2jy8/HLzsYWyJH5AAAAAXRSTlMAQObYZgAAAWlJREFUSMftVMtOwzAQtBQ3dztR7mkqzjQEzqRJc0ZC5Uxp4f8/gVmvk24DDgqVeuocZi17vPaOH+qGq+ELeHGtN7Q+fYipe0GkDHDvBGtTm0ypPToSnRuzigx6SLDsBbnNEHJjCy+w1ogMJU2F4JQB5ASWBDySsa7QhgSgcQa/B7dEyhmWgBegVfigQXlEpFrAL4FWp9QRodEpOCJSO4B92BF8WAzkMrxjmKd2fRgw2sNdv5UBwihUQUZ9wCghGPvAQQgCTk5lKOdlkPfhVdwHIXgA2IcDWo/QITwJgbV28MFaWgLh9zJLUeblVczIELgwQtBWTX/cTVt1qLat5HEHLowQpIDfQ13XmLpHaKZ9mLoPia826EP2Dx/sXz7UwFkVR5SVzPCBHw7Rs3w4mnpiIj6LDWgrH44GrSIa4yo2oG0p/4f87H84CRLxP8gfRmZYix8mIJjKkPzYA7+LA5F8FzF1O1I3XAvfw8WDk45T+vQAAAAASUVORK5CYII=',
      'searchUrl' : 'https://www.usenet-crawler.com/search?index=3&search=&cat=-1&sizefrom=-1&sizeto=-1&poster=&group=-1&tvairdate=-1&grabs=-1&pass=-1&audio=-1&subs=-1&pre=-1&imdb=%tt%',
      'logedOutRegex' : /Login or register/,
      'matchRegex': /did not match any/},
  {   'name': 'UHD100',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0BAMAAAA3VgbYAAAAGFBMVEUAAAAEBAHNpBmyjxmZexrrvSVwWxU3LQx1VtTdAAAAAXRSTlMAQObYZgAAAdRJREFUOMvF0UF3ojAQB/C89RNMZclZELmuTCpnSCrXPrq4Z7S25wD7/PqdiVDTWi+99P80QH6ZEBIhfkXvSZpLHoUQfr8fIWbKfAgqjZz7RxG18GWC5iaFjUhuU/NNksZUMJiTMVu+HWiZdqo61hbCv9A1r3CkkcluqNuR7p4AYAHzBuCuBnj4B/93EEaf6cnRvP5E9Ugp9dsz/Z6qti97ui1zovaa4om8CdcQ0ITB8kyNR5IoHimlvbVu8e79YeFovuRl8OAzyaSSBwtBZKGj//1OPuQjwRBhBVLjRiLmPSJugMmdl7TX2xsxcX6c8EaIbuXblPElfuG2Grh9HXyqrKQ2DduO2sDuPVKO2i4No8geFwHPM1JSEMWwX0G2pKPkcZgxcQE9raDcwTGFLIUS8QNRzxK6BWQr2CPlitZMnUf8rgXTvGDqEZX2aA0ldRauRWW0N2HOK+wK0Dn0hvJOMaZMfc50ILlUIa6YDjn/SBQyIWZchbbPpVZwqCS674qRY0EjtkERKt32ReCO0lFWnewJcSPts9EbeSoxojhChYait8/uQUfn7cUxTHzlgomoQ3ENcrIRiDIm5RVMwHs4M4ZlJLzkjxDozeSbEGLGvX6mojeMyOEYfAedCwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://uhd100.com/search/1234567/?q=%tt%&o=date',
      'loggedOutRegex': /Cloudflare|Ray ID|You must be logged/,
      'matchRegex': /No results found/,
      'both': true},
  {   'name': 'WtFnZb',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEVjhwD///86aRovd/sBAAAAMUlEQVQI12OAgNBQIJGZCSOywMRKGJG5EirBmpkZwMAYGuoA1SEaAiRYA4AEowPEIADbhQrnKgUJ3AAAAABJRU5ErkJggg==',
      'searchUrl': 'https://0ccec98d8962a17294688363537bfe2e.wtfnzb.pw/movies/?imdb=%nott%',
      'matchRegex': /Director/,
      'positiveMatch': true,
      'loggedOutRegex': /Remember Me/}
];

var subs_sites = [
  {   'name': 'Addic7ed',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABIFBMVEUAAAA4ODhAQEDDxMTQ0NDj4+NCQ0R1eHmPkJDHysvCwsLa2trt7e309PT29vZGf8JSfr1iYmJTWl7CxMWkqKpGRkaIjpFdZGc0NTY/Pz8wMDBPT09gZGc0NDRQUFA/Pz+WmZx8fHzT1NSNjY1pbHJ4eHhdXV2gpKeVmp1zc3N6gYd7e3u+vr6KioqAgICJiYmzt7qgoKClpaXW19i8vLzp6enx8vMuLi4YGBgUFBQ2NjYnJycODg5TVFUbGxo9bKCUmJpoa25cXFxRUVExNj8yMzQtLS0gICAeHh4LCwtLmO1gmOiJr+Zek+J8nt11mN1lgb6rrq9JZZKRkZF1dXU6UHRubm5oaGhnZ2c2SV1bW1s4Oz0yMjIlKTAiIiILCwrn8D0JAAAAN3RSTlMA/f5TNR7++51gSiklCwf9/f39+vf39fXy6+jl4+Pb2snCwcG/tbWtraymnJuTjoyJfGdFQhgVSZeomgAAALhJREFUGNNVjkWiAjEUBN8Yzlfc3d2SjOHu7nD/WzA7SG26q1cNn1gsQJHb/nJvM8Sj+mMnrDUu4C4CWFmmc7oodgCe6ff2sbJJFJVDlxkKkL+h1XLDImXdaosS4SE96C1mP6yka18R2sk1yEr3+fSbeeARUdXuyASVIW5OmshD8FiWpQEPVj+WzxnBrMPjpyp6vwDMiWBBC4OLkL6v/j5mLKWcfw2gCOmBJvJPadLRslGDwBmrWrwAzs4a3w+oveoAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.addic7ed.com/search.php?search=%search_string%&Submit=Search',
      'matchRegex': /returned zero results/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'AnimeSub (PL)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAzFBMVEUAAAD/6gDQPz9IUFvXUlLTSEjcXV3haWnNOTnqfn7mdHTx2wHth4fIsQXkzgNkZ2t7NDSxLy8RERKdnZ1ycnJdVlrIREQ6OjpxMDB9Ly/spho/JBX51xQyFBT44xCLaw6jiAq8owf84AXXwATKc3PphGXLX19VUFB6ZU6WTExtb0n0sEOXOjqspDnqlTiaQzOCMjKXLy/diy7dbS5RLS7BVCaCRCT1vyNFIyNqHBxxRhfuwBV1URIkERFVPg96XA6UeAvWtgqhlQmvlQgbghLTAAAAAXRSTlMAQObYZgAAAKFJREFUGNOFxtUWwjAURNE7WElSariUCu7uDv//TyRtF6/seZhD/6Vj42E5Dkrl1RrAuhIVpZQNALFYqaSs0oAAvHpFJmWUEB8DQW0qk3LSHHj4wN6STZp0gHDvwNPqaxpxzntA4B5bMJYjzokxNgGM1yUEzjXGSNf1FhK+1dXJtneAUZAERP1kk2nOAO/mOM4buG5Nktqd5iD5MkVK1eLvv6RTDTXmdDasAAAAAElFTkSuQmCC',
      'searchUrl': 'http://animesub.info/szukaj.php?szukane=%search_string_orig%&pTitle=org',
      'matchRegex': /Nie znaleziono/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'ArgenTeam (ES)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAD+piP+ryfhkB/3iBzTn17+qBueXhytzVNOAAAAAXRSTlMAQObYZgAAAJFJREFUKM/NzTEKwkAQheEFhW2dDcQ2DmgdXcV6Q/AEpheE1ClWcn3fMGsYT6B/Nx8Dz/2uVSxNBWIkRruw/4B2onrjTL4j+oJMRK196AGTnTLwGtA9AfRe3/gwjswL5MDM1/lIVBlwPi2rPQucAY1Cwv1wGCngBRpZrVsd6QDbDECVQGCEZekpIxFdBm12/9IbRsweLgGQj4AAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.argenteam.net/search?filter=%search_string_orig%+%year%&movieFilter=on',
      'matchRegex': /No se encontraron coincidencias/,
      'inSecondSearchBar': true},
  {   'name': 'ArgenTeam (ES)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAD+piP+ryfhkB/3iBzTn17+qBueXhytzVNOAAAAAXRSTlMAQObYZgAAAJFJREFUKM/NzTEKwkAQheEFhW2dDcQ2DmgdXcV6Q/AEpheE1ClWcn3fMGsYT6B/Nx8Dz/2uVSxNBWIkRruw/4B2onrjTL4j+oJMRK196AGTnTLwGtA9AfRe3/gwjswL5MDM1/lIVBlwPi2rPQucAY1Cwv1wGCngBRpZrVsd6QDbDECVQGCEZekpIxFdBm12/9IbRsweLgGQj4AAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.argenteam.net/search?filter=%search_string_orig%+%year%&serieFilter=on',
      'matchRegex': /No se encontraron coincidencias/,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'Assrt (CN)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEWXEBD06OjVnJzBZmapHrC+AAAASElEQVQI12OAAr4GBgYRXgcGLnXeAwyc24EEbwZnBAPvi6cxDIxLQxsYGJecBErMARLmUzMPMDBuB3GtgQSDxFIgYaEKJIAAANyNFPt+CL6IAAAAAElFTkSuQmCC',
      'searchUrl': 'https://assrt.net/sub/?searchword=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /找不到字幕/,
      'inSecondSearchBar': true},
  {   'name': 'Assrt (CN)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEWXEBD06OjVnJzBZmapHrC+AAAASElEQVQI12OAAr4GBgYRXgcGLnXeAwyc24EEbwZnBAPvi6cxDIxLQxsYGJecBErMARLmUzMPMDBuB3GtgQSDxFIgYaEKJIAAANyNFPt+CL6IAAAAAElFTkSuQmCC',
      'searchUrl': 'https://assrt.net/sub/?searchword=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /找不到字幕/,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'GreekSubs (GR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAElBMVEX37vAQXKzbLzNMiMPziIaGr9dd04i2AAAAr0lEQVQoz42OWwrDIBBFp4lZgJX+yyQLiEj+B3EBgeL+t9LxbVIKPX4IB+beC7NURnZ2MHKfB6FAJtEpIlTeWSioLH+IM322YrIA2fgWR4AlBNv41SKwsBbhsFKmI7qb2PiIRqGhCmtP3olELosyzGnnPQk9DUITAYkmtokFec8ZCUQRBcWWBFdEtLuJjUNVPqF80UMp4X2vhVg61vr0OPQIESy02mcX5ipWeMgLrw+I6TvbCdZ+CAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://greeksubs.net/search/%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Δεν βρέθηκαν υπότιτλοι/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'HosszuPuska (HU)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAA4ODgAAAD///9tGtCzAAAAAXRSTlMAQObYZgAAABxJREFUCNdjAINVQMCwDwggrKmhoVOJINC1gQAA4AwfMQ4WnZgAAAAASUVORK5CYII=',
      'searchUrl': 'http://hosszupuskasub.com/filmek.php?cim=%search_string_orig%&nyelvtipus=1',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Ilyen bejegyz/,
      'inSecondSearchBar': true},
  {   'name': 'HosszuPuska (HU)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAA4ODgAAAD///9tGtCzAAAAAXRSTlMAQObYZgAAABxJREFUCNdjAINVQMCwDwggrKmhoVOJINC1gQAA4AwfMQ4WnZgAAAAASUVORK5CYII=',
      'searchUrl': 'http://hosszupuskasub.com/sorozatok.php?cim=%search_string_orig%&nyelvtipus=1',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Ilyen bejegyz/,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'LegendasDivX (PT)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEUAAAD//////wAA/wAAgAD/AACAAAD5nH57AAAAUklEQVQI12NgZBQEAgEBBjhgZDE2Dg1NAIqwOBuphiWARFyUlNJAImAGSAQsBRIBKwaJQDQLgFiCQAikGRkEGGEijIwCMBEBEEsAogahC+IMBgCWfwoV75BxIgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.legendasdivx.pt/modules.php?name=Downloads&imdbid=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|equiv="refresh/,
      'matchRegex': /not working yet, need more info/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Moviesubtitles',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACFlBMVEUAAAABAQECAgIDAwMEBAQFBQUGBgYICAgJCQkKCgoLCwsNDQ0ODg4UFBQYGBgcHBweHh4fHx8gICAhISEjIyMkJCQnJycpKSkqKiowMDAxMTEyMjIzMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0+Pj4/Pz9AQEBBQUFCQkJDQ0NERERFRUVGRkZHR0dISEhJSUlJSUpKSkpMTExMTE1NTU1OTk5PT09RUVFSUlJUVFRVVVVWVlZZWVlaWlpcXFxeXl5gYGBiYmJjY2NkZGRpaWlqampra2tsbGxubm5zc3N0dHR1dXV2dnZ4eHh8fHx9fX2AgICBgYGCgoKDg4OFhYWGhoaIiIiLi4uNjY2Pj4+Tk5OUlJSVlZWWlpaYmJicnJydnZ2goKCkpKSlpaWmpqanp6eoqKipqamqqqqurq6vr6+wsLCzs7O0tLS2tra4uLi5ubm7u7u9vb2+vr7AwMDBwcHCwsLDw8PExMTFxcXGxsbJycnKysrLy8vMzMzNzc3Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dnb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7v4od+AAAAAXRSTlMAQObYZgAAAldJREFUGBm9wfk/k3EcAPDPrFNRrmLZ9/P5bmOWUpRKkZgKFTrQIYm0pFwhOUpakxKl3RN79sz2WIz+w7Y5kld+rPcb/oGYpP07YCtxlw1GQZqztFccgL9Iqnf/XA5bMn901cfDZnrb8lKEseSoMqXj2zn40w3RcK1mIBgMjh9BJI3G5CuDjcq+6NIY8qZg8GoqISKrCUqF8JtytiidMUTt1EIuxxAqXVywJsO655MpSobEsHXxAmEI3VoI/HgMa9TSiI4QkZgh0MYIkbSmwPy8n8Oq25JwEgkJ1R8kqTEDsWAwIIXchVU9fqlTg8hUD+fHL404ht7PCV2NHYJ/WAYRe2w+n3+4qrhqSPKNl4/6fP43eYhYaPbEQUSi6A3x+f1zAw1ur6d1zJLFUcmpPEAQkewVRa+7v93kq8u1iRO6uiY6pEKm0jp1ABADkOD2eHvylFxVKziFd7OfZqoZ8lTOcQIBgAPsGheM6YwYUovYTc8EoRkRibFMZxwA8H0ALWIFhlGR1/bU6vE48jGEml/JAGCvAuCKeB7D2HFx1vzo+r2xqcrDGRd7hWoIUwMkmvVpGEIlnr4shqjr87js7u9OgjBFNkBNFzEk0nRbcogj4tnpsAZYceoEjx98ks2p4MWMQckZItJrl8tlOggronPSqeCr/a3R5Zy+TwolIeJLp9OSD2t2HiOu/2wPcXRylYohZkzap/SwQWxmTn633Waz2UuJMW3WA8fQadgstnLEZrVO1Z5RF7eNVSfAOllUlFy+LSxacbPXODbaf4d2y2Ar8u1y+L9+AZl9xrRD45UJAAAAAElFTkSuQmCC',
      'searchUrl': 'http://www.moviesubtitles.org/search.php?q=%search_string_orig%',
      'matchRegex': /No results found/,
      'inSecondSearchBar': true},
  {   'name': 'Napisy24 (PL)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAMUExURf///y9usmxpaf///3rL57kAAAABdFJOUwBA5thmAAAAM0lEQVQ4y2NgGLqAaRUKWECMwNJQJBA2KkAlgfr/EECCAFXcEQ4y8itJAlT3PumpcBgBAHh/F92ZowfMAAAAAElFTkSuQmCC',
      'searchUrl': 'https://napisy24.pl/szukaj?page=1&lang=1&search=%search_string_orig%&typ=1#',
      'matchRegex': /Znalezione Napisy \(0\)/,
      'inSecondSearchBar': true},
  {   'name': 'Napisy24 (PL)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAMUExURf///y9usmxpaf///3rL57kAAAABdFJOUwBA5thmAAAAM0lEQVQ4y2NgGLqAaRUKWECMwNJQJBA2KkAlgfr/EECCAFXcEQ4y8itJAlT3PumpcBgBAHh/F92ZowfMAAAAAElFTkSuQmCC',
      'searchUrl': 'https://napisy24.pl/szukaj?page=1&lang=1&search=%search_string_orig%&typ=2#',
      'matchRegex': /Znalezione Napisy \(0\)/,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'Nekur (LV)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADNSURBVHjaYvz///////8ZRixgYhjhYDQARnoAMK5erawiK3fnNoQrKDSyvP/+HQuEISYGoXn5RlYAsLJAs8DvPyMzA/z+M1oIjgbAaACMBsCIBiy/TT7nfRYbwQGgnpI6LT1gBLcEIb3Bt28hXKER1hJ89260EBwNgJFeC5x3qztd7TiCC8Flp8USBBhGbiHIwvqA9wiv3GgZMBoAowEwGgCjATCSA4CVZWR6n5UF6vFXryD0SBscff+OcXRucLQMGA2AEQ0AAAAA//8DAFOnNjmXgsiYAAAAAElFTkSuQmCC',
      'searchUrl': 'http://subtitri.nekur.net/modules/Subtitles.php',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nekas netika atrasts/,
      'mPOST': 'ajax=1&sSearch=%tt%',
      'inSecondSearchBar': true},
  {   'name': 'OpenSubtitles',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (Arabic)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-ara/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (BR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/pb/search/sublanguageid-pob/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-ger/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (EN)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-eng/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (ES)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-spa/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (FR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-fre/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (GR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-ell/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (IT)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-ita/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (NL)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-dut/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (PL)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-pol/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (PT)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-por/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (RO)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-rum/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (RU)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-rus/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (TR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-tur/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles.com (EN)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAhFBMVEUAAAA8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDzI85N0AAAAK3RSTlMAzNKZ+cdzZegM4RoHhnrt5NmzgW0VwlQvI/K6q15LRRCjnn5ZTzQokow6G1r+TAAAAf1JREFUWMOl1+uSsjAMBuC3sAgIqIDgcT27upv7v79vTDuoHyANPL/qOCm0TQKgTbibu55KiVLlufNdCJFVXtJ/yvwGS7HvUSPPj23C5zNqFYw6l3Id00fjKz6JMuqURWi1D8hCsEeL0RfZmaDRL1m7o8GJBI6oSUjEra2fXsn34e+LhL7ezqIISCx4zYesSjTVKSUjQ2VHzLtEsLEriS1gxKnZFltmy2fh288R7NRDYt7BDUQ83seYxz6fygoiNz73OY+V9AbY9hHlPEZLevAh9M1hPwByHv1Bxlw3AeDwaAWhiMwaDroKCgiFxCLsicWQ0hdemJRYQ2xq0tfVWQmxsWlNpa5CiKW6AOH0nKAKnOnj6DvBFOu+E3i6sw2eYPgS0qGb6A07RoXTsETaDk9lU0zoW0xDy/kAeM+GEm6UhU3x1lCQVM0NcaYsZOGzpf0CuPHou3dTNW0969/WMeecvqEyUi0SVFb6wfLyaFOonC0m8LgQwtcnZQ6BCYecoYUzPYM0PjjAuBBTfgQbV4/YpeEVJ1UPJ5fdfePuavynQ0aJp2I28CULS/lr3g/eLEimnro5iSRNuSmwRQOXrJ3Q6Cy8/7rdlCysr2gVbahTucInl6AjfTo7Tzj5sI7p5GD17epQI2cUwtIycWrRyRIixeJ8VA6HqmO+KNDiH1Eq9MfKwxvsAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.com/en/en/search-all/q-%tt%/hearing_impaired-hearing_impaired-1/machine_translated-machine_translated-0/trusted_sources-trusted_sources-0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles.com (GR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAhFBMVEUAAAA8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDzI85N0AAAAK3RSTlMAzNKZ+cdzZegM4RoHhnrt5NmzgW0VwlQvI/K6q15LRRCjnn5ZTzQokow6G1r+TAAAAf1JREFUWMOl1+uSsjAMBuC3sAgIqIDgcT27upv7v79vTDuoHyANPL/qOCm0TQKgTbibu55KiVLlufNdCJFVXtJ/yvwGS7HvUSPPj23C5zNqFYw6l3Id00fjKz6JMuqURWi1D8hCsEeL0RfZmaDRL1m7o8GJBI6oSUjEra2fXsn34e+LhL7ezqIISCx4zYesSjTVKSUjQ2VHzLtEsLEriS1gxKnZFltmy2fh288R7NRDYt7BDUQ83seYxz6fygoiNz73OY+V9AbY9hHlPEZLevAh9M1hPwByHv1Bxlw3AeDwaAWhiMwaDroKCgiFxCLsicWQ0hdemJRYQ2xq0tfVWQmxsWlNpa5CiKW6AOH0nKAKnOnj6DvBFOu+E3i6sw2eYPgS0qGb6A07RoXTsETaDk9lU0zoW0xDy/kAeM+GEm6UhU3x1lCQVM0NcaYsZOGzpf0CuPHou3dTNW0969/WMeecvqEyUi0SVFb6wfLyaFOonC0m8LgQwtcnZQ6BCYecoYUzPYM0PjjAuBBTfgQbV4/YpeEVJ1UPJ5fdfePuavynQ0aJp2I28CULS/lr3g/eLEimnro5iSRNuSmwRQOXrJ3Q6Cy8/7rdlCysr2gVbahTucInl6AjfTo7Tzj5sI7p5GD17epQI2cUwtIycWrRyRIixeJ8VA6HqmO+KNDiH1Eq9MfKwxvsAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.com/en/el/search-all/q-%tt%/hearing_impaired-hearing_impaired-1/machine_translated-machine_translated-0/trusted_sources-trusted_sources-0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Pipocas (BR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAGFBMVEUAAAD9/f1QUFBtbW3Q0NCNjY2tra3m5uY9p2ISAAAAAXRSTlMAQObYZgAAAYRJREFUOMvVk8tOwzAQRSMQHzAS0C0ay11Xtpx9hB/bKI+ypnHSdUSof5+xqzYu8AO9C0eaE9/rjCfFnepJqrj2f+oCUcVV/gICmWC9YBL5Tb1BNU0jcq+N2OVGqHwIBrsZngeWgQfmA2wGXgHACessoXQzGOmBtGneMqcuANhpTmBYwSPzM1XgrG++RnByuuoV1fWwpYMboC4Rt4BNsj7Xb8ELd2aXjJTY5uCLeZMayvyB52BgaozgoZzf2XE91UaUo+AExAd1oVvBSTk98OhUQWjU6mU6OpiiaF4tzuDx6jRVQC0uCtyGqXputtUF6NSvmoDtKzDsE1YR2BXNduxo7+EjB8ugKDxdg8l2kN2B0gWLwcucgaCbmi4jgU0I6d0lwOIWK9KkJaB1mGmlx+jjB5LaeH3BTtrBMk7axpa8nYGjHVZ57Wyr9i2S6tT2vQ6BbEutbYMSpZTqPApKkyxysmmpmg3PnsCANLstK3K1su97uXuit8k7V8yLN9DX//01960fqjlt6pbdJkIAAAAASUVORK5CYII=',
      'searchUrl': 'https://pipocas.tv/legendas?t=imdb&s=%nott%&l=brasileiro',
      'loggedOutRegex': /Cloudflare|Ray ID|Lembrar-me/,
      'matchRegex': /Não existem legendas/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Pipocas (PT)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAGFBMVEUAAAD9/f1QUFBtbW3Q0NCNjY2tra3m5uY9p2ISAAAAAXRSTlMAQObYZgAAAYRJREFUOMvVk8tOwzAQRSMQHzAS0C0ay11Xtpx9hB/bKI+ypnHSdUSof5+xqzYu8AO9C0eaE9/rjCfFnepJqrj2f+oCUcVV/gICmWC9YBL5Tb1BNU0jcq+N2OVGqHwIBrsZngeWgQfmA2wGXgHACessoXQzGOmBtGneMqcuANhpTmBYwSPzM1XgrG++RnByuuoV1fWwpYMboC4Rt4BNsj7Xb8ELd2aXjJTY5uCLeZMayvyB52BgaozgoZzf2XE91UaUo+AExAd1oVvBSTk98OhUQWjU6mU6OpiiaF4tzuDx6jRVQC0uCtyGqXputtUF6NSvmoDtKzDsE1YR2BXNduxo7+EjB8ugKDxdg8l2kN2B0gWLwcucgaCbmi4jgU0I6d0lwOIWK9KkJaB1mGmlx+jjB5LaeH3BTtrBMk7axpa8nYGjHVZ57Wyr9i2S6tT2vQ6BbEutbYMSpZTqPApKkyxysmmpmg3PnsCANLstK3K1su97uXuit8k7V8yLN9DX//01960fqjlt6pbdJkIAAAAASUVORK5CYII=',
      'searchUrl': 'https://pipocas.tv/legendas?t=imdb&s=%nott%&l=portugues',
      'loggedOutRegex': /Cloudflare|Ray ID|Lembrar-me/,
      'matchRegex': /Não existem legendas/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Podnapisi',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAElBMVEUAAAAHBwf+/v7v7+/Hx8d+fn61o1kCAAAAAXRSTlMAQObYZgAAAK5JREFUSMfN01EKwjAMxnG9QT5dD7DiBcQTVHKBQnf/qzgVQtsIeTCE/aEPg99Dumwnl85QmYAsABOQBmmTKgANFpYKALIATEA9WPKK60O645krTEATuGRp/QCYgIYhR/DNEyQuPbjtj40BNeQ4pi/4mS9IW91PF/A+eptSlSG9QOIyg8Z6WV0VgCvQu5AhA0DcNROXGTSOv6YuAMReU7/qoK867ucVsHDX8db9Xy9BiqkzatUE3QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.podnapisi.net/en/subtitles/search/advanced?keywords=%search_string_orig%&year=%year%',
      'matchRegex': /table-responsive/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Podnapisi (EN)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAElBMVEUAAAAHBwf+/v7v7+/Hx8d+fn61o1kCAAAAAXRSTlMAQObYZgAAAK5JREFUSMfN01EKwjAMxnG9QT5dD7DiBcQTVHKBQnf/qzgVQtsIeTCE/aEPg99Dumwnl85QmYAsABOQBmmTKgANFpYKALIATEA9WPKK60O645krTEATuGRp/QCYgIYhR/DNEyQuPbjtj40BNeQ4pi/4mS9IW91PF/A+eptSlSG9QOIyg8Z6WV0VgCvQu5AhA0DcNROXGTSOv6YuAMReU7/qoK867ucVsHDX8db9Xy9BiqkzatUE3QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.podnapisi.net/en/subtitles/search/advanced?keywords=%search_string_orig%&year=%year%&language=en',
      'matchRegex': /table-responsive/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'RegieLive (RO)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAASFBMVEUAAADqLCXqLCXqLCXqLCVHsuVHsuVHsuVHsuXqLCXqLCVHsuVHsuXqLCVHsuVHsuXqLCVHsuXqLCVHsuXqLCXqLCVHsuXqLCULaus+AAAAFnRSTlMADcUi5GB3FNKR8uYiMvO0rj7UjkVuLjKkqAAAAMpJREFUSMft1csOgyAQQFEewjCoIIrw/39agTYu2tQx6aJpves5ySgksA/GcdpCTgcib3XyTwAAUAEEtXhvjB9IICzGpVpPAcGXaTrQfZmkA+3SKaBcOgXA7MOuJ/wl/Zg2iwoDwOHB+fsmGmgnPfRtGUW9GsG1fYAKVKot7CTQF7jAdwA2FWAjHWAuIR2sFVjkVCC7XJsxjpLzQ9B2atluFuMxkCLvWQJgo6CDlkRLB62Is30GwdQUe5WMK06ifvQe1N69kJyzn+kGzLkr0z22EOEAAAAASUVORK5CYII=',
      'searchUrl': 'https://subtitrari.regielive.ro/cauta.html?s=%search_string_orig%',
      'matchRegex': /Nu au fost gasite subtitrari/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'SubDivX (ES)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAV1BMVEUAAAABAAUBAgHg4tXh5NHf4s/j5tLi5s3i5Nbk5tre4sre4sff5cHl6NXm6tPi5dHf48vl68rb3sni6MXd4sMHBwkFBgQEBQDl5t7i5Njb3NTd4M3c38yujg2tAAAAr0lEQVQY0x2NB47EUAhD6fyWnkmm3f+c6x0hYYlnbBIiEmYWISzClPncspn7pG4VWPsxMnSKfT03Z5K6zwo30LONBVLyc0PowVy7X0SvgEGKyUXqCvA2uxnZ3zBLRWWMw+i/t2VfF9Qua88muJAdIwS1aRbfIsS32ftBv6RLrAiTxovo8l6ZAYjuTxbIMtoTwjDMe8Wnb+e6x6SR4+gKVM11creW2zkjGwO3YLEAyx+mHQbdx1UnNwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.subdivx.com/index.php?buscar2=%search_string_orig%+%year%&accion=5&subtitulos=1',
      'matchRegex': /titulo_menu/,
      'positiveMatch': true,
      'inSecondSearchBar': true},
  {   'name': 'SubDivX (ES)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAV1BMVEUAAAABAAUBAgHg4tXh5NHf4s/j5tLi5s3i5Nbk5tre4sre4sff5cHl6NXm6tPi5dHf48vl68rb3sni6MXd4sMHBwkFBgQEBQDl5t7i5Njb3NTd4M3c38yujg2tAAAAr0lEQVQY0x2NB47EUAhD6fyWnkmm3f+c6x0hYYlnbBIiEmYWISzClPncspn7pG4VWPsxMnSKfT03Z5K6zwo30LONBVLyc0PowVy7X0SvgEGKyUXqCvA2uxnZ3zBLRWWMw+i/t2VfF9Qua88muJAdIwS1aRbfIsS32ftBv6RLrAiTxovo8l6ZAYjuTxbIMtoTwjDMe8Wnb+e6x6SR4+gKVM11creW2zkjGwO3YLEAyx+mHQbdx1UnNwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.subdivx.com/index.php?buscar2=%search_string%&accion=5&subtitulos=1',
      'matchRegex': /titulo_menu/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'Subdl',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAD+7ioyMjOlmy53V6WFAAAAAXRSTlMAQObYZgAAALhJREFUKM9t0rERgzAMBVBTMAL7MAIFhrsUzh7skRHcKEfpUbxEdsgR83Xin2NU+YEksGWH6Cd3xeD9bOvel7B3HqHrTjFqhWJmFvKQxbzeMLEERTX8FVofRNLZAXiI7CfQbFNMN0hBMRCzIq5fojwn3gZ8J0P4m0VexCqR8J/dwA5ooB0MiyRrXUKiwjoQG4AtPHOo99Oi47bHGo7A8eIQedbHkRUcyf+wnKEdMEfPvPq6tBeJV+wHsSepYe5VEiIAAAAASUVORK5CYII=',
      'searchUrl': 'https://subdl.com/search/%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'SubHD (CN)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA21BMVEUAAAAAie4BiewCie0Bie0DiesBie4BiewCiewAie4AiO0BiewBiO0Cie4CiewCiewFiOsFiOsAkOQAkvQAgNABie0CiOwBiewBiewBiOwBiOwDiukAh+EAgN8Biu4Aie7///8FjO7y+f6p2PqXz/nf8P3K5/y03fpquvZBp/MrnfEOkO/1+//u9/643vul1vmd0vl8w/c6pPI0ofIXlPD4/P/p9v7T6/y73/uj1PmQzPiJyPeDxfdetfVZs/ROrfQ4o/Ivn/L5/P/U6/zO6PzB4/t3wPYkmvEimfDDD6utAAAAH3RSTlMA+MujrUzstn3+/d7SqJGJNC8NBQS2f+fU1LlKERDte24wGgAAAXlJREFUOMt1k9eagkAMhSOgYO+udQcEUbH3stbt7/9EOyMhsCr/1fmSQwoBQAoNTVal2itjsZpUlrVGAYLk0xF2RySdp3Qpm2BPSGRLmFdYCIrryLJQsrf+WP9pFzFHmhH9gznuWseBH0nz/Wj+xUZ3ac8M2qUAUU/PhzrRJUcUNFRGhyeG2113LRwzz6CBjOrMw19L4XzjauSVkKGMSoTnrvzkcoFhFSRUlm84WZZ1xbAEKVQzbvjos3tSkPSW1AVrs+f8MyQh5smJjozMk0GGF99g7N91j86FDLwFseyN297L/KEWOCRiXHvmzTSlIaWHwQeWaEJrqqi6tm0bWGbFe2C4TK/a5o+dsUSgggwVVAcRdW55MzCDRudejsRs9mS3FUOuHDp3K4KyP9R9jhiMtADom3bGXnpDN1EAIBenBX97+4k5/b5QIJ4DToaFkgFBUQ3Lq0VwHZn4s3Q8g3kxh/L48yo5CNKMVuS6VOXHj1WlulyJNjHxB35ccGfJ6bGeAAAAAElFTkSuQmCC',
      'searchUrl': 'https://subhd.tv/search/%tt%',
      'matchRegex': /共 0 条/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Subs.ro',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAz1BMVEVrKQZoKAZ/MQd/MQdqCwuwBgaqBwdwCwunBwd/CgqhBwdzCgqbCAh5CgqLCQmPCAmWCAiECQnHxsaamZnU1NS0tLSqqanMzMyjo6O2lpapk5OmeXnBc3OlZmeeNTV6MDCAJiZzGBiIFxd7FBSnEBBxGApuEgqbGAa8u7u1oKCTkpKxj5Cchoagfn6sfX2NeHi7bm60bW24Y2OsYWGHYWGYXl6RWFiFV1eiUlKCSEipQkKnOTmPODh6JyeQHR2gHByCFRWqExOYERGVHgeUHgcyuWxVAAAABHRSTlOnl2xLszVV4AAAAKBJREFUGNNdyAUOwzAQRNEts+040Ia5zMx8/zN1nUpV0ifZ+rOQ75VSXgXAnfaG8h+oJiLLenwL6oIyry8VJRIJTdRuH5snfluIBsbYk3Ou8xVjDg6glNqUDnSnvx9NcQAhxCbEMK+qqpo4QJKkQNMmhhZImzMOqKHOGN+9thUNLRTKoSfLsicaGonLejbcHVwsqPz4ro8/dIsZMWQvce4DIiARiMhwOQAAAAAASUVORK5CYII=',
      'searchUrl': 'https://subs.ro/subtitrari/imdbid/%nott%',
      'matchRegex': /Pagina solicitată/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Subs4free (GR|EN)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUDAQGPAAA/AADq6uo0MjJqZ2feAAC1srIVx6DEAAAA1ElEQVQoz62RMQvCMBCFT4m4aofMTUD/wCmuAU+6Btrs1iFzaYT8fe8aOxQXhz5CSD4u7x4X2NqFajDHhSowsNBagDonRwuPEEIHZod44fu2h4RyNO0tCzgzyDmPYNIAjgviS6GfPJIHlhbgCpAHm6ifO+zIMWilUr/0gd3RV9LlygW1PuxvOUsFNOh1PMa+uX6DqTRGVn+/zNHbwVoT67aAE6k0SBvmE7hjQseAgxbQIL4lSAXZFw+ilUaonHIzkMnxYlEIJTqLiBzx/o/p72eDXQg+JDA1/5WqSucAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.subs4free.club/search_report.php?search=%search_string%&searchType=1',
      'matchRegex': /any subtitles using your criteria|There is no subtitle/,
      'inSecondSearchBar': true},
  {   'name': 'Subs4free (GR|EN)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUDAQGPAAA/AADq6uo0MjJqZ2feAAC1srIVx6DEAAAA1ElEQVQoz62RMQvCMBCFT4m4aofMTUD/wCmuAU+6Btrs1iFzaYT8fe8aOxQXhz5CSD4u7x4X2NqFajDHhSowsNBagDonRwuPEEIHZod44fu2h4RyNO0tCzgzyDmPYNIAjgviS6GfPJIHlhbgCpAHm6ifO+zIMWilUr/0gd3RV9LlygW1PuxvOUsFNOh1PMa+uX6DqTRGVn+/zNHbwVoT67aAE6k0SBvmE7hjQseAgxbQIL4lSAXZFw+ilUaonHIzkMnxYlEIJTqLiBzx/o/p72eDXQg+JDA1/5WqSucAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.subs4free.club/search_report.php?search=%search_string%&searchType=2',
      'matchRegex': /any subtitles using your criteria|There is no subtitle/,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'SubsLand (BG)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAMAAAC6CgRnAAAAXVBMVEWczCAxgtMsMDSl2SNgsv5ptfh8oxqIthZymwsvTmlWchFBhcXz83STwhphoNhzgVETExM4cqk/aItSiLb4+JGPuyFegQRucnciXpnW4VqusWDD0k5Le6bS02upwjnptz85AAAAzUlEQVQoz43O25KDIBBF0Z6eTAvYihfQAdT//8xQlcaQS6WyX9fDOVDXNcOg/8cf6cnwa+uqGnq0puqDEalHoypFxqyVqTM6mOPOPL+x5MKCGHlsiy0lYkcG0e5jK4EpientbnjGLhjMOI1SZdE5jmvGUmVoOetu1xJMJa1FbQlmaZuyoUnOJZKgl+bN6mwquOAl+JP6mS3iQtlAqi1m88y/pbv1HKJNzOnFLnkwXzsOD+9swmFYyAOcdrklZqjpPhq8WHta6dlU47tv7Ao9EBhuB49pQQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://subsland.com/index.php?s=%search_string_orig%&w=name&category=1',
      'matchRegex': /Няма намерени субтитри|Не са открити/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'SubsUnacs (BG)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAeUExURQAAAA4ODisrKzk5OWRkZIGBgaysrLq6utfX1+Xl5Q6iRfAAAACnSURBVCjPjZHRDYJAEEQHaIASSLAAolSAPUgFaixAE0uwAeC6ZR13LuEIkf27l5vZ2V2EpLAHTK8b6/5xMJ5PrPbtYGjAKh4bYHpWfGcHl4xdSZD3bkpFVrunQH7xrgG0cD0BLVxPIIXSQp5Ki+svBRQOx/IfWEk0PH9aHmg9/Gl54grZ3jawCeJIAnEkAjOm53eJBNaaXQUWW4X02ipCcimE5JarY89anrB+IWyh0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://subsunacs.net/search.php?m=%search_string_orig%&y=%year%&t=Submit',
      'matchRegex': /transpDiv/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Subtitles.hr',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAB3RJTUUH5AgHEyg0ji/HegAAAEhQTFRFDjlULFJpSmt/aYSUeJCfh5yqlqm1w87V8fP1/wAA/xAQ/yAg/0BA/1BQ/2Bg/4CA/5CQ/6Cg/7Cw/8DA/9DQ/+Dg//Dw////dQyPXQAAAKdJREFUOMvlk90OgyAMhR1YO5yOOYTz/m86foRIMvB62bnqab5AW8ow/Isk8xSDiVlGm0TiAAjgGDBA0WbJKwC3K2BsANGKewqU0oBRQQbQJ/uKQQfYTsC+BO0VsDpgy0CRru3zAthVHzCPAlgdZDPgjL8fblaq2cX8xpFttTnbVGN7DmtV5LdBeYfFA+23QM43gGAhekA5QhCl1ZEUtqzYYSSi3/g1Hx39HyjcMM70AAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.subtitles.hr/subtitles-search/?movie=%search_string_orig%',
      'matchRegex': /matched subtitles found/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Subtitry (RU)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAAAAAD///+D3c/SAAAAAXRSTlMAQObYZgAAABpJREFUCNdjWBUatoJh2qpVEVBWaBgSi3RZANsBHqx95FOKAAAAAElFTkSuQmCC',
      'searchUrl': 'https://subtitry.ru/subtitles/?film=%nott%',
      'matchRegex': />0</,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Titlovi (BiH|HR|MK|SLO|SRB)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAUVBMVEUjHyD///8hHR4AAAA/Ozx+e3xHQ0SGhIULBgiwr68nIyQRDg4KBQe2tbWLiYkwLC0eGxwWEhOlpKRiX2BQTU5CP0Dy8fKfnp6WlZZZVldLR0gFYLQLAAAAaklEQVQY05XMSw6EQAhFUSwEuoFSy0//9r/QRqMVh3omJOTmwRXpDEANK1dNYFN+7rJYFNg1VcZ4DD0zt/3C69GjGPG1Je9IyiwijCQrNoXCRNSNtJl8APw0J1+L0aWtfnMCLf44uMfGfX9khwSeucnTFwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://titlovi.com/titlovi/?prijevod=%tt%',
      'loggedOutRegex': /Ray ID|security check to access|Još samo jedan/,
      'matchRegex': /<b>0<\/b> rezultata/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Titrari (RO)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEX///8AAABVwtN+AAAALklEQVQI12MAAqt3DEJeDEI+IBII+F4wcK1g4DvBwLWKAQTeMTAAGacYGNYBOQDBuAiBqgBa/AAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.titrari.ro/index.php?page=cautamsavedem&z7=&z2=&z5=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': />1-0\/0</,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'TransHeaven (BG)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEX///8Dkt0LYIwhKCsMqvhFsuRLXmh4w+p/EjhYAAAAu0lEQVQoz63QuwoCMRCF4QEx1hOi/RwvD2DAXhixVXCxXRRia+frO9koZnHt/JsMH4Fc6KtJc6eqBzlp6pQcAtfZDlXdMmtpO7ADDNiALsmAuBb282jZRC6voj6WErlElIG64q0sEnZUZ7D/N5RTjvYP45N+AOFATvgNDV3CnUYSfsJ5CM4Pzz3ofq4GtnrggT7gakMNsxRFX6AZDjT6QENQu8eiA5ff0mJqIPwC+PayNMCqAIA2JoNNegK8lDkC0aDxggAAAABJRU5ErkJggg==',
      'searchUrl': 'http://subs.sab.bz/index.php?act=search&movie=%search_string_orig%&yr=%year%',
      'matchRegex': /<tr class="subs-row">/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'TürkçeAltyazı (TR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAD////zeQHQaAGyWgL+jRv29fTj5eb+27e0pZb8qlewf0/7xY7Du7TS0M786tcNwhDKAAAAAXRSTlMAQObYZgAAA8VJREFUSMd9lFvoDFEcx3/7QhKZB+NOnTERSs0MhfAwU5Iko5G8sMXZkFu0k1yKB21SFNHmUtQi/ctlRdoUijZJbpFE5J5seaBViu85vzMYJp992Mv8zud8f78zs/Q/+j+nP9j2pF6vH3m8lH7R+2B6lzJ6PXletS27svVJ/R0ZnlkWPhs+vLQMlU+sKX1ab1kpGfq8tX4zCJpnH+q4br0lpnTQyiPTahlv9otMsN62CrBXDyDmcblcWPAy6+eRlEXXO5mg1z1ZZEjXkWHYGGmbRb9Vo25cpIzzEziD/WMP+PFVSrm21hBTfg3BE1/1mm4tY/etRiycvcQ8FeKYBbrtdq1dg6O2p3b7dCLEdNPDeSEmqA123759uyZtGyY2jOaUfYQQ7mfs0NPTc4q7qbW1QZwlxWvHEeKMZQ1tNBK8KW7dutUQwnH0HqXzHmrHfbZuJIl7jZvtOX06cfHrNHWs/XwIRNKzK4njGDuB4UkDEWBw7qopCeAuXpxAgKyKlS6+4FfPO4eCV442NJRgLBfsEPgMA4c473nC1QYX49Acd5PF708rxRRMocmGBAaxnU8hjpNFsvIGhtFLqT8EnMF1x5U5o+u6i6SsHhfCv0t9fWOAwGRcrlZUKulWx/H30jBPZ0ggcBdywXUXMzhRTdP7qo2NDhtiYMYENSaXbtu2yfcv0UedgQ08psEQQHEyfddpejPooa8nGYNxer01EF8d4Yy/0+ns86fQPs4AhInwxdVD9KYe7TT96bSPDVAIE+E6BMgPmkEwDQUwsIIj2LEW+CD0scV+nxXIrRPYwyHA+iAIouCXQSsmmqNUArU8CsFsGIwg1idl26uUAMuZKfTAz9rgkyqvVIIw5OvhXHodGIXLArmGBYa5tCE0bYxlAQ5R7Z8xi5YFpo0lbKhUNvl6fevIp0+HLlyiISEUAiAjkDLdogVXqmUq2dvuUZ/IKK7pKchKujlQ1yVpBlDv0Ci4CVlN94XIto4yel2IuI+dWQTVwlv6zX5l8GAwTVz3Q2T/g42RVjg3kQCG1U0IXtAfrFAzh2J+uQyBvI4pzM3/pUesmCAhkN/UGA/kCkoXIk5xDU/F9xgHOQct5EOwYny7u2uBA8OcAZRjRBSxY5Kr74RwHuXBJCIeJ1ARLtJfbM4UwIdhL/1FPxRoCYCAp5Dr42HEDk3IBTmGZAq8YECXxQpDbgx85pyCwUkUFJQ+RsBIUPAvvffzcv26SgWsufA7xUUqYgUqDDOpkO7+LMZkKmZk69fDUkAJRyy79Vardflw7n75CZBalsNovAasAAAAAElFTkSuQmCC',
      'searchUrl': 'https://turkcealtyazi.org/%tt%',
      'matchRegex': /Henüz bu filme ait altyazı bulunmuyor/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'TVsubtitles',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAAwMDD09PTl5eVWVlbNzc2urq6Dg4PgLJRSAAAAAXRSTlMAQObYZgAAAQpJREFUKM+d0T1vg0AMBmBYmhW3F5hrwnUOhnTlRD5m7pRmDojOOdQqf782IWqbKYo3P7x6fRLB/RNC9G/dWlz5P/uAiKn7lZr3bA1dNe0zfbbYAMwX1wBAjB4gwUskLAAgNwAKlyM8LRlaIwk9wnMjcOQOxEhgWDBYDcoingRazelsU1r9iY105njY2WyDmYH6VQDlWQP2fExNkPVvdZpwLfDdKERtYMid81ewfDbWMU4JCFr+pNIOC/ZGYDACq7Pzyp64M3gR4JvzNKeIoZodOSs3id7loWv4MKqTRkeNgIK6dORHqARCoxyRJKjgVURtibhjV3Jgom+iL9X7ywIyyX5/uPlVEDw6P7rDNOdWghNMAAAAAElFTkSuQmCC',
      'searchUrl': 'http://www.tvsubtitles.net/search.php?q=%search_string_orig%',
      'matchRegex': /No results found/,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'xBytesV2',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2BAMAAAB+a3fuAAAAGFBMVEUAAAAHCxKHttIwRlrd9fg2gMBuip9m2/b5hBCNAAAAAXRSTlMAQObYZgAAAb9JREFUOMvV0k1zmzAQBuCNcdIrG3V8DgsDV8kq3Es19OwySs/ILj3Hrcvf74JkY8+UHnJK3hl7JD187O4A7zhrYwyEEBXk+L+fyTz5dTFwLAxD6/dmTOPXLHzuhpM6G1GW+vUz33hU/bDD8Mi9I0rltFGltRZ7i8LbF9wQdd46LEdr0W9X3ZWtvCUCpkQoKyLlDTphra5eNsEEbGeL2MrvXQznHI4pQgibHZS8su5imu0PXughI3V5SMTWivM0V2RyvLHdwY+Rp+nM/Dq4Z9NmjARj6q3p4tlO1m5HajZs6af6yj6wVY4tiSFrMKt5Kk/Bira0LXLHfL1LhOFJr/tggxJsm2karvtoKCejPa2OyN0rMVmmDjXR71oE+xUjFyrcaEaYvO+LJg6lvMR33Dwbv888NlrrKg1WJBCxaUd7CfWjQo462w7uveUVNOjjbT2oqXtdUd4fPvvD8BF8ZXNsbUWUmSRY6O6I8POkOaNxqXMehhblD42IXGhWI1wbH0uF3ii9MeBT8PaNqLu1CAX/OFE1Tfvf4SbUkpWU45Jpl6NcNC5zIdHzftkqtWxaCVgKYvwqu0P5H4PlSHij+QvgpHDquTYd9AAAAABJRU5ErkJggg==',
      'searchUrl': 'https://xbytesv2.li/torrents?imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Olvidaste tu contraseña/,
      'matchRegex': /torrent-search--list__overview/,
      'seedingRegex': /fa-arrow-circle-up/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'xBytesV2-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2BAMAAAB+a3fuAAAAGFBMVEUAAAAHCxKHttIwRlrd9fg2gMBuip9m2/b5hBCNAAAAAXRSTlMAQObYZgAAAb9JREFUOMvV0k1zmzAQBuCNcdIrG3V8DgsDV8kq3Es19OwySs/ILj3Hrcvf74JkY8+UHnJK3hl7JD187O4A7zhrYwyEEBXk+L+fyTz5dTFwLAxD6/dmTOPXLHzuhpM6G1GW+vUz33hU/bDD8Mi9I0rltFGltRZ7i8LbF9wQdd46LEdr0W9X3ZWtvCUCpkQoKyLlDTphra5eNsEEbGeL2MrvXQznHI4pQgibHZS8su5imu0PXughI3V5SMTWivM0V2RyvLHdwY+Rp+nM/Dq4Z9NmjARj6q3p4tlO1m5HajZs6af6yj6wVY4tiSFrMKt5Kk/Bira0LXLHfL1LhOFJr/tggxJsm2karvtoKCejPa2OyN0rMVmmDjXR71oE+xUjFyrcaEaYvO+LJg6lvMR33Dwbv888NlrrKg1WJBCxaUd7CfWjQo462w7uveUVNOjjbT2oqXtdUd4fPvvD8BF8ZXNsbUWUmSRY6O6I8POkOaNxqXMehhblD42IXGhWI1wbH0uF3ii9MeBT8PaNqLu1CAX/OFE1Tfvf4SbUkpWU45Jpl6NcNC5zIdHzftkqtWxaCVgKYvwqu0P5H4PlSHij+QvgpHDquTYd9AAAAABJRU5ErkJggg==',
      'searchUrl': 'https://xbytesv2.li/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Olvidaste tu contraseña/,
      'matchRegex': /fa-circle text-red/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Yavka (BG)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAw1BMVEUAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMHuwL5+fta0FjT79SoRAoHBAT39/m9074vMi9aWls8PDxpHB4UsBD8BQvfGwrv7/Hu7u/W1ti/18C/v8C4uLmpqaqQkJCEhIVlZWVHR0hBcEA+aT0qKislJSV8KiJvJyHOHCAjhx8ijx7XGR4bGxsXPhYUMxO1/aYgAAAAGnRSTlMAZ/zUliWejW9cTQXu7erhxsS4p4V4YD42NNCOKJoAAACVSURBVBjTVchVEoNAEEXRHlzinnTI4BB31/2vKqQhFJyPV/UuJCT/JQPovicBGZxxrQI05njqU1BWaLuysUNctinUZohbpm0Qp1UKgo3osd4e0RYoiI5lOa6b7EKkwI7jzIEBEcMRCeuQ0j5peHchI91//6HAn1yZJPgQcp1rHF9UKBCiiENR6/ZsloIRBHopmJybQL4WSg62O5inqgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://yavka.net/imdb/%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Няма нищо за показване/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Zimuku (CN)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUbbZ3////iQOcAAAAASElEQVQI12NgYGIAAj4QwQ4imBsYGOT///+ARMgwMBQgEYz//zMgCCCwAxEVQMz4AWTAAagp9v///0AQYDFChD2IkAcTDBAAABG3IwHtHX+HAAAAAElFTkSuQmCC',
      'searchUrl': 'http://zmk.pw/search?q=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /搜索不到相关字幕/,
      'inSecondSearchBar': true,
      'both': true}
];

var pre_databases = [
  {   'name': 'CorruptNet-Pre',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUPrXP///+lsnldAAAAJElEQVQI12P4/5/hfyPD/4MMDx4yPEiEoYdAEZD4A0ZkBFQMAEN3FicKuK0LAAAAAElFTkSuQmCC',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'searchUrl': 'https://pre.corrupt-net.org/search.php?search=%search_string%+%year%+type:X264|DVDR|BLURAY|UNKNOWN|XVID|SVCD|PRE',
      'matchRegex': /Nothing found/,
      'inSecondSearchBar': true},
  {   'name': 'CorruptNet-Pre',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUPrXP///+lsnldAAAAJElEQVQI12P4/5/hfyPD/4MMDx4yPEiEoYdAEZD4A0ZkBFQMAEN3FicKuK0LAAAAAElFTkSuQmCC',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'searchUrl': 'https://pre.corrupt-net.org/search.php?search=%search_string%+type:TV-X264|TV-XVID|TV-DVDRIP|X264|DVDR|BLURAY|UNKNOWN|XVID|PRE',
      'matchRegex': /Nothing found/,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'preDataBa.se',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAD1BMVEUAAAC63PSImaZndoCft8hCQvrIAAAAAXRSTlMAQObYZgAAAM9JREFUOMu1kt0NwyAQg1EyQSoGCJQBEEwQxP4z9fipDFwRbaX4Bclf7IPoxFdymnRyXxc9Jz4jW3FZ256tGPMxBsxBCkMkfU52JV3AHFUEbPuE6w0ebVcJINLcSQEEgK00ocsCHJDEEJdGQAB6DlQLwj3AdGB9Xf5AgKsDdvUTMZ0DdMm8QRiimsAJgIgcl6ES2a+P0ZVE3S6J94aK+fLu3rsIHxM8SWOrTwRIls7iWwQKIDn0pwBAL88AAqS/A4vRAGIC7AyIT0KAR8QvegHFvkYLmHvzwwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://predataba.se/api/search.php?query=%search_string%+%year%&page=0',
      'goToUrl': 'https://predataba.se/?tags=["%search_string%+%year%"]&pagination=0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /found":0/,
      'inSecondSearchBar': true},
  {   'name': 'preDataBa.se',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAD1BMVEUAAAC63PSImaZndoCft8hCQvrIAAAAAXRSTlMAQObYZgAAAM9JREFUOMu1kt0NwyAQg1EyQSoGCJQBEEwQxP4z9fipDFwRbaX4Bclf7IPoxFdymnRyXxc9Jz4jW3FZ256tGPMxBsxBCkMkfU52JV3AHFUEbPuE6w0ebVcJINLcSQEEgK00ocsCHJDEEJdGQAB6DlQLwj3AdGB9Xf5AgKsDdvUTMZ0DdMm8QRiimsAJgIgcl6ES2a+P0ZVE3S6J94aK+fLu3rsIHxM8SWOrTwRIls7iWwQKIDn0pwBAL88AAqS/A4vRAGIC7AyIT0KAR8QvegHFvkYLmHvzwwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://predataba.se/api/search.php?query=%search_string%&page=0',
      'goToUrl': 'https://predataba.se/?tags=["%search_string%"]&pagination=0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /found":0/,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'PreDB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAAAGDC6urrej6pEAAAAAXRSTlMAQObYZgAAACBJREFUCNdjQAOhQMCQtTRrKUMmEMAIKBdBgJVAFKMCAKceEPrGnb57AAAAAElFTkSuQmCC',
      'loggedOutRegex': /Ray ID|security check to access|seconds to search again/,
      'searchUrl': 'https://predb.me/?search=%search_string%+%year%&cats=movies',
      'matchRegex': /Nothing found.../,
      'inSecondSearchBar': true},
  {   'name': 'PreDB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAAAGDC6urrej6pEAAAAAXRSTlMAQObYZgAAACBJREFUCNdjQAOhQMCQtTRrKUMmEMAIKBdBgJVAFKMCAKceEPrGnb57AAAAAElFTkSuQmCC',
      'loggedOutRegex': /Ray ID|security check to access|seconds to search again/,
      'searchUrl': 'https://predb.me/?search=%search_string%&cats=tv',
      'matchRegex': /Nothing found.../,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'PreDB-Orig',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAAAGDC6urrej6pEAAAAAXRSTlMAQObYZgAAACBJREFUCNdjQAOhQMCQtTRrKUMmEMAIKBdBgJVAFKMCAKceEPrGnb57AAAAAElFTkSuQmCC',
      'loggedOutRegex': /Ray ID|security check to access|seconds to search again/,
      'searchUrl': 'https://predb.me/?search=%search_string_orig%+%year%&cats=movies',
      'matchRegex': /Nothing found.../,
      'inSecondSearchBar': true},
  {   'name': 'PreDB-Orig',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAAAGDC6urrej6pEAAAAAXRSTlMAQObYZgAAACBJREFUCNdjQAOhQMCQtTRrKUMmEMAIKBdBgJVAFKMCAKceEPrGnb57AAAAAElFTkSuQmCC',
      'loggedOutRegex': /Ray ID|security check to access|seconds to search again/,
      'searchUrl': 'https://predb.me/?search=%search_string_orig%&cats=tv',
      'matchRegex': /Nothing found.../,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'PreDB.club',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUAAADmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQCFDl5aAAAAD3RSTlMAnu3OvE8vGBH0851ZWJ/vQJUxAAAAMUlEQVQI12NAAFZh/U+GAUCG/38g+AJk/AcDZJFSkJpwIGPisQaO3F2US7E+BlsKBwASDDQfgbbhXwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://predb.club/api/v1/?q=%search_string%+%year%',
      'goToUrl': 'https://predb.club/?q=%search_string%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /total": 0/,
      'inSecondSearchBar': true},
  {   'name': 'PreDB.club',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUAAADmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQDmUQCFDl5aAAAAD3RSTlMAnu3OvE8vGBH0851ZWJ/vQJUxAAAAMUlEQVQI12NAAFZh/U+GAUCG/38g+AJk/AcDZJFSkJpwIGPisQaO3F2US7E+BlsKBwASDDQfgbbhXwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://predb.club/api/v1/?q=%search_string%',
      'goToUrl': 'https://predb.club/?q=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /total": 0/,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'PreDB.net',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAB/lBMVEUAAABT8vIv4eE36upM9PMu4uIb2NhH8vFO9/c26uoi3d1c/v0Bycpf//1W+/kv5OQg29sKzs9f//8Hy8sW09M47e0S09MIzs8e2dlc//5B7e0u4+NT+fgJzc4IzMwLzc446Ogh29sGy8s45+c/7u4Ezc094+NS/PwY19gEzM0Ey8xP+voj3NwByMhL9vU76upa/fxb/v5D8PBM9vU/6+sBx8g06elU+fgCycou4+MDysoU0tMt4eFc/f0DzMwc19cw4+Mm398AyMhg//1G7+9P9fM+7e1Y/Pth//8AyMpH8vI55+cKy8sAyck65uZa//8n3NxJ8fET09Mp4eEo4eEw5+cS1NQz5OQMzc8c19dD7u5D7u0v4uIV09NZ+/sV0tI76ek76ekz5uZP9vUz5eVV+vks4eEg2to/6+sg2tpS9/cOzc9W+voPz89G8PA56OhH8PA46ekw4+MCysow4+MX1tZQ9vZS9vYJy8sFyclX+Pgo3t4k29sg2dkc19cY1dVZ/PsV09NW+vkS0dEt6ekt6Ohg//9b/v1U+PdR9/ZM9PQOz9AJ0NBF8fEX2ttc//8t5uYKzs5Z//9J+flK8vIz8fAi4eECyso88fFV//9V/fxQ/fw+9vZB9PRD7u4/7e0l5uYp5eUd4OAd29sP19cP1NQL1NQS09MH0NAu6ur6PYxoAAAAe3RSTlMAAqIFs5A3LBEO/vaGhIN3TiopIgz+8eXgz56QiIeDZV5eXVo7FxL++/v49fX18/Py7Orp6enj2da4sq+mnZuain1vbW1nZl1PT0E2MCcjIh0aFPv6+ff23drY2MO+uLaxsK6spaKioJuZlpSPioaGhX9vaWVXVlRUNCNdm1MpAAACAklEQVQ4y5XOZXfaUADG8YeFUZzhULyFuru7ezt3d3f3jm0s+JC6y77lkuwm0J6+2e/NPfmfm+TB/6DGh3uUyp7hcQoH0SqbUqny+vryVKpJqcV++o7ikpanr30Gg2/M1VJS3KHHHnnmXUdW0jt3zXnIEDlpms4OeBWlaacIPMd2NEqbfRDMnKKj0W0HCNfWL8bmXQjub7Jly0Xmm3a+sk5IQIyZuLBj0nIDWkOfOaHzFJl0kS+t7AxJ0Uci5AHneYgvRexHO9c/EBuWGTBkpzf4st4JGCzy97zkzSOM20khyC0GSOTvMpKrZWWryawgl8Cz9jbjWPfUVPfRrLDmgebPN14k0gbGjUhklojMatB1vO0QcS7xBIxniebDLJvN1pzoguakDERBwxX2uNZQAMKb0MBtzAEv3/hwYuKxMR+8kbQbo+nMs+jyYmXl4iUReO70KGR1uRAMLK2sLA1AcKtOBuTWSEFIzwaXl4NnhAmyGvZlb7wPxKN4kBF/AKIv7mV/LK6dBienIvCbEaggs6drxSKul14Vgbu5EOAs/OuUuJTc7J+zs8fLwp9E4Qv2/p25fhD22D0K0sb5H8R8oxTS6zE7BOrwhTfq2BdBTD1iDauRZbC6qupTtnD1IPaYbFf4w9+JsF/RPon9dCqrws9RWFU6HITSDfWqVL1DOgoZfwGRBc1hlSSjOgAAAABJRU5ErkJggg==',
      'goToUrl': 'https://predb.net/search/%search_string_orig%+%year%',
      'searchUrl': 'https://api.predb.net/?page=1&q=%search_string_orig%+%year%&type=search',
      'loggedOutRegex': /Cloudflare|Ray ID|experiencing some problems/,
      'matchRegex': /results":0/,
      'inSecondSearchBar': true},
  {   'name': 'PreDB.net',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAB/lBMVEUAAABT8vIv4eE36upM9PMu4uIb2NhH8vFO9/c26uoi3d1c/v0Bycpf//1W+/kv5OQg29sKzs9f//8Hy8sW09M47e0S09MIzs8e2dlc//5B7e0u4+NT+fgJzc4IzMwLzc446Ogh29sGy8s45+c/7u4Ezc094+NS/PwY19gEzM0Ey8xP+voj3NwByMhL9vU76upa/fxb/v5D8PBM9vU/6+sBx8g06elU+fgCycou4+MDysoU0tMt4eFc/f0DzMwc19cw4+Mm398AyMhg//1G7+9P9fM+7e1Y/Pth//8AyMpH8vI55+cKy8sAyck65uZa//8n3NxJ8fET09Mp4eEo4eEw5+cS1NQz5OQMzc8c19dD7u5D7u0v4uIV09NZ+/sV0tI76ek76ekz5uZP9vUz5eVV+vks4eEg2to/6+sg2tpS9/cOzc9W+voPz89G8PA56OhH8PA46ekw4+MCysow4+MX1tZQ9vZS9vYJy8sFyclX+Pgo3t4k29sg2dkc19cY1dVZ/PsV09NW+vkS0dEt6ekt6Ohg//9b/v1U+PdR9/ZM9PQOz9AJ0NBF8fEX2ttc//8t5uYKzs5Z//9J+flK8vIz8fAi4eECyso88fFV//9V/fxQ/fw+9vZB9PRD7u4/7e0l5uYp5eUd4OAd29sP19cP1NQL1NQS09MH0NAu6ur6PYxoAAAAe3RSTlMAAqIFs5A3LBEO/vaGhIN3TiopIgz+8eXgz56QiIeDZV5eXVo7FxL++/v49fX18/Py7Orp6enj2da4sq+mnZuain1vbW1nZl1PT0E2MCcjIh0aFPv6+ff23drY2MO+uLaxsK6spaKioJuZlpSPioaGhX9vaWVXVlRUNCNdm1MpAAACAklEQVQ4y5XOZXfaUADG8YeFUZzhULyFuru7ezt3d3f3jm0s+JC6y77lkuwm0J6+2e/NPfmfm+TB/6DGh3uUyp7hcQoH0SqbUqny+vryVKpJqcV++o7ikpanr30Gg2/M1VJS3KHHHnnmXUdW0jt3zXnIEDlpms4OeBWlaacIPMd2NEqbfRDMnKKj0W0HCNfWL8bmXQjub7Jly0Xmm3a+sk5IQIyZuLBj0nIDWkOfOaHzFJl0kS+t7AxJ0Uci5AHneYgvRexHO9c/EBuWGTBkpzf4st4JGCzy97zkzSOM20khyC0GSOTvMpKrZWWryawgl8Cz9jbjWPfUVPfRrLDmgebPN14k0gbGjUhklojMatB1vO0QcS7xBIxniebDLJvN1pzoguakDERBwxX2uNZQAMKb0MBtzAEv3/hwYuKxMR+8kbQbo+nMs+jyYmXl4iUReO70KGR1uRAMLK2sLA1AcKtOBuTWSEFIzwaXl4NnhAmyGvZlb7wPxKN4kBF/AKIv7mV/LK6dBienIvCbEaggs6drxSKul14Vgbu5EOAs/OuUuJTc7J+zs8fLwp9E4Qv2/p25fhD22D0K0sb5H8R8oxTS6zE7BOrwhTfq2BdBTD1iDauRZbC6qupTtnD1IPaYbFf4w9+JsF/RPon9dCqrws9RWFU6HITSDfWqVL1DOgoZfwGRBc1hlSSjOgAAAABJRU5ErkJggg==',
      'goToUrl': 'https://predb.net/search/%search_string_orig%',
      'searchUrl': 'https://api.predb.net/?page=1&q=%search_string_orig%&type=search',
      'loggedOutRegex': /Cloudflare|Ray ID|experiencing some problems/,
      'matchRegex': /results":0/,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'PreDB.org',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAnFBMVEX/iAD/iAD/gAD+iAD/iAD/////uWj/58v/5MX/8+X/0p7/vXH/r1P/pDz/iQL//fv/+vT/+O//69T/3rf/16n/0Zv/oDT/mib/9en/7tr/6tH/3LP/1aX/wXr/sVj/rE3/nS3/lyD/khb/jw//8N7+4L7/yYv/x4f/rU//qkj+2a7/2K3/0qD+zpX/y5H/yYz/xoX/s13/lRz/jgzyD/i6AAAABHRSTlPmfAJ8dum23wAAANtJREFUOMvUjTeywkAQRBfoWa2T995hv8Xc/24gUUWGcl4wwfSrbrZeMbyFbdZsg0VWjGGRKV/mQwQ7FMLfXV+fsRKROOI3tGRg5gZfQ9MBL2qBik7cc2xynUnYGuxJR31co1FnjVqhpci46KicG4pMSO54+9g/UpMUzeEHhsqWvqRvz4J1GgDkKY/1lnOeqAh/9N9m6N38KVyAx02A0VJxdSuDzvNSk42dG0zCINUkBByAk/YYcll8J+BWuAvnifv4IG7nFR/McTGqAAQIZz1GQpmXiRlf9mdkAgCu2xnljMbIfgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://predb.org/search/%search_string_orig%/all',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'PreDB.pw',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAFklEQVQI12NQUmfo6MdHdq1nUP8PJwENVw0h7PKMxQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://predb.pw/search.php?search=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /<tbody><\/tbody>/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'srrDB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAUVBMVEUAAAAAAAAAAAAAAAAAAAC7u7v///+ZzP/Mmf+Z/5n/mZn//2b/mWaMjIxymL6Ycr5yvnK+cnK+vky+ckxUcY1xVI1nZ2dUjVSNVFSNjTiNVDi2juC+AAAABHRSTlN9PL4AffGBGQAAAMlJREFUWMPtlzcOwzAQBElLVKZy/v9DjXVBLK5Q4StkyJxygJ3uCNAk1qRfY2xi7CtV8LLGpCqw1/EJ7ENFDDvcOTXEdMIdY02MRwhgzwU47LkAhz0XQqASwDUCuFoQAzHwtIDqmPTnrOBJga0viX6Dm9ucaGe4pSuIbgkB7LkAhz0X4LDnQgiUArhcAFcIYiAGnhZQHJPunH/oRbo/sHpH+BXOu4xw/jKAPRfgsOfCZcAJ4DJBDMTAPwR0x6Q/53u/rkb9+VZ//9+xTWbto7vDzQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.srrdb.com/browse/imdb:%nott%/order:date-desc/1',
      'matchRegex': />0 results</,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'xREL',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAV1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/vgD/uwD/mgD/sAD/owD/twD/jAA3cDarAAAAFXRSTlMAFgdFUjEbD9U+TS4OwsC+639yYihON4QCAAAAgElEQVQY04WOSQ7DMAwDLctrk3Snt/b/76ycGr4FGeggigJIdYD25Bx5PTVZNoYt6S5WIhc3CFfru7lENk/knBKYlPL2hhBwB5BgnFLEyH1PKef/4YIPZIQ6DgG1Aq2VAqb9owEFM4W4qy8er9FjpGz83puOHhwXMQfSVFinPuUHh/cIEFGhr1oAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.xrel.to/search.html?xrel_search_query=%tt%&lang=en_US',
      'matchRegex': /not return any results/,
      'inSecondSearchBar': true,
      'both': true}
];

var other_sites = [
  {   'name': 'Ancensored',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABUFBMVEX///9PDwsXBAMSAwMQAwJdEQ1CDAkAAAAAAAB2FRBvFA9tFA9sFA8eBgUAAAAAAAAAAAAAAACGGBOHGRN8FhF/FxFeEg5EDQooCAYiBgUiBgUcBQQLAgIKAgIAAADtIx7lGh72/xfo8BbqHh68IRnv9xfs8xbf8hSDQA/1JiDwIh/QJBvHIhr0/xe1ExfR5xOJJRGRnA2AgQz3Kh/vJR/dJR3iIB3dGR3TJBzQHRuyHxi3ERjl9hWnExWjERXU6RTH3BKxxhB9FhCCLw+AJg93HQ+Zqw5+TA6Gig1tIA1POgjyJR/kIx3ZJRzVHBvRFRvBGhm/Fhm4GBj6/xfy+xesEhfs/Rbp+xbh/BXa7RTW8RPJ3ROQFhPC1RKNEhLB1xGHKhGAHhGisg+CLQ93KQ92KQ+BTQ5/Sw6LlA1tNg18eQxwXQxoLwxoQQtcOgpdWQlJqLHAAAAAH3RSTlMBzo+FgOG9JAXz7ufmkzIsCgP7+fn148GtoZ+Ud3c3N6M00gAAAPJJREFUGNMtjcVuA0EUBN+i2Y7DvLPMaGbGMDMz//8tHsl16i6p1YAJ0SzDsFQKpmxETU4UuWKETuOaTpR1x9M0z9Gl1fBErJeNdtBU1athd1uiJvuo3u7zsqAcuePDzHwKaNMJeEE4Vt9fSrulIgks5zVlxW791MWT326WAEbUVP4i6BX2esPLVxSHRVE7f/yooNuvG/tsgGKwlL3/u0aV7/6prDQ6HAGUaR0UHj5dWxB4v55bg1Aksz++w798a2TMJgFoKf/su9Vqwx/lLRIAwivSVu3pbdCpGdbyDGBDLexwCHG5ORJ3TJIk4jEisYnzP7H/J8p3VrQ0AAAAAElFTkSuQmCC',
      'searchUrl': 'http://ancensored.com/advanced-search/media?AdvancedSearchForm[mediaText]=%search_string%&AdvancedSearchForm[mediaYearFrom]=%year%&AdvancedSearchForm[mediaYearTo]=%year%',
      'matchRegex': /No results found/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Blu-ray',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADeUExURVO29Vq59Vu59Vy59V269WC79W6/9W+/9XDA9XDB9nDC93HC93PC9nXE93bG9njF93vF9n3I94DH9oHG9oLH9oTI9oXJ9orK9orN+IvK94zM94zO+I3L943O+JDN95HP+JHQ+JPP95XQ+JbQ95jU+ZnR+JzR+JzS95zT+J3S+J3T+J3U+J7S+J/T+J/U+KDT+KPV+KTX+anX+K7Z+q/a+bHc+bbf+rrf+cTk+sXk+8jk+svl+svm+8zn+9vt/Nvu/Nzu/Nzv/N3v/ODv/OHw/Ojz/Onz/er0/er1/f///532i+4AAAC+SURBVDjLtdNFDsNADEDRFFxmZmZmZs79L9TUo1ZZOGOpamdlK0/K6EdRgDnK74CqO9cRA7RT54DapMFpf3wLEvTsNkdmKkCBAi5chzhXKODH0ceBEs55CrhfU/yBc4gCk1qnvxB3LJulHbYRMElBCsAqL3lgU58DFPACWJJzIZYGHbRXd/UfgwKw5sAYl7RhatjgkjVKDQ1xhwQBquForD0Tzy8eqsPt/glRZEIN5CV3OVnqVSvo/Mev9zV4Aq22bvwYC8iHAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.blu-ray.com/search/?quicksearch=1&quicksearch_country=all&quicksearch_keyword=%tt%&section=theatrical',
      'matchRegex': /return any results/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Bluray-Disc (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMVEUAAAC/2e1Slc9fnNJro9V3q9j+//+x0OqlyeaMueCZweN/sdw5hcgkeMOYr8GovtAruWWKAAAAAXRSTlMAQObYZgAAAm1JREFUOMuV0r+LE0EUB/DReJx6IEYQQeQM2UqIIJmgxVmImRTXCe4UulVA4q8qjdHWwgtX2emuzTVC3FYiLIuFQbSyiqDFCf4J9yf4fW92nptbt/BLUn34vpm8ifqfrFkb1qK1NrJza2/VNOcRHAPCfyt/BuHAmKpG1EbVQk3/EKMHQ4BI78qq0lw+NiTVWpd1w/pLcVX3V73omoFTStASXXM6YO33qdvttoUZrQkZtcN2u+XLkajpseqgzMCQlJG7lE7BpKVjA1Qpi5Yry5W5HBRdfB3LlXmwaLfLbI2g6KLdDrS+QWwGMphR1BAfkyvjUoE/VuseJhJz12nn26/9QrUxA8ssx15fjofP93lw3xhrI7CfjLnLEXJmGehejzXH4X3Z1OUXI8pHHkyavQTLpn6OOI8/GxOSvonB8ms7V0cuAXVzaLxH3NVAzB4VuWChWRYnyZ5qyC6+e76HwXkcx2n6VjVoF5TFD88PtjCYdHeqjsoTfPI83IK+S9PZFCzP90V4m3QGnThe0B7/8p2Yqzs7YHmgr3J2lqbpFN3JGOyf4JLnhwl3oZtKeTU3PZ/12jytFA+mJ7j9oeAECG02ib3a6JrT+69xLCkz1LDm758wP3ODCxbN4m3SR69YOQdKNYx7oAy7uNscnk9ocBH6M0HneQZN0jROZqiOy0yDc2BCu3gqXeSiQkRnrFKlmyFR7gbv8i7OFSS84TQtNlWKopyIY4dQEXc0h1U2VZ7NOSlPsBrlchw6qeqmKsI/qCwym7MumypHSUirZcmRCnJZUtXfqs5ldO14Xli9q0rWVxdSzbjQA1WTU4ebfwAtkoSNyOWIUAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://bluray-disc.de/suche',
      'mPOST': 'SearchString=%tt%&section_movie=on&section_imports=on&section_erotic=on&imports_all=on',
      'matchRegex': />Treffer einblenden</,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'DVDs ReleaseDates',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5BAMAAAB+Np62AAAAElBMVEX7+/r7+HHRHRnYtoETT22IkZNdXaL4AAABxUlEQVQ4y8WSwU7sMAxFiwp78qL3AZOo+0nyukequ+dN6v//Fe6NZwgFFRYIYU3TWx87TuwZftZU9TwMs+Kp1B8oiD36Hj9sIrIOm0CtQr2jQnsWgTJ7ekNHWWeRZbvSsiF5fO65Kx+jTcugS89FIWYxhnoTFem59ICeH2S56dJzm+efPM1Sb7Tfyjyt9DVy68eGhzcdeSTq0YL6fVURvAkWkaqyQL+hrdA9WjJYZ3Rbd3Rpb97Mutrvq6qVgqtN4R6p37Y7d2CPpO471JdS+OXznvpG/4QQTs7hnQ5oOKB39Ibgc8I7R9ZJPjiPUKaS5pADfgUlIExFhxEn0AiPYs1Tk1OYcrigmO0cQoWbfkrGcLN0pRfQgJWGMhNZAD2jLqtEhNNTKsTkGV8daAJN3BIecBZgVLuk5fYzsyJPBedk1BX+SsHiKX3yCSrZzkf2NbXho33HuT6wc00dUJtQOO2oMxov5s/R7rCnJwRYMzCliO++M6kjocU2wv/7XNemeGtoaN49TZnTaBHJ/jrFaCydqjKaGw+jUZtLHxHpAOvd4IID33b2pIl41oq56Fy9Jq/1b3Wv9MA+p4+f0jPpWA4M9LfsBSvLpgff2Gs6AAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.dvdsreleasedates.com/search/?searchStr=%search_string_orig%',
      'matchRegex': /no results found/,
      'inSecondSearchBar': true},
  {   'name': 'Fist of B-List',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACRElEQVQoz42SvU/bUBTFz/uIyWCRxGkSjJWSFqkMURgqUCu1U4qExEC7MLLyDzBUdOvHWjpkQYgl3VgZWok5U4UEEkNKqQIqcqDEFeHFke1n49chDBSWXt3hDudcnZ/uBQAAUQSl8D/F36wgkPz8HJp27b0rWl5eppT2+/39/X0yWEyIBsi70vn5+ZmZGSGEUsp1Xdu26e8zXFzwdx/weoUD/KZ6dHR0enp6c3MzCIJsNut5npSSDIIpFQEghN+MtLi4uLe3NzU1Va1WLy8vGWOO4/ClJfgBDn9yjUe3AAzDmJubW1hY2Nracl23UqmYpnnN8PARjg55oTDieUIIMTDU6/WJiYnj42Pf923bzmQytm3zk19wvbExs/igmNQ0zjnvdDqWZZVKpXK53Gg0hBC6rhuGEYZhr9fj98cAaLr+I5/XU6lUEASe53W73Z2dHSFEqVRqNpuWZRFCcrmcUorVarXh4XB391sikej1emEY+r4vpZRShmGYz+cBtNttSqnjOGtra9QwjNnZWQBSSs55EARKKUopY6zVajHGdF0fHx8HsLGxAYBKKRuNxoDS9wNKKSEkjhHHJI7jg4ODoaHk6enZ+vr6PxdNI43rzgH5VMoERoDi5OTj278EJD+tDlVfyNYRvZfF9jZ9/ix0/iSePvHfvs98rjvN72jbaaX8L1/V6seAAsl+X0VXMEcolLKKKpslnQ5jPCoUrl6+wlU8nEgq01SUKgAknU53uwRgQARQgAAU4IMhqRFfEkABJwAHor/pPAicVESz8wAAAABJRU5ErkJggg==',
      'searchUrl': 'http://www.fistofblist.com/search?q=%search_string%+%year%',
      'matchRegex': /No posts matching/,
      'inSecondSearchBar': true},
  {   'name': 'MrSkin',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5BAMAAAB+Np62AAAAGFBMVEVMddPs0JcLDA/88LhAQ0e1pn+Bd1pcjv7w2cwrAAACH0lEQVQ4y82UMZObMBCFGc9lrl4vcp2TZVLrVlAbWXBthIA6BkTtIv9/Is5pEPaVmbz2m/eedkFK/gdpzsUz9sIXCfHMyCvbcv39AdzxhZLio/7Y0gXWMxbi0oqH1qn2lHOreZz9qherIxp4pTiP6G0pRSI2CNFy/rEJrlg/2ylkZGkcrXmw3FWGeBGf2BldQjdrjoCKR2uq1DEPvSS9BCoiKtwwIgQhATHGo0MdGwd/1YouppcGZdfZAPMamY56s72bA72Hb+hR+SsFLWYtTDSRLzzmtbEScNj8A5obxGXXIxTCoo7WLE4yz/pueAOGYVkrWutshL377EWSET29i5J6KSFQOOhLs6LGci8RJjMusKradfKs6zBK5o3EZsr6nyv6bWiEhMMslMOpqF0aeYdMAhazteBZ55o1VTo0AoIFnPMOo1Mp6yCoA8CWENR59Y3sCB7u2juA4rwe2MvrJ2O2eMOIvgrKFyp7FxbayTS6f9CFQFS9uLyf1BjRRB9Z8NbSTxlgGdPdsZeQjkCpk2jbJFLVAXpCAqID/oppHWZlJZv9NJ3y84ZahFz72Xjt1Ob6v9hQrE5I+YmajXfnUwdMc8M9TslGGVyBHcIFZdJs6e4SosuUjz4/b+ktU4ito2I8PKCvOzZCLjpD++SBfl8qicqMONySB2YRipEkhGkfaFcjBOU/nryxZXCuatfX6Yp0+OIRFoYnX+ic/BP9ARIAg0GUZcJgAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.mrskin.com/search/titles?from_year=%year%&term=%search_string%&title_type=movie&to_year=%year%',
      'matchRegex': /thumbnail-image/,
      'positiveMatch': true,
      'inSecondSearchBar': true},
  {   'name': 'MrSkin',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5BAMAAAB+Np62AAAAGFBMVEVMddPs0JcLDA/88LhAQ0e1pn+Bd1pcjv7w2cwrAAACH0lEQVQ4y82UMZObMBCFGc9lrl4vcp2TZVLrVlAbWXBthIA6BkTtIv9/Is5pEPaVmbz2m/eedkFK/gdpzsUz9sIXCfHMyCvbcv39AdzxhZLio/7Y0gXWMxbi0oqH1qn2lHOreZz9qherIxp4pTiP6G0pRSI2CNFy/rEJrlg/2ylkZGkcrXmw3FWGeBGf2BldQjdrjoCKR2uq1DEPvSS9BCoiKtwwIgQhATHGo0MdGwd/1YouppcGZdfZAPMamY56s72bA72Hb+hR+SsFLWYtTDSRLzzmtbEScNj8A5obxGXXIxTCoo7WLE4yz/pueAOGYVkrWutshL377EWSET29i5J6KSFQOOhLs6LGci8RJjMusKradfKs6zBK5o3EZsr6nyv6bWiEhMMslMOpqF0aeYdMAhazteBZ55o1VTo0AoIFnPMOo1Mp6yCoA8CWENR59Y3sCB7u2juA4rwe2MvrJ2O2eMOIvgrKFyp7FxbayTS6f9CFQFS9uLyf1BjRRB9Z8NbSTxlgGdPdsZeQjkCpk2jbJFLVAXpCAqID/oppHWZlJZv9NJ3y84ZahFz72Xjt1Ob6v9hQrE5I+YmajXfnUwdMc8M9TslGGVyBHcIFZdJs6e4SosuUjz4/b+ktU4ito2I8PKCvOzZCLjpD++SBfl8qicqMONySB2YRipEkhGkfaFcjBOU/nryxZXCuatfX6Yp0+OIRFoYnX+ic/BP9ARIAg0GUZcJgAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.mrskin.com/search/titles?from_year=%year%&term=%search_string%&title_type=tvshow&to_year=%year%',
      'matchRegex': /thumbnail-image/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'Scripts On Screen',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEX///9gJQ7m4+NzUkWak5CQeG/Qx8S5qKKROEIlAAADcklEQVRIx61VO3vaMBRVRWzWHoTqVSgBVmTjZE3ACSuGGlZjHlkNFPr3K9kIJ9Tt0K9nwDL36NyXdE3+F3qvCmyY/slMxyiR19tdBQ0GgNcTYiA8C+3npV6iAXa4LNW0VoDZ4GgtgcK3yz1EDaFZ/bsd1Xm4A6mHuCrkt07nzyZ5Zt8VS2/T+uaajfa9C/bZ9xe04pyqqmxrYCgu6qkRTwRSOmZnYvEAsEWx6jAiDQ/xN8cI/CQG/dyNLyIqThmhjIJDE3pjpAVdB70F2locnRGbuDhipo5tCjCzy2kZGS3ikzvWmTLmYoyFOnoUniiCfi7je0HaaK/OHndYH0NNaIZliRoD26pWw3tvJDxm90jV2mtMV15RSpuvwxseWXXbL4ghce+txhOU/fZtX502DY9eDIVAk+fxFKLYiVnJgIs4VMwDh/Id5sU+bCmfhPHFyJ5nR/jrN0Z1yoMVPFLiCITfE7RIcynlSZSd/ElodD0qfYWiKttgmYlCi2by5uq864Ottwd54YyOs03N6Xva7XbFoi1D+Vpz+oJhZpo76vr9JxnUHPBtKMi7HGfr0b3/EIrfCZnI+kMZFJSerIlBrmfdR60eyp2UUtQQxof17N7vv8ndj0MNge4COc/WB22OolENgWyGvVAas8abFJ/rtNPv68de1tPmWwI9KWgsybs1a0ykvMamUOKRSmPXLszjSmgCppmvmpbJjY6u18x6UfRqCVSBLUR5f3xDeI6y3eg1SWw7G+A2mr0vH6Iojw7nqSYcpJ1A1u6qmSE8/9iNFkkSjEoCxZRYASZkP4qW9OF7EoSTS5puNYHclMh+kiSRMWdSViOqguxpQhAsrblw8fiRIJN58L0yF56x+EiYV+ZqUldjnkoNOtGe84rRNJW6kJfmmDg6sZjffA14IbJCutW/vOUiFkcrsvXJRouYV7WfKl26pefwfY7ppVIsLUT0g6IzUAHByfvixTlOnFQTiGzB9YX6MghBgVYHkNi33cGHAdPF1OGds8eaWOoY8zsozzFtuCsVdGxth1NnyRvQvr6SDrjXEUUp00uOZjSuNrwD4mjCC554eNlpp3qfUd7kLyCr+Kvbxgj+pZRtURKEwsDFN3VmDW81QHoS9pPC3vSyy0h3qWn5Hn4TTPQ+FRtMwbfd0b3YXHtRXYwh+TsE+Tf8Aql1sv1WZ9Q7AAAAAElFTkSuQmCC',
      'searchUrl': 'https://scripts-onscreen.com/?s=%tt%',
      'matchRegex': /nothing matched/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Simply Scripts',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAgID////AwMCAgIDggVMXAAAATUlEQVQI12MIBQKGsKlhUxkSOBN4GRwYHRgZmg41NTE0r2xexeBg6sAJFCtgZAhgimFiWMmUeZiB0anJmaHhUMMhhgagYpA2TrABYKMAV6wVZQFe2cAAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.simplyscripts.com/cgi-bin/search.pl?search=%search_string_orig%&method=exact',
      'matchRegex': /There are 0 results/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Voidtools-ID',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAclBMVEUAAACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOAD/gAD7fQDZZgDXZACnQwDrcgD0eADvdQClQgCkQQD3ewC2TQD3egDcaADVYwCwSgA9Lo9lAAAAFnRSTlMA/j7oBfCzq6FQ+Ujt25Z8XjYz39db4uTxuwAAAJlJREFUGNNNj9kWgjAMREkpFGUT1Okitqz//4ualgfmJblz5mTJkoTKKVciOyU7v0+YrK9kMrpFg6WXKuX9jM2RM9C+ZkPt2J5CitbAlmzkExzPGwLWgg0CSMZGg66JMWCOCWVh2iEbX/8aZ/QHYAIFC+14y+3+iUekOxJ/D7tiNq6SJ1NfFlSUdVzB/OCHmKLBfNGtad5X/gFwbwt+xeZTxgAAAABJRU5ErkJggg==',
      'searchUrl': 'http://voidtools.replacement/?search=%tt%',
      'loggedOutRegex': /invalid request/,
      'matchRegex': />0 results</,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Voidtools-Title',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAclBMVEUAAACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOAD/gAD7fQDZZgDXZACnQwDrcgD0eADvdQClQgCkQQD3ewC2TQD3egDcaADVYwCwSgA9Lo9lAAAAFnRSTlMA/j7oBfCzq6FQ+Ujt25Z8XjYz39db4uTxuwAAAJlJREFUGNNNj9kWgjAMREkpFGUT1Okitqz//4ualgfmJblz5mTJkoTKKVciOyU7v0+YrK9kMrpFg6WXKuX9jM2RM9C+ZkPt2J5CitbAlmzkExzPGwLWgg0CSMZGg66JMWCOCWVh2iEbX/8aZ/QHYAIFC+14y+3+iUekOxJ/D7tiNq6SJ1NfFlSUdVzB/OCHmKLBfNGtad5X/gFwbwt+xeZTxgAAAABJRU5ErkJggg==',
      'searchUrl': 'http://voidtools.replacement/?search=%search_string_orig%+%year%',
      'loggedOutRegex': /invalid request/,
      'matchRegex': />0 results</,
      'inSecondSearchBar': true},
  {   'name': 'Voidtools-Title',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAclBMVEUAAACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOAD/gAD7fQDZZgDXZACnQwDrcgD0eADvdQClQgCkQQD3ewC2TQD3egDcaADVYwCwSgA9Lo9lAAAAFnRSTlMA/j7oBfCzq6FQ+Ujt25Z8XjYz39db4uTxuwAAAJlJREFUGNNNj9kWgjAMREkpFGUT1Okitqz//4ualgfmJblz5mTJkoTKKVciOyU7v0+YrK9kMrpFg6WXKuX9jM2RM9C+ZkPt2J5CitbAlmzkExzPGwLWgg0CSMZGg66JMWCOCWVh2iEbX/8aZ/QHYAIFC+14y+3+iUekOxJ/D7tiNq6SJ1NfFlSUdVzB/OCHmKLBfNGtad5X/gFwbwt+xeZTxgAAAABJRU5ErkJggg==',
      'searchUrl': 'http://voidtools.replacement/?search=%search_string_orig%',
      'loggedOutRegex': /invalid request/,
      'matchRegex': />0 results</,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'Voidtools-ID-ES',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAclBMVEUAAACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOAD/gAD7fQDZZgDXZACnQwDrcgD0eADvdQClQgCkQQD3ewC2TQD3egDcaADVYwCwSgA9Lo9lAAAAFnRSTlMA/j7oBfCzq6FQ+Ujt25Z8XjYz39db4uTxuwAAAJlJREFUGNNNj9kWgjAMREkpFGUT1Okitqz//4ualgfmJblz5mTJkoTKKVciOyU7v0+YrK9kMrpFg6WXKuX9jM2RM9C+ZkPt2J5CitbAlmzkExzPGwLWgg0CSMZGg66JMWCOCWVh2iEbX/8aZ/QHYAIFC+14y+3+iUekOxJ/D7tiNq6SJ1NfFlSUdVzB/OCHmKLBfNGtad5X/gFwbwt+xeZTxgAAAABJRU5ErkJggg==',
      'searchUrl': 'http://voidtools.replacement/?search=%tt%',
      'goToUrl': 'es:%tt%',
      'loggedOutRegex': /invalid request/,
      'matchRegex': />0 results</,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Voidtools-Title-ES',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAclBMVEUAAACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOAD/gAD7fQDZZgDXZACnQwDrcgD0eADvdQClQgCkQQD3ewC2TQD3egDcaADVYwCwSgA9Lo9lAAAAFnRSTlMA/j7oBfCzq6FQ+Ujt25Z8XjYz39db4uTxuwAAAJlJREFUGNNNj9kWgjAMREkpFGUT1Okitqz//4ualgfmJblz5mTJkoTKKVciOyU7v0+YrK9kMrpFg6WXKuX9jM2RM9C+ZkPt2J5CitbAlmzkExzPGwLWgg0CSMZGg66JMWCOCWVh2iEbX/8aZ/QHYAIFC+14y+3+iUekOxJ/D7tiNq6SJ1NfFlSUdVzB/OCHmKLBfNGtad5X/gFwbwt+xeZTxgAAAABJRU5ErkJggg==',
      'searchUrl': 'http://voidtools.replacement/?search=%search_string_orig%+%year%',
      'goToUrl': 'es:%search_string_orig%+%year%',
      'loggedOutRegex': /invalid request/,
      'matchRegex': />0 results</,
      'inSecondSearchBar': true},
  {   'name': 'Voidtools-Title-ES',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAclBMVEUAAACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOACWOAD/gAD7fQDZZgDXZACnQwDrcgD0eADvdQClQgCkQQD3ewC2TQD3egDcaADVYwCwSgA9Lo9lAAAAFnRSTlMA/j7oBfCzq6FQ+Ujt25Z8XjYz39db4uTxuwAAAJlJREFUGNNNj9kWgjAMREkpFGUT1Okitqz//4ualgfmJblz5mTJkoTKKVciOyU7v0+YrK9kMrpFg6WXKuX9jM2RM9C+ZkPt2J5CitbAlmzkExzPGwLWgg0CSMZGg66JMWCOCWVh2iEbX/8aZ/QHYAIFC+14y+3+iUekOxJ/D7tiNq6SJ1NfFlSUdVzB/OCHmKLBfNGtad5X/gFwbwt+xeZTxgAAAABJRU5ErkJggg==',
      'searchUrl': 'http://voidtools.replacement/?search=%search_string_orig%',
      'goToUrl': 'es:%search_string_orig%',
      'loggedOutRegex': /invalid request/,
      'matchRegex': />0 results</,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'Wikidata',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEUAAAAgg3SZAACYAACZAAAzl2QxmWUwmWMymGWWAAAwmGOUAACZAAAAZpkAZpmZAAAzmWa6obazAAAADnRSTlMACPsZChgS9iME9gcSFwCYP8kAAACdSURBVEjH7dTBCsMgEATQMZo207Vd//9rmyiFSg9mDg0EMpcV5bG7F3HlpHE33xKZa80oJZQy47UFawnPegztYQXJJ3cH0lThrd4vXwANzD0gKAKLGoBhBO4HA6oggRoA1JH0DvzzDrnfAUNgoAaodtBHUkHkBzyOAcsYQAXkfuCtgwioAhNBMmoASQR5/9LWRgK6z/gXhFLBlXPmDUljOPedCW2JAAAAAElFTkSuQmCC',
      'searchUrl': 'https://tools.wmflabs.org/wikidata-todo/resolver.php?prop=P345&value=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /wiki\/Q/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'YesAsia',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUAAABvrWv711ksmFUOZ0eLUg+Tw4xNvVlvezDPAAAAAXRSTlMAQObYZgAAAGdJREFUCNclycENg0AQQ1GLTQoYRSLnOArnRDSwBxrYSK4AtPTfAR74pycbKLMDjN77/k2QfV+NgZy2pQKUPFUMaqMm4/6OGGWghJVX4vX0xQjKwJ/8NMMTFYkitQvzL+JxIjNuS1YPADcU3aa5k+oAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.yesasia.com/us/search/0-0-0-bpt.48_q.%search_string%+%year%-en/list.html#&q=%search_string%+%year%&sea=1',
      'matchRegex': /were unable to find|has returned zero/,
      'inSecondSearchBar': true}
];

var streaming_sites = [
   {  'name': 'Burning Series (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAKlBMVEX9/f0BQ3UBcqEAZJQAVYbt7/CdtcezxtRlkq+Lqr7T3ONBc5clX4nL0dmk/DqIAAABN0lEQVQoz1WNu0oDQRhGP41jTDDFwEAUYjMraCkz8wLLTqXNWGyEVOuFgJdGK8Em2kTBwghiK3hrDQTFMkgewffxz+yuyZ7d5j+c4QPO5RRdoCIL3OFMeoJMrOGqWKwjkAmI1l7gkZAkPPdKSfoQBJmYTRNIlaDcPgLKyoNAJyhp3UFVe6CUFxuo0aW0gh4XRn+gYow2WntRub5xeM6eGJOuzK8aD3SUivJP5PkvsNh9fT+xBhEVJbuVgDliP4K1Ceas3QTimMUHNhcjErddNyAR0mz70JHoh99h6IsU1xxYaxGGmfiN41pvXAgvqsd1GmkJQQXBOf2fMWO7HCJnKJaf8CLAc96GfMRmOLgQ/l5yzX4H2yQyVhgYY72JaIzHaryBPs95dDuXJE55gToWiuIBuJi+v/AHK55ZJoxv5N8AAAAASUVORK5CYII=',
      'searchUrl': 'https://burning-series.io/serie/%search_string%',
      'matchRegex': /Serie nicht gefunden!/,
      'spaceEncode': '-',
      'inThirdSearchBar': true,
      'TV': true},
  {   'name': 'Filmai (LT)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAGFBMVEUAAAA/Pz9nZ2eHh4ejo6OwsLDU1NT///+O1Cw1AAAAgklEQVR4nO3ZwQmAMBBFwRRhAd68WoJgWtEStH0rWAhskCjzCvhzXdhSJEmSJEnSC021qT2FLHdTFwQCgUAgEMgQyBl09ERSWxAIBAKBQCAQyIeR4N5euyJBGwQCgUAgEMgYSPCVnbsiuTEIBAKBQCAQCAQCgUAgEAgEIkmSJEn6cw8ugFUVBMyGSQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://filmai.in/?story=%tt%&subaction=search&do=search',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Naujienų nerasta/,
      'inThirdSearchBar': true,
      'both': true},
  {   'name': 'GDrivePlayer',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAROSURBVFjDzZdbTBRnGIZJ0/te9aKJFhWwi6Fgu6wHPLR40bTaRm1CUamFptWmrYZUW4IcTCTW0gZDLyBBjFi4wGoitnsAi2Bokap00yJW2YXCnoGZ7bK7YGFhd3n7/bOMYfYgyyHqxZOZ7E7+95nv/+bLTAyAmCdJzFMjwG1dK/IMsY/4hTATjki4Nq51nCpL4rZfS3S8q4mInegl6ojNRAwjksBzhIpANJAASAAkAFo0GvxEcSSBZwm1JGRLCvgNMvCp8eDlcXSU4k6Ow4lTsd70q8uwXSnlLeG4HDvV8eFEcsMJZErCNyUJ4YM5e2EuOw3jmXMwVUmxVp6DsuWsv/JuNc50SanuqkLp7SLkNL+OHcoXsVsjmy3AhxNofhielgRumwKGC1egt09DN4aIDIwAZjtgCkL87e6gE991luBt1QoKfijhDCdgDgiwsifCcEkN3QSgJ1f98MLp5wIiJ2/lC5WYEXCEE+CZAL/+JdgOZENHl+g56WK93MIkBugmbposyGhMxi716jkEqLlMldVCeYMX6hmaholK/o99fgK9RB/J57Zl4h1hKx4loEiAsfZH6Eali7DgKo0VBTU6dFu8sLrmVxEDVeFY+0HqhdgoBH64ECJgocDTl414flcD0o+0oabZhn57QCzabchvP7A4ge+vmLBirwrxWRqs2qfGeyW3odE6hf8G/n2MAmtympBIrKTzxOwmHK7oxs3ecdjc1B/8YxIQkWU3IjZTCcWnLSi92I/7Np9wbXB/zCnwIC2eJzD+yguw1dShJ0oBkdX7NYLIG3ntqGsdxv1Bn0SCCXzx28dIp1nwploWKlCWXTFEeEv3lHuvNnT7B1zzExBZlvEzlmcoUaE0wzirQftIoLHzkK++ZY334nU5FyKQVOLjCawq8qG8dRrWkfkJJLxPFdijwo6CDtS3cdAN+yUV0NH5+J0vgQ4FTaWtoRVYf9zFE0jOd6Li2iQsUQrIPmgUgjd83kqPqYGu9cPiDO0BJuDsOorJG6nw/L5l8QKs+1fOnB+tugdtvwdWd6DU4Z6CJRWIy1ILcyDrmz/Q3OWOag4siYAwCXc2BDr9+pAQaoxyEs5LoLIlVICN3OomG47X9uJehGd9SQReJoGTP03A6gyzCGF2Rp52j2Yao9oPMdmxLqIAxwReLXBhd/kodEOhQQt9H+ihdQwmPQVvniG8QB8TYKQcc+JblQeDrLnsi3sj6hFuYgquv3Kp/AoWHlHgvCigKKZKFDpxomECWqMfRtZsjlBMRB8J9lBldLwUFsz2fcCsp/AjmLohF8MZo+EE5IRflFhXHGjIbV+78dHZBzhc+x8OBXHw/BR+bav3jf2dh5E7xUEUwv3nJxT2mth4s+kOJ8DIEwVEUosCW5JCMsJxFglfeaC6ROP1lky4w2AmO1jJNwWHjxEbIwkwPiNMhGMukgs9Ds3lQg6dcgfb1yjQEmnEU/hx+qT4Hxx8JuUJoU43AAAAAElFTkSuQmCC',
      'searchUrl': 'https://databasegdriveplayer.xyz/player.php?imdb=%tt%',
      'matchRegex': /<title></,
      'inThirdSearchBar': true},
  {   'name': 'GDrivePlayer',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAROSURBVFjDzZdbTBRnGIZJ0/te9aKJFhWwi6Fgu6wHPLR40bTaRm1CUamFptWmrYZUW4IcTCTW0gZDLyBBjFi4wGoitnsAi2Bokap00yJW2YXCnoGZ7bK7YGFhd3n7/bOMYfYgyyHqxZOZ7E7+95nv/+bLTAyAmCdJzFMjwG1dK/IMsY/4hTATjki4Nq51nCpL4rZfS3S8q4mInegl6ojNRAwjksBzhIpANJAASAAkAFo0GvxEcSSBZwm1JGRLCvgNMvCp8eDlcXSU4k6Ow4lTsd70q8uwXSnlLeG4HDvV8eFEcsMJZErCNyUJ4YM5e2EuOw3jmXMwVUmxVp6DsuWsv/JuNc50SanuqkLp7SLkNL+OHcoXsVsjmy3AhxNofhielgRumwKGC1egt09DN4aIDIwAZjtgCkL87e6gE991luBt1QoKfijhDCdgDgiwsifCcEkN3QSgJ1f98MLp5wIiJ2/lC5WYEXCEE+CZAL/+JdgOZENHl+g56WK93MIkBugmbposyGhMxi716jkEqLlMldVCeYMX6hmaholK/o99fgK9RB/J57Zl4h1hKx4loEiAsfZH6Eali7DgKo0VBTU6dFu8sLrmVxEDVeFY+0HqhdgoBH64ECJgocDTl414flcD0o+0oabZhn57QCzabchvP7A4ge+vmLBirwrxWRqs2qfGeyW3odE6hf8G/n2MAmtympBIrKTzxOwmHK7oxs3ecdjc1B/8YxIQkWU3IjZTCcWnLSi92I/7Np9wbXB/zCnwIC2eJzD+yguw1dShJ0oBkdX7NYLIG3ntqGsdxv1Bn0SCCXzx28dIp1nwploWKlCWXTFEeEv3lHuvNnT7B1zzExBZlvEzlmcoUaE0wzirQftIoLHzkK++ZY334nU5FyKQVOLjCawq8qG8dRrWkfkJJLxPFdijwo6CDtS3cdAN+yUV0NH5+J0vgQ4FTaWtoRVYf9zFE0jOd6Li2iQsUQrIPmgUgjd83kqPqYGu9cPiDO0BJuDsOorJG6nw/L5l8QKs+1fOnB+tugdtvwdWd6DU4Z6CJRWIy1ILcyDrmz/Q3OWOag4siYAwCXc2BDr9+pAQaoxyEs5LoLIlVICN3OomG47X9uJehGd9SQReJoGTP03A6gyzCGF2Rp52j2Yao9oPMdmxLqIAxwReLXBhd/kodEOhQQt9H+ihdQwmPQVvniG8QB8TYKQcc+JblQeDrLnsi3sj6hFuYgquv3Kp/AoWHlHgvCigKKZKFDpxomECWqMfRtZsjlBMRB8J9lBldLwUFsz2fcCsp/AjmLohF8MZo+EE5IRflFhXHGjIbV+78dHZBzhc+x8OBXHw/BR+bav3jf2dh5E7xUEUwv3nJxT2mth4s+kOJ8DIEwVEUosCW5JCMsJxFglfeaC6ROP1lky4w2AmO1jJNwWHjxEbIwkwPiNMhGMukgs9Ds3lQg6dcgfb1yjQEmnEU/hx+qT4Hxx8JuUJoU43AAAAAElFTkSuQmCC',
      'searchUrl': 'https://databasegdriveplayer.xyz/player.php?type=series&imdb=%seriesid%&season=%seasonid%&episode=%episodeid%',
      'matchRegex': /<title></,
      'inThirdSearchBar': true,
      'TV': true},
  {   'name': 'HBO Max Movie Catalog (US)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAARVBMVEUrBEQkAzk3B2dHA2H//v43BFWLdJx4W42yprlpTn759Pqkkq01F03b0uHIvM5GIWFMNF7Rxdjx6vNgPXnl2ulRKW/r4u+RF3ZTAAACu0lEQVRYw+2Tja6bMAyFk978JxBIgPd/1B07actoB5uutDtp90jFCbU/bMcR8lSiiVfv9ZcAsF8EYMaF5GcJV8FfCRBd/zOA9FkA9DWAw8u94xUgTdOUm0l4sIRkt+StrUnKc4APQY1SRhWUwYM1V6SU4qaUCoMR8hwArxkAGONUV5jktKiuMclfA8QLIIQWxPGd8CcZBDv5olSZiRWt5aSMvACMOwCaNipW8dY5b7Ba0iugMXsJm4vDHWC8CQ1gDD095VDlewAEQNe+ieMMlOc2OIuHfTMNp4DoCFCY9TuAsAzlDhgd9w+/3sBIdVwA5vRs4iTToFjD5EoxHqySTy6GJYA4AkIggvXeUGpOngEOgzSPA8e2k+Q2bFlouOqu8wy6jDSPdfFSHwG8fQKGIyDiH7v0I51kjz0CIAAm55zRwsJ441ixUohMNmLtNbnuEftkZMqZBwv2fud4w148qT1mD3iuUhxCWGJOBnZzKwVJO5ZQZoN33g2z5e/XcZizOAJEnvuBd7tNQqR7H9ABX+lY4U8Ha2CPAMfXiHtV+DrNWkRqW3RF8QBHbJAVmdcSRA5qyYLzWFa0Y8StWwNODfWvlBTSp0/TsJZpB7jdbmw9/QlrcWyy7a3hMGymwqsaVDCtgI8noElYcukgspUnYUuP+iyCqCQu4OMDP9YpYCTfGwFMAySqpaz0/fcAWAagrDuAXRsA3o6OCQuOvwAEKmFIDRBbBj600W7x1wCEeXFDEWkhgM4wMxhVcOw1oCJfurxoHgN4Agwg+RWgO0A/AGRHDEW0hmfT0je2VWu8jPo9QJPdA/KgHrJpaY2oRYV66AFUCwNu69YAeYHVOdIYB2eC8ijAUZzGZshHACJ97nbVD6v16q1F3tVn733rPjb2AGDpny2cu22Dx7ZL73twqY93+gZ8A74B/xzgB46KNHBJZ98EAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.themoviedb.org/movie/%tmdbid%/watch?translate=false&locale=US',
      'loggedOutRegex': /Oops! We can't find the page you're looking for|Não existe oferta para|There are no offers for/,
      'matchRegex': /HBO Max/,
      'positiveMatch': true,
      'inThirdSearchBar': true},
  {   'name': 'HBO Max Movie Catalog (BR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAARVBMVEUrBEQkAzk3B2dHA2H//v43BFWLdJx4W42yprlpTn759Pqkkq01F03b0uHIvM5GIWFMNF7Rxdjx6vNgPXnl2ulRKW/r4u+RF3ZTAAACu0lEQVRYw+2Tja6bMAyFk978JxBIgPd/1B07actoB5uutDtp90jFCbU/bMcR8lSiiVfv9ZcAsF8EYMaF5GcJV8FfCRBd/zOA9FkA9DWAw8u94xUgTdOUm0l4sIRkt+StrUnKc4APQY1SRhWUwYM1V6SU4qaUCoMR8hwArxkAGONUV5jktKiuMclfA8QLIIQWxPGd8CcZBDv5olSZiRWt5aSMvACMOwCaNipW8dY5b7Ba0iugMXsJm4vDHWC8CQ1gDD095VDlewAEQNe+ieMMlOc2OIuHfTMNp4DoCFCY9TuAsAzlDhgd9w+/3sBIdVwA5vRs4iTToFjD5EoxHqySTy6GJYA4AkIggvXeUGpOngEOgzSPA8e2k+Q2bFlouOqu8wy6jDSPdfFSHwG8fQKGIyDiH7v0I51kjz0CIAAm55zRwsJ441ixUohMNmLtNbnuEftkZMqZBwv2fud4w148qT1mD3iuUhxCWGJOBnZzKwVJO5ZQZoN33g2z5e/XcZizOAJEnvuBd7tNQqR7H9ABX+lY4U8Ha2CPAMfXiHtV+DrNWkRqW3RF8QBHbJAVmdcSRA5qyYLzWFa0Y8StWwNODfWvlBTSp0/TsJZpB7jdbmw9/QlrcWyy7a3hMGymwqsaVDCtgI8noElYcukgspUnYUuP+iyCqCQu4OMDP9YpYCTfGwFMAySqpaz0/fcAWAagrDuAXRsA3o6OCQuOvwAEKmFIDRBbBj600W7x1wCEeXFDEWkhgM4wMxhVcOw1oCJfurxoHgN4Agwg+RWgO0A/AGRHDEW0hmfT0je2VWu8jPo9QJPdA/KgHrJpaY2oRYV66AFUCwNu69YAeYHVOdIYB2eC8ijAUZzGZshHACJ97nbVD6v16q1F3tVn733rPjb2AGDpny2cu22Dx7ZL73twqY93+gZ8A74B/xzgB46KNHBJZ98EAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.themoviedb.org/movie/%tmdbid%/watch?translate=false&locale=BR',
      'loggedOutRegex': /Oops! We can't find the page you're looking for|Não existe oferta para|There are no offers for/,
      'matchRegex': /HBO Max/,
      'positiveMatch': true,
      'inThirdSearchBar': true},
  {   'name': 'HBO Max Series Catalog (US)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAARVBMVEUrBEQkAzk3B2dHA2H//v43BFWLdJx4W42yprlpTn759Pqkkq01F03b0uHIvM5GIWFMNF7Rxdjx6vNgPXnl2ulRKW/r4u+RF3ZTAAACu0lEQVRYw+2Tja6bMAyFk978JxBIgPd/1B07actoB5uutDtp90jFCbU/bMcR8lSiiVfv9ZcAsF8EYMaF5GcJV8FfCRBd/zOA9FkA9DWAw8u94xUgTdOUm0l4sIRkt+StrUnKc4APQY1SRhWUwYM1V6SU4qaUCoMR8hwArxkAGONUV5jktKiuMclfA8QLIIQWxPGd8CcZBDv5olSZiRWt5aSMvACMOwCaNipW8dY5b7Ba0iugMXsJm4vDHWC8CQ1gDD095VDlewAEQNe+ieMMlOc2OIuHfTMNp4DoCFCY9TuAsAzlDhgd9w+/3sBIdVwA5vRs4iTToFjD5EoxHqySTy6GJYA4AkIggvXeUGpOngEOgzSPA8e2k+Q2bFlouOqu8wy6jDSPdfFSHwG8fQKGIyDiH7v0I51kjz0CIAAm55zRwsJ441ixUohMNmLtNbnuEftkZMqZBwv2fud4w148qT1mD3iuUhxCWGJOBnZzKwVJO5ZQZoN33g2z5e/XcZizOAJEnvuBd7tNQqR7H9ABX+lY4U8Ha2CPAMfXiHtV+DrNWkRqW3RF8QBHbJAVmdcSRA5qyYLzWFa0Y8StWwNODfWvlBTSp0/TsJZpB7jdbmw9/QlrcWyy7a3hMGymwqsaVDCtgI8noElYcukgspUnYUuP+iyCqCQu4OMDP9YpYCTfGwFMAySqpaz0/fcAWAagrDuAXRsA3o6OCQuOvwAEKmFIDRBbBj600W7x1wCEeXFDEWkhgM4wMxhVcOw1oCJfurxoHgN4Agwg+RWgO0A/AGRHDEW0hmfT0je2VWu8jPo9QJPdA/KgHrJpaY2oRYV66AFUCwNu69YAeYHVOdIYB2eC8ijAUZzGZshHACJ97nbVD6v16q1F3tVn733rPjb2AGDpny2cu22Dx7ZL73twqY93+gZ8A74B/xzgB46KNHBJZ98EAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.themoviedb.org/tv/%tmdbid%/watch?translate=false&locale=US',
      'loggedOutRegex': /Oops! We can't find the page you're looking for|Não existe oferta para|There are no offers for/,
      'matchRegex': /HBO Max/,
      'positiveMatch': true,
      'inThirdSearchBar': true,
      'TV': true},
  {   'name': 'HBO Max Series Catalog (BR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAARVBMVEUrBEQkAzk3B2dHA2H//v43BFWLdJx4W42yprlpTn759Pqkkq01F03b0uHIvM5GIWFMNF7Rxdjx6vNgPXnl2ulRKW/r4u+RF3ZTAAACu0lEQVRYw+2Tja6bMAyFk978JxBIgPd/1B07actoB5uutDtp90jFCbU/bMcR8lSiiVfv9ZcAsF8EYMaF5GcJV8FfCRBd/zOA9FkA9DWAw8u94xUgTdOUm0l4sIRkt+StrUnKc4APQY1SRhWUwYM1V6SU4qaUCoMR8hwArxkAGONUV5jktKiuMclfA8QLIIQWxPGd8CcZBDv5olSZiRWt5aSMvACMOwCaNipW8dY5b7Ba0iugMXsJm4vDHWC8CQ1gDD095VDlewAEQNe+ieMMlOc2OIuHfTMNp4DoCFCY9TuAsAzlDhgd9w+/3sBIdVwA5vRs4iTToFjD5EoxHqySTy6GJYA4AkIggvXeUGpOngEOgzSPA8e2k+Q2bFlouOqu8wy6jDSPdfFSHwG8fQKGIyDiH7v0I51kjz0CIAAm55zRwsJ441ixUohMNmLtNbnuEftkZMqZBwv2fud4w148qT1mD3iuUhxCWGJOBnZzKwVJO5ZQZoN33g2z5e/XcZizOAJEnvuBd7tNQqR7H9ABX+lY4U8Ha2CPAMfXiHtV+DrNWkRqW3RF8QBHbJAVmdcSRA5qyYLzWFa0Y8StWwNODfWvlBTSp0/TsJZpB7jdbmw9/QlrcWyy7a3hMGymwqsaVDCtgI8noElYcukgspUnYUuP+iyCqCQu4OMDP9YpYCTfGwFMAySqpaz0/fcAWAagrDuAXRsA3o6OCQuOvwAEKmFIDRBbBj600W7x1wCEeXFDEWkhgM4wMxhVcOw1oCJfurxoHgN4Agwg+RWgO0A/AGRHDEW0hmfT0je2VWu8jPo9QJPdA/KgHrJpaY2oRYV66AFUCwNu69YAeYHVOdIYB2eC8ijAUZzGZshHACJ97nbVD6v16q1F3tVn733rPjb2AGDpny2cu22Dx7ZL73twqY93+gZ8A74B/xzgB46KNHBJZ98EAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.themoviedb.org/tv/%tmdbid%/watch?translate=false&locale=BR',
      'loggedOutRegex': /Oops! We can't find the page you're looking for|Não existe oferta para|There are no offers for/,
      'matchRegex': /HBO Max/,
      'positiveMatch': true,
      'inThirdSearchBar': true,
      'TV': true},
  {   'name': 'KinoX (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAAJR2KbtsHN2t90IGJhAAAAAXRSTlMAQObYZgAAADRJREFUCNdjCAUCZGJpFojYCSSWPQUSq6cCifUgYtVVkMRSB5AsA5BIARKhASDCAUQwQAgAJK8YHJEJIrAAAAAASUVORK5CYII=',
      'searchUrl': 'https://kinox.to/Search.html?q=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Format red/,
      'positiveMatch': true,
      'inThirdSearchBar': true,
      'both': true},
  {   'name': 'KissAnime',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAADkD4VUsAL30An41yzqRKDoVKZbtCptu1BftjhrlCepwQbONHeTajrEz1iwzTiPwbTpAAAAAXRSTlMAQObYZgAAANdJREFUKM+VkDEOgkAQRQcEChuZAioLMo1iYkKydDYkegAs7PUGhBNYUhovYW9r5TWsPIo7O7CAVr7uv/1/N1n4g6Y5j3JNlA7zlTRVn11ikl6QYflVoMVAVCwHopZZLy5j4e3eLOxkopTKWSQ2s3GtUCKI1rbAbIieaMRWp2L2uNMKMWwXGUyJKD0htqIA50UEDmIpEwCc34BF2AlZ7zGSV8CJypEonK4Ry61ZIAIxEpGDeTBgIRtdDnkhRU9fEqAABpUX+pSJu/8B8I04gsW3uTcHzr98AP7ZJ207pii8AAAAAElFTkSuQmCC',
      'searchUrl': 'https://w4.kissanimes.cc/search?keyword=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /sorry we can/,
      'inThirdSearchBar': true,
      'both': true},
  {   'name': 'OK (RU)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAh1BMVEX1giD1giD1giD1giD1giAAAAD1giD1giD1giD1giD////1hij//vz+7uH1hSX+9u7+8uf938X3lkP2lD7+8+r2jjT81LP7yZ76xJX5sXT3nlL2ii3/+/f/+fX7zqj6wZH6vIb4qWX2jzj1iCr++PL95tL827770a75t375sHH3m037zab4olql9BFjAAAACXRSTlOq8u3mGwCuKicTfRAWAAABDUlEQVQ4y52T6a6CMBCF637nQCuyKiAouN/7/s93h4ZoSUZJ/H6w5HxtM52MWszVjN4wU/OF+pnSB6YrpegjSzWhAUUx/J8MNmgzDeisJQdXyDUsOpeFZo2edSMKFUdxlsX8qiTBnHhpQpTwRicjCBGv3BKz5Y/oG8GUQMBHFAFQSkfQFWzUNedIxSqKGD37SBTob9/nR5IFClMf8NOQZCHxiLzHg58mkYQD/MquDX9L1IIQ2y6cz7YjsSBc4ZAKgrlp9Oibkas4aht3VcrC3e8E//5O2HFujZ0s2HyzsYYk5Ohyz+sM5NJF2ZzIGgdBaAJcOGfjguDVTmdwvPDZtNYZnOXY6K1Ghnd0/P8B+RIrHD4HfX8AAAAASUVORK5CYII=',
      'searchUrl': 'https://ok.ru/video/search?st.cmd=video&st.psft=search&st.m=SEARCH&st.ft=search&cmd=VideoContentBlock&st.v.srt=All&st.v.sfd=LONG&st.v.sfhd=off&st.v.sq=%search_string_orig%&gwt.requested=xxx',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No search results found/,
      'inThirdSearchBar': true,
      'both': true},
  {   'name': 'SerienStream (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAABErfJCpej9/v8+oeOKxezJ5PZrtugHogkKAAAAAXRSTlMAQObYZgAAAJZJREFUKM+d0jEOwjAMBVDDCUhUMZOvSBzAanYsLkB7hoo9cH8RSEVid6s3P2X41g/RUfCfeCEip4booOFEQYOnm4Zh+6ICDAAIPfhrliIN8EpvQQdx5nEQKOAlChTw846wgi/wFTHADxhI3gBnAyM0pKwhTRJUjkkFq7nacXPd2/nnJQKuA6DsDX7iVthTg61yW7b9Dh/ESTkmBzorqQAAAABJRU5ErkJggg==',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'goToUrl': 'https://serienstream.to/search?q=%search_string_orig%',
      'searchUrl': 'https://serienstream.to/ajax/search',
      'mPOST': 'keyword=%search_string_orig%',
      'matchRegex': /serie\/stream/,
      'positiveMatch': true,
      'inThirdSearchBar': true,
      'TV': true},
  {   'name': 'StreamCloud (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEX9/vwiXbE1b75Gf8Zcj9GLrtnZ6fvE2O7Yo1L8AAAAUklEQVQI12PABthDQhPAjBAXlzAQzeoCBCAGizEQhDMwsAUbg4ADQ7GSkpKRkpIqg5MSGCgzKCkqKikKKQkzGAqCgQhDIIQhxsCqCKKFExhwAwDALgv/lINodwAAAABJRU5ErkJggg==',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'searchUrl': 'https://streamcloud.my/?do=search&subaction=search&story=%tt%',
      'matchRegex': /item-video/,
      'positiveMatch': true,
      'inThirdSearchBar': true,
      'both': true},
  {   'name': 'Tubi',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4BAMAAADLSivhAAAAGFBMVEUmJi34Mzf1KWT8PCH4TyGqMS3XPyexKFH+E2IbAAAB4klEQVRYw+3Vv1PCMBQH8IqHrMZenWkWV70H7h7IHPXAtRzQmWPx3zdfLj/oC8SDTX3foYQ0nzyaQCgkEolEIpFIJPn053OTuX2llDp9fzqdzro9N6o6A0+7PUsMvxD37fDb34fPf+bLV3uWdP4JXM0Ruw+4uizadhNw6EZzbjoYQf03pcj3r61zq73AFBu+zykuOQ55gc5jVZ7A9n7zI1bH8Yu9c38pVkhzEUZhlM7gIsG4IvSkXGmOw7tTeDTZmP4SuOK4p+7qbQ5P6BXvoe8TrLXO45H7KdqYDH6vj+FxOAVUk8O6TjE1cXHyWNcp9kcIWB5r379ymJ790XcOHh3BFa7l40lsPCaaWTzhuCRiOGkDg62JY+J4eASXYJiis2AMDyx44BOhDpHd4A8iMnGrHhNswyfC0BL4Oo7FMdMwXABvHY5tWwaDbsg/NBQZjneuHKJ9+wrYONKg5wOtguOeE4MtJnJtpdxxBoJZFngdJ3igXYaYaJ+7GrgKBaldEUEluNA+BxP5IwsPHWNS3PPCfW4Epf2XJWRcBJyWHqK0x/j6s9Im4rT0A9Y+4PALiYVTHIU+aCuUiRvstjvgVG9Z2+vV3hqGYwY7/eXbn6Hd+bt1adu2KSQSiUQikUj+fb4B4n/CsDtPLf0AAAAASUVORK5CYII=',
      'searchUrl': 'https://tubitv.com/oz/search/"%search_string%" %year%',
      'goToUrl': 'https://tubitv.com/search/"%search_string%" %year%',
      'loggedOutRegex': /in your area/,
      'matchRegex': /title/,
      'positiveMatch': true,
      'spaceEncode': ' ',
      'both': true,
      'inThirdSearchBar': true},
  {   'name': 'VidSource',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABD0lEQVQ4ja2TvUoEMRSFv3sns7nbC4KtheAKNhZbW4mlpY0P4FYWgiLoFgpa2/kYvpwussciM+P+2TiekHCS+3cuSUwSfWDjoF+GcSBJSPoT917V2xZyDPj8mC0ZcgzWnBd9Wru9P08E8DWb8fL0xt30EgyaZQFCgsf7V24fJt1pAjArM4Y1XhlgG8INSUTUuIPmICC5gzUZIhLu/psAhJGjxt1RM5K7YWZFQdS0+02QROSEuyEaBWaOexEduWRvW1quDtJPEQFzWWmhDcqRqKoSuaqi3L2RGwVzwCXs+uTo/17i1fFux29O9zo+PTvYyM/3t+Sj0U6XbJCrjg+H6w9pFSlV2MXhdq8WrO93/gaUmJF4CshtQwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://vidsrc.xyz/embed/movie?imdb=%tt%',
      'matchRegex': /Not Found/,
      'ignore404': true,
      'inThirdSearchBar': true},
  {   'name': 'VidSource',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABD0lEQVQ4ja2TvUoEMRSFv3sns7nbC4KtheAKNhZbW4mlpY0P4FYWgiLoFgpa2/kYvpwussciM+P+2TiekHCS+3cuSUwSfWDjoF+GcSBJSPoT917V2xZyDPj8mC0ZcgzWnBd9Wru9P08E8DWb8fL0xt30EgyaZQFCgsf7V24fJt1pAjArM4Y1XhlgG8INSUTUuIPmICC5gzUZIhLu/psAhJGjxt1RM5K7YWZFQdS0+02QROSEuyEaBWaOexEduWRvW1quDtJPEQFzWWmhDcqRqKoSuaqi3L2RGwVzwCXs+uTo/17i1fFux29O9zo+PTvYyM/3t+Sj0U6XbJCrjg+H6w9pFSlV2MXhdq8WrO93/gaUmJF4CshtQwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://vidsrc.xyz/embed/tv?imdb=%seriesid%&season=%seasonid%&episode=%episodeid%',
      'matchRegex': /Not Found/,
      'ignore404': true,
      'inThirdSearchBar': true,
      'TV': true}
];

var sites = public_sites.concat(private_sites, chinese_sites, french_sites, german_sites, usenet_sites, custom_sites, subs_sites, pre_databases, other_sites, streaming_sites);

var icon_sites_main = [
  {   'name': '_OMDb (for Dev tests)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAABAhvL6+vnl6OUrdul+pdrD1+ynwea6YUBbAAAAAXRSTlMAQObYZgAAAZxJREFUSMfVlUFOwzAQRZFygpTpATIpdFtiEGtHbrtHrdhXnKD3X1DbMs/jLGBJ/zL5+t8vM0ke7kqdM1oanNYaF45OrcZdY5j0/Yw+L7owjBIqHXVsGwbfVwqXpsPpqa8lK9vRTc8pAB3V2YanbEDTaBu+eiv5SB1ASt/oEA0cYZsaQtWzr0E7fUm31n2g41pAgZyVp2FBpzFfV1VpQIEkAtBdCymq6gEtBiBlLh2AAhlyx8aCAjnHc6xqg8SJAjnr6VaLAdAImQxD8IoB0AiZ689qDTKNQCbEZIhuQJNBaoOGeqIuGrblMWYNHtBsuB2BCDMOj8FGNIayr+J7IYKKauODHIngkBGTPYqO0w+ma1deDqqaLrARXdmn3KIpgiNwCFYiRpRhMW7QckTZaxaGIeeIsjCsHBHDSn2BZJ5EZANvZwZF+2wIrH3natC0eOoLJKB1hG4yJIYMyik8kICiEG4w5vU3oEzy758gQDEAyWcQMUkLiuRxYXg1EUDSEWoxSb6Ubz1aX0sDHb/9UDrrIIAIKwKIsPf/k74BMi6iSx3oqX8AAAAASUVORK5CYII=',
      'searchUrl': 'http://www.omdbapi.com/?i=%tt%&apikey=f17eacb0&plot=short&tomatoes=true',
      'showByDefault': false},
  {   'name': '30nama (IR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEUgHx/QPz/W1tVyUFCFT1+rAAABW0lEQVQ4y52RsWrDMBCGlYQsBWfTo4iCpkL34kGHF0NfIVC693HKSRBD9+IOeYRsfQI9QqbeRXeq5aXQI8T2x+e7+2Xz//Kpfd4hzq0Qc2qF5BvlgDHjtAAZEa9xKSDGrSgikIFxMZPrs7b1Bcw5qaCGKNt4LeSUpzIjHQqY/NQaUQzDr3Npj3uP0jd934B9VOMr3MAleDzx87sVAE/4xtt/QAEWxsxGdAL2AOU8QMAOoM/pDs8KjIOBz/RSwQbghWYCvBKQOcEnC8NeQQfwQJ2ODFTpCRoFPHmkXwEyOViYFXS8baAcClzPt3aswA5kBdv/Ajgq0HChAl1rVqBrjRXogZwbQDGgAcatwW4NjF2DrgU8uVlsprYM2rQMnIbTtJdV2g5G2XwowEJfPwKDDV3rd2LgyFymfQZ5Q9PS32yWaUFm1LTasqbVlpqW15OStEtBwjUVnMz8u34AJzrKQdug/4UAAAAASUVORK5CYII=',
      'searchUrl': 'https://30nama.com/search?q=%tt%',
      'showByDefault': false},
  {   'name': '45worlds',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEVmle38/f+RsvJ2oO/q8f2txvXH2PjZ5fv8btQOAAAAq0lEQVQoz8WQywqDMBBFB0M/IOJjq5OWbqWKrlsC3RZq9lUhXYv/D52Mxj4+oJ5Nck9yBxLYFAVQEoXPwQUCTdy8aEIIJLGKjkSMiIVvnEPXetO0P8JWXFE+76aKh0b9IqrMCa1llHEWFkgIVR7ltDRI8MnIC+x7bBMEIo9nL4mUhyXgMMa0iWHBN3g3l/PwW4ju8SFOBdSpf1w9RkNzfeph/R9EJQ72Dn/jBdATGCXKRXJwAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.45worlds.com/45worlds/45w_search.php?sq="%search_string%"',
      'showByDefault': false},
  {   'name': 'ADP',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUBAEH3+f8EBSdJSm0jJEaoqcpzdJSNjrH8KmoVAAAArklEQVQoz33QTQvCMAwG4DIRr2bd1mvJhmfn8N7OgVcr7AdMoXc/2O+3CkpSx95bHsIbiJhK1UYAis8rAA5WwYnBkN0yOidwsTmFJVz3YGgFhJwJONk0jpQs4K7RAoGx0lh6gz9B/enJn5r01BCypSDbCtYMEOsiAqtiIBvJGwZJocAS0vis9775wrHvx50LKOlfnDzUwCDFDYes4xv/Hco/jCAJHVpwEGIeOjGZF55LGoVIzTuWAAAAAElFTkSuQmCC',
      'searchUrl': 'https://adp.acb.org/findavideo.html?title=%search_string%',
      'showByDefault': false},
  {   'name': 'AFI Catalog (US)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEUAAAG7wcI7Pj2DhIdAOfQDAAAAkElEQVQY02NAAAUYQwfG4IcxOBugDOYEKIMpAiZ3DcaYClNkClOkClG0atXSsFWrVjAw6IaCQAwDAzeYAZRl2gpiFDBAhRIYoEIHQPr0gYwGsGVTQ8OhJsIYvKHhEOs4Q0MfQJwWGloBcVpoZRxE0VWv6xBFogfWQhSZNnBDFKkzMOwBM9gYGDiAFJhkYsAAAPQ7I8T9ZIABAAAAAElFTkSuQmCC',
      'searchUrl': 'https://catalog.afi.com/Search?searchField=MovieName&searchText=%search_string%',
      'showByDefault': false},
  {   'name': 'AllMovie',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5BAMAAAB+Np62AAAAMFBMVEUAJTUADRMAFyIFLj8rwf8nsusintEkp9wXcJUejr35+vsafqgQS2SwuLxyd3xQXmZ7IwYqAAACIklEQVQ4y9XTPWzTQBQH8MNeGEDKmbWF83VhASxlYw47UmK1AwMSdgRiqYQcr3wUqVIZiUSlbmwnJSHgCiRYKGPLAGPUCrF2qARjB8R7986+a5x06Na/4sj5//zxTrFZ85RELIKtjK7sryiC5iTag308l9kQ2tSVnVF9e2GrUuAHQ2oa0qWNHW/3hXCVGtLOOCzaDWYjoFlrG02ehS9XpEXvegz6xGj6aDONN530Y2hAIaCd1nLWcnIn77RiUjo3m3OuN+e+pBIU9gNRqWwkY9N4qHztAaJv/gWRjDmoJN3ae62vA0gKzbbRRkoTOopNpXFM6jf9JkOFptLky15h9JvPzJWLUnEq0kv7S6ycqq43hzP0vaQrs8uDSCs0laa9bqbVO1Z/tWJTW5E3UT9ZbUWPP6dabyk1EqjY1KZaVJOBmDlzIJh3W31XO4zJmXrhcLCofk9ruvWqj/tCjRbUW+GBmoZJUJpQXFPDf2rYcBqteY6rkzcUZCCrhjT50CxWAxkeK8wf05DSVKgTdXR0qH5gQ1O5Crfl/KoaBVP6jhWoB/uBvHLwK9ANHG+ngn3JYcMvakhpflQT05CGjfTNen9KH0KDGnI91X1XA5xqlXOjer/0kNf0Hney0LGKd0mXP63bfIzxvkZnv7+V9rp51uvaZDk8dUbxid1e8Zz392IMT2ypMENxlzsJcKo2abDxle8+x5LWw6l5Sjov51XlKRH/AXvKUdyuPn8KAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.allmovie.com/search/movies/%search_string%',
      'showByDefault': false},
  {   'name': 'AlloCiné (FR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA7VBMVEUAAAD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQD/zQAmJSb+zQAkIyYiIicsKiXlugQzLyNMQx9WSh1+aRbNpwjftQU7NSI+OCFEPSCDbRWVexKxkQ24lgy+mgu6mAvDnwrrvgP5yQFQRh5eURxsXBmMdRSeghGoig/SqwjXrwfvwAKwF4O0AAAALXRSTlMADgX48kD94e7bwbijmIJiIQro1cyqVjAnEcZsSxkU+9Gwi3ZoXDk2LI97TzuELa4tAAABdklEQVQ4y42T6XKCMBSFiyCgiIoKivuuXRI2970u3dv3f5ySBJm54HR6/nDn3G9CbnJyF1VioKYlUeGivtYom7Qwq8iXVAFdrq8qxUKN1uUCAYQkAJICMYsjv2xmEJGYA8BQRpR4eMwpLUSVBUA+hZh4EQXKJMAe0iiqNAdGy8SAVB78Ixs2rOVxSb7yEAA58do/TN3piezGiM7J9LyysfN28aseACoS63szG+PJnpQqAJolBnxgbNvzCykVDYzRof2fmbOebz12ag2wRJeaiwneWRaiKpQBUKPmJ54sUCC+DoA6T8x3Z+Ohq2oAoJdszZ3NMgTuAdBoE29ru697KwA6YAxNId4OY+flHAClJlhCpefoYrz6JlU8dT3inf2DdI+kiqfOoGMc1u6UDhpP3Yimzvo6eddNxlMH9J/UVc3bqeOF1l+p43Uj2WeXLz8BYMBSp5I0jykh33pd0phlNFXVu4YWS134HLi8CUagni609Ww95v8CTg1ZK9+2aZoAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.allocine.fr/rechercher/?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'Amazon',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAGFBMVEUAAAD///8GBwf/qQTy6NldXl7/zHetra3stIUGAAAAAXRSTlMAQObYZgAAAUhJREFUOMt9lMFugzAQRKnUD6hbJ5yxgjhXjjh3E9qcixL1HBFxJ2rV3+/aDKyxk87FeJ68szbgzElFykY9qERPzn9UN/QW1DmcTPlFmGgBV+M1YDon7MyokpACoM2kzwkQFkyqEIKI1syaQqRS1fgGKAS5iwUfQrBio0DFBcjRzhUjgFPzSykQ7WKARSdzAxywlRi8w46BNgkID71sY6C9PaRdrXAWMfBGlWwQRpECMaJwMcwdkDuwiUtt8OarGBjC9mnZrqgIwPM9kMOr5FvMll8u1zyG4Vhy5LFUEwBpTfnN4w8fpW7IAU1qqQ9rtx7UC8LzvvNA7UFE61cPtF2Sdf3iAS/xRCK2+zMDZ3XW9kANP1NHSvtfTVtW3bPYtmfVz//g2oq4I3IgUyDi49YYi+tu9C/YTHBlNBxxkSvjn0sG1QJp5/0BbOyCP9hr7wIAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dmovies-tv&field-keywords=%search_string%',
      'showByDefault': false},
  {   'name': 'Amazon (UK)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAGFBMVEUAAAD///8GBwf/qQTy6NldXl7/zHetra3stIUGAAAAAXRSTlMAQObYZgAAAUhJREFUOMt9lMFugzAQRKnUD6hbJ5yxgjhXjjh3E9qcixL1HBFxJ2rV3+/aDKyxk87FeJ68szbgzElFykY9qERPzn9UN/QW1DmcTPlFmGgBV+M1YDon7MyokpACoM2kzwkQFkyqEIKI1syaQqRS1fgGKAS5iwUfQrBio0DFBcjRzhUjgFPzSykQ7WKARSdzAxywlRi8w46BNgkID71sY6C9PaRdrXAWMfBGlWwQRpECMaJwMcwdkDuwiUtt8OarGBjC9mnZrqgIwPM9kMOr5FvMll8u1zyG4Vhy5LFUEwBpTfnN4w8fpW7IAU1qqQ9rtx7UC8LzvvNA7UFE61cPtF2Sdf3iAS/xRCK2+zMDZ3XW9kANP1NHSvtfTVtW3bPYtmfVz//g2oq4I3IgUyDi49YYi+tu9C/YTHBlNBxxkSvjn0sG1QJp5/0BbOyCP9hr7wIAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.amazon.co.uk/s?k=%search_string%&i=dvd',
      'showByDefault': false},
  {   'name': 'Amazon Prime (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAGFBMVEUAAAD///8GBwf/qQTy6NldXl7/zHetra3stIUGAAAAAXRSTlMAQObYZgAAAUhJREFUOMt9lMFugzAQRKnUD6hbJ5yxgjhXjjh3E9qcixL1HBFxJ2rV3+/aDKyxk87FeJ68szbgzElFykY9qERPzn9UN/QW1DmcTPlFmGgBV+M1YDon7MyokpACoM2kzwkQFkyqEIKI1syaQqRS1fgGKAS5iwUfQrBio0DFBcjRzhUjgFPzSykQ7WKARSdzAxywlRi8w46BNgkID71sY6C9PaRdrXAWMfBGlWwQRpECMaJwMcwdkDuwiUtt8OarGBjC9mnZrqgIwPM9kMOr5FvMll8u1zyG4Vhy5LFUEwBpTfnN4w8fpW7IAU1qqQ9rtx7UC8LzvvNA7UFE61cPtF2Sdf3iAS/xRCK2+zMDZ3XW9kANP1NHSvtfTVtW3bPYtmfVz//g2oq4I3IgUyDi49YYi+tu9C/YTHBlNBxxkSvjn0sG1QJp5/0BbOyCP9hr7wIAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.amazon.de/s?k=%search_string_orig%&i=instant-video',
      'showByDefault': false},
  {   'name': 'AniDB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAJ1BMVEUAAAArMkrhk0JqZG2trq2Xdl9QVGmtgVmKj5ieoKN1eYk8RFzQjUoj73TGAAAAAXRSTlMAQObYZgAAANxJREFUKM9joDbobEATaJmAJrBqAZha6ek5i2HlzJldDCu7QHzDHR2dnokpnjM9Ni6ZLQwUSJROS55imOIm7LlxSTdYYIeLiwtQQAwusGTGClQVLW3bphhmIqkwgWgRdoEZKtzR0ZG4o1usY6PFQrCAIBLALiBcGhpqKAgiwyAC4kpKSqobRYGkTiJYQFTd2PSQIZgMhAoIShdVg0m4gGDQaVF1U9MzhgiBY6I6IJNQVISGI6mAmlEIFUhLPRQItCUZYgvXcqALjq9aCjRDBxKorOXl5QvAZBWVohMAmHVaOfloCOkAAAAASUVORK5CYII=',
      'searchUrl': 'https://anidb.net/anime/?adb.search=%search_string_orig%&do.search=1',
      'showByDefault': false},
  {   'name': 'AniList',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAAAZIS3///4Cq/8Fdq+jp6teY2zz9vguOETh4uMOTG5dyv91hpPJys3N7/+k3fra3ZRvAAAAAXRSTlMAQObYZgAAANBJREFUKM9jYGAQRAIMcD5ChBFVQABTQBANYBeQCA2NcHFZiBCQUVLSMTZ2RAjIKinpowikKynpoQgcUlJS2owkIHEJKPAZSUCsSKlIqRhJQFRJPVxJG0mgV0k3U0kfJgC2RBWoCEkgSKlMDGgNXEBiktK0tklKj6ECYEsqZxYpVcMFRJXAQBsu0AkR0PNatWpVI0ggCcQFOx7kHwaQJappablAx0MEQJaUCQoC7X0MEQCFzg2w3dowgdDQRKDpR0NjXEDBSDjUCcccRmRjJAcAEyJG2tpF7vsAAAAASUVORK5CYII=',
      'searchUrl': 'https://anilist.co/search/anime?year=%year%&search=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'AnimeTorrents',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAAAPkccxpNItlsUre6gFBQUsiLYPfLAncJwKap8FXJFic3xbh55LUVVQnsN6p7tRAllfAAAAAXRSTlMAQObYZgAAAXlJREFUKM9tkTFowkAUhq9VsBSHng7OnnuLHujqcEjqflNrKSgnBZGKkJDNIUMMFDoEJE4ZHJKsRRASSx06FOooHUrnbt06FvouUVz8t//jv/+9x6HDyuQIKd/v/REGgPHZzqfASEBvt4DsAN0+IKSISQnnKU1qcG4HalrcUJT5SrlAqabWARwTnLtYrVcDCAhZKxvOl/xmCAHRiQFE/niL1lQhBELpHIHCX86fNPC6C1viCinPOf+AB7rziI6x3EgC0XUcpw5DSmWc33D+/D3RGJOAUPoDHfNrIRJQopUNB7VER4IUxXjIYwAV5gimFAbtVwkixQkCF2VgBu2FV613m7Hx1EVZ8DW1//XZ0A3GlBFClFa1XhiGkeIbzIRb2lVN7S+jMGKWb0qQ0jTRfXhbLwwl8EYATuDq3iIKwxmzAgnQBI5kTW/sK2aApNKi47BLmwUmrBWrcTdhzRmbelCZRHQbniiWD4FEpzazPNNy95+bNQC8oIP6B2lDiH0uIa69AAAAAElFTkSuQmCC',
      'searchUrl': 'https://animetorrents.me/torrents.php?cat=0&searchin=filedisc&search=%search_string%',
      'showByDefault': false},
  {   'name': 'Apple TV',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAD8/PydnZ1OTk4M7ycjAAAAoUlEQVQoz2MYSoC5AYnD6YDEMXVgXgPnqB5gioCxebQ/IDhTV4bzhR9aw/AayGYMDQ19GpoUwRAOMis0NEw1NDmEOQTIYQ0NDeELPxDOFAHhRAAZ0xhjEJyrjAEIjujZBAgHpF61swBiWmhTBIOpK8iFvBAOa2kD1NJDIUCxAyDfAC1lDt3AGAp229XQEIbQBMYwMMfq0AIGqw3MKxiGHQAAmAwshWOFVoAAAAAASUVORK5CYII=',
      'searchUrl': 'https://tv.apple.com/search?term=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'Arrow Films',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAHlBMVEUHChEJKDk2g50QT2hbqsVdFy2KMoHeJR9YXhq+ySszh3PJAAACLUlEQVRIx62US24bMQyGRylcpDvR6qY7D4cHqEa6gCldwVfIupsi23TX7LpMbluJUizNIwYChIYEPj6RvwnDgx5umho+yRSIvV/HYj9rOJdQN4AlQacaxho2IMgE/9YBJTz2gM73tae3+T6OKwDkLiW9B5izBOLtAUoSLd4CZXJVuQegzEmUsFsASl9hv49bICmTEuuqsgHyOGsUIQQt0QN1LqC3eRzCCgDJpd6hNErYCoB0ZBcmgKgE6ACTAFPlAwt4zoBuQA3BW6AyagNUcc1ZAwSrVmugjm5ilkBLg6noCqhff7Lg6rAV4K0AcTQxgqx0BcgzZea0KCeAtwvAsAAgm9SDyFkCAbLTAcfQAxIsAbMERGMbISrnHiDQuV4AKCoXAEvuCsiysQNYfgQGkUbDiKPskjsgjlpSiDZRWPDYA1aaOmMBjDMoA2kDkIVivvC9BunJrpqUegCmMhSr0Vnn2F4BBQLg1UaoyQboIct7sxSrxb8e7NgGqA0spMtsAEQ7I075OOQpew47kYZp8oiRENkzcmQiapvMS+bgfaToUyWdSDxHah3AEzP5VBYkG3MCmgSaA9E8ycEKMEID0sucTCcwIdLMxMgNMJGTgPqZYwwuJifo1sG5tkXrJgviNEDdXuR211pJ/YN2/6T+fNHp9eFyGQ6XHeDl/uXuNOP49eFheHz8tSVev/27Ozk1JeDw+7ADPD8/JWB4H/jxOtwecf936EV+ounbZfUf2c2KdMPmw9EAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.arrowfilms.com/elysium.search?search=%search_string%',
      'spaceEncode': ' ',
      'showByDefault': false},
  {   'name': 'AZnude',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAACAgL8/PzpnwQ5LBLLy8twWSmLi4o/tfsaAAAAAXRSTlMAQObYZgAAANBJREFUKM9tkU0KgzAQhSP0AA0ddf/w5wCWrqu2B1CQriPFvdLi9ZuZaCFp3ybkI9/LhKg/qfU3xHujtUcO2stVRT44coPv6CACaF013TgbiAHTVpwNjEDngQXIWKkuG+hzFHZJqrMDCTLkdm0r40CMboGdhysENDAjZjEcGMGH2GAgnTpFJoYAQmF7S2JDQApOTmwIiCExbAhoMAxDj/m5A5nhjo7ca+USLspO9nG1BYRSxi+THQwvdt8PmqaJlSCqDoHx9/T7LyowlIqCA2E+XmE3zPkE0S8AAAAASUVORK5CYII=',
      'searchUrl': 'https://www.aznude.com/search.html?q=%search_string%',
      'showByDefault': false},
  {   'name': 'BAMPFA - CineFiles',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAMFBMVEUXbr4neMJWyPHpqRVNw5T1aBXbT6/yJTRaZpg5n9osjrWidlJFr+NGt5qMR3XENFJdayYeAAACPUlEQVRYw+3UPWjbQBQA4KcWN/IPsRwItG6H5jYXDy5ZApkMNxUKyXBg8NKpZMx2nmx1CBYEiuvNm226RHQoFEHBi/HWrUOmgsGbOwVvHtN3kk6qfPLgLYF7SA/pcR/o9J4EpR0DLNgpDA000EADDTTYAsqu6/rsemJjvhl8wfpg0ANzMvmJFdPBAIC7OzsAXyml7wXw2DnmPqkCZAmZwtNjDBuefcRAx/kiBvS3DxoqeJsG5nNaBwAWAgJQiMCpBPucryQAg77zQTMAlgQ1wwcfABIAN3CLwIzAEA5CAD+OJShyfrkN9LaAVhLkGWMSjFXQ5WsFeMzywRSTCjrr9ia4ZjaCKnmNSQHL9nIDZEJQmR3B7FcK6HZCQK2c6MMhe8m+B8AgKlj/B+a3otNXLB+AfsUggxiIxl0gaO3x5CxdNU12JsC4kpPAiDvNEdgRoEMAD8G5AAfVLLmRo3ESApNfFiMwKtO6AAZrBKBAXkhQQ3DhfEKwKvJF4i15DQjAE/IqAqdWuOl9vsIjAXC11xSgQL5Vsz44cSyIwGID4AZCkCX9ENQAJMDnMTdBw5FgVkkBfz/zVhKIECBHyBsF7HGMBMj7wALRNnKkgK4A7SRoTjxmI4A0sOT39xLQUhk/0QwuzgRgRqYq6Igz7nQdDnExDpMAfRXg7CXBEGfPikEvFXR5BP4AAkBwJsCYDBXAWwLYAuRcd4SV5w6A4dhQHmEFDNcCE+9AFC3MeI2Fh/q710ADDTTQ4PGB0o7xD+J9O9xnt0dGAAAAAElFTkSuQmCC',
      'searchUrl': 'https://cinefiles.bampfa.berkeley.edu/?q="%search_string%"',
      'showByDefault': false},
  {   'name': 'BBFC',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgAgMAAACf9p+rAAAADFBMVEXm5uYCAgJLS0uioqLkzWL0AAABfUlEQVRIx+3SMU7DMBQGYBOLoUPaU+QIGdqBInGBSPR30hCJSEzAUokdReIMPkIlpDLkAAyReobsLAwwcQAG3vNLSENVcYDmDXmJPzvx84saYohjijdJpST93I7ryCVvJY/vcQu+wEhA4xdCgUDA76AWsAJhB1YAAgFe+6AbqGXBPtjsEESHIN+BybeDyZdSM6QbpeaVg0uLkuDBmkIFQKzGSB0sgSuCWyBRIV9qIGcARaX5ahgiDzSzhdwBioBuRzzFgVkjI0jXyOe4rgLcWVmx0nZBUI6R8HZrU01LBloWGHfc9YKhLd4m1Axo0GNoCNpS3QQPW96hz+ChaCDnup943gkqhkp1HSIoaCHDiVG7cMGgGfz/Yf9V/Y+ft4AWom676G034ZEtF3jaL9BQyXIkQUygkAlw/2ysXU/kEKmHhYP0A4kGp4ghwL3N/jRqxSCNaqAQqBi4tTHDkrODRKqyzc9wYznjESgFpjBywGcbl2YvqonPUg0xxBHFD/G1szdpCKQqAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.bbfc.co.uk/search?q=%search_string%',
      'showByDefault': false},
  {   'name': 'BCDB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5BAMAAAB+Np62AAAAMFBMVEUAAAD0743r3S/u5F/79emeMFBUOzH56Mjs3L+/tDyakIN+X11+dyrXz7fIg2bGspSKcqS5AAAAAXRSTlMAQObYZgAAAmJJREFUOMul1LFrE1EcB3Ctk4NgyWyROGUp1NA1Lg9T4tDF30MS0yn3kLuDLsUXEkqXkHtEitDQISAuxkQaxKVJteAfEMgYTKjURW4S7GQUQoPfi7GXtHdXwe+Qg3zu9/u93wvkyj/kxvy53JrCeY/cdDGAr857J6gUxQGlyOXqZ2j9f3rNX0MBh0K8dUS0tuSnX7gQYs1HF7jeV0faV08N/dCVJa0BekMvzqxvsLjMGeVZDY1OQjZGGgXopvYK6u4bI67Z/K1Sw8xY20tTukDisMbfbyuldHb/YEtrR6HRSWy9t13Us1ZcygF78KSkfZjSGO8pa0uXDFosrP6Ug+SU2gcKR23FGZPyaXdFl8XHZVe5tQEY9Bg7zea77KNVm9JYMs6gxSqLi/4zxlaGZLq6nGbIsLXPmJBFdtQkbk7m3hudLD8EJjTCS+9kTRC1xGSjGAlB+9BPKSOJR1ajlDDb5T9Kxl5DZPD1a95JOS3wdgc4VtvoK1VytGlWqMtYjZvtShSBxvgv535OoVjCrjqlKJzo7rpi0Ofjud8pk2hyEzhRu+5cg8wVGFsVpBuEUsjf2jR0U+Zx6Hhpr6+RMHdcXUxBa/W8AZX4WXHcO65GqIqJb2RxHf3lgMwK8Ezv2mms2Jc5Ojw+bhBvh6OuzoVfptCzZeXJCVYNn8XRceuGqnEDKNo7sxrefYSVPlOr0xFmBzirTuuExs0KAjynkWY1gTXdgdOK1kkgenrrIuGCKmEPvY7PyDdPjOB/w3m+6GDohdyeaASVvor46ZyvAgMV8W8cVAxyElSKBCIuzOOaLs9vNhJbX9iyDHsAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.bcdb.com/bcdb/search.cgi?query=%search_string%',
      'showByDefault': false},
  {   'name': 'BeyazPerde (TR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaAQMAAAACZtNBAAAABlBMVEU9Wbr///9a8YjqAAABLElEQVQ4y7WTza0CMQyE3xMHjpRAKVsaKc2lpIQcc7BiJv5ZWwhuEGmzfF57YpLJ34/HRUbCIdLi979IfroCOLMwAh4bKEtEugsrzLM+FW7CCKwQQ75IiDVEvAdZmksGUyW7LTN81hid36HaVMYAoluOdU2IIfGOF2aEOmIGSB6WjWTAhKgBwoyFVPSBglVhpwhtwCTNARMeDXq0A3rAgGp3FZkOqsQVFto6QQDjhGawFKhCrzAqzAr8EeZHgV47oNd23ja63vw524NZYcTukG8VKcQTe90q6P75+awKHCd3t2O8GrAd8AofdLwMxEzBxTsHu6vcSGk7GWG+CCHGWknu3r2au/dQFxggOFGywv7SDuF6MWben7x0ClTvHMRCIcTQStZjeEletO+PJ5WePxWsKLQ5AAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.beyazperde.com/aramak/?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'Box Office Mojo',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAPUExURQAAAACe/4CAgJKSkv///3TPSakAAAI/SURBVGje7dZrjoQgDADgQjgA3oD0BHsEf3D/M608CgWqo84k7mZoNj5QPmjFcQFmzJgx45+EX8/dZ/wWq9i8xh1sR2F3CHi5GULnm8A2fphCRNZXKUCe7doAsaEB0jimA02+NSVtwkkF0vRyCmmmpi+ZKWP5eJTHGYFc7SHjCsAIQK6DIY/uG2oA6UK4JU2Q18BTofaAmFSu5TlgPQD8AZAvCEBJAWjJHAB+AKhU9wFzCRBW4ieB4yLuPIUGWLuFdAqoRTQM8BfWgbSU1w4wRytxfJnKDwoDytvopR+U7nWGsj4JoPqKv4DfHkuK5qgJJbZOQADsLnDyKXwAUC0gSkpolQFF0+I1UOIURUDVxBiwiElKAB2yE95qLwCWAcsiTkECFglQx8DCM2QNHWDVkIMAKDalCrDd88CyB6i7gM0VFgB7BbBfDcAEMgATeAtQewD8TcDKgH0UAN7l+ndBBK58mfYBOPdt7IHmOzwCdgeAAjT/CdSsxf4ywP81Y52k/i9D3er1eQDeBOx7wDvdvyN0c4bxbwsHGl29nk/OAzoAGHoRgHgaCGNtm80Ip5ru0u4GoBkAuAeEydFcA4Ap5Qi4cN1VwKXrDRBT5UAYVlcAKRHMzRqHFFwpXgQ2jwG0hVKWEcCwdeUp9ADELdJxVzYB0BoGgB5pbh0BpxmAHYDtw5SAbdJsITkQUjgCXAcAAQg9INQgj4UCEBrzEZ8tDusAyrQK8FMuxF0FUjmFBek++lY/AODjGcyYMePB+AUzahMgDu5KYgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.boxofficemojo.com/title/%tt%',
      'showByDefault': false},
  {   'name': 'Caps-A-Holic',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLBAMAAADKYGfZAAAAJFBMVEUAAAD19/qAqNrc6PaNodB/0e+E3/PN2u2xyuiauOB+v+at5vbJRbT4AAAAAXRSTlMAQObYZgAAAxlJREFUSMfV1bFrFEEUBvALpwSxcRnlxEpWC2N146on2sWFaC2T4mwE2S20SThhN1aGCDdnJUcgt+3JgayNIPr3+d6b92Z2s5cIYuMHEgw/vu9ms5n0/jJaJcmfzIYqbTWPt6bD81SkRsQgR2eifiQMczI8UwmjfF3vIkzi2d3623pFrAhs9WLNGU+zujbme7fMRbXY2+G6MjqDZyuzm7/unrLN7gLL83zYLlvDDLIfLRb5jMrZXDaBtT7dRuJZEliOaR5WJbrJaBPLsK5Zlvg61WKtQ/SB6TaTzTx71dgMThXMuMy89GyUYOSowHCTlTGyulFMuC4w3sxM+MFuFs612K4oI+/JoHBOB8abqMby2oFyjthgtg1s16u65o9myXGdKo/TNKbNjNQy3iPWt3bKDhTaMl5hGSl4OJ/dCaw4IIlW8GWAo6Lim8QeWYxzI1Tgrq1wEgYxtwKjwklSRIDQfTKkKHeIHVQLccUhlFFurEwdc7aIzSqIGy73E86gFnU7TYUJnGFZr4erjFLMEFnFge0FMPwesI+uKDD4KnCH7jaqu09FgfX9/6rjp/BI+D29mobsMZMAG/47ttMYfV4dp60jhDxrHKHidNh2nLoHsgkP5MDaSnIFGXfHmPB4Z9Z62MNcwCK+IA8TjpoWJUNm7wDxjTb+ophdxxfBYmbVgti9mJUxZqWd0uWkEGenwkTlb1ydHkySEToaPiJ2SW49uFyy+hCcVgVY7z4Q2wwqz8fxiYbrHP6Ro2H+zaJbGwIqGy/h7VnsRxGOF87xJTIHxWVmvIzh75/G+9C7nstjrzJTe6ZkdsLsosG4X+A6ZgZ17PaZ9UVlZkzMTpApdv5WxUkuWwqjOnJXhD1A1WX8g+tJLpucN4XpUNe4yXOKXC1bi0KHOtiUPKQy2GQGR5U6TYBXpWzJLHFM8abkF5Z1WSQs1BnaZDZhpiIGUtdlFDmA1NFmYJqZB5yfWLZkZoUNT7N+1mSF5slOntAmscoWCU9286DDemvzftlkMtnNgWd4VFHdjOae8eL69Ms5sqmmqnMlfqj/Kr8BJs8kLYyO4lcAAAAASUVORK5CYII=',
      'searchUrl': 'https://caps-a-holic.com/index.php?s=%search_string%',
      'showByDefault': false},
  {   'name': 'CineCartaz (PT)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5BAMAAAB+Np62AAAAGFBMVEUAAAAAAAD///9PT0/MzMyEhISmpqYnJyfXwyKXAAAAAXRSTlMAQObYZgAAANRJREFUOMvd1U0OgjAQBWC8AWMN7B8Y1xDFNQgHAE9gwwXw/gspQlx0ZlwQjfEt+2XaSdOfYMyGuATPkJDQq/SqSUzoSuWsU1IS/rue+rpuzrwai+YI4MapqZCSAZBy2gHJpMh8jQCURE5bXzs3LKmZhy07825eMGe7us9q+rr1tXMq7lWlKtbqoGqmq9pzK6l1WkqaOz1IunWaShoBy6Exg6fxpOmV4gK+Uo4lCXEnZ0nm66v4QpzGdsK9dBeKamzr927o9/Rzb6z+tmvF7/4U/T96AMVQf7DFdYQdAAAAAElFTkSuQmCC',
      'searchUrl': 'https://cinecartaz.publico.pt/pesquisa?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'CinéLounge (FR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAAD/AAAb/40iAAAAAXRSTlMAQObYZgAAAMFJREFUKM+d0VEOwiAMBuAuJvJmL2DCFTyAkSv56IMZOxpH4Qg88kCsP2VsM8ZEbbLxJSVAW/o6bvPqJOk6iIjCALHCAppzHVKMYpBAip0gCxxNIWLgbDJOAG6cGrKN2JdoSDYQ/rCbEd1ERInMBqTg4CuuW4wdD9KwC6Z3lL/w+cCwYGzgFf4VvZwVtdLQkGzFqXYjajmUOQH4CmdtC91Naa271PZa4FAb7oE9SeE2C9+HYvu8GAh6i8j8XI/MT/EE7yaA0i0/lBwAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.cinelounge.org/imdb2cl/%nott%',
      'showByDefault': false},
  {   'name': 'CineMaterial',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABOFBMVEUAAADzWELzWELzWELzWELzWELzWELzWELzWELzWELzWELzWELzWELzWELzWEIWhsrzWELzWELzWEJusd1usd3zWEJNm8dNsd0LbrHzWEJ5vN3zWEIWY6bzWEJjsdJusd15vN0LXKDzWELzWEILY6YUj70TWJtusd1usd1jsdJNm8cQXZshhbyFvN15vN1usd3zWEJusdILY6bzWEIskLzzWEJCm8d5vN0hbrFCm8cLY5shebELXJs6m8vzWEJCm8d5vN0LY5shbrFNm8c3kMcLY5sLWJshebxNptILY5sWWJs3kMdusd0hebELY6YhebFjptJYptJjsdIskLwWbqYLWJsLWJvzWEJ5vN0WY6Zusd1usdJjsdJYptIWWJtCm8dNm8chebEskMcWbrEshbwhhbwhbrFNptKbqUhfAAAAV3RSTlMACmgx7OKPdWFXwvc3gyUUsZxOF+GkVw0K28zMwLp3aUM0GBIPBvLsxq6loZqYi4FEIx0d3tfBv7OKd2pSRz0zMifq5+fa1MG1sJdlXV078fDgwreNiGDeTbgzAAAC+ElEQVRIx9WVaVvaQBDHJwQI4b4UUEABQYFWFO+73lqrvQtBErz9/t+gMxvWhBzVPk/f9P9q2PDbOXZ2B/6hZuAvtLOxunx397B8ulWCtyi2cXgzGBxt7MTgbUo11Oebm9VxNCsLnohfCoivEJ++qOrzIQKCJ9gZKhQPCK5Atd7vq2ojAyB5O2Z5JRcoM3eNSBEgOumN+z0ofyE0hHJhFwIRDEqUjPgFOTgML+CAzPUQQcKqhZwO2Zn5HiJFNMhNfCUUWilIUd1TQvdjje1DF5E6WfKkkXdchzzsh89SgwlEZlMASwW9RolAWBTDslQGUoAtRkYPpIvIFBbLx/ZjcZs3lVholREniKTRByMSAlQiOfIVlzk3Rh+kkUwQwdxZRT24kMRDYT988rDatNmkuVyEpCAwGnGFNYEfmJL0bclA0oisAdBOcTCpHDQYMmWjf7uoFtvIWwGzBPrjLneDNNc0IdMsRQ+MqoyxBXUTrTHgmiIkBTl0YmtZyi/Ki2bk/54QAKov2OTjrj2EZE1IGqKOvQcRnsICBfbLhEwwJOzQydy3SGzTjLDARDsimhAZTvaNk0yzqMOOSIQb5RmtZKoYlsQxl3Cnk2SGjNXeRsQ4lwwkKVibJF75CG7Y1NrDa8+Okg5rxY4E+T6FHMzUNFPvd+fZrYjaUuG3UQjJsKmd8PUWIrNV6vCIFSnwOy/HIVvTPvL1RUToUiZtHSP7eBETZfipadvAtYYIXX2/pS+Fl3dyaRdKmlbLmnu516sDMhi5owTIHmsUl+GGHqUWGrui24udVzRt3/qOXU+Bq6rniqI1wawWIf2i6xjMK4pSizm8yf16xpEoHSuobesASyOiql93HFz8UEhNsGpxFr3gFDvbs0zPzQNG5KtgZ9KE0Ky8eAm6fbl+f68TWcdp/E1HBoPB8vd3qNOD26cnHTlHwlFFjuDcf3h8vL0lhJhNcNXimQOi5PfhT9prWJH1K3hNsfHGEUc+r2+14W2K7Y1fbF1eteF/0m8ceNWfw2T0aAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.cinematerial.com/search?q=%tt%',
      'showByDefault': false},
  {   'name': 'Common Sense Media',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAOVBMVEUAAAA4qElJr1k+qk42p0dErVQ7qUtlpW9UjFxPmFpBrFEzNDNISUg3ODdCQkI8PTw5OjkzpUQvMC/uHpv7AAAAEXRSTlMA40+v82zKDiA0j+5N2XahwmYJvSAAAAPESURBVHgB7VnbdsOqDoy4IEF8Cf7/jz09O7tenpopwcl+67y1XtHAaCRhc/vDF/6glp2LT7hs+tngOZYkIdRvBEk+OvtQdFdSqA0E8fF9jhxTqBzinb4VvkjtIKSo18OH+gqS4xR5WSaio51WTxF8Jvlb7tu2PabWM5fqAKQ0N7Fs/2A+8ytRhyM1NjHdtyfWk3K+DkPiKf68/Yv5BXmCpFKi+0KMxbe8G37IZI+NEDg5ZzE6U6xtf/YAMOi67UCJYqiIFLO2bOZ8qAivzfj36Zf44VeXF2EMyyH+8os+vTrNPjRVmu4HgY4hsmDeut1M0RHBPcPMJL4l7AG3F2DHmvH2w0Db47hG9SDoi81YY4BygwTPmGBqOgZMnLhnB2IGyjIcHxhCfBrokGAwkPrx+MBQiIGgAsDQA3ChekUDYYLRQWl82MZ0MtBsN5JhyVfONbxD4Ab2ZF0BGggQMQHXMIGBAJreEoh1IHDBN8rV+IYGQpQ9vtjF+GCg/PNhensD3ECo0HAG6IghCvnPGwg9FC/GJyMG+uhFhciIISnwejnBYCB1JAXoIct20UAlwUr9TnAktnW+z2tfs8aIiQHLac9xyCdd52m8Q7hQAyxMWmW8gKgUOGL02zMBkrDn+KCcPrY+w3nE7G0BCKBTn1vXgzC0zyjmzwXVqmMl1u6NGC21QwA/ZQzcQKW+SqArZ+AGiqFDgOmDn3cMZNB0CEHSDkNvxETsmtymnIF3CGw6jhcaaMAZtDViPLwp7Ejw7x4DxocRo6nd9wsqxybJtuihE7aYjWgRsV1zhu/eqtMDPdwZLO6UZcZwXyezvDzuGxqoN1gE+zWrpifH/fg3nFHUM609MHcYAHBGyYEtNJJSIwwkPg0D1I71tH58TUQIeOR1gAHnqat8mfH8jHsJXYspZkJn6b1/2PpzE/OiuMiAHkL45hYAE1DMi9ETumR2uOu8Y+Zlne9fmB/rZOQAzbyu/rW3cLWczZSvkB5wXXjrNdMSbKCzBXGj8dX3X7Oz8M+gPWipZAMkS5yBx+97RNNFBi2hcpcTkWpy4+snApFvmhK5W/mHaK/dtZCPjgQapQ4oq57fPfAPpyP+tgQMwXMKvMVgCeYMfYoM4UkH6DPUkEo+cahFL3U8/v6GcuKI2VT3S8GC0fv607qBK4rk/48koX/J0rfeKLzdRpBTHQIvSi6TjCy/Lw8voT6u3jaqe4lCIqo/SCHdu1L7D+97pTj9yH24bzhfUnF2+xQsx+JTEpEgIsmX6LLePg1Vs5yteSj6wx/+B5fdxmVn7SMYAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.commonsensemedia.org/search/category/movie+tv/%search_string%',
      'showByDefault': false},
  {   'name': 'CorruptNet-Trace',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUNm7n////f65sSAAAAFklEQVQI12P4/x+KGhvxoQZGIAIqAwD/ohMPaSbQBQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://trace.corrupt-net.org/search.php?search=%search_string%+%year%+type:X264|DVDR|BLURAY|UNKNOWN|XVID|SVCD|PRE',
      'showByDefault': false},
  {   'name': 'Criterion',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAACVBMVEUAAACmpqajo6PKismdAAAAAXRSTlMAQObYZgAAAF5JREFUGNOdz8EJwDAIBVA9OEL3yQge/ND9J6l+awn0Fg/y8JuAspUCTlwA3kGPrBCddAbWEq1WS5Y5m8HrZeTuykWCn0qDjiPgj9Uw+CDmmMnwnTWwgRLMBopbtnoAGzIcJgpAhWQAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.criterion.com/search#stq=%search_string%',
      'showByDefault': false},
  {   'name': 'Criterion Channel',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAALNJREFUKM+t0MENgzAMBVBHOeTYEdIRukEWqxRGYxRG4MgB5dc/tisk1Ft9gIdifwxyrY5l3jOwT1Rg+AnsDFqbtVhTIQ7rte5GwIZsDLNWwuZTgDGNQUWfEoMKJ7riwbCKU3HKvFS+p2Ao9M2Z4C5JjxrTBZuCa/bF8VZDtJ4BuWL8CfgFrnHDatDlA3vgMOjXBoaBv8XhYxnAi0iAB9zRAw2eXQMlkAPyRQ/UWCQHpBu8PuCvwXlfI4C5AAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.criterionchannel.com/search?q=%search_string%',
      'showByDefault': false},
  {   'name': 'Criticker',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAGUExURQEwX////1zK6woAAADMSURBVCjPddKxCsIwEAbgKx3USdwcxL5GhYKvpKMgpKODjyB9tpS+QNwihJx3l1xpKc1yH+G/JG0CmAesIEKGXaB3GcMMPWIoKRMLDACCCAl3yLhRKd0UXAcr2KPjTF1hwgMn+DpZGfHnFTyzY9ic8TAFZ/ys66C4CEyCBwNYjPB8VELNNRCaBeRrvEn/Q7qOipNsSjgzvM4EDTO2hMDhj6JTtAyv4PBLMWa6SsNwVcAmdekJ3zM0BLkKDtNoFVGB9pkhe6UXYGD9kfwB9L1rtmDnK5kAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.criticker.com/?search=%tt%&type=films'},
  {   'name': 'ČSFD (CZ)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeBAMAAABY/L5dAAAAGFBMVEWqAwSEAQH///+nNTXmv7/RlJS/YGH04+MSjMyfAAAECUlEQVRYw+1UTZfSQBDMKLtcZx67etUhH9eEKFwhgF4hAl53o4vXJbvK37e6e5IIyfOpRx/1gHQm1dU91RO8Cy644J8wsWVZHrueYD2KhuerhQX8DvpLS2jxM3+xsGEH/8o+Lz7aaavqCjld/F4Ue9d21ap6B/5jB7/vo0Z5d7oIhRg50w7+KEANG593GVGOv2jDhlSj3eVy+9l2wt9us6BV1f4WYZf93ei2P+fK+zYemN8yLmOVznEBtXFauY993myYr2m5+VU9u1x+tHfgtMZVTj0sIt39csbIpxoJYiUSjFvYP7CrSkMhcIxR6OmerXQ1taSw4nv6yt4zU6uX+y98pSr5UPO4tFR1iv1Aezc25nLqPTb/vTbijaeLgMjMFXk9ipaLLGJBdVVa4IeSRyXOSBmCyvp0pSo8roDrDTLLuFP0qHpbmAhorCHKmc/tTazgieiV/dQD3UsGqjoVCHIo2dij8FfgyN64Iy1VH0m/Zx2imMbV5/geHNHXXOiVPR6PdoZk0xy8mEgj+/xc2licYLfZEohd2zXV5HZElB4VsGYScWsydQ5ufK1ubaw1KtVYkRLGpUa+1uJuVWMUat2PEspkatN0OVWqCBG4nUo0Gir1wqfN9Bs+ysGtmTY5jKvPB0e5v99lgUHc8KkcxvX94cG+YVWSc+CRhrriN/7fcjhDCDR8GZeq+fVtT3aiBJ67vhSVhiAzBfqdfKm61uJn0z6M4LjqQ67UZXSkAwkMyqodDZjcYu6+OdPv+0nctwkvF7W8xn02jOMiUBXfKE0fjMu8jrDAtRhzZ8TMmCJ0NHJJNJ8Mho6QFr/J26Xp2cCuUePJ0cA3TMkPGiqiYQa59T9RBNa1vTe6PFBIC57QTfljvy+HUvXhI5rfKUPrMG6HP8QZllnMk7SBvH9cDN1IP5z82tkPHuvLPoQ/Ra4BXTAXIzhOSIn1pQU3LohcNaeNSKbgkGoZ1ejfSFUjw3IYEkP+5U2jTz24LnE/waUpgAQ5t6A4ffIJXQZpWvjGNPJy/LDwIU2zUAvdQJ+RPxrkGEV9nTQ0QJMmOxihy36pKg8deSd8FLzFmdKwX3Pblb4u11AZwtZTJPomMuYVGQcofDwl9n9K0/IAm06xxhlM03fUE3cj+lCQ7cHsU8xkXBG3wjkevujS2Z+d8Q9uXI4s+gjkHd2N7RnCMfsbOPmqH1T9LWDcX/GHoFwnv/DzEEPspMK4sT1gh9tN0vCzNXL8bRs5xjWg4Xwdj2cNv6ShvzVtvOZx4el8+7RzfFpBLZjdxiSQI2EOm1nNx8qX9D2G2UaBczuxBvrz+YeKX78tbbi3Bf0n75v+5W3poMvAA2p5uWn8HKSELj4/SJhT+f/HuPAv/P+O/xPX7k8uOdDYkQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.csfd.cz/hledat/?q=%search_string%',
      'showByDefault': false},
  {   'name': 'DDLVillage (IT)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAADw8PDKysupqaP7zg8XDw797FxzbGhgx+PZAAAAAXRSTlMAQObYZgAAAlFJREFUSMfllM1v4yAQxSvtRjlD9uNsUDbnQGNfWxk516q7iLO3FufEicW/v8NgwGzTHnvpi/wB781vxlbku4+XO73nrgXjnO3e9EcmvQR7g3LhTZCUNxNfpLxE3UqsmsZFNa650cCNFUdbEOourxDrxhFCduBf4PozIzJgT0AQqPy1cf8hVs4RWkHpNILNyMZNZcAAYPebBG3MHhBPRWCCCSY9B77rM6AKxNqcCTkkgoaVK6bQ0x724QiScGynZQ9jomf7NIhePIMeKe7+sKoLPqVTETiHbQXqAqNqdO6hNaMIOPrEIwLodhkwpAoTeEIVCFyb9JCToTR05qpl8wxc61P09TNUhTqv+W7S5hQm1HpkEQEKV8YOYOAAoDOUlapC4GkOCCRkUSDwLQZCQkDnEgCEHRjpNTBA0BLAIZBeg2CIKABC5oDmiFgCgCAXBMYqUAa8Ikg+TwE/GgFLghBhCg+pIqAgRATNgIIgEZHEEFASJOcsiSNgtwiMsq4FehWeRV1L0aTASl+k/dYCIwPsRsJfKgWea9IPAhkB8Eh6IOSA+WXt0EoOCv2ttS8HDKDMn97aXokoWVtYO52/fdbrRSZ1uD6mQN9jAhyB/j0u+z59vvxyGIa2keHXDgNGYuArrrpOyaD7rguI1CIAhjSEGhDxNwcQAEK7rrsZkQLK1yul2hng5XdyoPMA2K1xBKUQp1Jg7QuwrE0A3ElPgZ8FPAkmWK2iUotj3GkZaMiBpLhzhS+9u5Z+ngM0aZDD22P2MuUh3F1zdQlJRceHu8+mfz7Q/EjhHefFAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.hditaliabits.online/index.php?do=search',
      'showByDefault': false},
  {   'name': 'DDNCrew (IT)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAD///8AgAD/AADHpfN0AAAAAXRSTlMAQObYZgAAABJJREFUCNdjQANcS+M/kEagAgARQRPtUKEoxAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://laforestaincantata.org/index.php?do=search',
      'showByDefault': false},
  {   'name': 'DDU',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEUAAAAkKVk4SGWr1vAsLpA0NcNaYHXZ5PFBb+1KSdhlarAWFjZSV+eKuPB6pO92g+hFVaw5TuR3gLpgiKmtu/BXZupRkOxoaeldfOOHeuuMmrKSk+6gssFxwPFVsO9XncQeP7MVAAAAAXRSTlMAQObYZgAAARdJREFUOMvlzstyhCAQQNHmLQqiAoKoM///l2mZqMlUVlkmd6NVfaob+DPJo7ad2iOACau/07TVecuPhDaLMYaCi8klrYVOK1MF50RgXAitlyUh6E2MRmttXFBq8wBmxDm8WhYK1ukOakwpRQGaZuRwgiBBhQHBSzAmKyAnWFUF5AIBwTi+gfUC1lo8IUZzgbxRIO7e0Dt6bGgo/FzfJ7RNM/8a5GwquE9sxcM2+fMNMeq3DcxKUPYCRvMOWe7lDSjYG2hOEAxfAaPQz/7cKHiHgA9Zlm+g/QREEAT45cMwFVlKUSrgif3pn37wfoqCV9ARjsQ5t4aAgDG2Px5znm0cBc6rQCJ0SotbKUjF9v0xN7l3sYP/0geplRBUFRcD9gAAAABJRU5ErkJggg==',
      'searchUrl': 'https://ddunlimited.net/search.php?keywords=%search_string%&terms=all&gsearch=0&sv=0&fid[]=1381&fid[]=1572&fid[]=1573&fid[]=1577&fid[]=1582&fid[]=1583&fid[]=1925&fid[]=1926&sc=1&sf=firstpost&sr=topics&sk=t&sd=d&st=0&ch=300&t=0&submit=Search',
      'showByDefault': false},
  {   'name': 'Douban (CN)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACVBMVEUAAAABdhD9/v2am9qEAAAAAXRSTlMAQObYZgAAAHNJREFUOMvN07EJwCAQheFL4Qju4wgpPAtHuH0cwUKnDEE48kQIiIb85dc8ODg6GHJkEE6yCJ74BXgOpGplG0DrQHRkKbSBH0JrJ+huzXr1OIQAkG5ICmEIESAjcANGEIDSgQDUR5MAfQSebP/7BsERIdAFZIivQa95DQkAAAAASUVORK5CYII=',
      'searchUrl': 'https://search.douban.com/movie/subject_search?search_text=%tt%',
      'showByDefault': false},
  {   'name': 'DuckDuckGo',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+BAMAAACB77V3AAAAGFBMVEUAAADeWDP//v7s08dsvU3+0Qv0qxc2VpMvP3fJAAAAAXRSTlMAQObYZgAAAgFJREFUOMuNlUFS6zAMhl9vUCVvvLfM462tFPYwuQALsw+d9gDATK+PVFnIbuiUf9HW/WxJViLpTytQ+R89dV3B44SIU/YNHQ6EqrQArPHIRxlAYCP5csOGMR9TBeIN244LBpds6K1Ti3XZWh8QemFsPEDA3GP2t4AfF3OE+Nh72BoPuJzv18bI/xmH4V48iviH6S2CmVfvYY+IuYmgOoCxmt1rbk2UQTlFXTNuLQwJqnldCuxiVAebah5N2R0IhyFqOKZonIFwyq153E3G2bC7JwZnTlMXwCYk5YnWASzMx/vK1wG8ZeaD3d5EyQPccvjZuFr4//nNR74AkPF0ej7zE/kFhC+V350+GPMXGg9nDt/n31EFJuFoHHfk/FBeJQHO9+iCYylXeZoeimhx3j4fgXr6R/7P8BVezLZyu59VdyrlBVyeH+e87POTLQEi457foeMPGlo4vNTnY88XJi2gQynHQw1xiPX98ARFCPUG9n6E1F4wivHjsXm/AC95XyByAecJuvC1PnRFF1xAU1/BeVtfGoAnoHe/rm8J5snr2/sD80n5PFt/6PrLhPNMGOGvcOsv3p9gz3zezSLvT97f+MBs8v7m/bHj1h+9v/bc+6v350DOvT97f6+cgLk4XM0H2s2kGSD+WM8XuhOM0ebLaj61LfDGfLsxH389X2/N5y8Kx7nDSRIlZAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://duckduckgo.com/?q=%search_string%&va=h&t=hp',
      'showByDefault': false},
  {   'name': 'DVDBeaver',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABZBAMAAACnJZWcAAAAGFBMVEXGOiEAAAD8/fx/hIWZKRQtNDWSZF3RYEu9qOXXAAAC+0lEQVRIx73WP2/yMBAGcAsiOgeUnRyKWAFD5khE3UPkPVJQZsTSr//e2TgXx/mnt1KvoqrNj8ePw1Lxt7OpJU7TLLKynWoWy+6k1aJgjp/FaaNnjm/4dL5tNfUsnCexJj6iCVf+aWmPcdDgec1I6eXbGHISwzz1Nxn7MZW/l4qRGQjnaP9YL3w9EM3n9pP8bm64u6boxeE1RU+FX90i4gvMvFawp603HO2OLcpFWg0rONIewN7u0EM4OUW6Gjy90ZqLsP6hs0kL4Cq1dIqwxsi9XrJ2qqxlZd7Wv/dv0tSn3XF0LWm3rbtytNBa8DOUHf0mfTSm3dGJrT6xXpEGT1Nbe8nK0V90L3q5+mQvKRxtcx29sbru6zfm97WwWhrN71F3T9fXj047GrQ+vum58I7ta88g/YNjNGjCO57mb978+RL8zTu6Ys1MsBYdvelputigzowWfb3yNDKj165+GX1kLTw9N6TzRfpX2QsnMFotGpsdLpmINBUqlujd/2jx0Qp/JnVg9FkvAecwpTOjb62GySaeLuazpdGJiqCI6LOlLFQRqmKHCxWZt8vUZNcfHeOLToi3eAFI8OO0gAvoe8lr5miaiMAFAB6HEB1poJgwsnoti1bvINzGlziCLR6zTXCBJyS69pWsuSZreYl3lwR2pA+4gPBh9NNq2fYubZMQPfYH1CEdXcp8SCt1hqRE/cAmuECta6dW32VhmyDbniGmHpBQb9KmttUbebO60IdTkwvEukmrM9GtAhq1vR9Q7FhLmbOmKoomVPKGQWcVRgqvhgv1iWa9xt3JKXVtDp/WUj6zrj5P4YiLLKgiWc+HR+aJ8NQcPh8tAgyfiH7m3v/0xVg0F+F7jnUpMdpqbj7SpaTovIeD7+EuEeE2mvmduYtTjubJsYtUHuYeXhf3qlFpMBXxOT6XbrzSyydH+110vsLRufQtsvY5zxwWQX538ZPw+GTd+DRnPJKef9fmAw1Sfhxj3ck3dfrMOXmKB8Q4eG6WWu6fBeKP5x+4izl/lToXFgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.google.com/search?q="%search_string%"+site:www.dvdbeaver.com',
      'showByDefault': false},
  {   'name': 'DVDCompare',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEXBwcH///+BgYFYzCznAAAASklEQVQI1w3JsQ2AMAwAwY9FUMxUkSUGoHABJRKL0GWQNJ4ybq45OlSAgkQI6m7U80rUjE3FoCXtSHb9M8abfLdR3AVA6KA8EXMBhyALSwGkTQYAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.dvdcompare.net/comparisons/search.php',
      'mPOST': 'param=%search_string%&searchtype=text',
      'showByDefault': false},
  {   'name': 'DvDFr (FR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAMAAAA3HE0QAAAAgVBMVEUAAAAOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9AOl9BxSe/zAAAAKnRSTlMABeilI/OvyPW1i1zTfVY34d3ZzpFtYUtGLCcfEu7Cq5+Xg3Q/Mg8L+ad1KghGAAAA/0lEQVQoz22S63aDIBCER7ygYtQYLzH3pEnT8v4P2HPCrkDl+7fMAMOyYAqdErmQWT8e4fM+63/sFFwavaY9OIYvHeJpDXHQkCdgkkPCzFOxOK4Ic6zYMQORwxsMOzaIKi0Y3YPZkyHDSzsMWNialQqDa3hZAwXd4uboInLezYZrd5GFMFUBS0YNx2fTjiNbJIU0XdKGvdW/U7P0+FQ1NfZkDZO3pzSFxCpja2JfTHUn0bm09O5Tqzf8mLl6kt3OR8k/4Q1LB+aXdOmf96BSCdJTHpeWAjV1rYZeaGYifdZB8gbEGNSl7do9IJ8VLN3q8KyGwynO4oVbuRmbyJX/AD17SE6ExA4SAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.dvdfr.com/search/multisearch.php?multiname=%search_string_orig%&x=23&y=10',
      'showByDefault': false},
  {   'name': 'DVDTalk',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEX+/v48i8xGq/E1aqkUNEwnU4hoZ2WrqacPFyDw1QJBQUCpmAl3aQLFw8Hw7+/l5ONcV2OVAAABIElEQVQoz2OgD7heXn7/enktA385kAESWOLi4tHh4vGAqwXIWA4USFRSFHZRUim4YQRkRKwDCQgKGyupJqQYKikKGneBBQSNhRT9lhqCGBYJQIEIZ2MjRTfnQCULV+PQPqCAW0VwoGIEUMCqyjm0HSjgzt4crCgRHKhkxt9q6gYSYFgaqihqDBRgSIELAG0KBgqUwAUMBY2dQSpC3SBmhDoKGjcrmX1btdQNYktos6Bpi5JZ5umtIFsiWo1DWgRNzihZdJ7e4gdxaUSJocXssFUrT+9YDvFLG1tgxMyTM0+enrkX7NuIBHZHr9k7TwIFEhiWhICCgc91+ZyTO4EC+xjK0tJqgcGSUb5n9ezVp09vg4UkH3/t89ra2vK7DHQBAPkgaNctSlxSAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.dvdtalk.com/reviews/search?orderBy=Date&reviewType=All&NReviews=50&searchText=%search_string%&searchType=advanced',
      'showByDefault': false},
  {   'name': 'eBay',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAAD0BAMAAABeARbNAAAAMFBMVEUAAAAAAACZzAD/zAEBZt7+AABDQ0OGkn5mZgEzMwBgAABATaf+QEAAGjgBM28nJyijxz+KAAAAAXRSTlMAQObYZgAAAjFJREFUeNrslrFywyAQREljlYYGSn4Nmqg0asRviyptZtJk4ksG7rJHY14vLewuB2axWCxenPpFMZOpD/fNPlH+dE/E3UzhbI4SZ+z8cL/zYZTZmvsLTzaupkwh2hrK87WJ8jTt7HpEo8Ph+nijwc2NEAxBO2gaN97u+XFvbhRrCHrtppYrd+x9r7WeD62m0Y7RO3oj6skAuT/dUuVnD7Li4c6dME+1tG/dV8HWlNI+BtzMKtvehl5CTeNsv5H9dIeOwsm6BhuR4H770UoEuN9l2B6033Z88lxgvxmjJ2D9tpzZg/WbNXEvpN+WNXID0u/Cu2gA85u3jTtwqnB/NZgPJ7zIdcnDorbsux32Pinsw5hQUQt8Ap3qwG9HAD1FE84obl8l3xRIy7zEqQvSMivph4W0LEnuOg9pmawgiFkWZROwAAoeMDFJUrPa5aQIl5/F0tS5gsqJP44B7RT+wgOWLJQO2kFRDmld/i+dpeezkQ/Bi8fbRaUBSUnbotlPNxe/pD/Zm0MCAGEoCoBkoQIVqICiAJ4SZMGQgjrLMDn1vpi+K3AltVqtVqvV6oJarZ6u3+xr2fVMWob/iM49u7dsrajVarVarVar1Wp1b98OagAGgQAI1kJNtpZaCyRIQgg/FHAPQgghswZGwaLRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDQajUajj6NTv1z61X+sb48X4A5Do9FoNBqNDkKj0Wg0Go0OQk+nn7W9lySdUwPQF080xci5zgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.ebay.com/sch/11232/i.html?_nkw=%search_string%&_sop=15',
      'showByDefault': false},
  {   'name': 'Eiga (JP)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEUAAAD9/f4NT5t+ockFyFtBAAAAAXRSTlMAQObYZgAAAZpJREFUOMtdk7FOwzAQhi1GHqVPwSOwXIxKFRgBiR2CVPESEWuXSMRWYPKIeArvjMiIkaVLuP8c95L+Ulvny/2/ryedYZ24Sc9GtHIHver7Wc3pHOzUoZ5yHhO+NSKQlZAS4YmoQUgBA4NawKo4WEgtIAIkBRyBEAW9gLUCzhwjUhVU+ADkzI7LewBXAALJKgh0x1cvQFqCroDPAiaLJ+N8XQDfEhj0cA58i2cQGQyw91TzofYEgGpPNgVaDwBokv1Q0wEEtpZ5BGqMa8lOE7N8TgbvknvLM20tdyqTalPET6yc8fIq1gNduQI4lW3vLgOZpkfiBAaA2zxyCe0A7klK5NoA8IuvLbrZmhZnlKEdtC49Sxn+8ARsS6K9Z4BDBSq5MYOaJjUhg8sC7E8U8FgA55qp0aJkcl9awmAcO1KZPeY3B47V6rMVEOdgxYBUFYCfgc0xuDgGDwwW194wWJR85/X4OIAvBotOdrJimmJ5T2fgiSqsqVpSu8Ei53X5Y+DCOVZdHHWHoYczAw8czQDLixGdeD4DXPPDP+qQ8OwzmI1vAAAAAElFTkSuQmCC',
      'searchUrl': 'https://eiga.com/search/%search_string_orig%/',
      'showByDefault': false},
  {   'name': 'Eiga chirashi (JP)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAElBMVEWhjHMPEBB9bVozLihFPTSMemVSmNT2AAAANklEQVQI12MQhAIGYQUGIGAyZBBiYGAVFBRRZBAAcgUFhRlxMkRADDCAMxBSeLTDrYBbCncGAG67BR2ovDFTAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.google.com/search?q=%search_string%+site:eiga-chirashi.jp&tbm=isch',
      'showByDefault': false},
  {   'name': 'EkşiSözlük (TR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAKlBMVEUAAACCwkqCwkqCwkqCwkqCwkqCwkqCwkqCwkqCwkqCwkqCwkqCwkqCwkq8qML+AAAADXRSTlMA5zcNeWQltsmMU9Wbyr8SygAAALhJREFUKM9jgAIWBwZUoCiEymfrvZGAImBz9+5hFIHYu3evIvOZZO/evaiAJGB+FwiKkQR8QQJXUHVA9CB0oOqJBfMR9rDthQjchrmN8y4UTID5AyYA889cmMBNqBGyMIGLEENY7sIBJFAsEALNYAFdhMAlhLOQneaLELiCXWAtQuAWWCARISCE8DxyALAiBALAAsy1MP51Axy+5ZKF+i0AFmSrIQK7EDE7EcSXSUCKBw/Zi52QWAAAlBTMPY2+wdQAAAAASUVORK5CYII=',
      'searchUrl': 'https://eksisozluk.com/?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'EpisodeCalendar',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEUAAAAAAAD////cFYzeHZD75PLhMZr+9fv86/bpabbnXK/iPaDgLJfeJJP98fj63e7ui8bhOZ7hNpz51uv40+n3yOT1vd/0tdryqtXvkcnsfr/qc7rlUqrcGI1NExE6AAAAAXRSTlMAQObYZgAAAI1JREFUOMvN0tcKwzAMheFG8h5Z3ev9X7OtSyjiYBoIhPw3ButDF8a7LdT8aS1AlSRofYq9I3L3cbhZBHbkd8Zp8zmjBXDlkg/fswcwsCgCeEqgACgJMoCHBAHAQaxQewB0yr95OhIC0mGa+5YAlC6qrD/jU091htl0VAekc9IkwCZ+lAyv5oGm0iywvBdEcAcH3T6a8QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://episodecalendar.com/en/shows?q[name_cont]=%search_string%',
      'showByDefault': false},
  {   'name': 'Facebook',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAFVBMVEUAAAAYd/L+///A2vrO4vzq8v3g7PvkVQHwAAAAAXRSTlMAQObYZgAAAMVJREFUOMuF08ENwjAMBVBngxgBd0LpnQoW6AYgZQL234FWyPmxnYR/q59+mlYyIYE5EoLxL3bOJXaO+LmXoCGiYGIKvsIuKNiKKZzTlrtUAMcEUCetgKggaWDJqQKu4bCPPw9uwgsXxiuWDbgDcw+uPZi4hNg1/sP4qGfOaUvObwNrkvTgJhAMzB2Qi0UHFwOL3Apgv0OA2l9OGqYaQgviCKgFNIRgAHvgAYsDULtmAcupIVIJwC86/hWpAMhEjiKfvYGnL2ajTiJjc6BKAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.facebook.com/search/pages/?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'Fanart',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAk1BMVEUAAAA1pM0ApqC6urr////n8PPb29ujo6PDw8ONjY3z8/Pt7e3U1NS2tralpaWCgoKr2ul0wNxkudgvocuVz+V4wt7///8ArLIAlL8AjcEAradIrdL4/P0AqbRht9c+qM8Gj8ImnsoAnLoAqqRkudg8q886p88Ar61RUVFNTU0YGBjm8/hludk2p8wXl8e3t7eTk5PuAW5sAAAAFnRSTlMAFf6v6uq4uLe3r6+fn5+fZ2cpKRcX8aevlQAAAIlJREFUGNNly+cSgkAMBOBV7L3eJQGFO5Bmff+nk5NBRb8fSWYnC+cxddO7ozHOZ8CiGOFtmU+8Yo4vw7IcNPe+U0G/B7d3wNqQYy0xE4crmMw/viSpxHH3AuZA1QItEofgqAnUf5BF0g5I0aldsT8fOtUhiNWncq4qRq5+zYjYboIt6UNNV26bJ2MsE+VynbKSAAAAAElFTkSuQmCC',
      'searchUrl': 'https://fanart.tv/?sect=all&s=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'FilmAffinity',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACVBMVEVIg7P1xwXz9/qyo3J5AAAAgklEQVQ4y+3OMQ6AIAwF0Eri4u4dDKfgCA56H47SOJF/Si1grEJ0c+IPhb6kaanlM/0qIYOQIfYLWSD1XQYAXk3MBZgDOMJYBycQMizyDArmBFsJ0GDBT/BMGiYp11pH9DOkOwqw4BIMFCAC/AXyfwOTgRVQBSzCCcMNnECgVFvu2QHteGBh+a83oQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.filmaffinity.com/en/advsearch.php?stext=%search_string%&stype[]=title&fromyear=%year%&toyear=%year%',
      'showByDefault': false},
  {   'name': 'Filmboards',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAGFBMVEUzMzNaWlr+/v5mZmZHR0cCAgLMzMyRkZGcIpfYAAAENElEQVRYw+1WPZPUMAwVnE19IWaoWWBpCQtD6zDePsAaWghfLQMD/H2eZMlxyAJDARUviSNLen6Svbt3dPhD/Cf8O0L/a8JQUgbcuAAxbG6XhWkYDn3fH/ACCy6ADTHXDMnvyZa0UY1flNQPfBedg9gw8KhZHx1oAJBf0Nms8PszIBm74dBxWEaBMPv20jmpMjLh0bdYHG8eK40O3QABWPxi9iCKGOFpurAk6jjaCXpcHfrQd2eBnm/FQDLKs4oOvFBNFLPYxAvi0VwjId+sXjN0QuxtkwY2lmQzOWIKGC1iCpVmAphVBYwW+ZWCuclW5k9FK2GStp7RyJZIQF3PsHUY4dJnYLrC9tF7z4bZ/qLbEO7nAg71RxhPdWlZ5wzBZ3r8+PHh0sEOcVoUCDa5DeFRvjnvGI9OXZefzPP8bmJ/yA/meb//cvqR4K/tChAK+TqMSmDvhhAnWd8UtoTpB4J/sfuZwqetgrp/qrAlhMu8WxRCVRjH0QiYBMx56GjsjidJ3n/+Nt//TQ8gUuiOLyWfz+jKOJrCuFIIKY1Fg0LwQriVhRDGpaRQCWFC0HUBoHAjyybdhctfCdZDfgiG7dIEdWawBHUN4SJ0taQAO6lCzqgw5sxVEV304n2DL0R04ewu5Yv3aPJNJixC/uqu2dWxEhCrCs9nCb/lnaCsnyPb8KQ9NE1/nDV+44Rd8s9ahWZb0YQqzBa/k1Mg3yg8mpBkBDBkl1pkF0zBSkrBSkq1h1UC5avtPCxNM34k3J0SJSIp6jYRuRRq0yEBSvhw6Uptt/NI4VgO7g4fJbJMgQmXhfA6A8LYZ0cjLYQrCbCmU0j14IBnQvBPKSWvhBHZY23aFKS1FPxzqel4ojQWhVtMCLisJJYwQkhx0q8kjaNXApZvSmIT52CEG3kuZlMSMtpdAj+aAle3JSC7VeAmlh6iidFoPYhC0wN2wBROKSnh3UoBbVYFzFoFI1hJprBuOiw9jFvCnS2hbTo2TVsPriUUekso57BViOcV9NfOn1Y9xOTcUlJsCV5/7RzFlE0hrkqKzdZMPj9h6152612K50viv5c7TWp6QEFgVIKrJb1CPqTEzYTVSbtml5wQgPdfZ/2dASGagjS9LcmgLUAhWg8O+c4IXOCG8ArLtLvkGFUBU1oT9jiFSM6ZAkUGKSHytCWIM4JQFbD6opBjdKTncLAOiNhJJP8nBHJQw2Ml8XQaOeSf8iZ9yCzAJcVjBiZwE6XagxSYsiIlJIkA4S4EZvPVluQ8hwgjZ4hLyhCgBMxXChYSBiVWkESJJBjisB6YTxJxCMEkVSD1u+KwXRJ3LBGAojLg0XcUTlUQt3VJJZ8TjKFU54wA2zwRcMXUNHJ1PSNky29fkqs3qRFNwTw/ezl9qFGwiMDZDVi6DZP31EKU29nachmwipwta7VsYMf6H//x1/Ed+BWNzYp2EaoAAAAASUVORK5CYII=',
      'searchUrl': 'https://filmboards.com/board/1%nott%/',
      'showByDefault': false},
  {   'name': 'FilmKatalogus (HU)',
      'searchUrl': 'https://www.filmkatalogus.hu/kereses',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACVBMVEUAAABmq+s2N2ioz71FAAAAAXRSTlMAQObYZgAAAJhJREFUOMvd1DEOwyAMhWHPPUrv4ww5Avdh74JU/lMWqDBxUNNmyFIPSP6E9AwSiIBagcjNw0PuHp4z4AGDAGkLK6UaZA0VQoPSdKBWHLDsYd1DGIBioGiNNcgKA3JZjyF9gho7oDSXwBT7MwBxQDt8JRudd6Ueu5wHncBSTo7+N7d+CLoF5drRo59j9dA2d/j6sufPQDzIC/gi6JgsG1QlAAAAAElFTkSuQmCC',
      'mPOST': 'keres0=1&gyorskeres=0&szo0=%search_string_orig%&sbmt=Keress!',
      'showByDefault': false},
  {   'name': 'Filmový přehled (CZ)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAD1BMVEUAAAABAQH9/f2AgIC+vr4nyb2FAAAAAXRSTlMAQObYZgAAAYNJREFUWMPtlFGOgzAMRK2UC7T0AKnJAdrAAQrk/mda70pbCwQl76MfK+379jAzNopsELTMfT8UjVJDSN+zhqlKhST1RV+kfjr6/DzognmI7+cnXZGGWDnvsfYVPr9g16Pz+VWqnf1k3SHlzQKD7tJNW4X1DSWCQB7qOJAzx7oNORkZGF1EBm7hBsgimQGy8BvU3SJkrSA9vbIaJFPRKrpFIpLppJVklMjoUCK/XTNpLXdfKilhFVgJq4BKhJ8K4BKNKitxOwMuJhiJoDXBAwmiBBMATHBGPKVhgrucmCBTwUVuHxZcuWBkgvZf8FcFH/+X+O99+rAg40cAPzP4IeNPJX+Mb+xuwvaaTdCwrQpbUxRjRJ2NG+psNKiCEVgFY0QVyCUuIizTUwRlauWXDiUyAkgEMrVRWKYsTnjUXQ1ZWGVmYQbAwg3c4nhFyCLLmjAeGpBQk2zQHQQCiqvsMNYW8Bpg3lcF5k0xr+eHKO9Ji1jt5PP7Ji9JO6jUELT0Rtn8+hfH004lM+7fYgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.filmovyprehled.cz/en/databaze?q=%search_string%',
      'showByDefault': false},
  {   'name': 'Filmow (BR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAD5+vqChIa6vL7Z2tp5e32goqRfX2DPgGxDAAAAAXRSTlMAQObYZgAAAQVJREFUKM91j0FSwzAMRc3AAapxpvs6OHuPk64xVnMAg2ALSesDsOH6SLYz0GH6Fx77Sf9bUk0rxg/1K2hqzzu+IiKf3VbH44zOYwDYlYbYz7MfxxgRtDTox2PO2XuvMeyk4TIsQwG+ANgnY4Z89qICToaVx3NkAOKwRjqW1Ws/CtDseAsw0xrRCeAIcgAwvffo5JMTNwBrT9/9lvkqoDP2S0CYjDkI4HDrKrCfBVxuAHdluQ41VHZ73r5NJgVVB7NOIqSg/oye2NqptpxNC/F54Ii2PlGqmc1T9QJKdA9TJeQqUEFbedsenip4gNkS0RA61eQg5rwGkMhmApEYNnW8Sq3/1w+sd0HdMmzEugAAAABJRU5ErkJggg==',
      'searchUrl': 'https://filmow.com/buscar/?year_start=%year%&q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'Filmweb (PL)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABqlBMVEUAAAD7vSfwtBvtsBT5wwv9yQjrrRj6wwvinx/npxzfmx/6xAv6xQnhnx7ushTclyLmphr1vg/usxbsrRnflSv/1QvxsBz/vBjxtxL3wAzwtRPnphrxthP1vQ/tsRXnpRzsrBf0uxL0uRbfmx/alCLopxn0vA7lpBv0uxD+yQjrrBfoqRjbkyT/zAfemyDgnR7koxz4wgvbkyTqrRfusxP+zAbdmSD5wgvyug/2wA7koxztrxXbkyPnqhn/zAjioB72vw/ioB3qrBjushXjnx7vsxTnpxn8xgnoqBj/zAf+ywfbliPbliLioB3zug/1vBDmpRnyug/4wgzvtRHssRTwtxHgnCDrrhX2vg33wA/gnh/yuw/4wg3oqhnnpxrmphnfnSD3wA35xAvsrRf/zQbdkyj5vxPkpBrkohvemh/pqhfwtRHmphnnpxjvtBLblSLtshPxthD7xwjrrhXusxLclyHdmCDioBz0uw75xArfnB7nqRfqrBbsrxTxuBDyug/yuA/6xQn3wQv8yQfgnh30vQ32vwz2vg34wgrtsBThnh7hnxz9ygb6xQicjTGoAAAAZ3RSTlMABhji2pZrSEc58/PCwKOWlVNHMBgYEQr2v7urg3JuXlA8Hvn09PPx8fHu5OPj2dnYzcfHx8e/oZaVkY2CgoJ8eWxoUkL+/fz09PTx8e/p4N3a1NLKv7W0sJ6diomHgHlwZVtELi0o8PshQgAAAohJREFUOMtlk2dbGlEQhWcpghSBaOw1dk00lti7pvfee6G3XZQOshCCoP85Z+7yRKP30zz7zjkzc+cunR7JZLQZrFZDx7JJoovnsnFcPkkmK2r5z+/E2JLuHJY27hVluZCslJnnD3Pt3dJ/8hvHRbkArqoaj4Zi82dMflxjblucUTV91O8PRY70zf/0zG+7EH0FT+SgB88q+rqHxP6yUcRvEnkYuHrbwRXfnNbHxnERBb6JuAf1/c+JmvWKkvGl10WBu0X5pJDsEQnv8zm/n8MrevD0MBcx8nyViqENceujXNQfi3QjbAQPBpzoYBz+yaSqzph+uZ4eRtF/JNuEjI/BYMA9KpFJlsX9ldE/6guuZHbgNhxwezxmMrLe9uHtSCKRz0EfA1cyEyjY5XZ74k6ygW9xV48Po4Ifcf++XaIG8LidDIXKM+Ljgr7zEk4/ePoTUb8nXitNk7WiLgLDAv03cdDm8wUDXZgjXquWLGRVyx0iYcAfCtUTgiJhr1ZNpSxkwIIG+HsnLuBFA05vGvOtEPWBe6eoAwsc2RrYfcn9Y0D4g2M82iylvN4FWq4vGDwCjgsGd1+Hpd3rPdh3kAlcm79z9bXi07inEfuCfj9sJmkMC8QAN/sh+n5L49uIX0Efvo+FL2n+YgByCn/oaRv6/bADka4dDyh21CsS+gJocBPB3iDzoRb+2M33m10VCZ/B4w9b6cvgAQqE17QnNx/DA5vQ8XuYxAJrpXd2r+CzEnMU0WezmczkTmPfE/B4lednfrVF4/wCM2K+APNSNQU985/M6h5z4EGujwXW9bPQnx5p/Y7gdf9weGjt/A+sc47CH/oU/B84IL9wJPOKfdpimVpwmM+o/wJq0QNtXN5O4wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.filmweb.pl/search#/?query=%search_string_orig%+%year%',
      'showByDefault': false},
  {   'name': 'FilmSpot (PT)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABs1BMVEUAAAD4+vtfrNP09PRefo4yjryoqKj39/fx8fHs7Ozz8/OHh4f4+Phubm5paWkzmMtjY2NhYWHO4+5CcoqAgIB5eXl1g4yvsrNhYWFubm5lZWWKwt6FhYWTk5O6u7vm6ere3t7v8/b5+vpfX18yhKx7e3t4udl1dXWdnZ2Mwt2RkZGjpKXAwcHGxsbf5efc3Nzq6upcXFxnZ2dWVlZra2tdXV1wcHBQUFBkZGRLpNBQUFBZq9NnZ2eLi4tra2ttbW1nZ2eCgoJ9fX2xsbGey+OdnZ3CwsLMzMzA3u3AwMDQ0NDQ0NDPz8/W1tbs7OxcXFwwj74re6JfX184m8w1kL8sc5c9nMs2iLFkZGRUVFRsbGx1dXU1aYNycnJ4eHhcXFxKmMB7e3tkZGRFbYBCYnJbW1tbqM+Dg4NHboFvb29grdRTgZlTU1OCgoJ4eHhordCPj4+RkZFtttpZeopgfIt1uduRkZGhoaGkpKSNw96tra1/f397fn+UxNyJiYmLi4u2traQoKiampqlyt2n0ue9vb2u1em52+zCwsLIyMiysrLF2+XU1NTKysru7u4zmcxmZmbrIkkZAAAAj3RSTlMAB8YJsfhWCg4TDMMF7LT9/f071c6ekVH67r+QhnFFJB8UBv3116Wgno15Wz85LCIg+vn58+/q6ePez83Cu7uwoo6NfndmYU9NSklDLikR/fz6+Pf28/Dw8PDo4+Li3t7Zz8/NysrJycnJxcLAvbu5tbSzs6yompmSi4eFg4J+d3V1cG1ra2RWVVNNRDwzGdsnF+YAAAHlSURBVEjH1ZRXV9tAEIWtJLIkW4ptQrFj3INxMC6EXkPvkN577733Si+6PxmvVhQdg9Z7eIHvced+R0c7M+vYBfGy/8FkMhkcHI2UlB/tPKdTPBcf/pOY+aBH38KlMCs/a8nrx6oY+Vi7zifMeTiFoG5y5voRwuN6hvDWzF/4HlUM4vZ54akp3Is6SkI4YArvJE7h0MF9IMj5SD4WL2p0pyk8WyojyOZ55Kv7Zkug5VrNo9epgeHxrHGYHfzQ7tGt/KHfHTgBK0b/v+jFVKqk8pvkfYlEwguTX+T4+E7CagBo7OgPhUJ11dV9tbUnD3elbYUZoKF3o/OqKkiyYCukgNaMo5gf50VRXP/r06JBJSm4gQfKNsL0otOZvm0K99NOwiQplANH5VIbt0eFbqCLS0gBbVM8wjCAjwqHELsBQCt3U7o/L8isfZgPwMKdCdYCjT3xW4yrGdbGTYfrCkNq0NMG4KXMEEhJclGmXgCX63kegWXA/5dHcDXB26dyCJIGb4Wwv4U84OuPcwifgIaQ7bWOjExkI7JLIijjbwC02jZOqIFBk6ZpdAxP9coMwUrj88mN2iuR8p4KlLGKnru3mpv9fl+Bs1c6vuU2azknJWMdPJeSWwlXDRXe1p9D4ajqKJ3N7Boqllp0zpHP+AAAAABJRU5ErkJggg==',
      'searchUrl': 'https://filmspot.pt/pesquisa/%search_string_orig%',
      'showByDefault': false},
  {   'name': 'FindAnyFilm',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAAGGzz///937nczTlyNnqTO09l9+nss+udyAAAAAXRSTlMAQObYZgAAAMlJREFUSMft1TEKwkAUBmG9gQ/iBSy8QITUC2KvkAvkCkG8vhZDomxmVxCt/Nv3wQ5psnpj69BtuJdFFFcFvODbAJo+W3oFu2x/8FWwP86LRRDzfg5iqIFtDcTJAbvUQDM8f6gckMH2GSDDARkOyFDQnMlQMCYyDHRXMgy03YEMA+2NDAXtlGFgyjAwZfSPLQIyWA7IcECGAzIckOGACgfcFZCggHsZjMkBdwc84IB7CYypCLg74AEH3BVEqoEw8PF/s/5rRui9vjsFYLzG5TZ9ygAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.findanyfilm.com/search?all=%search_string%&sort=product_release_date&type=ALL',
      'showByDefault': false},
  {   'name': 'Flick Metrix',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAclBMVEUAAAAgOE52Mk4pRFiDME40N05HNU6XL065LE7KKk5oM076+Pm3vMTWtsGTdYd1QVtZNE6pLU55d4evc4dsT2arSmbVKk7dbofXSWhSUmbFSGa9w8nEcYfScIdeb3+UWXHRx87Pq7jmd4+QZnuTQl3ZNlg+MZB+AAAAAXRSTlMAQObYZgAAAI5JREFUOMu1zNkKwjAQheHEmLVVE61xiUvd3v8VhYCMLdMONPS/O/Bx2K8bF39xwfol3gkAXFCgpUC+EHWqcwkBWynlCeYsQClFgmYMrEngvS8EzrmmYlVuCLhNzr1QsIDuGNiRYAkNgvcq92hRoLXew5wALiQIIZSBqzHmPC84WGtJcCwDMcZR8IwfBHwBAKwK0SIaMawAAAAASUVORK5CYII=',
      'searchUrl': 'https://flickmetrix.com/?id=%nott%',
      'showByDefault': false},
  {   'name': 'Google',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAAD///9EhvQ1qFTqRDb7ugftXkn81mRqvYhOs2nwd23zjXzzwiKdsyo+jsqPx4J+0/C7AAAAAXRSTlMAQObYZgAAAM5JREFUKM99kTEKwkAQRZMbOGpAtBBzg7CNaYTAkkIri5QWQi5g4QHUE4gnCHgBj2DhCbyQf+dLRg34quzjzWZhIiIgMmJRej9nM9JiwbguGyYMrh4sQ8Jg6JWCCbwnKyYalCK1v0HoRDiDrf4ZYuJ9I4QiqRGYENlXhRgq1t/iUe3wkQZmKqp/ojvCS++i9N8i2WSfAg975hQY0ZdOnTszSEWFOKfJkQKXDNScnF4BgYQsREWMhCLTCSQhB3MGXMPokh9sU9LSWWVn2Yb1L+0FN1Ec4OMwAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.google.com/search?q=%search_string%'},
  {   'name': 'Google Scholar',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAFVBMVEUAAACgw/5ChfM2acJ2pveots3F1e9jaArHAAAAAXRSTlMAQObYZgAAANFJREFUOMu10UEOgjAQBdCaiGslkQMUOcHQPcGyR+IB5P6XUMDy/9AuXOBfzkv/kMH8J4cuPc9a6ZMwWHHJImtFmgS0E6CMimZw0WY7Q/wkD1BredoA4nQRQJXlDDXmR8sgFYoAqmzYggu32IJ0y1EZUIYiBociDdIQ+E9KgBkwhzgs999g+VJ2C3BfP3cp82vowJmCku57nJrQVdHZCdqaf5SnqH/LYDgXSr8fGM74AxQKHoCrghPgrCCLPgpLsCLd9cIMT/CAt4zYEEuB+Y55AwEDXI8rT4JxAAAAAElFTkSuQmCC',
      'searchUrl': 'https://scholar.google.com/scholar?q="%search_string%"+%year%',
      'showByDefault': false},
  {   'name': 'Hancinema (KR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAD////Dw77LJC4Ac6D29vXt7eugmqJM5zFZAAAAAXRSTlMAQObYZgAAAbxJREFUSMellT1uwzAMhdMbpALk3Wzs7HGA7I4AzzKQ7BLgC6RDrl+Srn6IyGqLPsBZ9Ok9Uo6p3e69qj2u1/UnQHtALZuAgm+5DWAOQLsFkL2+F4AkfbvZSpEeWN0GoCHKloAGMtkCAAC9DU69AEKAy9opObisYeGQxIewVNqc40GWAR966AQg9n8Ow0V4yHP4GFin8jl4Wg9E9woogCGKLWYnAE/5woKeBGgKyC0QgBxQZJBbtNiVzQCsQAj9FUIExAShB/onQCacjTHDCf2hz4FsnXTB7R4S4I8RMKwrV5mAVMI5AFhlDTCPHgFbAEwA4GegAUcARWnqUgIjAQDt7wARIQFXA1SswSbgLADugkE4CkCcA79WOIgEFLTxJDUf+1UamPxdMGykwUS2Eeixo4NBDxM1UuXdCrAVAkIAHM0AV+tBrE/8tl0AqAhpMYJj4xWgMA3CQn4X/Oebc4uR4vEJAGU0mcXEmxsbAQ09WRwDIAYEAhTnkCKC95OBBBR09IPI81metDwk58p9odayXuZw/nV366BcNq4DhUT9UpslUZ72sNQAneZwdRR3tYv1XnT4/939Vl/ffwGwigOGhP6IUQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.hancinema.net/hancinema-search.php?q=%search_string%',
      'showByDefault': false},
  {   'name': 'Heritage Auctions - Movie Posters',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAACAgLz8/ODg4NBiE38AAAAAXRSTlMAQObYZgAAAPZJREFUKM9dkjuOwjAQhq1dbbFClByBkjL3oOCPEUJAnYoSpYFL5AgIZaKU1HAJ99TpERWIcQbbGn658GfNw/MwXj+X18EEnYFVuE/A2hkxch6sGP6j16aHTGAZrKLdAB/dGIYBtuKSnKoAOfsj6mB+E1wlZUjLwVK4P/vE+u4Ppmac11gc/cHcZAJl6xONBIoamJlKoGPIAzSNB9eDrTvAMhARQ+Ei5G1RRVgdyzOD+Cz4IUJJ1DJI6IKojnk6AfkOOdvwdzIBgLCUEk4N0Lm5FPd4Ans3VWWrhqhWqSbq9urGp5HoYekxpgHr0eulSOvyvUhqxd7dysarfbjCmgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://movieposters.ha.com/c/search-results.zx?N=54&Nty=1&Ntt=%search_string%',
      'showByDefault': false},
  {   'name': 'ilCorSaRoVeRde (IT)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAMAAACsjQ8GAAACRlBMVEUAAAAAAAAAAAAAAAAAAAAHFwcAAQAAAAAAAAAAAAAABAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAECAQBBQEAAAAADAAKlw4JlAwAAAAAAAAMkAyk26E67BkdYRgwLzBNWE0AAAAAAAB2dnaT3I0Udg5C2U2x9acViRhxzlcTkxcniilDsEc6izuU+o4P+yOJzIql1aU4wCCP84oFgAsFawic1J1Jk0obox0Jhg0ETwWa0ZobkBCP/I9zwXECUgRWq1dZm1YTgxcgkiMCcQMqmxK/37+317cP/CcNZw5HnUoCigQP/iIV/S0Tdg8TXw4sli84+yCiwaF+13oEYQcIRQQMbBAETQYKXwYR+R10wnM9Pz13q3UBegewzKucxp5bclscMByWt5aPqI8qjRZJa0waewS/4bcNRQ2UvY9gcGADFAOctJWx6bENEQgAAABBryM65EolGyU5VjkfHx+w66mJ64lE9SeUqn+M/4kIhwsGZAgJjQ0ETAZ+4ns+tUAO/icWoBoy/xYSnRUJmw0IggsIewoHcwoGaQgFWQcEcQaX5YgxqjQ3/xYx+hYUqBYz/xUu7xUNnxANewsIbQkGXwkFVQec1JyT/5F70pCF2Ydlx4CB63+F3H563nhnsXiI7Hdqx2pwzWhou2RTkGNftV9VoVVYy0tAbEpMnUgxsDUW7zEvlDE9ti8nlisejigN9CMdmyEt9xUerhMr2RIs2xEq6BANfhAUlQ8UiQ4IeAskwAoNaAoGYQgjxgcApAMEkQMCgQIAiwC1VHFxAAAAeHRSTlMAExEFDAgeDyQWTUlGQTEhUBkYPi4t/v4pG/78znxwXTc1M/79+/n49/f18/Dt7Orp6OXk5OPj4uLh39/b19XS0tLOzsrCwcC8uri3tbOuraajo6CenZ2TkpCQjYyJhIN/fXlza2tgXFlPTEs7OTkzMC8sKScaGgx5bJxXAAAByklEQVQoz2KgASiI8PF2L8cprVdfX79+lZAgCx4jWFXV5tTmsuOSZs/WSJW13jGJA4tcQGNj74T5hoX8HDwqu0WZMeTL+ht7t3bt3ZLPzMDvF8KBYTOLTE//hK5dmzcyMLOyrRDmZGBmYWZFyLMkLogWYop1SZbpYUnjkw7nYGZgtNrHhlDAtLKpT6R4GS9QY8Ya5e0gmu1gMD9CgZBmi3OetK8IMwP7wk1SkwQYGdgNshSZkEwATNFh0ZL9ZpElDAz8vAmTw9gYGA/wMcKlmVmUGIPmThNfWltRMZ2Bia/TRISVNVQSIc+uH8NUOrtbbDVQQQUDA8faFi5OJVFOuAJO0wYFJgbBuonqtka6NjmsgumVxiKBokxwLyZ1iwuzMLDVNTTLcjAxccYV8TWJc3tywCNMcGZTJS87gyRQwUQnVzdtLzY2/2YLRwl2BmhA8fdV7vQQZeI3F6uurpaqXjdLiIlPrHKDAps9G0SFpFb7niqdFHm51sntVVXLF8+bkSkf1dYpF79NAqKARdhyakdVZ2tb1dQaIOhob61saZvSMcWOVxAWShLC3Fxc3NxcAkDAzQMCQD4vnxAzIqDYmZgYUQETOytRaRgAYkVr+YGMMi8AAAAASUVORK5CYII=',
      'searchUrl': 'https://www.icv-crew.com/forum/index.php?action=search2',
      'showByDefault': false},
  {   'name': 'HKMDb (CN)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEUCAgHk5QpjWBPnWwa+yDlaAAACCUlEQVQ4y93QwWrUQBzH8e+kk5CJ0MbSlLSnrWRLK6I+gUylPegpQrOkPYXSgvsWs4LFk0RoxGMOHrp68AVE9gn6DGKPiix6KVi2ziaQN/DiD4Y/fOA3/2H4h/HbEQAgARfoRgS+gk1ANZCBp3AzUyL8uT7HcxXeSJc4b4G+xlWeCTZ0GVQDoKdRqq/VM9J+ZgAe10JkRozQ3qiBk5z+MWLb0VLMYTvLURIxEEaKHFSWMl8nXglkfw7DnFrczSm8nowM4O1SiipnbTeUIgCSPeLxYR1kupR2G8Q7Oh6ETlaTJtVQQ7mT+uPEKXx0MhwZKPQAz8OvHJ3sDEFoXRVS4Z4IE+9ZcBlER8mG8TyX+MkpbG5nvrN6WASJDMPRe3i3+hIZneVifysOx/tgQoU8i6tR0VsJo3PAwtZxGOmSstxwDCwPWd8NvfM10lpUKURD3pymxLdNcVRlOawrDlxDvPxCnxx8qCFW5BIThkI/HUEDhUQvp8oxAmzlgNrCndQVNBBlIB1NkbRA3Ac11uiVoIXQheanUr+FngfOwJ6CFpA0EaaFLh7gAJge9DD4QU1wbnHykOmU6SIPrlm6aeHX1wZmHfyecPWIe0ssLrRg/drCQgs3U2bw44sFW+ng4mcDs67y/aKrWPgz4dLCLQvd2svX3P/E4scWpld8696BhfozEwtX80v/p/wFA9+OWAqgWEkAAAAASUVORK5CYII=',
      'searchUrl': 'https://hkmdb.com/db/search/simple_search_results.mhtml',
      'mPOST': 'display_set=eng&search_for=movies&search_string=%search_string%',
      'showByDefault': false},
  {   'name': 'HRC - Movie Posters Collection',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAALVBMVEXw8OvY19MkICHq6uVWU1Th4d2wrqt5d3e7urempaPDwr7R0c2XlpXKycY/PD1os5axAAAA+ElEQVQ4y2MYBaQDYyhAF2c8Xg4GNQLoEk5KYKCCKfFOyeXRExcsEu5KU47UPcEm8e7cSSdsRvm4zKkBS2AadeT4IewSde7lLirEO7fEBQzc0SWYBaHAgJJwZTU2MAhlDQ4IMDUwMGY1NRZlZoCYxyaxMSFtR9aqBdsaEmWibkRs2xa1ACLReetgpsRcG4GdrcciZ0iu5M3MbIDq6FiR0ZZmFnAt4+bdNRErd9yYkQDxgqmoobBgYKBBaLSpKGug6VZTYwEkF9yVirWWuLh0Fbo/2IK3RWZZSCdnBqBLXN0WtZJDMDVzA3qQbIwOZGU03SwqwDAKqAYAfspQpC9k5YQAAAAASUVORK5CYII=',
      'searchUrl': 'https://hrc.contentdm.oclc.org/digital/collection/p15878coll84/search/searchterm/%search_string%',
      'showByDefault': false},
  {   'name': 'iCheckMovies',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMAgMAAADTrqmtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAMUExURf///xwcHMImKf////Y3wksAAAABdFJOUwBA5thmAAACVElEQVRYw+3YPXKzQAwG4KTIEXKfHCGF8c6koc8lOEWa9CmyFD4Cp+AS9DQ7ExTD/kkr7U++ceHio/Q8Rq8WG7Q8PNzd8dSVjtfDdOVjJ48V81ItZYs9V8yp0XRdPfQ9mXODeWsw73Vz1rcxum7ODeatwbxLRsFMS3HTA0DFwHH8oK6Y6a2J5bjxJJS7dqW/qBmCWXNGASQn2kvR38+AzOzNNzWI2NaOUsT02IA3H8QMxKy+FDaKkL3YmRlaai9m42AzJGber3liEnINdKwONio1Py4OMmkcgE9bqmo+iEkjw+biIAN1wyKDcXFKZnFxouGRfalo8pELxrgVREaM81UxoVQw6l/MFuLkjeHn6W1MGvkyM3P96oXEmagZbIKRrCA3+9k1McDM/mkoZo6TrsS4b4ZiR+SM0ThyzkwoMjM2jwtkI7v7IjILCmQjc2NQIBuZGgU0kM4YV+wS2yoaF1kwcRVNxejYlmBcsSm0VTQ6bzYf2q9B1oyhLcm4SxYii2YpmQ79YfTk2xKNCx0uW97oooFoIGsWT0b0xPyLGXBj4Wctmo2auWgmwfRJYyWz4NabjHyvM7j1srngESe9P2/tZhLNQJqf8ICTMWSaYs+vpWAUNqR1bgxriz+XDWuLP9+3GGctmZEOiXyWCKWA7wtiY2MykPL5ZxvpGFmZo7jh8xg3fK4T9jLA5kNuBjkOMUoulZ9p14zppa7S/ZdYqqvM89I+TkjDjBJOw/aDKg0j7hkHst+5wz3sf3Mb83wDc2p433JqeG/z2vhupxao+V3TXR2/bieEjYde6F4AAAAASUVORK5CYII=',
      'searchUrl': 'https://www.icheckmovies.com/search/movies/?query=%tt%'},
  {   'name': 'JustWatch',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAElBMVEUAAAAYIivZs0BnXjaljDvxylNUOgvkAAAAAXRSTlMAQObYZgAAAJdJREFUKM9lkuENQjEIhOsGVljgQR2A6AING7yk+68iErUI/PxyXIFra62HalaXCK4uiJUEJjEBaiQGbsQZ0ExAkf+AdiQOALqB+xEUYmAABw/B0WHxBvToBtbxA+MpBk7RDxiCJHAKLHWAZmpd8u6aG+gG3jK9hb+mON2U87N5sDJ6Xa6uXw9UT1iPXGIoQeUoa9jlO7wA7EAu8zbNLQcAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.justwatch.com/us/search?q=%search_string%',
      'showByDefault': false},
  {   'name': 'JustWatch (CA)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAElBMVEUAAAAYIivZs0BnXjaljDvxylNUOgvkAAAAAXRSTlMAQObYZgAAAJdJREFUKM9lkuENQjEIhOsGVljgQR2A6AING7yk+68iErUI/PxyXIFra62HalaXCK4uiJUEJjEBaiQGbsQZ0ExAkf+AdiQOALqB+xEUYmAABw/B0WHxBvToBtbxA+MpBk7RDxiCJHAKLHWAZmpd8u6aG+gG3jK9hb+mON2U87N5sDJ6Xa6uXw9UT1iPXGIoQeUoa9jlO7wA7EAu8zbNLQcAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.justwatch.com/ca/search?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'КиноПоиск (RU)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEUAAAABAAD4ZQBXJgVQxg8CAAAAAXRSTlMAQObYZgAAAQRJREFUOMudlEEKgzAQRdNFj9CjdN8jdNE0IEX3HsFCvc8El6HQe4TeIXs3grUTQWeSKQgdiOIj/kwyf6KU6vUalcI4ahY3BDoJpXYpOKl9Cs6LBIkcUnCRwKfASKCz+AnaKY6eQIA4nNZ3BgC8NpaAAfx4MFBCh28GCnAIGWhQInAQLE7gADp8gluBAVfFCSsowTcAPYHCGsC/CNRdA9YzEJ5RkQF4oWICUDEDUbEdCdj3NPBM5/gbkOhnAbRsNYrEROpyc7T9IVaKH1AZdZMjDMkRXsHNVZBlkIWSpZTFJjuYkBumsdJSBGoynbDllpO3u2G7o0QTijaVjZwlIi8DcV18ARO8v8rE1uFNAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.kinopoisk.ru/index.php?kp_query=%search_string%',
      'showByDefault': false},
  {   'name': 'Kinenote (JP)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWAQMAAAAGz+OhAAAABlBMVEUAAAD+VQGq9n6SAAAAAXRSTlMAQObYZgAAAb9JREFUSMfN1k1qxiAQBuAJFtwUvEDBixS8WEGP5lFyhCyzkNgYw0zmZ5FVaZYPfN/7kqgj/OXzCUXZN6zKfmCXtDRo0nyDLi2eVoWl0zZh/TQR4oYdImJYLzximAjJw3jI0i9rLGIaax0u4yHptpVFTNtZxLSDzE9jIRGtUgQate5oGOLQKCSgUeuIRq3zwzZsTNYwgqxTxDQKSWgU0pltGEFW50vR/xeYHaBtN2w1rBgG2pq02bhIq7AoA/DMZuPIbDbOzGbjLq2AUwYQpDWAxC2Pxl3YaCwsjcbC4mgszI/G3OY31OYMC4Ylw7q2xTBvWDQsG9a1LS/N/XOzOsNbSy/fqX/5jcCyZFg0zEtbql5rgdYkW7uJ27U1grEXnLJthOi9laWNEGlXiN7TTtkGIGyGvDg3rhBuM6RY59Wbc61bVgxbX567TRiFOG5VzAAKyXpWQFS/tWePI6NBqDsDJGMOxofV2/zDcJyTNRr7aLsxu1e0gFbQnHE/AFob+m6xPSzeVh/mbyvqTiMuTtN2ZumylVm4rBp3LkawDGvcIJ+2G3e9VVg4rQhzDQ6QT4Nm3EU3ZV9QlX1AgT98fgEn+llzp3SK7QAAAABJRU5ErkJggg==',
      'searchUrl': 'http://www.kinenote.com/main/public/cinema/search_result.aspx?key_search=%search_string%',
      'showByDefault': false},
  {   'name': 'Kino (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAIVBMVEUAAAD///8EnPssLjW2ybbh4eHP0M/v7+/4+PmXl5pCtf1c+Sb9AAAAAXRSTlMAQObYZgAAAZpJREFUSMeVlb1uwkAQhF049CuFYKU0SpP2KjoXDkSpcGQRpQMJDC0SP7WlJNDmFWjymkFozez6fqJMe6NvZo/zEv1XcZ6FjvNhVVVzryVe7GsiSraV2zJ8I1ayy13na4I+555zOLJ2fkFaXy3HktoqdUBtGXpTTwBChOGJHEqmChBEdIjCiBW5tWkS1h5DN0NFtzhjRqz9VciQCS/pVT900Z2a4T6FHnmOS4kRG06pUC1KzNidagJKFDyTNDwQl0BHbSiam0BHGASAeueWNzAAIK9qBAMAHoMNoHEUPcMgAZhzZhkKnwEA6COKLUPhMwAQNgz+MPTNtzJYJY1hhD0FA4xCbMRFMUAjSnHVDNCIsfg1GaARU/EeGMAIvNpODYNhDfBgxJMDAIiueNVdAM4IbADMeeobiHNL+e2+GiF8OGh5a0QEOooF9G5QEt8NSjhUelcUrgkZWkjAAvAlYA4IM7BWwS0IhA0AwtMAiLVzi4b2fTKPlOKlJwAOXWOHABcjmWTOP96m6QHnWsPF/ng8bCd54N/9LH38C8zZuqYBkbLgAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.kino.de/se/?searchterm=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'Kinorium (RU)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACSVBMVEUAAAAKn+IlkOgA1vQUcNICkdUAxtYLhNYcbNYEnNkNoNkAktIaZ9EAoNQAnNMApdMAj9IDhdIApdQUcNIAqNUabNQAv9cAn9cFmdkAouMAudUAo9MEg9IKe9EAkdIAtdQTcNEAltIAutQAsdQAptQAy9UPddEaaNIAj9IAs9MTcdIDhtENedIEhNAAztUbZtIEg9IAoNMJfdIAvtUAlNMHgdIAr9QFhdIAjdIAptQAmtMIgtEBi9MAq9UAmdUAuNMMftQAxdcArtQTdNIAl9QApNkAydscbNgMetEAz9UAx9QAitEA0dUAv9QAr9MAm9EAi9ESdNEXbdEAydUAtdQYadIAndIAqdQKftEUb9EHgdIcZtIJfNEbZ9IJftIAzdUAp9MAw9UAr9QBh9EGgNEAxdQAndMZa9IAl9MAmtEAvtQAqtIPd9Eaa9EAmtIAq9MAvNQAmNMAq9MAidAAudUAl9MAudMAsdMAvNQA0NUAmdQcZtAA09UfZNIAlNEHgNIAutYCiNMAitEA0dYAldMfZNMAm9MCh9MAwtUApNMAp9UTdNMAmdMAttUAttQUcdIA1NcHhdQIgdEAltUAs9UAodIAv9QApNMQc9EWbdEJfdELedETcNEAntIOdtEAwtQAjdEAl9IAmtIAitEGgNEBhtEAydQAxdQAq9MAu9QAlNEDhNEAzNUAudMArtMAp9IAndIAmtEAkNEAsdMAkdIAtdMAqNMYadAZatEIfNAAlNIYadEOdtAAz9QAxtQAodMbZtEAydUbZtDhumZmAAAAlXRSTlMACAUFlh8ZGBgQDff1497Pya6nf35GIBcUC/j09PTx7+/u7e3n5Nza1dPS0dDIxMS/saGfn5mVk5KJdWFeV0hGNDAvLSwaFxb69fX19PT09PT09PLy8u3s6efm5uLh29ra2dnTzcvLy8XDvb29vbaurKmenp2bmJeVk5OTkpKMiYiFhYSEhH9/fnlubmliXlpHR0M9NkulFlsAAAKnSURBVDjLZZFlW1tBEEYnIUGCu7u7e3Gru7u7u7u7xUlIroQQFxIKhEL7yzq7NyV9yvm0O+e+O7N7IYTo8526Q9vWHjl7uy8MVjJ6f/2CzWSanFAopuz5t8L/02HP1izYbKZfkxMT6H0+78YU0b8+vM5mI3GSL8qy+7wOszM+PeQHStGafpJ4cxqEfSx2mM1OZezwcr4Uw1QrmmnhuwO93BU7Epz+xCSeTbTCngaUS06lUq5jTovp7jWVOPzUVBEIpBDvNhqf0wYbUF4ekKU9ttu3Bx+gU7noYhijJZoMehOT12n5g8/bI1y6BPPopw0duMn32bNGgVLpKB4kPgn7E+8xbBZBn9frrQSBNrPZn/SmM1buinv5/mGex8DyX6DN4XAcBYGrfqefjKe7SJ4xo4Ll+XY4Z0YGhfvuUqJGvymK7od53toAh/1Opz+eVpKU8sYRaaObuQICx6zcQchWEkpSet7GYzgDIN1obAGBWo7LhWw5ZVEud+l0bhlAlMVSIXhZzqwmF+KwrnO5dDtPxjFu443MzBbPtGEVEB7NarRlcIZh3G6G6cK5ewvn5qKjpw0Gln2VAdJWjUarPw93jYQuGvnmwTTxOD7HabTagEoCvRbLnKUwEygJaJ9KZf2JVk6DXq9SpYIoD2MJIHCNZYX2Tdg+gL4Af3gHHvr3g0S+GigRq7V6vWp8XELW61iWldJyVI61HQRq9Cr0WyMBecLzfIMYF+JEjmsFgTLUanUyXYtrrVZrdffX7uPcrGa3mNb6VahnTomCDfdyeCkEB9c2ATJWhX7+QCQEGdqPjqBHqt59St6jVv+Y2TcEy0TU6ANEqhDsjXr+dz3mQ4iSt1CJkPDMUswLYZgQkZICIomeX4p5MAYrEadKLpTH7Civv5cqClX/AHrKP2MO2ERQAAAAAElFTkSuQmCC',
      'searchUrl': 'https://en.kinorium.com/search/?q=%search_string%+%year%',
      'showByDefault': false},
  {   'name': 'KMDb (KR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAGFBMVEVTTL/+/v9HQLuno97Z1/GBfNBnYcc8NLYv8SczAAABz0lEQVRo3u3VsW+jMBTHcctKu/9kw2yRpnPAaW6Nc1HnQi43F9rup+u1/ffvGYnwaAUtW4f3lQyxgY8QComSJEmSJEmSJEn61uksc3FzXojzdpWtUI5f4hiw8v5OP3jfzS+937p2VXV56kb31x/9lgFLoNA5TIdeI36+AnaqX6F+ngU6O3FDwAWkDLBKLTgQEFtPACsaigFa1x+BxI0DC6Dq5oSh0eUQSJ4C7Pgd/CjpKAcqnQ+B9K0mdhyIz5ADhQ4EOAZkj8Qy4K9yDFgDtwNg7z4B0ofDmgE+PkMO7K4xDRjAuB7YAA0DLNIX2txOALGqB+IT5kBInnGYBOwRKHoASBwDTDD/sJkEkj8BOw6YAZCbxVzANhwobYlfc4ADUA2B3D4i/TpwA+w5UCPYxRygiC8jA65A43Ng9KtsnkFjFsBfpmULJPMA/jovkbwA6XugnnwGcTDgFdjRjgNvJWwzDqzYq7Nsj+6HgDnScAx4BQoGqICEAVlAEYHxnzS7GQJxiQM5qo9ApXqAsg0HaqBhQInmPWC3jgGG3fLl6XSvLmhznv+mabvrOlH3mTr3dLq78M3YX5tup+2uK4vRnp0SD0uSJEmSJEmSJH3r/gP8coRX+bDIBAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.kmdb.or.kr/db/search/movieSearch?collection=ALL&query=%search_string%+%year%',
      'showByDefault': false},
  {   'name': 'KoFiC (KR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAADFBMVEVcOpP7+/2xoMt5XaY0t05xAAAAOUlEQVQI12PAC/gWgCnOAHzU0wIQFRzaAKJiQ8GCoSEQKgaZioQIxoaBqaDQA2DtoQ5gi15twOsSAPcnDevh/RAXAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.koreanfilm.or.kr/eng/films/index/filmsList.jsp?searchKeyword=%search_string%',
      'showByDefault': false},
  {   'name': 'KoreanFilm.org (KR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAC5JREFUCNdjAAIDAwaDBAaDAwyGDQzGDAxmDAw2DAx2DEA2UAQoDpQFq5EAqgUAn3gGgf9M5pQAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.google.com/search?q="%search_string%"+site:koreanfilm.org',
      'showByDefault': false},
  {   'name': 'Ktuvit (IL)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgAgMAAACf9p+rAAAACVBMVEX///8AOLifn59X4NuiAAAAvklEQVRIx+3VMYpDMQwE0EHVopMsuk/u46OoFHPKSAgcufhVCITwp7Hlh5Htxvj5PC5yw0fhzjsR7zEAXRM0eiRgV8ADxPHXIKxi5r9BA3pCNJjDDhA2cIEMXbAVgIkrWZBeYAWs2q1B4wLMUc0HoHtwgEEiIRpiwBoQfIEu9Q0+wQfk/g3itjbU6oY4IDbgAOEA4gVo8H60CXWaNCmIA1wZSiZYFJANGsKQBt8QyGlCVn2hBCPu3N/Et8Ov5wlQlnG+tD7IKgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.ktuvit.me/search.aspx?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'LaserDisc Database',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAADGAgMAAAD09RfOAAAADFBMVEX///8AAABpaWmdnZ264cFnAAABnUlEQVRo3u2XMWqEQBiFjYOFhaVHsElv7xEsMnGLLTyCR/AS9imDVY7gJTxPAtEgvGF4/FlHlP2/TuSB7Mens5GiKIqiKE/L67jwsV6bEfhyJoNdqNfrFwu0zsSudOt1hpMKFzHeSXDSw2J7jilaKHESISneyWHxDoPtOZpoZYbJmzMp8Y4FbjDYnuP+pwUnd2cyMy21V0vr09LhwlAtlVdL75tMOMlQS0FNJigMTTZcy0BNFiiMa8nh14+5lgG0/COw9JDAipMEVgQIrCaBybQcGlgpDyw/SWC5PLA5QGCd12QlD6w/e2DDSQI75GBhghwsQgQ2ywOz4sBMkMCsODATIrDJazISBCZ+7yUBDhY8sFgeGAcD4+DBgoOBcTAwDr73OBgYB7VQ3MB80MA45gEtfUAtbmCchGrhgXFygRY8WFw/sFQD+9Vy/cASuzJ6+PRpQfgXDOF/jRH+BUP4yR3hBwuEHywYnsAAcnIPoOW2h5aZTdodtBg66XfQkgXQ0uwRWC4PbJabtE8UWHOdwAZ5YN+MKVIURVEUJTA/mzfhn3x5gqcAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.lddb.com/search/IMDb/%nott%',
      'showByDefault': false},
  {   'name': 'Letterboxd',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA5FBMVEUAAABEVWZAvPQA4FT+gAAKDA9CU2M3RFIpMz4DBAT/gABBUWI+Tl4+TV0lLjcXHSNDWGtKVmL///9DVWdAWmVArd9DaYHjeQ5iyfT++fNGvvNAtu1BmsVCg6VW6YtS6YtDYXY/ZnRDXHAl5Gsg42hCV2U/XWQ5aWM1cmJRWF4fnlwbp1tUYFlaWVkPwFgMxlcE1lUC21RkXFOXaDf/mC/rewr/hQn2/P3z+/xAseVAseRBnstx2Mpm08VBk7xBiq9Cf5+9wG21umRtXk+QZjykazG1byjBcSHAcSHKcxzzfQX3fgRDkLFHAAAAAXRSTlMAQObYZgAAATtJREFUOMuFk2d7gjAUhTkEElBkKGJbtXXvbe3ee/z//1NC8rRSS/Pm4znJSW7u1X6wPYs5lDrM8mxtF9PK45u8Zf6SbZciBXXt1HaGHZi5pRfwBwUzrWc7bIYMmLiHi0zcJIAiE8pDLPyDFd8gqc90FYDT7fe74PhRo8QrZmsegPUmZ3y+DBGOFoQsRiFaN1VdP6/HFo8nvBkJlcmMJMyaZT2hVoozGJ6MnFgPRHKtS+7ANAcVQ3Cy3xF65+xAGspwNBoY8oTj4qEwHBX3dIlPuUGQYeAR4oQ4oi0M7dPtCIa1IbknkitdUgfjz3wXJ2wmc6HPmxdCv+TP9IDg+SPe/zpFb7wkZDnuoVGL5eqtD3ii1MHqcQhOOBiE4LSiyBelVnyW8rtVDaNsOVXTKttePTjq0VMPr3L8vwCrIxmNWEgYQAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://letterboxd.com/imdb/%nott%',
      'showByDefault': false},
  {   'name': 'Lumiere',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://lumiere.obs.coe.int/web/search/',
      'mPOST': 'search=search&title=%search_string%&search.x=0&search.y=0',
      'showByDefault': false},
  {   'name': 'Max',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAVFBMVEUAAGcAAGcAAGcAAm8ABXkACoUADZEAEJkAAGcAE6EAFqgAGLAAG7kAHsQAI9EAJ94AK+wAFNAACuwAGf4DM/xDUti5wf5wfOnh5P35+v+Tnv7///9hjdTjAAAACXRSTlMMyP///////8mRhKc9AAAA6ElEQVR4AbXTBXLFMAwE0F0ZSve/aTm2ttboMw02nLwxbwgSIInYY1PsEtC/+fybRDugK1m0sEU8KanFobQ0A9OWCp5KCy08FISCNSU5i6UlpirVWWlmN3rr7mJjlK1wwsBZBwxZ6VxohXwhuDVSGnhyao7hms4eBV8rNisAFljcvkcUDbTaK8638Tt84dMqmbjRopRABOoUx0BpmENo5RLnRi3cJvXvGEO5iZ5Ivl7hp1bJnL63hb+WSO8LPxTTFxN/WLGKsV8z19TjJXu42FcxgQ4xuQ6YcAjY42iSd0PdiRX527+D9Af9JhClFkGWhQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://play.max.com/search/result?q=%search_string_orig%',
      'spaceEncode': ' ',
      'showByDefault': false},
  {   'name': 'Media History Digital Library',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEX////d7v/u//+qzO7M3fCIu927zO673e6Iqt3u7v+Zu+6Zu910qt1mmdKZzO7M7v+n2SNhAAAAbElEQVQI12NgYGCZwAAFgTDGcQcFEMWieCXQACwQfD3CKgHEMHUQThVOYuAUFGdgzLrIwMBYc4iBYdcToAyTJVC2xYGBQf81A2MySL9E+kbhVJAmB+2lPavB5ogwS1RCrGCSgVmmAWNwAjUBANCnEycINOX5AAAAAElFTkSuQmCC',
      'searchUrl': 'https://lantern.mediahist.org/?q="%search_string%"',
      'showByDefault': false},
  {   'name': 'Metacritic',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEUAAAACIzD/ygD///+DWqJTAAAAAXRSTlMAQObYZgAAAVFJREFUOMuNk0uOgzAQREcsc5Tcx0HKhj13iOAS7Nkgge/DUby0PFWuTnuG0Uhp5SO/UM8daH99Wl2M82X9m0TW3ta3WGt1cI9HCLykGQJKFiUWgodnGGCN+zuxCDyRUSJYWeZeE0NCxsBGUAoyklTFUErCPnIGgQzJTGdVTIWZsQIpUCetzUnJs4JFgJLH/t6kLwnEQKjgHCiJDeBVEkF3qAtqMhoBUBf6GAkYIKAE4GbgrBKCjb8RBAB0RjCxTX6dP0DmhcEBCqrsIA9Vkgy8plTbRAngV6Syg54AGQc1T9qAdWXgkFAS/Tl11QD7qjfRgSR460nFYBKs7Z5K8nKwSKKp0oOiRGAn2EwSNCBoVRLWuGocJFEbGhhJ1Aa3ocQ3AaAky+ljOSUfZVgpkWL10e6lmC/DD6ck1+PR6ZKRCcuAYB3/HkIvgX8Psh/1D+sbAAmSjR+xz1QAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.metacritic.com/search/%search_string%/?page=1&category=2',
      'showByDefault': false},
  {   'name': 'Movie-Censorship',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH5AoDEjQAvYzAkgAABHxJREFUSMftVU1sE1cQfru209ACSQ9pK4HUSBFcoBERlzYVbQNqD4AQ7blRe0BqSISEaCWQ2qTcilo5OLEd2/k1IaUQBxCiCEcYK06kNiiFUCfkp0pShO3E+XHW9nrX6/X+dN57seum1/aW1Wj1dmbe972ZNzOLpP/5QVsEWwT/CUEanlSKigjvdHqTE3YQhA2rKEj/NouiSK3YQQSNlANBYM3Isqrreclks4UcsAE0eWtW1/8BLgiAlS3YLmta7lAYBAF6Mhab8Xgm3G6QoNu9+uKFBBxwEIIOm+PR6MzAALUuBAICNZGwFOBTlNDo6MQVvH2yry8SDPIQDXiQgyJd14fPnfseoVaEWhBqRmig5oM1bh2Chv1yNrsUDF7du4daW4jblKdfUVWB54H7T5/vZk2N86Wi1py1Y+eO3vJyT3V1aHJSlGWUkaQ5v7+v8i2HyeQqwgJOQ02NKVWFnEqZzK1DhywIuUxGMLUZDQOffLy0uJgRRVnXn1gsNpa1IuRAyE7EhlAbETiot66OV1WU4jhI3MMzZyiKg2XaGKajtHRhfFxWlD/u3IH9LqPBwSCnAWMNNZsTsgwRzHnvAxz4O40G1/ZXvOfP/+p236391GEwOI1GR1FR7949S+EwEuJxRVH8p+ssFAhhIAji3uefpXT97tGjrUSD9SyDCS5d4mUZbu72kcNgai8yAc3PdV9E0um4KCY07ZHDAZrLCPXu2xcJhTCBqmn++tM5AgYOCzG6thXfP3WqvbjYwWBNIYGgadHZ2c6SnW2EG+CGra2cIIjJJFxbSlF+v3Hdd/HiRCDAJZObCdpIQqnQ5OY1eYKUpk15vVRP8+b/timekaEJaOGmNY1XlATPC6lUnqAegup8tXTg5Em8k8HiZFmnyXjjow83UkTvAFIEBD7fRlhE2f/+e2sQAc+T6k/DAsoXJPV3BA31FlJhY16ve/cuqAe4Ooj9p3erhzs6KCVoCMF3SUVZWpjveeN1O8NAWE6GsRvYMXePpOv5rhy328aazeuxGLnkbJYSQDnPTk/7v/qylVQUwI24XI/7PbYCgoDZnIBEaJqvHm+B2nWyOI3tO7Y/sloBkYtGf2lqAlPXa2URXEUcB702dPZsC8u6Xt42+/RpeGGho6QECrynvPz56uposxnWtA9g8eDCBYgAKFYWF69VHYDmchlYpwGXH5zjakXFld27Wsj6QWPjMsch6NVxm62zrMxKbtVdUfF8airwzdc/4NqwTgcCdqKnTURlfmQkC2Mgk4nMz3mOHLbmHOy5bu8ufzPQYgmvriUTCSSr6mBtrXv//msHD/ZVVfVWVk4ODq4sL//W1RWORMLPnt0+dgz0P2I5cP2dt+81NIRmZoAAz05ZjsXjY93dt44fBwdwu3niRMByeTYYXOV5PpHAswiPLFWF76X1dZDlZBKKV4BS03XwAQjo2yjHUSssYjCYc7M2TQe1psHkAhPISiLBSRJPRnfB/wAqDBCJ4AWZ5ngOEwxxk5U6FP4MCkz0LRU4bP2Ttwi2CCTpLw+PfGOkBCRRAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.movie-censorship.com/list.php?s=%search_string%',
      'showByDefault': false},
  {   'name': 'MovieBuff',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAABAgEcHRj5LAH09PQgBAF0uRybm5t9GwH5awHCHwHkxAVRghFGRQxfX1+8bgWDBmDFAAAAAXRSTlMAQObYZgAAAYZJREFUOMt9k71KA0EUhadYSKVwB4eIJsWKmMZuEMJWo6QOTLFgq8U2iYXgC4jNdhY2xk72CWxsRrCzMU2qBCw0IvgAeQDdzJ3EO7PBU56Pe+4PM4wxVfvc8TRWillNIdBuZP11CMWx4hyc0lQD6iNMEo5sWBAvAia5BiR1CvaHM5lcigpoZNlMSomEghcECWgCsGA4yQsp70kFFpzNpypkIigoC/p2j82yi6ZgLzvhdo8rm+WATRrZRLEl24KCrM9x9U2ZUNC0ra0KCnhjCXQhwQOnf0D/D6pRiR/1xElzMlXvcTFusEfPLBc8oCB+NQ9icRJNgNg2z5DiEQEoaBpzi2dv+2eP38zgJ88LvDoBvGkGpW6wgACI3wdzJVoHQMB16d+teD4pHOc5CE3AFJCQJ1r3HrVIS0ZA+A0Q0KwQ0K/mg0hFHVTX+fyCOcJQR8RHYYFy830xxXyNnN/x7ahGfQrsQt/oU6nD0h9XfTbv3WIRqyiKoaVW+TXqU63VV/uqqyKy2C96uZKPw5RC9wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.moviebuff.com/search?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'MovieChat',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAUVBMVEUAAAD/t00BAQHpuEZOOBclJSYJCAf6tEwbFAm2gzf5s0ven0M3KhHIkD1gYGBXPxp3d3eYbi5mSR/1sErqqEcdHR7wrEmqejN8WSbVmUA7OzwI+OWVAAAAAXRSTlMAQObYZgAAAPRJREFUOMu90duOgyAUhWFZBdycRBSP7/+gA3RSdUZtr/onCoQvJITqs9jjJLYHZ70Fj/v97YhEr8CjmLJ9Sb4HojEmMqZNqk/rflFq0RvQnoi6milKKcYcJ4C42wAHQIZ1SKnkkJPTESCMtoA+D9bSXP8B3skC8tCNvRvZHkgCdSBKYAKkYqkj6AAJbp8A038QCEDIYCHAKje7I1AeIJdBuYyUsGYPoALgYwGGoxReoJ69d6bzqs8TxmLgRDyMN2/Rx6i/+dxa1xdpnQG/rSpZQO5D+QlRvSLRNm3T/H7r2qalFNWWoFWIYRCl4TnBAZxWfdQPDn0Os4VXniAAAAAASUVORK5CYII=',
      'searchUrl': 'https://moviechat.org/%tt%'},
  {   'name': 'MovieLens',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAADtXB/wcDDuZyfVWR/eYib2xrH++vjcwWlvAAAAAXRSTlMAQObYZgAAAK1JREFUKM+l0UEKwjAQBdBZ2AOUlh5ggnadBrpuod1XTT2AQrJ3kVzfSZhqIiKCH/6Q/7YBAD09MwPvVIqxTFIvsCuzDKBzmGHKYfoBZroVoqQj6akDHIz1Bo03ksF6Sjg3htYjWn9Fe4+gZOOOdetGaqUCqMbJ8uJKqtqAu0HvuH+B+AoiAmNHgNgbQe1iI6hzx2UQ6tUAST7CmsMKuxwGKE7p3i8Aek3y/v20H0DTZUv9TyYOAAAAAElFTkSuQmCC',
      'searchUrl': 'https://movielens.org/explore?q=%search_string%',
      'showByDefault': false},
  {   'name': 'MovieMistakes',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAACEe/7Gxv+XlPN9Dw55AAAAAXRSTlMAQObYZgAAAMpJREFUKM+NzTEOgjAYBeCK6UJCnHoIMY7dOQIDTxw4BEfgKI0T+S8hi0fgKG4m+NMKtBCjb3rf8p4IkxIJQWRmRH+hiYnaLWgFEyD9iYi4MMiCa0s3H2YBfQNfNg7xhMbhMAwd3YeXRQJk1KOwkCOwoE6BcoQZcbJIyWggPwKYcPVRnScoXnLgjJCMboOeZwNoRubwhC57B+AB5aMv1IQEYNTc9xbVjB2QK+RrcGPXMwQ/6g9Kh4qRWHQLFEQAiYIhcRHahyws/LwB6pWpO67bqTEAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.moviemistakes.com/search.php?text=%search_string%',
      'showByDefault': false},
  {   'name': 'MoviePosterDB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAulBMVEUAAADmJB/kAADlIx/hBQDlJB/iEAflIx7lIh3lIhzlIx7jEQ7mIh3lIh3kFw/lJB7kIBvkIBrlIx7lIRzkGRPlIh7lIh3lIhzlIRvlIBvmJB7mIx7kHxrlIRzjHRflIx7lIx7mIx7lIh3lIhzkHhrmHBflGRblGRDlIh7lIh3lIRzkIRzkHRjlIx7lJB7lIh3lIRzkIBrlHxnlHBflIx7lIx3lIx7lHxjlIx7kHxvkHhrjGhbmIRzlJB/2SoD9AAAAPXRSTlMA/AT3B/kK17GH3A62qhHsXljOexjFpXdrZfPoSXQt8ePfn41EKR4UvJaScTDu5ZqBTj8l0sjAOspSNiFiKDn3TAAABDtJREFUSMeNVueaolAM9XLpRXqTDtIEROyN93+tDbh9Z2bNH69+J/0kcfGlELmyJhfvixEw2NPpt/GHtBvHMR7ehJO+hkYQxC7fwhe7c4InDY97R4G4sOnlrmZnXlPfwdPqKTPmuPLiHfPhhh3I+UUS7+D9k9z7BUB/wr9UWzoxlCbixcb4jhMum/0X2UqrcRKkucLrl9baIon+rPjqWeRX1DhS4uV7FnQAFrr1J1zgropQXgLLnItPECS5ECToxscuSN+qW2KOuiABflCmbzk/gmw/cLG0taB8aU5ahX3VDvCp4EmB2vztgnj0OK6V0KAJcvp606hxYhHNonGS4+FPvKCcwBJaeaZCgwtyeR5HbBPknZNfCjj4A19y3jhLlBULkiYW9w5o57cZg0eUmAkoaeVv4bSS2Jt8hzHzLMMAnBM6QOI+Act8FtL7I2ThED+zdUW9IITcd3Zrv+anyMtq6h011TMU7mvagXhPjx+D1YuvwQWddEtRU7D3eO72ikIinV+Zu3GFaJ+vEq5P5qup5FJYQyZyvhD2Egb01W6Ha+QvWYojHQzO5sloeJSIG8d/CAJBBOCZfaiSh4BLz0d5IAePLW8r0wjB5XamoI7hdYy2HLGYWYDOlYxQpGG2LPvjfil6vsBKhjLZ6Ke0DRFh/RBjdcqGnwKHYJLnM4ovgoUkQV3VdFHSyz0Dhtt5XGKKDWQmhycECiJf9epmIrQh1c5bLysmJPa9QzfUiOqJH/QGUatplxT65KCLzEDZ7bKzF7fFCSikyjbhRnxbgIvkvgB5wIvaPRxYQ5TH1BzvWhcr9xmU0TZ1zI3z0cgZrJM2NeIdORcKj7jS8Ehh1h12N8uuHE7hMOLvxREHRNPZdIbOxsTzUzF3TgMXQIKNpdeiYvl2elasvXidrGLNCHnt0TLp0gBYpMwd4zCkym6f6427dSvOdz2HVfcWMo3DkXLoeuUSoVA2ERRQnLt9ga4wbZYZG19MnUTJealnKsvsVJKjTsVdZo2HK65GtLVur2GQIKYm3IQOpx7XJ/FQRczZttW4ovcx0wqM3J86hOR0X35n7ACL4Xq/XW7sWoJ0T8z5VkNGUjQIbkuvu2lGt9Kv2zLPYRcoobPrh+bkSWqtmKbqclgs6Vafys5k+z+GepDhDiiWqPK8l6ksV6frunGDRG4yBmJPdiH918YQ0bgdTCrhLdNPNSbgB1O7pSnCaJ65f5YrNB94etWYp+1yTcpwlRVI9RHGY2XaIfnRPYOpxbpqB5aTSnoj2okuRsCFq/sgP17CHBA749RaZ5UtczO5jkJopTXG4jPJkxExzXOnm87G1hMMZWfdgvjijHAIyOgykqNKPCyvFTsYX5+fkB9RpVNyX8G8y+JN+O8h3FBjt4tHmIokHd45nb4MlqfY+4vwzi18bTsqTu9v/x1RMD5yQJm3Zcnu8v/CvwHptI42n9uKaQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.movieposterdb.com/search?category=title&q=%tt%',
      'showByDefault': false},
  {   'name': 'Movieposters',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAA3NjciICHf3+DGxseFhIVhYGGhoaImnXgYAAAAAXRSTlMAQObYZgAAAjtJREFUSMellU1z2jAQhulA0mtXCeZstaRXZqTANdSmvpbEH9eaBHNtig1/P69kiQTZBmbyXBDaR7trvDa9TzBb3p4K93dE3on4Iifw0HlcIg7+dcRFGMpUCX/b4zIEsoJw09rcMIABopxGzTh2mVcaYzluHF8SYH4WaEPu3ObEjvlK8dehZuLEwaI2OMo48f5EaGY5r8vEgdPcOqgNiTKIb46OD9TP4pU6HogFKmyPjn8lryiKnDLEhQxFFLvNLXIPcSJdxm2+bi0lbXgxEji/jW2NPN08ih9zHYsaPQHDoOfyheLQJFl6qrmmsC9LY7QO0LVXvUw3Wui1ckXRVuRFiXA7A8K1T30018UOgshPPQCBSnHTLVxt1WWuBdiDrQARhgXHJmICYV5CCCS27wk8SYwagVEIVOnXEgt9IFfbAvarj6nbYvM3fxciMVfDCE/OOOfsVk0200IVY7mLI8TZswCPEO5U0v9cC+kGX9IXNfF3qsCUg2fs3XMtzLMMzVeVSvAEQTLsj1WBlRFIC6Q7BHMOVIdq4UP4pbdth2LGgepwpjKN1O2st486tAs/1DOdJIkq5ycg5WBoFz8nWiALBwQYN/wwT0WTc8K5DOxi4fulQrY/IqnJHg9CZworNIMnBBiuMGhWcAXexTcjrJN30uLA6iAUDaxwaQmH00JrBna+RJOPAtuYu1PVn/Zu2avo27pjU2rILeZPjQxN4U8tLOu4b4U1tzzYV6XNQFrxuK1p31Ir3sBWOM8bvdDsvqHitZ0AAAAASUVORK5CYII=',
      'searchUrl': 'https://www.movieposters.com/collections/shop?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'Movies Unlimited',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAANlBMVEUAAAAAAAAAAAAAAAD///8PDw//8gDvOkHyWV7tHCT94eL+8PD0d3z4pKf3lZnzaG3uKzPxSVA7bmNGAAAAA3RSTlPtAPDm8XUxAAAAaklEQVQY022PWw7AIAgEtYiAUrX3v2xJH2psJ/qxk7AB5x1MWLQcYXzLCw4iQngAjCYAQwfhFkw7FWbKXUiVwockvDuCttZ2ZUlvhzLRJd6RWq1DjyGIkmiRUZpzSNfD38UWvsf5DSY2fwKutgUjqCKUowAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.moviesunlimited.com/search?q=%search_string_orig%&mod=TV',
      'showByDefault': false},
  {   'name': 'MRQE',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJUExURQAAAP////SWKj2rvDcAAAACdFJOUwAAdpPNOAAAALZJREFUOMu90z0OAiEURtEbEhuWwnrU9dC4DxoTcldpMSPC4GS0UMqTQN7PB5fN4UdwBiADnBpErT0E1dJBsgR9QVBIlgbRCtHaIFkgaAPNgOYVggJoWSEukKwN6ghpgah7oAUgvIHb55AHuO4Bb+B+CAePflfpLnw8sfiEureGaVHTKudlT3GYAoObSM2hI21iCck8wtJwd6UwQFzn3tWhdr08IR9CGQqz63YZqLkHwquXP/zsB236OSKC/2dIAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.mrqe.com/search?utf8=✓&q=%search_string%',
      'showByDefault': false},
  {   'name': 'Mubi',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEUAE4j+/f5dXqitq8/RUKvnAAAAzklEQVQ4y91SsQ3CMBB8HFEERMkIaZAQFX1GoMhBChcZgZLSS9BTsgASpcUOblEmQTwiysVCCNLmGutP/vu7t2VouNSS3IUwsJIhJ5FiJ0dsSIwBF2BJZIAHioi4/SQcuhozQKeUJEbYyhqVEOGgXpwQEy3O0gurWszjdTCtjvYSik7aOfYJEKUtU8B301o1nEfh9GL1jWBLKyqNKNNGY00o38Zsa92JuYpMT/I3FtrCBVFUEY1tKhprKlrv9bZs4QopyiXHn24J//FQw8MTrR1ZmayBqHMAAAAASUVORK5CYII=',
      'searchUrl': 'https://mubi.com/search/films?query=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'MyAnimeList',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAAvUqL5+vyYqtEFA7pDAAAAAXRSTlMAQObYZgAAAKpJREFUKM/N0rENwjAQBVBTMAL7MAIFJyQXSe8NcMMUGcFFfnR0FhJNpnDDCO5p0oAlH7Fd0CJ+96Rr/ukrtSPJUakNrdmrbcFBruSuAVX5A3QjWaYePoYEkGGKcBkBfMIHN3CH+ZlxBevpIgDYOOsKvGDCneO8ZIx4cAQERlc4a8YKSngtBTHYCkMCuIbLMF7ApJ111kf43FQPVe3+t+/9voNmLs2Qmom9AenZ9a4TPQsGAAAAAElFTkSuQmCC',
      'searchUrl': 'https://myanimelist.net/anime.php?q=%search_string_orig%&cat=anime',
      'showByDefault': false},
  {   'name': 'MyDramaList (Asia)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5BAMAAAB+Np62AAAAGFBMVEUAAAAMUoYFY52qzN8FQXQYc6kiiL1YkbXL0YAYAAAAAXRSTlMAQObYZgAAAc9JREFUOMuN1MGOmzAQBuAoygN0kHkAj0R7jlwp13gXbc5BHXJOtTjnVbbh9TvjHTB26Wp/CYvk028iMrCRtBBj2kWOG42HLEY9YZZlewcVNNT9p/yE2IzjeC5Uy4h4Yf2Tb63lnVQl1q7oFvF71A5tqUe57A9VnH1dE6tWaWdceNJGVRPVzIo3xkdDOEVZ9cI6kGbaflKi2xgo5YNNVEbqw5zoHVrVRi0lMoDq2UMdrgA1H1D1YeBaxWVRIiAyveeFDwIfrjWRx6g1DSfnDv7ZuT2f8PryencOPrShIF+290mdidpZSPrmZt3DQvuoLumhFSVcV2dEBwSzqu9Ru8/VioZMD3fVQBYK5eP5i4qzHtxY7jxE7UX391P5q6hLWi/0Fyv/TQjfJvULNazj+F4lvZzyO8mfolLUPulPULWiQ6HmuuxSrm8vr0llcgB4cnjxIIuMmJyoxqk7A9S/gZfbI8RZ91aUtw6a28h56NTycOi0c8Iig060KFLpEQvtU5WNMSqnycrzcyaqSc9T3JbTZkqROIylIs1RzLSZsPtcraDR99WUXFvRLf5TxqS7UtNl5QWNKXM16VPBOOuRdYdlQHUj2eamVbnLMX61KvgXtCZduJ3RX0oAAAAASUVORK5CYII=',
      'searchUrl': 'https://mydramalist.com/search?q=%search_string%',
      'showByDefault': false},
  {   'name': 'MyMovieRack',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5BAMAAAB+Np62AAAAGFBMVEUAAAABAQDNPkSSdazfwURBHh5WRWZtXiG+70ECAAAAAXRSTlMAQObYZgAAAURJREFUOMuF1UFuwjAQBdDkBgxpyBpLHABZ7b6SUddui7pGOUEkql6/9tjMHzGKMzv09MP8hJhOT09E6qMxWnOS2TUQbBFsEWwX0mOiJoyoGRM1YRO1YSuxhhH9dKdq4+xvHIbunXNVZ+/fRGs0aSxRX3Sn1IketPYlAB2qklb53q+krw8lWeoEPfMNwVLQOeltVb3SHnqUQr7sx2oLeYKiEOpaJZr+Ig1aSekUwkXq8lq67j2EwIXOoig0hjSR61o9TlnJN/QDdVlR9zur1IWOoheuK9qL8srvg9JOa0izSF3oXgotXBcqdSfUFe0adbW+oK5WWxfaP+redV38YlXdJSsKlUvz88tXjge9FCtvFfOz/yWacR/lHbzmNX8S0nitiDe09fJbwIXXwltnTiO8ddY1wttnLMaiZaBl4PZ/ivVn+wePqotPB82T0QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.mymovierack.com/title/topResultFor?q=%tt%',
      'showByDefault': false},
  {   'name': 'Netflix',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEUAAACxBxDlCRSSBA7uTNqKAAAAAXRSTlMAQObYZgAAANdJREFUOMuNzisOwkAURuEJCYh6NlGPJGwBQWlCeHg8hlBgCRh0MaTtbUgVkrCKmi4BTwUBwm0w899MOj3yU0dxDlGsVNfzhupfpwkQQNsE+3pYGuAEMLHCms8AxlaY8wjATIJfrQJUq71aePCZDl7B0NfhZYAYoJSwZRgIIIBAwk7CglfvuQ68GkrIAAoBPq9GTwEpQCnhS5To4L357CMhkHADcAVsGEIJGYBjgEiHKUOa69DiVSuQDiPFsJJwBXANcJRwAeCzsxUSgFYTIABlggOAWwPQD/UX94Qp58qmAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.netflix.com/search/%search_string_orig%',
      'spaceEncode': ' ',
      'showByDefault': false},
  {   'name': 'NextEpisode',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAAeYZP9/fz19fUES4dHe6Ht7+95o735t3jBlHSeu838zJp6eHj0nl/D1eDa5OiqzP1QAAAAAXRSTlMAQObYZgAAAWFJREFUOMut0r9KA0EQBvDdN9iBFRFs3JAIKSLewdUZ2ICtcME+QgobQQIBnyCQNoKF14ggWKQWgqCQIoUvIGJhaxnE2vuzN3O5JIjiV1zx/W5mt1iRRwKINVH/B7AO5O/hj/eVKxjWXU7SpwwrN7kSVp/uBtQygIA0JQCKKpcMrtTWpQhJu9Hun9/1++1DXTgD8GjcMVlqJwxSnxnOnkbrNkmYZ52fpNGKLjCHdE8lSHpv92BwH4JgqHTTAbMze41GyoEXQ5D2nvm8HBJgDMGxg5vZJJqKDFrxoqz3jeltPbwgQ+C7ARPi87TJ0M2hgWCtIKjRprqNhYE3VVtP2GToEuzPBqFioE3mfTgZiTJ4MfQmAwb0fIIwentk6NCmit6+ahaABhqorSKAOUEdQQsCfW3yVLH4pGBz/JW0px+3ISyAttCOA9biwlOT7lmhe1EcGpeuJ1ClX5ZBlkAQqJ/hGwQ0am5XXJCmAAAAAElFTkSuQmCC',
      'searchUrl': 'https://next-episode.net/search/?name=%search_string%',
      'showByDefault': false},
  {   'name': 'OFDb (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAAMDAxOTk7x8fHT09OZmZp4eHi2trbkKBFcAAAAAXRSTlMAQObYZgAAAR9JREFUKM+lkTFzgkAYRHci0XovA9SHqO2FO6QNCqYVRNJGccZajMnfz50pNGUmr9s3u/cVh38xKNujuhdlS9HdZa/lbFmo2+AiY7M938SoDoykf1tc5CYhqa9BF8qr/cWKZOHWn5JdKhtZksxsroWg34qEGSlSIBHnhYxOTxUNeZgD+ylGkagaUouznsNzp3asEgqj0/gNQxkDvbjk9KWR4w4JY/fOUvqpkCzX6Dm2gibQZsJgpbB3jQeaog/njA+AvAqRSYYJy3cg4tGKICf957BXAKOJFf7JiS9bhqBQeAwrMnhdvFgRkGsMwtyKzBVgq/buNiE3rXJiKt3GeFGz2sBRk20HDHTZ4EpeMZoqDMwSPwx3nOlf/zX7wN/4BhqHMgx6vI2UAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.ofdb.de/suchergebnis/?%tt%',
      'showByDefault': false},
  {   'name': 'Posteritati',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEXdAAD//f32wMDoWlrv+iWoAAAAa0lEQVQ4y+3OoQ2AMBCF4QtVCCRLsM9rm4BAVzFCl+gIGGCIG43ae4h64JdfLrknfyIjgIvBKwE2hoUhGkgFwUDu4S10gAUHqAF5QGkCWuAYBtqRdlpaCwyRYWXIBLPYL6daqPcvgenI8oVua2A6VxM2NuoAAAAASUVORK5CYII=',
      'searchUrl': 'https://posteritati.com/search?query=%search_string%',
      'showByDefault': false},
  {   'name': 'Prime Video',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAilBMVEUFeP8AdP8Ad/9fov8Aev8gf/8rhf+01/82if8Adv9wq//N4//f7f+Gtv+oyf+w0v91sP/S5v/l8f+81//q9f+Fs/9ppf/X6f8Acv/B1v+Cuf/K3f+Iu/98sf++2f9Bj/9jnf+TwP+yzf9zqP9Rmf+jzP8Ab/8Aaf+cxP9Tnf/G3P9Mlf////8Abf8vOGooAAABHElEQVR4AcWPVXbEMAwAJVOjOA2Dl8IM9z9eGbyv/d8xewwSPBpk8B+MvVcu3seP1R0SBagnh0mUhBLIes7V3rOvn4IwipM0ywstf++aLFHpKRPR+cIjfvGuhYu/8lZW8cl9k2V9qd9kU5ElvSJrO1He2vrUn3Idqd9n8TaQEYreY33DSCIrESlx7Mtx6uZxNMyMCLYMYF58tSatszbmduFoSSiWuI/a2ff11Qu9PhXs1xo/aTd9yd3A84eznnZpSVz2vC9unm7nUjtRuRLYbEJW1DuK1RXK2n4VmDMSI0BiDEl018q+iTxRx5sCYGREOLcGLIybJrnC40CnS2Z/Qbizyk/3D3RnNoR7yECV39xeIgLBHxihMcjgsbwCDZYVxYRdCUMAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.primevideo.com/search/ref=atv_nb_sug?ie=UTF8&phrase=%search_string_orig%',
      'spaceEncode': ' ',
      'showByDefault': false},
  {   'name': 'ratehouse',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEUAAADqmq3ijaz0q670q67hjaz1rK7yp670q67wpa7lk6zhjaz0q67hjaz////jkazyp67hjKv5ztDika/87O/1srX+/P3+9/j88/b4xsjjlbH34Oj85uf23Ob62tvrscb1tLb99ffyzNrwxdXuvc/rtcn1w8jlnrjyp6362NrrsseE2DBUAAAADHRSTlMAB/b3fXsI9ouLiorQS6cMAAAA7klEQVQ4y33O13rDIAyGYewkzqxaGfBe2Wnv/wKbAflxzIMO9b0WFuNJVqtEBCaaz2bzKNh3Owh/h/B3CH+HCHQIXx8GCF/XqtEQnvspUYpXpl0rIqUh3G4PmBNWoA9l2jX5A+RNl5baCHzf0Wh+3zcSc7/M3Z6X5pVErJc/z7ld9uj7y+21Xa7FJv420xe2F73dxRsRLeKv1/DRgiObVbyIBAQfLDiw0yFka0Er0R1RKaKsrTMiVaFD8LXI6l7KvzorrowOIU/niu+wOp8kuiuYzd8y+khg0KcCPSDQJwI9INB9wvSAQPeL7faj/wMnexwmmkZ+vgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://rate.house/search-all?query=%search_string%',
      'showByDefault': false},
  {   'name': 'RatinGraph',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAKlBMVEUAAAD31XP87oz9/PyqiwX5yAKlaRrOnBfnsAOAPgT/9gDZrTu7kXfpwEfjPyjlAAAAAXRSTlMAQObYZgAAARtJREFUKM9jwAW4N6AJNGkQEOAQUmxAEfBVUrqCqkNJSR2Zz35JSUnXAVlACQhKEHyWQkUlJSFxBxjXvVoIqEBRcXsJWMh9r6CSdlpayiYlJcHbJUB5QSVFoZ1nzpzJvCQopCRYwMAuKCgoVGZsbGwzURHIKgAaCKS2GRsqG6cABbQdgGaAVVhONj6mKCi0BWTJRrBAsnG6oiDEcd5QMxIFBSH+YbsIFjh5SfZGAsRljkABQ6CKiBawDpCxQDMOG88IbWGACoSCDT0WWgIXAFsrCVfhEdqWNqUyLQ1JILQ1amloK7LAKiBYGhoCE2gNXRXiuioULpDREdU2xTNjVQRMIDW0bQoDA2dGaBhUwNUN7GSWFJgKFgcEjQkA359UBa+JIsIAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.ratingraph.com/search-results/%search_string_orig%/',
      'showByDefault': false},
  {   'name': 'RateYourMusic',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAADn5eSFxOoURYsWPXdqs+AlZ68vXKcsUp5Cn9Qedbu2zd8HPo1FcbBgir+FnsDpLqxmAAAAAXRSTlMAQObYZgAAA0VJREFUSMeFlc9r02Acxrf/wHgSihsLxMtwlzfMHSIy+iIDGUIghzDmZaOBMHdRmh4sQxgmh81b0XaIh0GgOQgpCLqil1x2qAdB1h2cMA/uIEN2UhiIzzdvkpr+oE+S9n3f55Pn+2229p3okyTlpgMuaSQzKWW6MsYHMcYHMcYHMcbvJ7Dw1tDzRF/A+0aj+XpUBAKmG/V6vbkyPAIBBRM2znB4BBWox9obGoGAeqqhEfgEsEZHAEAHZq1Wq5tmPiKtcLVm1mHXIHNvsMYkKpiQgQtgOACggiFsw6iZZu55Jp+hZhgGXBSgwUo+gioYeV0WxgCGftluhzjaAKgFRY9Xxanoum4oGNKiJBFQMBRd1hUI67gMRdZpCjAUgJhiVVYUWaYXcml1RqIW2jpWcZFAibESs2iCnqOcaW612/0m9zQTAy2McEGrlaUFz9vVM2A2BYTOPaHbKzRrJSWkDHjhpXqeZjyQJADJ5AxORnyXZ+WW8mP3P+DmUmJWHNetuA9fnZ9U3CoBhVbc/7ZwPderVCqO4wJ0yr0E5dglx/UcrAuVq1XHyoAzcpHtkuWVHafrWF2rXA0JaKEBD2Z6L+dL5RIdpZKNBDyHWQWNiVjHKj/inM9bVom0KQD5ZVK1TMRjjgi6G9cb8beYS+34tm0OwfVtP7gjHvUxGjpCURGrwmfzgQ1//14MXH9mWWXRFORrTFW1oOQHdqAuApiQpiyYiYuTqYwxO4DW+Wn8HzUtPMrEur1eLEaMfJ/zixiQjnzyS2tcXQOxj4B54XMJAJq4UbJte42TiiBYxOwGFeD3k+/FQeD78AWBeyknWMBkMQGm7WCfp7rbDJpB0Fin8SkB1ATq9VTCz13AaLSMFgRwoCKbq1wtxlXmGc3RAgGiBpZVVS1CeOc0o+MCFZKIL5hCjBGjsphknxCQAtcieOQQRgykfQaQ/QzuFIusyIQoCjoMUSGL+BDRYswgh960pxTQi/jK8tKWJQroRUxFeaBzioDcdvCOiAV2yFiEl84WAvo2lD9RdBixDW2DaRudTSz0b0mF35q2oyFA60Rb4dBN6+OTThTBv/Vz2LYnQe2/J8dW9VebxqP25RDhpHFb89jNfbQG3H8cqcwnP1tF0AAAAABJRU5ErkJggg==',
      'searchUrl': 'https://rateyourmusic.com/search?searchtype=F&searchterm=%search_string%',
      'showByDefault': false},
  {   'name': 'Reelgood',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAMAAAC7xnO3AAABiVBMVEUAxnz////+///+//79//78//76/v35/vz3/vv2/vvz/fry/fnv/fft/ffr/Pbq/PXp/PXm/PTl+/Pk+/Pj+/Li+/Hc+u/b+u/a+u7Z+u7Z+u3W+ezS+erO+OjJ+ObI9+XH9+XG9+XE9+PD9+PC9+PA9uK89uC79t+49d629d209dyw9Nqv9Nqu9Nqr9Nir89ii8tSc8dGb8dGV8c6V8M6U8M2T8M2R8MyP8MuO8MuK78mJ78iI78iH78iH7sd97cN77cJ27MB07L9w671u67xr67tq67pp6rln6rlh6bZf6bVe6bVY6LJV6LBT57BT569S569R565Q565P565P561N561M5qxL5qxK5qtF5alE5alB5ac+5aY95KU65KQ55KMz46Ex46Av4p8t4p4q4p0q4pwp4pwn4Zsk4Zok4Zki4Zkg4Jgf4Jgc4JYY35QX35QV35MU35IT35IS35IR3pEQ3pAP3pAO3o8J3Y0I3Y0H3YwG3YwF3YsE3YsD3IoC3IoB3IoB3IkA3ImkwFqMAAAAAXRSTlP+GuMHfQAAAXZJREFUeNrt1VdTwkAQB3AWqWLviqgoFuwNLFiwdwURe1fsDUEFW8J+cucuCDMwQ5J7cHzIPv2zs7/ZzNxNolIhY6kUqcj/IZ8irHK93MszSoDmM1YJOkeQSZosAHkznwyy5Gu+AKB6l0Eihgf1oO64ZpCIAbsajGNvJPJ2m63F4YlKlBjbrAQoXuIQuRwgVboqKnXmbRJ2zGS+7uRXQtak+KksI951qcm0ri+YkKDdE5cRdzadbTpFTEqwisreCjpY5qH3MDY3NZRLG5obMUnL5CZ3n3+g3QsD7a1IkNrue/J01DgitK20Oysuaw9JvuzUgIt2o4W0vSAmixa/EfGxXw8AA6FQ6Pm4VXiTg8zSMPpK0zCkVn40k/S1X8VTuhzPeCofiZQm66MSv2Cpsu0F2eREDOXJnsB5DQ0NnEzpQtwSlq7Jl7ywtOpdtkS/sHRavuQswkUIy5bohWSWJ+NLjbfSpM9JaoPmfZqdfuWfrUhF/rH8AWogkZaxzEKaAAAAAElFTkSuQmCC',
      'searchUrl': 'https://reelgood.com/search?q=%search_string%',
      'showByDefault': false},
  {   'name': 'Rotten Tomatoes',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://www.rottentomatoes.com/search/?search=%search_string%',
      'showByDefault': false},
  {   'name': 'SapoMAG (PT)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEX9/f4HIS4bNUI0T1xDXmrL1NlrfoecqrHL5BjxAAADK0lEQVRIx22STVfiMBSG3/kI3U7qObq1qeJWaIEtQ4tuy4e4rYjjNqAz/v15c5OMU+XJaQhp8tx7k2JXH2P3KzbUN1VZlvUnbgI0VEVR1NXHVlHjwE1dl0cV5J+BVEehBlxYkLL+0PxMOUZNwxFFeetnguGz4o998SNUXPBJMZu/Iik6BireKa5wDaxkDNY8K4Zs3FDE1vSselNuRgzVB0XR4hXPb1NRoCJDoQjMJsDt9wZrxanSGzqKfoOkfUv6ql13DFExtMwPb8uhbdXMGUj+n6KYgxHwe2Vsi/VFxyCKPt8nU2yS554FFajdrlyaE+UMgG8uC/zhqNc18DieQH7xed25YRINAR4hUdcgjRvVBaTGaMgb+Age9fiai2F08ALTIkYQXtpt7gwz20uHZmgGV37fCJ7vk8QMIV8Ntjk59WqWJyRXWOViGDEsBZkN4pBA1WBrDCo5W5jcRHP4fbRIcjGMQRamHyP7TFc8hqWhoSjGjQt4YuFZ+UQu2c2cITMXotghMJEEx64zBCY93VxGs78oUlnnYmI0ZBqHOZOeQFiCHGT1LBi0xbblG38Kt3zWc3HlFNCgsynvnRd8KbPXTLDvXSYY0nPOc+4lXJTiRxkjSA7mzOV4hd5UilFb6ws10WBO5YDnYGnqXBKMEcTAHo7t01eLr3YdqlHDaDDxlip7iR2v0NNLvUEWeGlycVCTooFnkUUDOQ+bypvcIjA0wTBwZSgBK/2kAj2TCTQ4eGvykxZGkL8xhyys1YRdgJlJoyGSdjDyyDlEdLdFeJKxddCB9N1wXEDDUYU+agjEQTSEDdK7R/qPhpPf9w9Z9rzW+vn+/qD15G7TMegpoFLdQGt3b4MzdquOoTmMe/oE+KnbVdks2mQwV50c8MDAZ4nd63avp8tmz9UPwSD1N2qdZeffrr9ou9B2iYHWdv9/DpfARreLHz3m0OARmea/aJC6x3cYNPtTpVulNmnHkLmyDWNW4OZBu+QhMAeXVjSQu+0FxiB75kB9LxvFKmTBSQOoH0lq7BcJ3T0HTfp36mG05Aku5xL6Vm2yd4MsDJ0Qh9FwlM/fwztph7/J5ST4nkWzEAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://mag.sapo.pt/pesquisar?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'ScreenAnarchy',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAGUExURXoVA////7XVBmYAAAI8SURBVEjH3dW9jtQwEABgW4POqdg2RQ6/wpZXnAiPwiNsuRUOT0B73b0CJaURxZXX0mFAokSRrjhLrDJ4frybNaJFwBWr5Mt5xh5PHGP+j7+phdhCamFu7u0vkFs4NAC/hY2mc4sORdQHChtE+RevEBAl37h0OgLlUVh6jl0AJ34i4AgiP1muNSZHtR8UPEFZFtzhwrFGgpLG3WvwQFAmvfnUgK9A93TlsYFRwTLgGSRHEE4wQYWDVoMrgiswtLoKQAMr5Ao1mwCeg13DLBexhaUFHsSlfZh0cVnhsQIy/JD4QYpc4EFglGhlxV9XkAneC3hZVYHXAk5KWPZLVwGSZoPf67IYJo/fKowKsQKPiStgieMKSBTqC1LmHjDa2yMEgfEIIyYq3EjFA9oMhukMPq9gWUFSCFILBd5GBs/diDyjuyPQvgQCbrN8bKn7Ft4IHGp98JZ7l4H3Bb3AUmEZabgAV/DAwO0p+5LDCfgFmoNOctIaJzwBT2SSt0zaq6RZ7BpKkKyX8ss3sgNBOhLSX3mIlmk9Nz6WYy6Y/or6dDZofGIYGLb20fiZ4RnDZKMZduVnZzxDJEjl7Hxl/DsKOhfwCnzCMUQecsmwt1/MpcCwr2mHddqZrhTo7LPJXJvuJUPX/8ESPenNi1KmHXTAaeNFb2JZYoYBaLU2uhuT4AoK8AfFJvfREpRvAwMkl+0M2dHHgvoAdm4Pb2E+gpsdjd/BDQwC2fUuw5ayMDztXXfRw9bM0Jn0L3+3fwKL326n9SzYSwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://screenanarchy.com/search.html?term=%search_string%',
      'showByDefault': false},
  {   'name': 'SecretBinaries (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABXFBMVEUAAAC/Hhi/Hhi/Hhi7HxkaHBq/HhhEREO/Hhi/Hhi/Hhi/HhjBHxgaGxnAHhi/Hhi/HhgcHRvBHhi9HxjBHxi/Hhi/HhjAHhi/HhjAHhi/HhjAHhjAHhi/HhjAHhfBHRguIB5tbWxgW1q/HhhcXFo6Ozm/Hhi/Hhi/Hhi/HhgaGxkYGRe/Hhi/Hhi/HhjAHhjAHxhiWVieHxnCHhhZWVgrLCojJCKkHhmuHhg6OjkcHRsuLi2/Hhi/HhgjGxnAHhgYGRcbHBq+Hxm/HhgbHRt4HRkzGxhHHBkaGxpPHhq+HhgaGxm/Hhj///+qq6qLjIvCHhhjWVheHxupHhmsHhjs7OylpaXVaGRUQT/13du/v7+ysrHlo6CPj47gkI2zHxl2HBjk5OTi4uLh4eG2trahoqGXmJeTlJOLi4t8fn11dnVkZGPSYVw/QkHKQz7JQDtNOjjBJB6EHRlzHBhixn5lAAAATHRSTlMA+9KOQEZLyE70sC0aFQ68o4ZYMgjn5N7MnYR9dSYSCv788+rp08WVkHhyaWBUPDgh/Pz67ubm2NLQzrqqjIBwblJERD4yLiwmIBYPAdHnrgAAAX1JREFUOMvF0WVPw1AUxvFzBxTWlm7Mfbi7uzunDHd31++fcA5r17uFhHfwJEuT/n9Je1f4183+0isem0FeqsHXqfqlvmMeT0q9tQaLilE0Gk43zUyLnbV6RAaIQZ/deXdZYRQJtADNkwRo7us9oF5V2z9F3Rei20e7NkARSwOUrBIoBZruQcwH+BGelgB1azF/9npWuebWHSDs7tIhKrgfr6+hUgiCjf4AQFpPuD5vTQJlecDtVYw2VSQ0EZkYvzELQMTTmlK8buuYmw90vzoa0hwA7Q01VN8tkGHgSwOD8xHuUfze/okN+BFhg8BFXbl0iqdXGfApLqk7gJdICgbWS2aGuDsgpDYFoM07kAPDVocghtW4okPnTAA6tHkGXT2iY9HukFpOKk3eCJ0z7j897WZQuzS3ArnFKPH4mBvP9/yVr6sqFzjlvcPuC59i49Ckbe9tKRKQ/wcW3LGsAPAYkLji/jMYa0cWb9RRekTcZa1eC4zydZB+qgF/uC8UkYCgZ02VFgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.secretbinaries.net/index.php?search/&q=%tt%&sortField=time&sortOrder=DESC&findThreads=1',
      'showByDefault': false},
  {   'name': 'SensCritique (FR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAG1BMVEUAAAAAAAA4ODgnJycBGAELCwsYGBhUVlRHR0dfQkCXAAAAAXRSTlMAQObYZgAAAJhJREFUOMvtkjEOggAQBEF9AIPSA422ygfkEVobTaztaO302WqEHJfsvQCunezOFpfM971FGYDVMQD7dQAgaALdlUImQQubQAGBQkuqH8iDJpBNuiv9g0yNBTWY/oRCS6oB5EKhJEuGK0o1FjhddFNxvjpggXvjxlrg1jzdWAsctk5hgXo3+rRxoH4/bKwLvAy0LtB1yaTvAxqEHHm4y+8dAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.senscritique.com/search?query=%search_string%',
      'showByDefault': false},
  {   'name': 'Serializd',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+BAMAAACB77V3AAAAGFBMVEUAAABEu6Sa/v70//8Yemdjx7cxnIh12s8sFAO9AAAAAXRSTlMAQObYZgAAAVhJREFUOMuVlbFqw0AQRK1CvVfoUJ117PTRFwgO15FxSC0QqR0TyO/nInGMbucu4G0f55l9iPXuoXkXkY8iHWUdl6W1YG6MK9nOG79Ox3KxQ9XM7Mvh3DEB3fiJLfm5Uz2esQM9b1S1ndDA7nYP/HnYrvCVcA1zOmMF2041FnC55Rq8lxy/H/7yV77PqNX+VfU6lHi3cD/JMpn4Q6/64qXEL4Gv9WLAyPHf4Nl67RDbUL3w80s9FOB6T17Aa2OnX+yAV0U74GwH33lF8UcvhpMd4mQnCkq4gx3iZAec7HA+2wFnO5gbONmBf7YDviM7hls723gXOezMgzkSFdlhznZwxmpjh46UsUN8hB2OR4FGYQfxKHBRpfh1cHdSO108b+DzkDvS+P2kHq5vPDwnb9ujoQu83daz53v6uSafJp3/OZ+OFciNSeByGKDCX1wRc0RHDBro8f/zCxqei/YvH0qDAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.serializd.com/search?searchQuery=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'ShotOnWhat',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AgMAAABHkjHhAAAADFBMVEUAAAAAOaskVbdKcsNkxQmEAAAAAXRSTlMAQObYZgAAAMtJREFUKM/N0rERgjAUxvEHHoUFdIzACPaMYMEfLSgYgIIRsoSFK9i4Aks4giPYWYiBeHnhThsKvyb3u+S95C5PpmTnq3i5A7X5cIeN44Yp3ewC1IEb9PIAessYqnEBGusI2qlpZZ1AOS4p4DtyLsBMbRjezsG9wvy0vagWvz6jFdffSxo4gcp3Do1voP9SXujyGDB6++gxAgZ9eSfKtWg3gfeB+8Dln9sop4hKdJB189TMaXzGUKvnLL+HckVv1XQsZ1NOVMrZZT7+AmePTX/3jCjoAAAAAElFTkSuQmCC',
      'searchUrl': 'https://shotonwhat.com/?dbid=%nott%',
      'showByDefault': false},
  {   'name': 'Simkl',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAAAMDxH///8hJCXd3d36+vpZW1y1treChIUVGBrOzs9vcXLx8fGVlpdBREUuMTKCPQaqAAAAAXRSTlMAQObYZgAAAPRJREFUKM9jYBBEAQwMjKgCAlAFCECkgORkYyCwhAtYl69yAYLlFQ8hAvJLg5TAQPXERLDAXCAfAnQSwQJ/lODgIljgqZKSbwcQlCopVYIFkpRUE0HmW8EENimpbgQJiO3eDTEjVUnJ/W737rS8xxMh1r6Bmhh6phpi7Sy4JaqNYAExJ7jAeYjTX1QtcTlzNBQoEgYWkBScbPz/37u0dCUlbbBAenm5Icha+UNKGmCBJrAfgGYdgqrYBHT63d7e3iswLakIz50DC5gEwQWKIe5YCuOHPIS4w+z6qiUuLqtW1e6Hh/pMUCDPnEhsvKABjMjGSA4A8U1dtaNMhXUAAAAASUVORK5CYII=',
      'searchUrl': 'https://simkl.com/search/?q=%tt%',
      'showByDefault': false},
  {   'name': 'Sinefil (TR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAABnbnk6WOvbAAAAAXRSTlMAQObYZgAAAJNJREFUKM/FzrENxCAMBVBQiisZwaMwGox2twmnK65NlxQRP/52ENkgFpKfEP44PFb96oLVARzWFwCGpHgTomhEUdhr7bJrj0BPB4cIRr4IXNOC6tMgskETywCs2kR0rBPcZhv4Azt/mPgNfA0WolgMmeCsjJtE8OvEwI8joqI6QlE0IgcidANXJURRDPWGTOh5ok5HDair3k0bjAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.sinefil.com/ara/%tt%',
      'showByDefault': false},
  {   'name': 'Sinemalar (TR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABa1BMVEUAAADy8fG5tbPc2NnDuqyFgHaXjI62r6zGwL/Nx8fIycnT09Pw7u717cXn3cTq5tbm373g2se3r57PNUC5qH+DGka5qoTazLWViG7Uyr3Sn53LwbK0Nk3QyLyginCwoI94N0+xqaPFvLW6UmaGVl6jmpSgl4ewqKOzaHqLZGx4YGSPf3+/s6+uop6Qdn2zhJGfnZzAt7e/o6nLvb/a1NXa1dT////////m5ub29fX//////uP//N3//On//ub89tz59NX+9c7FGVGqD1DkJEuzFErZJj/fNzjwcCr4oBH6qQv///v+99n//db999L17dH78M/3683g2sr34cn878Tp38D+5rb24rP/sK71yKXqwaXutJzdkpPugILhcHjKYnisPGGwGFWqKFH0IFDvVk7hIk29Hk3hMkz2P0jsMkHgL0HkOj/0UD3eIDzyejjyWjPtYjDbPyztfx37mxT8twj7rQj9xQX9vQT/0gAGMuGiAAAAO3RSTlMADVAo8bd0aU49NSoS/f34+Pfz8/Du7eXg3t7d3dnQz8/Nxb+xrquoo5+fkY6Oi4FlYGBEMC4kHBgKBkvXrikAAADDSURBVBjTY4ACZk5LHXYGBOCQ5GeSZ2WE8kyUdMVtQ6UVWdShAqYsQXaBfH42/qxQAUNBa4dwWx9fISYIn1HW28bBPsDR0V4VIsAjFREbHRwZF5/ABtWinJzpkZfi5CzKDBXQyCjxKs13SlRgZLACC+jnVBSkuqQ5azGYmYMFjFw8yj2zXZO0Yc40dstyLytyjeJlh/lDuNjTqzDGzkaAgwfiEBk399z0EOswazWo0zjZ9DRV5MREJAy4kTxswcUF4gIAh7AhUVZTtLAAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.sinemalar.com/ara/?type=all&q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'Sky of Usenet (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAAAHvtUs1wonAAAAAXRSTlMAQObYZgAAAQFJREFUKM+VkrGtBCEMRI0ICCmBTpbGVkBplEIJhATW+s9Y96Xb8BywT8j2zNoIomzxCGbDIZtth26mDobgNxKYlAiLxU/Vzuy6Ly2HRfO6k7JotBYe9pXWxAAqT5M+JB7RKnVK2kHrKFPyiqeMvADplJm2lJk3bgEDdxslTEwnAFAa1aEPKKh4ewec0uWWBjFUNLmR56ARUBzgN8/rGxahiiZA+g28/NUQooQCaB/Rfz805g5VKj2bQ5/xCfzBfooCyqhmJwImdxE3x2K2EiGYcVDgqkjgMOPkMKkgHG8wAg/uinpQEPGlVBo7gEIb21c5o63v5Qrh/QBo4/VIPl3+ANZUzCSFnBiSAAAAAElFTkSuQmCC',
      'searchUrl': 'https://sky-of-use.net/index.php?search/=&q=%tt%',
      'showByDefault': false},
  {   'name': 'Stremio (Movies)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAByW/NQWOspV+D+/v9MZed4ePC7uvgUSxSbAAAAAXRSTlMAQObYZgAAAY5JREFUSMeVz0FOwzAQheFQxL7jDdt6LPbIUW9QJVsEvQCFC7QSPT9vZqpMUkeD+EGVaj99Sbv/RhTfPxBtYwD9AcQEaSEQE3QrAGKCpgIgImhWBBgRA2gViAm6awWICWpqgJiglULAiBZ4HlYJB74P51WCfDB+NgSAhCgnGRyG3BKJkCwSBodzQ2xoJqBTnjIiJf2CCetgTJOQ9Q3k0oIgDZwz24EQDpqAzjmTmRkAY83Jug3GE85I5W23ybpASQRrSKQPyXnXbTiZgHsRjGB7CRXYm4QLODPxliuDqzzTTPyK92Yw6hvpwQ6Dp2Zw8gPcL4ij3P/4dwBCLIWB7wAQtdbChblCGGfgCy6VqCz3WEG4FMbaeuucKAUbDK49pvqtCjARVjmOeqWP46qA9VG0uv/SYc9CAnCi9KX2mOBDDHxWBZzQhf8jBZyQ4366lz8DnOh7nFq62ONwSVhyp58AlvXLBGgJzwEvBtDjfPCKg5DQg4aIARQBRsQAigAjYgA5EBAAggwICQDx4v7+F/vvmuxaMJbqAAAAAElFTkSuQmCC',
      'searchUrl': 'https://web.stremio.com/#/detail/movie/%tt%/%tt%',
      'showByDefault': false},
  {   'name': 'Stremio (TV)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAByW/NQWOspV+D+/v9MZed4ePC7uvgUSxSbAAAAAXRSTlMAQObYZgAAAY5JREFUSMeVz0FOwzAQheFQxL7jDdt6LPbIUW9QJVsEvQCFC7QSPT9vZqpMUkeD+EGVaj99Sbv/RhTfPxBtYwD9AcQEaSEQE3QrAGKCpgIgImhWBBgRA2gViAm6awWICWpqgJiglULAiBZ4HlYJB74P51WCfDB+NgSAhCgnGRyG3BKJkCwSBodzQ2xoJqBTnjIiJf2CCetgTJOQ9Q3k0oIgDZwz24EQDpqAzjmTmRkAY83Jug3GE85I5W23ybpASQRrSKQPyXnXbTiZgHsRjGB7CRXYm4QLODPxliuDqzzTTPyK92Yw6hvpwQ6Dp2Zw8gPcL4ij3P/4dwBCLIWB7wAQtdbChblCGGfgCy6VqCz3WEG4FMbaeuucKAUbDK49pvqtCjARVjmOeqWP46qA9VG0uv/SYc9CAnCi9KX2mOBDDHxWBZzQhf8jBZyQ4366lz8DnOh7nFq62ONwSVhyp58AlvXLBGgJzwEvBtDjfPCKg5DQg4aIARQBRsQAigAjYgA5EBAAggwICQDx4v7+F/vvmuxaMJbqAAAAAElFTkSuQmCC',
      'searchUrl': 'https://web.stremio.com/#/detail/series/%tt%',
      'showByDefault': false},
  {   'name': 'SubSource',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0AgMAAABAo+6hAAAACVBMVEUAAAABgIACAgLLPOsMAAAAAXRSTlMAQObYZgAAAJRJREFUaN7tzjEORVAQRuH7ircECquxBIUpWIId6UXCKhU0d9zMEAkS55STL38mbBVzoimo0Gh0UovO0lOpr+b2TrPNNtuPb4tTHWmvAY3+gs5Hp0hn4hRprx8ajb5P/yVVKTpTN73K1N2sMnV7Snev0fzN30e0pKpXXYVjodHot2o3NBp9o/ZDo9GP60xUaDT6ul4AENu/fpt6VhIAAAAASUVORK5CYII=',
      'searchUrl': 'https://subsource.net/search/%tt%',
      'showByDefault': false},
  {   'name': 'The Numbers',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEWzGR7//v7lsLHMZ2qhRA34AAAAZUlEQVQoz63RsQ2AIBQAUQIVFm7DKB8TtWACZ3AJlkAL4wTGXdzDTq4zIf+6V59pz5VyVIikD/YfXdkrgkxEvABZiUTMxEDITZzEQoyEaCIDMRCe6AmXAfMQgfCEVYWrfzYM1usFNk9VQcgIcoYAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.the-numbers.com/custom-search?searchterm=%search_string%',
      'showByDefault': false},
  {   'name': 'ThePosterDB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAD7bEL8q5T/5+D/+Pb8i2r+1Mj+w7Lo3izNAAAAAXRSTlMAQObYZgAAAM1JREFUKM9VkcEKwjAMhlXwbga9a2G+wGR7AAde7Q56d9o+wLB7ffMvybD/IfT7aFJIN5rgNkVqouGf98S5F1yYHYMLXI4q+FzlFNiu7HI7rmYLbjgvNoflgjszwsgVIrAZCIdz36OGRdDUazoS4d7Ct6CCHiI+pKKaR3A7n1TkxIZ5TiZijJcrFxNVjg0nJmuhZ7PkSyZ8BidvYvAwnfe1Cs+ZOlQb6jUyNKAHQYfTDQ/CuucTjHBlS8VgkobVCFtEKNhX0bH8XDxQGOMftTs7PgAFfmYAAAAASUVORK5CYII=',
      'searchUrl': 'https://theposterdb.com/search?term=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'TMDB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAAEJkIADixfv7IdZ3sYtdYz5fSL6MRZBwKqAAAAAXRSTlMAQObYZgAAAg9JREFUSMfNls+OmzAQxrdv0BnYzXmm5AHAaTjbccg5K+AeKXBvicTrd2yInW4adqVKq/0gCsG/fJ4/FubJScM/lT5N+gYP9d0DsKBgsGQBi/IGyxb/D8A7+jIAMhOgfE9XACyiBYdpjAOA5VBeuDSgMFHbnHjfOB0pALty2DigFEAdYd17oDNhCl4VhCVyiS8FE1ZNEy08gB7YWJliYzW0M3C+AXIJZBwF2PYFNQ8ADcsOyzEIMGXxs6lpzqI3cA9IDOe5DkI+qiT+Vclwi+WMvRBBBNgNOoYD59BY6tQSSXpsNaUW0GLqLqwOwGGgbCwwGQeT9Ug9Zmd67iXcAIwmGXMslbpwa2TUAfWtQ1kcVJ4NSimsXtcTcGSKwO73YeeBrUlOL6/ggFhJAexFrQoPyASVuQf0cFnNU1DXINxNYcpfq5xckITtmTxQA0SgkMOlOeaE1YngbZo7k5hEA1nLAKkByGpKa1vHdpM7XHX9D/+JpV5W7OYs/zfk6WYEMnXVRnJsGk0oiwYDIM3wEqDPad21vcGqaeOazEYV1LkcqxNXZh1X9Y8hAq7YLGeln2OpkzcAZR3v25tVfQ+IQ72PhZI2RaGMPgtgqAsAlYHYOn8rWYhDDFLa5OQpA+u+rxmrvotpAqd2liYAqxEgtZpvesFXEVx7xvy1nrRL+owt6Z0gPrCxLlt8bHNffj34A6r1+YAJRp2JAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.themoviedb.org/search?query=%search_string%+y:%year%'},
  {   'name': 'TMDB-ID',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAAEJkIADixfv7IdZ3sYtdYz5fSL6MRZBwKqAAAAAXRSTlMAQObYZgAAAg9JREFUSMfNls+OmzAQxrdv0BnYzXmm5AHAaTjbccg5K+AeKXBvicTrd2yInW4adqVKq/0gCsG/fJ4/FubJScM/lT5N+gYP9d0DsKBgsGQBi/IGyxb/D8A7+jIAMhOgfE9XACyiBYdpjAOA5VBeuDSgMFHbnHjfOB0pALty2DigFEAdYd17oDNhCl4VhCVyiS8FE1ZNEy08gB7YWJliYzW0M3C+AXIJZBwF2PYFNQ8ADcsOyzEIMGXxs6lpzqI3cA9IDOe5DkI+qiT+Vclwi+WMvRBBBNgNOoYD59BY6tQSSXpsNaUW0GLqLqwOwGGgbCwwGQeT9Ug9Zmd67iXcAIwmGXMslbpwa2TUAfWtQ1kcVJ4NSimsXtcTcGSKwO73YeeBrUlOL6/ggFhJAexFrQoPyASVuQf0cFnNU1DXINxNYcpfq5xckITtmTxQA0SgkMOlOeaE1YngbZo7k5hEA1nLAKkByGpKa1vHdpM7XHX9D/+JpV5W7OYs/zfk6WYEMnXVRnJsGk0oiwYDIM3wEqDPad21vcGqaeOazEYV1LkcqxNXZh1X9Y8hAq7YLGeln2OpkzcAZR3v25tVfQ+IQ72PhZI2RaGMPgtgqAsAlYHYOn8rWYhDDFLa5OQpA+u+rxmrvotpAqd2liYAqxEgtZpvesFXEVx7xvy1nrRL+owt6Z0gPrCxLlt8bHNffj34A6r1+YAJRp2JAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.themoviedb.org/redirect?external_source=imdb_id&external_id=%tt%',
      'showByDefault': false},
  {   'name': 'TPB-Proxy',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8BAMAAAAkp6FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAkUExURQAAABkZGTMZAEwzM0xMM0xMTGZMM2ZMTGZmTH9mZn9/Zv///0CpG+oAAAGySURBVDjLxdXNitNgFMbxx2NlHHMThz8DfmRTBnfdSDeDuhFczc5LKINQ0M2Ay16CFyDSTYxgnT435yLph0lqVXA8q5D8kpf3Oe8h8pHS7YF5tzpgrH6V+yDoV/FHYOA55X8CkhSHQBBczOfzKUEMgPzoa2y7zoWrAXBir8K26/v2OvqgtN2AYnejC/gVKLaJHwB37VUD2qtuN3PiV00AOfGs06ybaHNo48oATvdAPRT16Bg4+SdAABkHQAYGKOsG9sDjunAFace6C74GUPjUFeTS99zdpgU8qvMpwNkzPveOfZ2QQgFIKUDL3x7evHMERE6OgLbzA/Xals1BUKmw7DdwAIx50HyBeDEIZhSWK0gUiwEApeUZ+WQq9cgKkbYMYa+nktiRT0jNAMvXKleLlsQ72+u3SCARnDRRq8n9AyhICSm4tMekZbuOpnPft6dt2bYwtmDk1XkGqBmJJmRZ0SwRIAUSF0tfKYjndkW+3LT7C6TEZbuFK4XiIeRkA74FZz+lMBUJ2h6YmuxkeHO+GW/ZdjXQrs1LLRj1GxH5freEigGwt8Rg5TFQ6bb/en8PfgCTTMM5Mqng0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://mirrorbay.org/search/keywords:%search_string%',
      'spaceEncode': ' ',
      'showByDefault': false},
  {   'name': 'TPB-Proxy2',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8BAMAAAAkp6FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAkUExURQAAABkZGTMZAEwzM0xMM0xMTGZMM2ZMTGZmTH9mZn9/Zv///0CpG+oAAAGySURBVDjLxdXNitNgFMbxx2NlHHMThz8DfmRTBnfdSDeDuhFczc5LKINQ0M2Ay16CFyDSTYxgnT435yLph0lqVXA8q5D8kpf3Oe8h8pHS7YF5tzpgrH6V+yDoV/FHYOA55X8CkhSHQBBczOfzKUEMgPzoa2y7zoWrAXBir8K26/v2OvqgtN2AYnejC/gVKLaJHwB37VUD2qtuN3PiV00AOfGs06ybaHNo48oATvdAPRT16Bg4+SdAABkHQAYGKOsG9sDjunAFace6C74GUPjUFeTS99zdpgU8qvMpwNkzPveOfZ2QQgFIKUDL3x7evHMERE6OgLbzA/Xals1BUKmw7DdwAIx50HyBeDEIZhSWK0gUiwEApeUZ+WQq9cgKkbYMYa+nktiRT0jNAMvXKleLlsQ72+u3SCARnDRRq8n9AyhICSm4tMekZbuOpnPft6dt2bYwtmDk1XkGqBmJJmRZ0SwRIAUSF0tfKYjndkW+3LT7C6TEZbuFK4XiIeRkA74FZz+lMBUJ2h6YmuxkeHO+GW/ZdjXQrs1LLRj1GxH5freEigGwt8Rg5TFQ6bb/en8PfgCTTMM5Mqng0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://tpirbay.site/search/%search_string%/1/99/200',
      'spaceEncode': ' ',
      'showByDefault': false},
  {   'name': 'TrailerAddict',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUDAwMWFhXD2lOBv0lRZS53hTdpmT2twUv9pOwnAAAAjUlEQVQoz8XQTQrCMBDFcXsDH9RmPxDc+7VP1QNE4gGkgnsRvL4vJiMj3bdvNz/+ZJHFVINZvhsLyxKcuAScrwlf6LbcDa2ILzDwPgC9wi9Q0ECBTw4l2FQACAx8b4FB/IN8WNgzUGgyPMQf3095KeycxJXIOigE54ELgwp3uAh0DCoEtOASFMzGHzTTPkaDJSo/bx/tAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.traileraddict.com/search/%search_string%',
      'showByDefault': false},
  {   'name': 'Trakt',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEUAAADtIib++Pj3l5iN/wfkAAAAAXRSTlMAQObYZgAAAcRJREFUOMut0zFuFDEUBmBScATIdfYIU+ybkVyY3hdAGAGXyEw6OgvZlpXKQoqEuERMQUFH46nTRIqS9z/veiepUsTV+t/nzzNjvzcvHWdEz+dEu01A9O2e9qf5W7oL4WpT8u5r4JH3XZhCfHgIkfoKHQqRDnk4rqi/CIE/rplQQPYylAOhEvGoX2zeNcJknk9+1WloRCAQP/wUGzJ5AvHdUb2RQDsh7Ex2buYshPlM2u3ELCCcNzQmCaoQi2PKD9jEC6EWplYE56kRoAz2fe8OBBZi39F1gtQFHiN3gtSMYO4E6cwBfun4CQSNGQ9amLguXgLHgeXA6J/uSeA/poJgcjsO8EdaaRuoJdonFUZd/8vbwDOaTkEZHaPrJlALo4z0wAAF0p5DFQ9UkFHe5dIBFUQj0PmPixOQHqgl0SqIupBPaFQmK4i9kY/sTaGGmL0cw/9I1JA64KDWkYsbEiUAQYJMcpRnFjdKkNFJoJhoyN8s9wNEQw637hwVgoT94ZoWEuTKD+0W2tyQChOqjg2p87FbQhYkghDESklNINqa8Ju4h0rvIKqBR6JTi008j2XYNOWHGm9R0EuA9gLZiNClrzUeAeJhSOeKK4MPAAAAAElFTkSuQmCC',
      'searchUrl': 'https://trakt.tv/search/imdb?query=%tt%',
      'showByDefault': false},
  {   'name': 'TVDB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADGUExURf///8bGxqqqqqqqqqqqqqqqqo2NjVVVVTg4OAAAABwcHAAAABwcHDg4OBwcHAAAABwcHBwcHBwcHBwcHBwcHBwcHBwcHAAAAAAAAABVAABxAABxHABxOACNHACNOACNVRwcHByNVRyqVTgcODg4ODiqVTiqcVU4VVVVVVWqcVXGjXFVVXFxcXHGjXHiqo1xcY1xjY2NjY3iqqqNqqqqqqriqqrixsaqxsbGxsb/4uLGxuLG4uLi4uL/4uL////i4v/i/////0lx5+8AAAAYdFJOUwA/R1BUYHZ+hJ6eqqrf6Onp6u3y8/X5+1fyvVQAAAFUSURBVDjLzZLtWoJAEEa37zRL0z6GpWAkpDW0XMRMNG3u/6aaXUJJ8W9P5w887GFmdvcV4g84bFguNjQ2HAtxAoAIAOGzUnEcKxU+gfmUA6fiCnhZTanMOCwMuBMdBJzTZxJ1fc/gB/0JUVoU6YgWwBd1pXTXSEf2aWobI7ZZSMlzvF+4TkSKx+JOLCAlW+tsyOUKQmKrLZqKfHdb8OSQjDAwgiZ3V3AD/nswMC2a00rB47/zIZvZslrQYAwW5jNZKbzBYhGCFaorxDykNkK2p8II0rSY4WHfDLh/F/5mF5oeKw4qoBC0toKiQO4IziuByodsAb1X3AVl5qhDK2jqOu7WbQ55DdDe5jXCB/VduU6EeUu4eJGHG36mRLPkJeoFQdCLhpOZucafzN2KS5NJHM9LkcxGuM5kRxzco001d8zBUqgRjoQ4q9WZWpl6Qe1c/Ae+Aa3UZLmlWGG0AAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.thetvdb.com/search?query=%search_string_orig%'},
  {   'name': 'TVDB-ID',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADGUExURf///8bGxqqqqqqqqqqqqqqqqo2NjVVVVTg4OAAAABwcHAAAABwcHDg4OBwcHAAAABwcHBwcHBwcHBwcHBwcHBwcHBwcHAAAAAAAAABVAABxAABxHABxOACNHACNOACNVRwcHByNVRyqVTgcODg4ODiqVTiqcVU4VVVVVVWqcVXGjXFVVXFxcXHGjXHiqo1xcY1xjY2NjY3iqqqNqqqqqqriqqrixsaqxsbGxsb/4uLGxuLG4uLi4uL/4uL////i4v/i/////0lx5+8AAAAYdFJOUwA/R1BUYHZ+hJ6eqqrf6Onp6u3y8/X5+1fyvVQAAAFUSURBVDjLzZLtWoJAEEa37zRL0z6GpWAkpDW0XMRMNG3u/6aaXUJJ8W9P5w887GFmdvcV4g84bFguNjQ2HAtxAoAIAOGzUnEcKxU+gfmUA6fiCnhZTanMOCwMuBMdBJzTZxJ1fc/gB/0JUVoU6YgWwBd1pXTXSEf2aWobI7ZZSMlzvF+4TkSKx+JOLCAlW+tsyOUKQmKrLZqKfHdb8OSQjDAwgiZ3V3AD/nswMC2a00rB47/zIZvZslrQYAwW5jNZKbzBYhGCFaorxDykNkK2p8II0rSY4WHfDLh/F/5mF5oeKw4qoBC0toKiQO4IziuByodsAb1X3AVl5qhDK2jqOu7WbQ55DdDe5jXCB/VduU6EeUu4eJGHG36mRLPkJeoFQdCLhpOZucafzN2KS5NJHM9LkcxGuM5kRxzco001d8zBUqgRjoQ4q9WZWpl6Qe1c/Ae+Aa3UZLmlWGG0AAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.thetvdb.com/search?query=%tt%'},
  {   'name': 'TVRopes',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEUAAAAxRmP57Df5vyj8+/egqrfn6e15h5lZaX/Jz9ZFWHH875v50Df988362W+ulkBC9VAnAAAAAXRSTlMAQObYZgAAAkhJREFUSMfEk60OwkAQhCvOEbD4Da6AuLFNaAKGkPCgWM7xI4o9QUIlYPoQSMiGNMult1fJpydfZ+fS7H+sHmVfxKwbuL7MAbB5WjU8AqD5Nek5A0VFNEl59gA8Ec3LpAeWGFVlnhegoC+aatN6GKcUarhPi7LCE6hIcIrITy+UVg2994HLxU1SXDvQBCFtK16bZxLqyHWd0Kz7wSUYEmIvOABTkZCrofSeBozVK8lQhTSqsy4mDOUui7EPzjuV0dC9NUmhLrcfk/pTbWWDvM4UlhI6RQNisnJYjBGYIjhMeRcrr6GbFi/xaKb3blz2mD7VkjFOw0AQRbdwErmg2ALF+DQubNI6EigKlQsUEiqQUIzpXIBMKtOR0gUguAwVp0BC4gbMeBL/lbNOz7e0O1699cwfz+dvpfdDBz/fX1rr4fmMHuXwyjyiWmHQ06RVsSruVY/WouRjV6JGBIkOVb+i7aqGKPASO3RN25IPR1xDYIXUmLZXPpxTcKTs0GW9kZ4oeLdDyMJ5b1qQPyFNNzHV288piE0INYq9GOaskLNJM8DZLqTOxN4FzO1CYk/MPXRCkbyMufOdkFuxvdpc2Qk5OUGxiyMbVCdaDqSyTmjO9uplDzTij7C5E2VqWwAqH1JLfbNu/C8RjxTLC9pfknvoOfptJtAZz35TudlvtEZ72Wn6EmC8MCdoDcrgUcKcQM9bKMEdtBI/VVQ2g6Af25Bzp806IoSmotyE3Bx9M+Qsbj98/22ayNskTTNl0fFivZ41d8IwUP9efyK8ybskjbpNAAAAAElFTkSuQmCC',
      'searchUrl': 'https://tvtropes.org/pmwiki/search_result.php?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'TV Guide',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAn1BMVEXtHCTsHSTtHiQAAADsHCT+/v770NL719n96+z5ubvuOkH+7u76w8XwTlTuNDv6xsj5trn2mp3zb3TvPkTsJS30e4DtKjL++/v+9fX95+j4rbD4qaz2k5b1jZHzdHnxXGLxVlzwSE782dr6zc/4sbT2lpn1gYbyZ23vREvvQkjuLzb83uD83t/3oaT2kJT1hYntIir5vsD5s7byZGrxW2Duil/bAAAABHRSTlP+23AAe8mkKQAAATlJREFUOMut02dvgzAQBmBDXwM2K2GPhJI9mtXx/39bzylEasvoh74Sd2frEZI/HHvSNfSFafoT0zEYnWnDQGMYDhsDUGBvfEsMyoKGVdIAlz/yQp+pwIYGH7/BXBUJQMmqBXI6ndp0Qc11qF+BPbUsaoGKSTeqB9RXgPpTgS4QZTR49+NHJ0BJQyyp5Kwb1DQ4WyobdAPknKdLOh36wIzfY6APhF9g2wtgcEp6/AF8y7KasbIoazxAT/4ZyNfM3MHeI7SjZV3auV9jYtu22wKz8N434AsceGQ9T87hNgudmZS3BoQ8ceM4eYAZcIqdpRBeAzwudwWXaQ2X3+6AnSpnHQRJAyCM3Tz1/FXgGyAgqkmeKHBsQTR3Chfe2S89lIureLsccRFChH965ohgo6s3vry0/mxo/T8BnDce47UouLEAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.google.com/search?q=%search_string%+site:tvguide.com',
      'showByDefault': false},
  {   'name': 'TVmaze',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEUAAAD7/PwFBQVRkYqN6kBqAAAAAXRSTlMAQObYZgAAASJJREFUOMuN0z1OxDAQBeAoZY6yFSXiHsbSSkDPESjIXoI+zUpmIrQ0lEhcIto70KdZKRqc8Uyew5qfV6ziT+PJyOtU/8klHi/kl3a2rkOCYLBRICugBA11CeyhthKybhvqUkHAXhRYLVpqsW5EyYe1Xl54ZQX2Zm2JdS5k6W2uJV1Wj11NDl3agYQEh9HFtKcERO9O80g0Q++WfAq8AB4i1LQHbAXeALe0K8ET4PoH8DzMK89jgqFlmfSOJwXmSUZn9hGaIvAMzHwUOP4Kr+stXgBNDVqDSQGDKXh2Eh4U3JI42DnUZbj5fkB+zEGHWIPj8ezUS7CNUNF+9VdGeAbcC2AyTwkOBifq9UoxzweGK4WE0i2sctBPISuAYC2E5d/5AllZhUSw/yCoAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.tvmaze.com/search?q=%search_string%',
      'showByDefault': false},
  {   'name': 'uNoGS',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUAQMAAAAmpYKCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAGUExURcIuFP///1hzcc8AAACXSURBVCjP5dHBDcMgDAVQIw4cGYFNwmIVsEFWYoOuwAblyMEqjalSWxEskH7pS+9o+QPcLf7o43QSzguXhatwWxjZWxCOwn5YF7Bpc2lum9mmzK0rW7W5AYXfwkHYL+wS2+a5TWHrOrdqbMCv3dUB2fRGVY+1LnbkBpFsyaj6aej7i2yG+/Pn2HeyJrs+blBki4YMDf45H2h2eZI+A8LwAAAAAElFTkSuQmCC',
      'searchUrl': 'https://unogs.com/?q=%search_string%',
      'showByDefault': false},
  {   'name': 'Vimeo',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAAAre/+///N7/yc3/ley/UYtfE0vvJYPvcWAAAAAXRSTlMAQObYZgAAAKpJREFUKM+N0k0OwiAQBWC8gaP9Wfto7brEuLc3QL0ANh6gev9EJlIGZdHOgsCXlwxhUEpRUiqeRTa/sM2B/motPCe/3E/TDAU6ohE4BqgMNNEAtAHeAFwJoPlCDV+2MBHKxgAXKiOQe3jgYCdd0HOiD8D7A+0BO0PF6Su03NSgZRQYoG+AFXgB3FRgx3AW4L7QLoE6BCKQ4UAKI7dIgdz6R16eXDbs7Dt8AIGVLrSKQeLDAAAAAElFTkSuQmCC',
      'searchUrl': 'https://vimeo.com/search?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'VHS Collector',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAgMAAAC+UIlYAAAADFBMVEUAAAD5+fmUlJRPT09kaVR8AAACCUlEQVRYw+3VMY6bUBAG4MHIBQVJxREcKQegSMcRUMIA0aKIOhVH8CWQIqWOFKEUe4R3CY6QFKn2ACt5Z8Z+zABau1l3/JKFn/iM3/Dm6cGWLVu23DEjXklFoL8GSgI/T1fyj8APuJIPbwN2w/CHrv9/05cjXWUUDhx3BogFl1sHiBmXXdPoL3LOIDyDpDEgvhQpABCrOfAPqC6gJ0ogVxAiPtBbeL6AEZFBqyBCdECZg07BAQswIBE/KqBPbgB5pPr7TAFitwAZgeMEdvILBancQAXBAuz5iSG6CcSIzgAuqiUArwIa57AzINK/UBCUM5AZwDcaCKoZaC2gqmqI56C2IORxVMwmWS5AAVE9A9gZIA2xNyAgUDoF0hBpo2CHLB4V8HqnuQJAEW4GDq0Bo4jGA2mIxIIUJc4DboixMyA+g84DXm8L/JZvDOj6zIJIQOEBNwQeYbWzSg/ItwsQ/mLhQYz4BZ0BLHouQ8FnBAbfh8Gv5CcCRwFy51vJF44HoQJuiK8EIplYT0AyKmBc8fui1KMH6RwUAB95Dm4CkQIQYKqQxAb0MrM1cB6MrwDwIEFsViDC0oJ8BfZYecAFtitwwHoC6QrIzHMLuiV4ZzoK9gvQowQmILt11dW1gnhRRSLgUUGweA+ybA+gIDydnsDk/YkCAu5/JN08Fm8erLeP5i1btmy5X14AdyCxIih+5IwAAAAASUVORK5CYII=',
      'searchUrl': 'https://vhscollector.com/artwork?search_api_title=%search_string%',
      'showByDefault': false},
  {   'name': 'Wikipedia',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAGFBMVEUAAAD+/v4FBQVFRUXQ0NBvb2+Ojo6vr6/DA8rxAAAAAXRSTlMAQObYZgAAAUpJREFUOMu9lE1ugzAQhdMbdMJP1pkEvMahBzBRugf1AqCoe+j9pc7Mk1OBQJWqKrMwY39+8zQYvJN4oUW87ixoJVb3Rw2tBgRrkj8A2ojngIvGW6Jj/fVIBdw8M98PHXMxvns+WXrXUhnzkejA3BNddci5gofXhDpuiZKCdE8AmAxcVdfUJIqSADJ2Nsp8GElkNYBITzKmninVhKYWQE2CmfSZs+kYwWAmDR8beUIGkPDZTArbm7sHyGAiLepsXwFgCVZnK9wDYKmFiU5EDYAls7K+ywhsqYRVkPwYAVo0nVZs2gg07NX6iWsZQwSxxbSQimjvB+zZSfFUTLLzDORiMvXkuUd7ADAJF7WvhjAHHX86OxPBM9AwV3bwbgES5hHHvwAp3uzE/QKQdxCGBcBBU17QEtyw9ePXj/o/f84Nk80rY/uS2byWvgGb7GoMA0DhoQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://en.wikipedia.org/w/index.php?search=%search_string%&go=Go'},
  {   'name': 'Wikipedia Links Search',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAGFBMVEUAAAD+/v4FBQVFRUXQ0NBvb2+Ojo6vr6/DA8rxAAAAAXRSTlMAQObYZgAAAUpJREFUOMu9lE1ugzAQhdMbdMJP1pkEvMahBzBRugf1AqCoe+j9pc7Mk1OBQJWqKrMwY39+8zQYvJN4oUW87ixoJVb3Rw2tBgRrkj8A2ojngIvGW6Jj/fVIBdw8M98PHXMxvns+WXrXUhnzkejA3BNddci5gofXhDpuiZKCdE8AmAxcVdfUJIqSADJ2Nsp8GElkNYBITzKmninVhKYWQE2CmfSZs+kYwWAmDR8beUIGkPDZTArbm7sHyGAiLepsXwFgCVZnK9wDYKmFiU5EDYAls7K+ywhsqYRVkPwYAVo0nVZs2gg07NX6iWsZQwSxxbSQimjvB+zZSfFUTLLzDORiMvXkuUd7ADAJF7WvhjAHHX86OxPBM9AwV3bwbgES5hHHvwAp3uzE/QKQdxCGBcBBU17QEtyw9ePXj/o/f84Nk80rY/uS2byWvgGb7GoMA0DhoQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://en.wikipedia.org/w/index.php?target=https%3A%2F%2Fwww.imdb.com%2Ftitle%2F%tt%&title=Special%3ALinkSearch',
      'showByDefault': false},
  {   'name': 'WhatsOnMubi',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAMAAACrZuH4AAAA8FBMVEUAAAAAFIkCFIkCFIkAEXkCFIkDFIkCFIkCFIkCFIkBFIkCFIkDFIkCFIkCFIkCFIkCAgMDFIkCFIkCFIkCFIkDFIkDFIkCAgMCFIkDAwQDAwQDAwQCFIkCFIkCFIkDFIkCFIkCFIkCFIkCFIkDFIkDAwMDFIkCFIkCFIkCAgQCFIkCFIkDFIkCFIkCFIkDAwQCFIkCFIkBAQMAAAADAwQCFIkDAwQCFIkDAwQCAgMDAwMCAgMCAgQCAgMCAgQDAwMDFIkDAwMCAgQCAgICFIkCAgQDFIkCFIkCAgQDAwMDFIkCFIkDAwUCFIkDFIkDAwRP6lqmAAAATnRSTlMAB+9cBGL5pWcvJxYL8+OCVBCabFNDOxcU/PHe1NDLuKmddhwSEujg3dTCu7KQSkAzKhAG+Obm2M/KuIR2ZmRfTkouJyPWyIhoZlZWRA9uAYocAAABzElEQVQ4y42T53LiQBCEeyWhgJCESAKDyXBgggm2z+nO6fLZ4v3fxptG8g+7yv3rq6ne3ZqeWQANJ1iYFoSSm3b7JpHoR7NZ5EscpkJLxvHx4sB18cjRm4rquSduSJUiYP/zIDXfg31V1Q4DBtoRWng+aJ2inmrVgXPiJr6R4ztcqhaAnkaDoUyOMmrkqAGmRgeYHCnD0Q5jQ5+LAWspMRwBuGsJQ+uOY0E5THCxKEwNZwShh6uzs6sHieuubXfXULKaDKTdLsM4xqfF1lXT1+y5rqexPuhXmaSNiC9wBZb6squSwK5spcHRn6ZS95ydrHGcKLR9IEqVusCWYtrCI6wAHY12jEIedZXwC3BMjpfcYeaOWf7KL6BI5WKOK6AZZmPGgN7OBho0OW/FO4Ypux1IAxMomzFUOKxRuKeAi6ZZ1LhZVUz2+dhHMaGVJBbxiEZR+m2kwfKH5PK81ZqXJf7nQXVqgtgiFZoKy5+D1F+AFtUFspj6QEJbOIEf5N0uaJNLbzf535tNDonHH/2GCo3Iwuk7P6oBbGyFQ2B/qQyXFpge6LHovSotfcbxqS0M7ScRbigvVgF7qxOnBqnJ7fX17UTieNjrDcccXgEV16Er+nUOEAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://whatsonmubi.com/?q=%search_string%',
      'showByDefault': false},
  {   'name': 'WorldCat',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAMFBMVEUAAACpMG8gebU+mjxgSJT1gh/6+fjc5OfuzcityMv5rGt0tnOZaqGilMHQjrBcncm6xbD9AAAAAXRSTlMAQObYZgAABQ9JREFUaN7VmE3ITFEYx8/qzFDUbLCYLGZBVha3SLaTj2I5yOr4mmF8XV+vrzCKl5WESBIblK0iWSn5KAsLkaLYyELSuyA789479/3dM88557pmw2/l7e38Pc///5znnl71X6A7h65+SHh39Yopf/zQ9SdNeFZSQR9+37R5o8qwLTsOq8uUcKzp4Ly32nZbWWjO51nmO3+jsfCnEeclyz0Cext9fijY2XSz0lPAxKTAAkqoPCknsLuREE8JXmqWE9ibCswraAAPZAcJ87OfRQMFKehGygKVsqPppecUqAwEFroLKJ7EbVTgcqD4Lmxs4IErglUv+zT7vA2MESlU7MMfroy1EzoHx5R3jFLSm7I53/NbcSgQQiN16DXnXwjPwiGYRI7zzzkfZJoVwg7Gtvg8N4EQTk3ZV3BepviDKSq3/y7kQ6gEhq4oRcMY2gXoyRloh1IkBKYgK6C99dzXWp/6tzPGnyIhZHO8YvDLby9rU9S/mNBVmmd5+DSt7lPN4rkJpPjD8jBOh6I2xFzjTJEQppEBBRQo7M0L7LR2X7Umee4ViPODvCzrQPLZMUeMwX5rCva4BOqxspnIj8Epa3merLmYPTyICLAMDAKS2CmwID8GqwwtSOb4Pwo6S1ElbKi5Ma5Jnp/8wCATo2SWV6DKGDBIBSVU8ldhGmMQ7OGzT2AnV4kS6t++nD14Nr3U2OgW2DG8TfS5b2fag38eF0lKgRkDgVfKxS4Envo8CL/mjtODJwXNNnChGU3jFlCXwhu5Sg6e58nO8CeB4Z7tuUz6NQUES6gb92dBdZ40VwU+6cymEQtlYFybd0Qwys9ipX1Xf4LGBOcDJ/CaN/Rgr+fdfNr8HGm17hr7fsW8L9jrPra2+qyxc/jIJBX3cLo1SRr0Y64DORb0oFsJt9m0wkW+ji66qcA6TBAuhkvY0koxlgkGEzLmG58FKT3LhJ5lQsplvwA5nMRFTMiaGPMKSBNmKSYBhdjnASbMFFtJN2CB8aSACVVioIecwph7DpgE7Vlr+BA2gfvUE48MuvCYsN7kY/gsnnqE6TPBuGNQ2iphvt+EniMGSmCkg6NEDAr03ryCywQEiEGBHYScpunEYAvAiaBAVeSIAD4GBDQ58n2q2387qUyE9sItkWNioj4aLb1isiTkbsuWOTHExDC51I5Gfe6rAZ3h7brtXvTQ2DH0ciaMK31vUmCpYRosC3TU54E9izdZCf3buD1KWIzCRH6xbUp+G0/liID+lF6FfVEKw9+ZaPwyFECHVS704PE1rpS6F6UsjZW0LatviRCAKGOJDC4xCIuCAqlVgAOYUCSADRRQJIAHSaH2IhuMCAJdhwApYCS3k98YOQd5n91G6osom+FJBB1ZCnShaSBaJD+P0ml8kKWdTxS5jcJqSG8m/z8d5PeBTSeyeXT14MGrjyKRbze/kYSPXriqW6QAdvvgKmHBGiXo3AsXQAfMkc224gLUgRYbTYLnwHCRgQyh2IZ46IWyVjmp+GxYzEdBWBC0AQexUA5yscKYIkMsKFYgAQpgCrwKwocHhgJkB8UD9YCPWrgDFC46z29tFXQA+vBUEY/Se00DjGGBxLVH/fQepsdpgJtYTLuPAhpgispQoQEsLIE+PWIB3dYIBWBA+QJIcLQCqq0c46o8W1qwzozYQazKo0dwEAEaGEmgp0YTuKOgrIk0MEKM4+ov6ZLAKD3QQHm63IG/Q5+9e3dc/dP8BpiVd1yLonswAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.worldcat.org/search?q=kw:%search_string%+%year%&fq=x0:video',
      'showByDefault': false},
  {   'name': 'Yahoo! Japan - Movies (JP)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAAD/ADOkL+w0AAAAAXRSTlMAQObYZgAAAJNJREFUKM/N0DEOwyAMBdCPGFgqcQQuEjXX6hZ6M46C1Au4UxkQ7k+Qh1bKHk/P/n8yrjabav5F1GLZAV7XukOAVNl7D5aEvacSDa45InR4cYx8Ryie4BIzN0CR4Bux5QVh4oEgxFpkIr0qYiXipyAWImg2MM6EH4ZO4B93w2K4GXAKl3eEAS/zDf2AU6JONFRcZL68HUrWMWSBQwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://movies.yahoo.co.jp/find/?query=%search_string%',
      'showByDefault': false},
  {   'name': 'YouTube',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAP1BMVEUAAAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/////8PD/0ND/wMD/kJD/gID/UFD/QED/ICD/EBBwI9TdAAAACnRSTlMAwECAMBDwsGAgE90AyAAAAHFJREFUOMvVkkkOgCAMRYXKYBEH9P5nVdCoIdImuuJt/1t0+E09KGkBxAMAK9UVtwJfEe2ZayygD8NgEZMEJIh5RwlxUIk3cy7ITHDDwgiun2hhxwdKSIzrP8GHD0MSa7KHYk/NPYt9N1sYrnJcaathA2rBFn/0Nk1kAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.youtube.com/results?search_query="%search_string%"+%year%+trailer'},
  {   'name': 'YouTube Filtered',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAP1BMVEUAAAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/////8PD/0ND/wMD/kJD/gID/UFD/QED/ICD/EBBwI9TdAAAACnRSTlMAwECAMBDwsGAgE90AyAAAAHFJREFUOMvVkkkOgCAMRYXKYBEH9P5nVdCoIdImuuJt/1t0+E09KGkBxAMAK9UVtwJfEe2ZayygD8NgEZMEJIh5RwlxUIk3cy7ITHDDwgiun2hhxwdKSIzrP8GHD0MSa7KHYk/NPYt9N1sYrnJcaathA2rBFn/0Nk1kAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.youtube.com/results?search_query=%search_string_orig%&sp=EgQQARgC',
      'showByDefault': false},
  {   'name': 'YouTube (Invidious)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAP1BMVEUAAAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/////8PD/0ND/wMD/kJD/gID/UFD/QED/ICD/EBBwI9TdAAAACnRSTlMAwECAMBDwsGAgE90AyAAAAHFJREFUOMvVkkkOgCAMRYXKYBEH9P5nVdCoIdImuuJt/1t0+E09KGkBxAMAK9UVtwJfEe2ZayygD8NgEZMEJIh5RwlxUIk3cy7ITHDDwgiun2hhxwdKSIzrP8GHD0MSa7KHYk/NPYt9N1sYrnJcaathA2rBFn/0Nk1kAAAAAElFTkSuQmCC',
      'searchUrl': 'https://inv.nadeko.net/search?q="%search_string%"+%year%+trailer',
      'showByDefault': false},
  {   'name': 'YouTube (Piped)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAP1BMVEUAAAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/////8PD/0ND/wMD/kJD/gID/UFD/QED/ICD/EBBwI9TdAAAACnRSTlMAwECAMBDwsGAgE90AyAAAAHFJREFUOMvVkkkOgCAMRYXKYBEH9P5nVdCoIdImuuJt/1t0+E09KGkBxAMAK9UVtwJfEe2ZayygD8NgEZMEJIh5RwlxUIk3cy7ITHDDwgiun2hhxwdKSIzrP8GHD0MSa7KHYk/NPYt9N1sYrnJcaathA2rBFn/0Nk1kAAAAAElFTkSuQmCC',
      'searchUrl': 'https://piped.kavin.rocks/results?search_query="%search_string%"+%year%+trailer',
      'showByDefault': false}
];

// Class of these should be renamed(search: "class of the special buttons").
var special_buttons = [
  {   'name': '_Check URLs (for Dev tests)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAADFBMVEWEhIT+/v6oqKjS0tKWc1CeAAABvUlEQVQ4y12SPW6DQBCFX0AUOKLkCG4SpVyl9REoGJYCJRyBPg1tDuCkdRnJSumeQ5goJaWV3k2aZGcGWOMpzOjb+fObAY1mz/qdQYGDB/aVqELQz6AJiUpgPQHboqcMiBTIY0r1Behc9F93kdJCzIPNCMwE6mvQXKeUIwgnUGG03m6XwAzrRQ2skIyDzXYjgL39SUBAsOcCwAPRIISQ44PrE1kBW0iLmH72OnCKUmZ0v0Y8g0wCOyAs5AkN1xa/14iau5e4H2A6actiJE3QWyQ1V0fHiZvEqRJngFFgWuNECEtXXUHqHMqDitWXLu+yHeQCbAu8BaLVUQCVDoh47ZcCl3lU8KYgV6ARhoHWUHCrwBfFQcA7C1RwW4RwDgwPVgWVgpxHd1vMeHTcyBzRJnYixw2LCer476N/QlQLsBxXYdWKQEhE5MDOEkZe5FhFHtfw5EaSJ6OLuqXfT915CgnkwVwQHk89LDSEBl0xxitd7eQYGGwwWyygCb4nsBZQmmICRoAl6hYRF2cYKfCHmlwD7bI8dg/udksQuzxfI2O/cAr4ttyxDcmn8JCdmQENSIleyIPndssfD8jSZP/emdikUT8ZKQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://dummycheckurls.info',
      'showByDefault': false},
  {   'name': 'Copy Info to BBcode',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAACMjIw+cENnAAAAAXRSTlMAQObYZgAAALBJREFUKM910rENwyAUBNCPKFKyQdiErEVhKYzGKIzgkgLl4v/x2Y7k0PCQ7nQNcp53n7fHZ+IBFEMAqiECzfASvxqSuFlbxA1i9vMFjahEQZ+Yc9lWikJX6kQNTWFzhiS+b+BcjkPnDFkcDhSialjRiJXoe4YQGUQinjNMRPQTlvkFW3/rt1iIxPCLiJXAPhEIT8gBtm6xXJEUaX/onAxFLOK6AYAhbFgVHvwEG+Q4X86vk0jZCGx+AAAAAElFTkSuQmCC',
      'searchUrl': 'https://dummycopy.info',
      'showByDefault': false},
  {   'name': 'Emby',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiAgMAAADWy+6dAAAACVBMVEUAAABStUr////uFVkTAAAAAXRSTlMAQObYZgAAAVZJREFUSMel1sFtwzAQRNEQiEpQPy6BATwHpy+WwINUZWDY9M8OveDBe/2gnyURor4+nJqFcs3KpqzsuiRFqgkjXTNGyhglkATkDNDESAmTQBKQM0DOADmTQBKQM0DODKhMzIC2izMD2qszA9LVGWZioJyBykqAdmXQpgwqBsVyM4hf+23voP1ejneQ7uV8A5VH6TO0Pco5Q/uz9AnSsxwOlVHOZtD2KiyCeZSzRUiUHqAiyhmgTRQWPRnK+R9SKI01JZYDZxOFRfXFUDqMFRgrHcaKMZRDg/E1bTDucDX+37oG49cjmHgPumDifbPtRjkEE59PE0x4pofv0DJKM4a9o8iw37oiwx4VTIRugjHI1wAJByiW6pDWUDXInPSdCPRjDNDFGCAoOxq+obQ8GZiZWZ9AA1qedDNUlyfqDC1Obh9jDIJxaPkl4gMzQzAOLb+s5jEmmT+/vrUeJElMGgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://emby.media',
      'showByDefault': false},
  {   'name': 'Jellyfin',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAMAAACce/Y8AAAAWlBMVEUAAACaY8WgYMSnXcN8b8p1cswklNdudcwZmdlGhtJbfc8vkNVies2UZcY5i9SHashoeM0NntpQgtCPZ8dVf89qfdMHoNuUbM9Pjd1if9OLcNBAkt4GqOOeaM3KneA7AAAAAXRSTlMAQObYZgAAAyBJREFUaN7t2dtuozAUheGkHFJOCTWkTGjz/q85xpuwBCuuCTYXlbouZ1Q+/ThqED387bfuOOyw46Ioejse73cguwh6FYwdhIGoqqrbx9CAFoRouj48IMLbKDQwdhOaC4zgwoO49HFYYUlc9OI4dATOGsQOERBg7CsEMyI7kcR7R2gjvAAiFuIUSLBHJDD8D2Ikuq6DEI5ARNcNGT0iNHEKKeiZf2ziscEQ6PAQQBxkIHTE6VoGICDAAHEqPYWIBDEg1GUZ5DZNAoyHUNf+xHHYQ4BhBCFKDwEE/Xd8gnDbaJBgJbThIYCgQdBEG/I2YSDyvG23ExB4ImwlBHATIgxEG/SsYVyFMEZQAavrSXjRiNYTNYhtJ8ECG7kQCsZLESywIQ1KqTYLchJJklgJlYUQ4pgNZQRDZP7E+C2xINQjAsTms44Hggyl1Bix2uCz5q+6BTEJ2cuCm4CRyQJFsAHCJyKeCDIgrDIg/BBRLzJAnDOvCAj1woCgtyaCT4KJMp9nQDh7R0xEbiFchlVYRpQLQwSZbwQeOmxEkQaKKHPKOK8g8NBBBAs2oijSdFMEBBBzY4rQhkNYH9ESYQRk+Ee0avbjX0T4R7RqllEURoDhjMBIMETLRAFiewQEIRbGJKTvduJIBEVAUJThICgCBIQZYSrYSIkggQhbRP4DAYOJioiZ4CZSEBah4sczawQIGOlIvDsIOgw6CZWT4CAgVF1FjfWwq/wKxzTARGoj6FXHxiFCjwgRPAk0MCFCeIIjfAkIMEBIRNPsS1SGuPgRED74j0RVWOLjwxgc0XR+BIQFMX/TG0RYEovX1dsBNyHCJiVlAUZkCAiyJHnt8k6C37knZqXj1eJZRgITJBhCDFk+LJvtPK4YNhEQPr+fERD4QVyvJUIDMo74nBG2iCffphTxTCCiulcUkVifa9TqCBDa4AgSiKCDgDARh2kvR/BtskfAcEdAIIIFfGSBdF0XJgIATV++H4XY8zZ9A2Cl7/tJ0CNBuT5NFMDTF9/2gQVwWDNjXGW3280IQrCgL44dXp4xcrP237Qv2aPBXPpvv2P/AVCXgkok99PsAAAAAElFTkSuQmCC',
      'searchUrl': 'https://jellyfin.org',
      'showByDefault': false},
  {   'name': 'Plex',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABqAgMAAAApTywEAAAADFBMVEUAAAAzMzLloyOHaCswgFEpAAAAAXRSTlMAQObYZgAAASdJREFUSMfk1r0NwjAUAGEoGIF9GIGCBClFBsgI7JERKEiUklGyRKYAu7niXiy5Q8LtJ4XDfvk5lFcTrmuiU2xNsvOOXbhkdNHjnt34Oa+ikeKYv7Fu+q45tjbZFNs92xhak+0d25DsGdsj2Su2rmA9obI22yojdIxtI1Q2JFtkCsUUijkUcyjmUNtgU+iuzTZCZRoLTGOBORTTWGAOxRyKORRjyRQqI3Sxsds2Qku2yhSKaSxkg0ynhGnT6v4Dh4TpcOv3erI5E/N22jrPC0YmpqcB5lOwkYkp09Znq7unyax7hjAQNnbaxkDIGAgbA2FjIGxk2si0kSkj00Zm/TtuKxiZWDwQGAMhYyB+41vjMzrJkdkexNfGxNc2xdumxW0h3jY0XgAAgEgBSKfkENwAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.plex.tv',
      'showByDefault': false},
  {   'name': 'Radarr',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAACTFBMVEUAAAD//////////////vu1t7j/zFCGiYz////+/v4xNjs7QEUpLjP////7+/smKzBHS09VWV1obG/////////////Z2tv/////////////////////yUdQVFg/Q0imqKp2enz19va2t7n///+XmZyTlZj/4JOOkJOEh4n/8tTY2trV1tf/9+L////r7Oz///////84PEEuMjdLT1RCRkv/zlmMj5FaXWGVl5plaGzq6+yYmpx0d3rU1dZ8f4L8/f3v7/C+wMG6u72bnaD/5qmgo6WsrrD/67mxs7XOz9H//PT///////////////////////////////////////////////82Oj//xDX/xj3/zE2JjI9SVlr/0mVdYWV4e3//1nLn5+jg4eKGiYttcHSAg4b/2XzMzc+wsrTGx8ijpqj/5KCdn6H/7cC9vsC6vL2+wMH////Q0dL/8c3k5eX/+evp6en19fXy8vL9/f3////l5ubz8/T///////////////////////////////////////////////////9YXGD/z1r/13b////c3d7HyMmqrK7s7O2Ii43/24X4+Pjy8/Opq63/7sT4+PjExcf9/f3R0tP/89bf4OHl5ubl5ebk5ebj4+Tt7u7/////////////////////////////////////////////////////wjAkKS4XHCEaHyT/wCkiJywYHiMfJSobICYhJiv/vyQeIygcIicVGh//wSz/vyctMTYSGB0KDxUSFx1vUO58AAAAsHRSTlMA5eTH5u77+uPx/fz+8uX++/r31Xkg9drSOhIJ/Pv79vb19fPz8/Pz8+vq6uno57yj/f38+/r5+fj49/f39vb19fT09PDw7+7u6+bOybimlHFgWCkeGAb+/v38+vn4+Pf39vb29vX19PTz8/Hw7e3t7Ovr6+jn5+bm5d3Y18G0sZuPi4J9ZF5EDwz5+fb19fX19PT08/Pv7ezs6+vq6ejo6Ojn3suvl5GHbFRQSjECARZmqHoAAAO5SURBVEjHjZXle9NQFMbblEFSN9Yic0UmbGMbc2FjbsBwd3d3d3d3t+ZG2yTrgH+MJPfmCQ8k3c6Hfjq/5n3Pvee9Fq0uDZw8Fg509XwabxlVDdhcqzObq2/W1h8OThy5/WKxq7HCSQHAMt7mjM7+wRH6J3Y3+HkqSsrF8KBso6voQsL+H8UZKRJDaiVSFbW7ihNZ6XfVSXJjlKV4llO+Qnlurwr1TTQVFM5kGfmPneltO/IcIKqwoKT6bvj8d2PgK+Gj5H7HbhzD8MJ8j0KTHChtdJ2YYAicTiYZMuqcilnlwrBpyzlescILa5OtH42snEgDJMnW4HI7RB6lANUK66lreBOc9B9gW6IArZjarCLurXZkxbGZsH35DxgnA1SS0jtlukpY8Zfp0IoALm8giueaAWMWR3I7cGTFz4uKFYqblYy9H28CjI3FFs/BkPskB7LizM4I9A8aA3SEpldOQcjBPDuAIy7bSHRfMAEikVhk/T70kf01UQreFt8GImgGRIZii7aMQUh7BRDU2xLNyzptDEBk5h6k61CLg+XUEWdnnTMCUMWHlk3B4UEeaHYqVhiQdnieKaBaye1AyFS/IH9EsFedMQOQrsmzNStJw/KhSJWdZgAqOnblAbSCt5dwJJ8SMAc0K/TK6ZBopUhuxlFzQLeycDaU5eOjw0dGAcTjufATbdRoAFo5EDQqUliQUJI+JwjsLWFLzU0j+bkdaKwKMPyzPJwIiNNXpyM1r/OeyZI4z+pec4Cmx2qL4U5y/NqMYfd/VeJzjQAkfo52yNtLeQHk425H+rWg2eWLRe7sQ2qep4s8Q0rZeM6s+p5BLTUkHVDFL3uKLsTBHHXnGOHJi0yiVwscWyarA8oqbEPira2pcKt/risgwuf1FX3oBRoQ/2vZdvsoUV02cQ1RcGa+RQcet8+QfrcpwOSh9dooX+V7KEZZZzGlseAdClkEbMIK81O3K43btMA4kDMMs09KbXIdg+06UD4Nxw65oQ74u8OrRdKahlDfv+l6vNKPWWGh0FvL81roWXvnWf6tD7UgG9f7C1eQMFbZpZuInm8Gcf+Z8EpbMQymt7tlBgpue0t914DFqOaH0iRq+c5Ct9W9f6ePFaD4ulWhs2avXF+WH/CC3bvUaxfg48P7kwtOQfFGNam7ygEYTuRFDr4JZU2uIjhKkxpvu+5jRfhSc2BBzr235/RRGtsoykpLFQBgAWVfdws/e9EyUl0KhjJuVK+oKW+q2nVSf6ESygoe7woEOotOTUjc9weXiUPgDnteIQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://radarr.video',
      'showByDefault': false},
  {   'name': 'Radarr2',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAACTFBMVEUAAAD//////////////vu1t7j/zFCGiYz////+/v4xNjs7QEUpLjP////7+/smKzBHS09VWV1obG/////////////Z2tv/////////////////////yUdQVFg/Q0imqKp2enz19va2t7n///+XmZyTlZj/4JOOkJOEh4n/8tTY2trV1tf/9+L////r7Oz///////84PEEuMjdLT1RCRkv/zlmMj5FaXWGVl5plaGzq6+yYmpx0d3rU1dZ8f4L8/f3v7/C+wMG6u72bnaD/5qmgo6WsrrD/67mxs7XOz9H//PT///////////////////////////////////////////////82Oj//xDX/xj3/zE2JjI9SVlr/0mVdYWV4e3//1nLn5+jg4eKGiYttcHSAg4b/2XzMzc+wsrTGx8ijpqj/5KCdn6H/7cC9vsC6vL2+wMH////Q0dL/8c3k5eX/+evp6en19fXy8vL9/f3////l5ubz8/T///////////////////////////////////////////////////9YXGD/z1r/13b////c3d7HyMmqrK7s7O2Ii43/24X4+Pjy8/Opq63/7sT4+PjExcf9/f3R0tP/89bf4OHl5ubl5ebk5ebj4+Tt7u7/////////////////////////////////////////////////////wjAkKS4XHCEaHyT/wCkiJywYHiMfJSobICYhJiv/vyQeIygcIicVGh//wSz/vyctMTYSGB0KDxUSFx1vUO58AAAAsHRSTlMA5eTH5u77+uPx/fz+8uX++/r31Xkg9drSOhIJ/Pv79vb19fPz8/Pz8+vq6uno57yj/f38+/r5+fj49/f39vb19fT09PDw7+7u6+bOybimlHFgWCkeGAb+/v38+vn4+Pf39vb29vX19PTz8/Hw7e3t7Ovr6+jn5+bm5d3Y18G0sZuPi4J9ZF5EDwz5+fb19fX19PT08/Pv7ezs6+vq6ejo6Ojn3suvl5GHbFRQSjECARZmqHoAAAO5SURBVEjHjZXle9NQFMbblEFSN9Yic0UmbGMbc2FjbsBwd3d3d3d3t+ZG2yTrgH+MJPfmCQ8k3c6Hfjq/5n3Pvee9Fq0uDZw8Fg509XwabxlVDdhcqzObq2/W1h8OThy5/WKxq7HCSQHAMt7mjM7+wRH6J3Y3+HkqSsrF8KBso6voQsL+H8UZKRJDaiVSFbW7ihNZ6XfVSXJjlKV4llO+Qnlurwr1TTQVFM5kGfmPneltO/IcIKqwoKT6bvj8d2PgK+Gj5H7HbhzD8MJ8j0KTHChtdJ2YYAicTiYZMuqcilnlwrBpyzlescILa5OtH42snEgDJMnW4HI7RB6lANUK66lreBOc9B9gW6IArZjarCLurXZkxbGZsH35DxgnA1SS0jtlukpY8Zfp0IoALm8giueaAWMWR3I7cGTFz4uKFYqblYy9H28CjI3FFs/BkPskB7LizM4I9A8aA3SEpldOQcjBPDuAIy7bSHRfMAEikVhk/T70kf01UQreFt8GImgGRIZii7aMQUh7BRDU2xLNyzptDEBk5h6k61CLg+XUEWdnnTMCUMWHlk3B4UEeaHYqVhiQdnieKaBaye1AyFS/IH9EsFedMQOQrsmzNStJw/KhSJWdZgAqOnblAbSCt5dwJJ8SMAc0K/TK6ZBopUhuxlFzQLeycDaU5eOjw0dGAcTjufATbdRoAFo5EDQqUliQUJI+JwjsLWFLzU0j+bkdaKwKMPyzPJwIiNNXpyM1r/OeyZI4z+pec4Cmx2qL4U5y/NqMYfd/VeJzjQAkfo52yNtLeQHk425H+rWg2eWLRe7sQ2qep4s8Q0rZeM6s+p5BLTUkHVDFL3uKLsTBHHXnGOHJi0yiVwscWyarA8oqbEPira2pcKt/risgwuf1FX3oBRoQ/2vZdvsoUV02cQ1RcGa+RQcet8+QfrcpwOSh9dooX+V7KEZZZzGlseAdClkEbMIK81O3K43btMA4kDMMs09KbXIdg+06UD4Nxw65oQ74u8OrRdKahlDfv+l6vNKPWWGh0FvL81roWXvnWf6tD7UgG9f7C1eQMFbZpZuInm8Gcf+Z8EpbMQymt7tlBgpue0t914DFqOaH0iRq+c5Ct9W9f6ePFaD4ulWhs2avXF+WH/CC3bvUaxfg48P7kwtOQfFGNam7ygEYTuRFDr4JZU2uIjhKkxpvu+5jRfhSc2BBzr235/RRGtsoykpLFQBgAWVfdws/e9EyUl0KhjJuVK+oKW+q2nVSf6ESygoe7woEOotOTUjc9weXiUPgDnteIQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://radarr.video',
      'showByDefault': false},
  {   'name': 'Sonarr',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://sonarr.tv',
      'showByDefault': false},
  {   'name': 'Trakt-Watchlist',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADMAQMAAAAF7N6xAAAABlBMVEUAAADtIiSf7FjNAAAAAXRSTlMAQObYZgAABW9JREFUWMOVmE/K1TAUR79SoTOrM2d1CQ4dCHVJglOxigtwSxU3UnADBScRS+MvuTc5CSroQ7/32nN7k9P8aZOHyGd/eFg5Oht0POjzR3Qn8jD1iIv02UBcZJ8ZxC/7DJygev5ZQV0+KgIKFQ2gLh91BOVSLGLp0VWqbYUZoqjiMPToqK5eGOiDTtSgBZRjx1hLnVt0WShRoFP5aIEBxKFXdmvQbjKn3821QVbUh/K1gBS4eYvl7BPoykV5I6uwEXTqoDTzlgJBh4JVhF+my0H7w1qbeUxBa0UflCY4OVOSxZFl2A1N16qTc0F3ylK64b2oHpOj/PNytFyThRoKShAcrWFQhqGgUzU6HG3nw6ZqFXSkI0fxeL2qSpujXX9q/9yPOaVx9GGIVxX+eE4qeHGkE6F2+DEosKBbJ86qNV0POjM70o+9as236qDghPLlH6rWcqfD0VBQfZxIa71SksGQJG8n0tqCsh0VxQut3OSHnU7fAa3cJ5Uoo10/0UqVzcULpeocaOVBcxU0tVoxKUggo4e511KE7kJC+mq1bFQXtHRaz1QbFWJOa6f1KqF9NLR1Wu/17ShkhFZMVx/J1f6h9VHV1ZmCjkZrzM5+XoWjpeuSRDA0CqE13zkmX7inFGgtV85sKKVAaw12p1YhibdailZVHaXsaOXqKnqpCK0dpDJ7rZRaF2QUeq2Kbp3ptLyuU0ZnpwVKcp2WRxk6Oi1Ho5C+Oi0rNqFgCC2vkaG90zKPcxCy5kILdA4pEC3PEEBoOXoQGmOv5eWC0LLaJnQ4Qgs03Z1WRW9AaKUUNwgt0F5UVHPXArlKvGbXss7xoiBp3ZNpmQlIB3HMWqAPjqYYP5oWaAnlWbIXLZBrxYOBoXv+pCBpbWfVAnlrharVo3gsl2uBTm+t+Z5Dh7zzjmmcqVuWDyi11hg/uRbIW+tj/LKD9FPIW0v34jfkrcUdBLkW9x1EJwSBpBVpY5B3QnoGyDth7U+gwzshvRDknZC+CzKtSI8H+dhinFAN10IMVMYWYiAbW3R5kI8tBgrIxxbDC+Rj6xNiIBtbXxAD2ZRxJDGQ9Q1rrRMxuo1pBcToojZlXEUMFEwr3oiBbMqIiIFsyoiIgWzKiIiBslaMiDEDWCeMVQzkWlsVA/lMuCLGVTYTLo3YdCekvzYTzogx6b3L4RNioJe5kNHFQDr5LFdtQCxPsDYtmxBiQmUyt+gqBvowWBkuxtNBd9IneMRA7oOY2sIfUh7sYjy/1K+sCMRAh1UMsfxAtCes6yCmc4bOEotYTOgWKiUgVh70YbN6ITZUtJoNYkN5qbiWHNqIjRU9tgIQM6Q/9yOrFmLNu43JIDYb2hViWojp/2rog2khpiuF8vPHtBAT2gx9MS3E/HVObfnNtBDbgr9SCmWAmJ9XwHfTQszfRZX2Z9ZCbHCkev7IWoiVl1uhK2shJtOpvEg/d+Jinx3F8vqN2KxzhibTQsxe2nnVR+z9dvmr/m4LBMRepaqxrGjFniZXFiOtmJwM6b9y92KKZuHTik0qg+VSK3YvGqcssvZG7FbkyNLsaMQu5Z8MxbygQywoz+xIwzw0Ym9ZIaZC70Ys5VjbJSdiqeTN0aGgvYoFFqrpz0IV5zOyvGVRnMW+2qKYpfRdxWYdjwXdiqKhV2WY2mU7hW0s2/vFfkqwsw+g3wtLeot0ZBn2UtTNxoLvTQTP129HXCnOp0/ft+i3PoJdpMwzyPdIDkWUg36bhU2r9e+bM7Eg9mo8wwBiY8ju2gTKxwP55g7tlpE9P9DhaXK7/b7BtXnMACrBE98gv4GztcwC8sLopP++cdeMsP/YJGy7DYiM5AOxI8kxiA2u3xB9A9QeiHD0C22p6PDcZ/DbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://trakt.tv/oauth/authorize?client_id=325c09f8f8d6e3466c7ced12c11cc32d4af00e1af1f6310da4f6dfb702c7b8c2&redirect_uri=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0052077%2Freference&response_type=code',
      'showByDefault': false}
];

var icon_sites = icon_sites_main.concat(special_buttons);

//==============================================================================
//    Replace Search URL parameters
//==============================================================================

async function replaceSearchUrlParams(site, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id, mPOSTsearch) {
  var search_url = ('mPOST' in site && !mPOSTsearch) ? site['mPOST'] : site['searchUrl'];

  if (search_url.includes("http://voidtools.replacement")) {
    const voidURL = GM_config.get("void_url").replace(/\/+$/, "");
    search_url = search_url.replace("http://voidtools.replacement", voidURL);
  }

  // If an array, do a little bit of recursion
  if ($.isArray(search_url)) {
    var search_array = [];
    $.each(search_url, function(index, url) {
      search_array[index] = replaceSearchUrlParams(url, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id);
    });
    return search_array;
  }

  if (search_url.match("%tvdbid%")) {
    movie_id = await getTVDbID(movie_id);
  } else if (search_url.match("%tmdbid%")) {
    movie_id = await getTMDbID(movie_id);
  } else if (search_url.match("%tmdb_orig_title%")) {
    const xxx = await getTMDb_original_title(movie_id);
    movie_id = xxx[1];
  } else if (search_url.match("%doubanid%")) {
    movie_id = await getDoubanID0_1(movie_id);
  }
  if (search_url.match("%doubanid%") && movie_id == "00000000") {
    movie_id = await getDoubanID0_2(movie_id);
  }
  if (search_url.match("%doubanid%") && movie_id == "00000000") {
    movie_id = await getDoubanID1(movie_id);
  }
  if (search_url.match("%doubanid%") && movie_id == "00000000") {
    movie_id = await getDoubanID2(movie_id);
  }
  if (search_url.match("%doubanid%") && movie_id == "00000000") {
    movie_id = await getDoubanID3(movie_id);
  }

  var space_replace      = ('spaceEncode' in site) ? site['spaceEncode'] : '+';
  var search_string      = movie_title.trim().replace(/ +\(.*|&|:/g, '').replace(/\s+/g, space_replace);
  var search_string_orig = movie_title_orig.trim().replace(/ +\(.*|&|:/g, '').replace(/\s+/g, space_replace);
  var movie_year         = (onSearchPage) ? movie_year : document.title.replace(/^(.+) \((\D*|)(\d{4})(.*)$/gi, '$3').match(/\b\d{4}\b/g)?.join(" ") || '';
  var s = search_url.replace(/%tt%/g, 'tt' + movie_id)
                    .replace(/%nott%/g, movie_id)
                    .replace(/%tvdbid%/g, movie_id)
                    .replace(/%tmdbid%/g, movie_id)
                    .replace(/%tmdb_orig_title%/g, movie_id)
                    .replace(/%doubanid%/g, movie_id)
                    .replace(/%seriesid%/g, series_id)
                    .replace(/%seasonid%/g, season_id)
                    .replace(/%episodeid%/g, episode_id)
                    .replace(/%search_string%/g, search_string)
                    .replace(/%search_string_orig%/g, search_string_orig)
                    .replace(/%year%/g, movie_year)
                    .replace(/---/g, '-');
  return s;
}

//==============================================================================
//    Convert IMDb ID to TVDb/TMDb/Douban ID
//==============================================================================

function getTVDbID(movie_id) {
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 10000,
      url:    "https://thetvdb.com/api/GetSeriesByRemoteID.php?imdbid=tt" + movie_id,
      onload: function(response) {
        if (String(response.responseText).match("seriesid")) {
          response.responseXML = new DOMParser().parseFromString(response.responseText, "application/xml");
          const xmldata = response.responseXML;
          const tvdb_id = xmldata.getElementsByTagName("seriesid")[0].childNodes[0].nodeValue;
          resolve(tvdb_id);
        } else {
          const tvdb_id = "00000000";
          resolve(tvdb_id);
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getTVDbID)");
        console.log("IMDb Scout Mod (getTVDbID): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        resolve("00000000");
      },
      ontimeout: function() {
        resolve("00000000");
      }
    });
  });
}

function getTMDbID(movie_id) {
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 10000,
      url:    "https://api.themoviedb.org/3/find/tt" + movie_id + "?api_key=d12b33d3f4fb8736dc06f22560c4f8d4&external_source=imdb_id",
      onload: function(response) {
        const result = JSON.parse(response.responseText);
        if (String(response.responseText).match('movie_results":\\[{')) {
          const tmdb_id = result.movie_results[0].id;
          resolve(tmdb_id);
        } else if (String(response.responseText).match('tv_results":\\[{')) {
          const tmdb_id = result.tv_results[0].id;
          resolve(tmdb_id);
        } else if (String(response.responseText).match('tv_episode_results":\\[{')) {
          const tmdb_id = result.tv_episode_results[0].id;
          resolve(tmdb_id);
        } else {
          const tmdb_id = "00000000";
          resolve(tmdb_id);
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getTMDbID)");
        console.log("IMDb Scout Mod (getTMDbID): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        resolve("00000000");
      },
      ontimeout: function() {
        resolve("00000000");
      }
    });
  });
}

function getTMDb_original_title(movie_id) {
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 10000,
      url:    "https://api.themoviedb.org/3/find/tt" + movie_id + "?api_key=d12b33d3f4fb8736dc06f22560c4f8d4&external_source=imdb_id",
      onload: function(response) {
        const result = JSON.parse(response.responseText);
        let org_title = "00000000";
        let eng_title = "00000000";

        if (String(response.responseText).match('movie_results":\\[{')) {
          org_title = result.movie_results[0].original_title;
          eng_title = result.movie_results[0].title;
        } else if (String(response.responseText).match('tv_results":\\[{')) {
          org_title = result.tv_results[0].original_name;
          eng_title = result.tv_results[0].name;
        } else if (String(response.responseText).match('tv_episode_results":\\[{')) {
          org_title = result.tv_episode_results[0].name;
          eng_title = org_title;
        }
        resolve([eng_title, org_title]);
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getTMDb_original_title)");
        console.log("IMDb Scout Mod (getTMDb_original_title): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        resolve("00000000");
      },
      ontimeout: function() {
        resolve("00000000");
      }
    });
  });
}

function getDoubanID0_1(movie_id) {
  console.log("IMDb Scout Mod (getDoubanID0_1): Started.");
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 4000,
      url:    "https://movie.douban.com/j/subject_suggest?q=tt" + movie_id,
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
      onload: function(response) {
        try {
          const result = JSON.parse(response.responseText);
          if (String(response.responseText).match(movie_id)) {
            const douban_id = result[0].id;
            resolve(douban_id);
          } else {
            resolve("00000000");
          }
        } catch (e) {
            console.log("IMDb Scout Mod (getDoubanID0_1): Error: Response is not JSON.");
            resolve("00000000");
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getDoubanID0_1)");
        console.log("IMDb Scout Mod (getDoubanID0_1): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (getDoubanID0_1): Request Aborted.");
        resolve("00000000");
      },
      ontimeout: function() {
        console.log("IMDb Scout Mod (getDoubanID0_1): Request Timeout.");
        resolve("00000000");
      }
    });
  });
}

function getDoubanID0_2(movie_id) {
  console.log("IMDb Scout Mod (getDoubanID0_2): Started.");
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 4000,
      url:    "https://movie.douban.com/subject_search?search_text=tt" + movie_id,
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
      onload: function(response) {
        const result = String(response.responseText);
        if (result.match(/subject\/(\d+)/)) {
          const y = result.match(/subject\/(\d+)/)[1];
          resolve(y);
        } else {
            resolve("00000000");
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getDoubanID0_2)");
        console.log("IMDb Scout Mod (getDoubanID0_2): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (getDoubanID0_2): Request Aborted.");
        resolve("00000000");
      },
      ontimeout: function() {
        console.log("IMDb Scout Mod (getDoubanID0_2): Request Timeout.");
        resolve("00000000");
      }
    });
  });
}

function getDoubanID1(movie_id) {
  console.log("IMDb Scout Mod (getDoubanID1): Started.");
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 8000,
      url:    "https://www.douban.com/search?cat=1002&q=tt" + movie_id,
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
      onload: function(response) {
        const parser = new DOMParser();
        const result = parser.parseFromString(response.responseText, "text/html");
        if ($(result).find('[onclick*=' +movie_id+ ']').length) {
          const x = $(result).find('[onclick*=' +movie_id+ ']').attr('href');
          if (x.match(/subject%2F(\d+)/)) {
            const y = x.match(/subject%2F(\d+)/)[1];
            resolve(y);
          } else {
            resolve("00000000");
          }
        } else {
          resolve("00000000");
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getDoubanID1)");
        console.log("IMDb Scout Mod (getDoubanID1): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (getDoubanID1): Request Aborted.");
        resolve("00000000");
      },
      ontimeout: function() {
        console.log("IMDb Scout Mod (getDoubanID1): Request Timeout.");
        resolve("00000000");
      }
    });
  });
}

function getDoubanID2(movie_id) {
  console.log("IMDb Scout Mod (getDoubanID2): Started.");
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 8000,
      url:    'https://query.wikidata.org/sparql?format=json&query=SELECT * WHERE {?s wdt:P345 "tt' +movie_id+ '". OPTIONAL { ?s wdt:P4529 ?Douban_film_ID. }}',
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
      onload: function(response) {
        const result = JSON.parse(response.responseText);
        if (result.results.bindings[0] != undefined) {
          if (result.results.bindings[0].Douban_film_ID != undefined) {
            const douban_id = result.results.bindings[0].Douban_film_ID.value;
            resolve(douban_id);
          } else {
            resolve("00000000");
          }
        } else {
          const douban_id = "00000000";
          resolve(douban_id);
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getDoubanID2)");
        console.log("IMDb Scout Mod (getDoubanID2): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (getDoubanID2): Request Aborted.");
        resolve("00000000");
      },
      ontimeout: function() {
        console.log("IMDb Scout Mod (getDoubanID2): Request Timeout.");
        resolve("00000000");
      }
    });
  });
}

function getDoubanID3(movie_id) {
  console.log("IMDb Scout Mod (getDoubanID3): Started.");
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 10000,
      url:    'https://www.google.com/search?q="tt' +movie_id+ '" site:https://movie.douban.com/subject&safe=off',
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
      onload: function(response) {
        const result = String(response.responseText);
        if (result.match("movie.douban.com/subject/")) {
          const x = result.split("movie.douban.com/subject/")[1];
          const y = x.split("/")[0];
          const douban_id = y;
          resolve(douban_id);
        } else {
          const douban_id = "00000000";
          resolve(douban_id);
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getDoubanID3)");
        console.log("IMDb Scout Mod (getDoubanID3): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (getDoubanID3): Request Aborted.");
        resolve("00000000");
      },
      ontimeout: function() {
        console.log("IMDb Scout Mod (getDoubanID3): Request Timeout.");
        resolve("00000000");
      }
    });
  });
}

function getAllocineID(movie_id) {
  console.log("IMDb Scout Mod (getAllocineID): Started.");
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 10000,
      url:    'https://query.wikidata.org/sparql?format=json&query=SELECT * WHERE {?s wdt:P345 "tt' +movie_id+ '". OPTIONAL {?s wdt:P1265 ?AlloCin__film_ID.}  OPTIONAL {?s wdt:P1267 ?AlloCin__series_ID.}}',
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
      onload: function(response) {
        const result = JSON.parse(response.responseText);
        if (result.results.bindings[0] != undefined) {
          if (result.results.bindings[0].AlloCin__film_ID != undefined) {
            GM.setValue("AllocineID_last_is_film", true);
            const allocine_id = result.results.bindings[0].AlloCin__film_ID.value;
            resolve(allocine_id);
          } else if (result.results.bindings[0].AlloCin__series_ID != undefined) {
            GM.setValue("AllocineID_last_is_film", false);
            const allocine_id = result.results.bindings[0].AlloCin__series_ID.value;
            resolve(allocine_id);
          } else {
            GM.setValue("AllocineID_last_is_film", "none");
            const allocine_id = "00000000";
            resolve(allocine_id);
          }
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getAllocineID)");
        console.log("IMDb Scout Mod (getAllocineID): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        resolve("00000000");
      },
      ontimeout: function() {
        resolve("00000000");
      }
    });
  });
}

function getAnimeID(movie_id) {
  console.log("IMDb Scout Mod (getAnimeID): Started.");
  const url = 'https://query.wikidata.org/sparql?format=json&query=SELECT * WHERE {?s wdt:P345 "tt' +movie_id+ '". OPTIONAL {?s wdt:P4086 ?MyAnimeList_ID.}  OPTIONAL {?s wdt:P8729 ?AniList_ID.}}';
  $('.AnimeUserRatingUrl').attr('href', url);
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 10000,
      url:     url,
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
      onload: function(response) {
        const result = JSON.parse(response.responseText);
        let myanimelist_id = "00000000";
        let anilist_id = "00000000";
        if (result.results.bindings[0] != undefined) {
          for (xx of result.results.bindings) {
            if (xx.MyAnimeList_ID) {
              myanimelist_id = xx.MyAnimeList_ID.value;
              break;
            }
          }
          for (yy of result.results.bindings) {
            if (yy.AniList_ID) {
              anilist_id = yy.AniList_ID.value;
              break;
            }
          }
        }
        if (myanimelist_id == "00000000") {
          console.log("IMDb Scout Mod (getAnimeID): MyAnimeList ID not found on Wikidata.");
        }
        if (anilist_id == "00000000") {
          console.log("IMDb Scout Mod (getAnimeID): AniList ID not found on Wikidata.");
        }
        resolve([myanimelist_id, anilist_id]);
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getAnimeID)");
        console.log("IMDb Scout Mod (getAnimeID): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        resolve("00000000");
      },
      ontimeout: function() {
        resolve("00000000");
      }
    });
  });
}

function getMetacriticID1(movie_id) {
  console.log("IMDb Scout Mod (getMetacriticID1): Started.");
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 10000,
      url:    'https://query.wikidata.org/sparql?format=json&query=SELECT * WHERE {?s wdt:P345 "tt' +movie_id+ '". OPTIONAL { ?s wdt:P1712 ?Metacritic_ID. }}',
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
      onload: function(response) {
        const result = JSON.parse(response.responseText);
        if (result.results.bindings[0] != undefined) {
          if (result.results.bindings[0].Metacritic_ID != undefined) {
            const metacritic_id = result.results.bindings[0].Metacritic_ID.value;
            resolve(metacritic_id);
          } else {
            resolve("00000000");
          }
        } else {
          const metacritic_id = "00000000";
          resolve(metacritic_id);
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getMetacriticID1)");
        console.log("IMDb Scout Mod (getMetacriticID1): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (getMetacriticID1): Request Aborted.");
        resolve("00000000");
      },
      ontimeout: function() {
        console.log("IMDb Scout Mod (getMetacriticID1): Request Timeout.");
        resolve("00000000");
      }
    });
  });
}

function getRottenID1(movie_id) {
  console.log("IMDb Scout Mod (getRottenID1): Started.");
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 10000,
      url:    'https://query.wikidata.org/sparql?format=json&query=SELECT * WHERE {?s wdt:P345 "tt' +movie_id+ '". OPTIONAL { ?s wdt:P1258 ?Rotten_Tomatoes_ID. }}',
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
      onload: function(response) {
        const result = JSON.parse(response.responseText);
        if (result.results.bindings[0] != undefined) {
          if (result.results.bindings[0].Rotten_Tomatoes_ID != undefined) {
            const rotten_id = result.results.bindings[0].Rotten_Tomatoes_ID.value;
            resolve(rotten_id);
          } else {
            resolve("00000000");
          }
        } else {
          const rotten_id = "00000000";
          resolve(rotten_id);
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getRottenID1)");
        console.log("IMDb Scout Mod (getRottenID1): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (getRottenID1): Request Aborted.");
        resolve("00000000");
      },
      ontimeout: function() {
        console.log("IMDb Scout Mod (getRottenID1): Request Timeout.");
        resolve("00000000");
      }
    });
  });
}

//==============================================================================
//    Construct & return Title/List GM_config setting
//==============================================================================

function getPageSetting(key) {
  return (onSearchPage ? GM_config.get(key + '_search') : GM_config.get(key + '_movie'));
}

//==============================================================================
//    Get site's icon
//==============================================================================

function getFavicon(site, hide_on_err) {
  var favicon;
  if (typeof(hide_on_err) === 'undefined') {
    hide_on_err = false;
  } else if (hide_on_err === false) {
    return;
  }
  if ('icon' in site) {
    favicon = site['icon'];
  } else {
    var url = new URL(site['searchUrl']);
    favicon = url.origin + '/favicon.ico';
  }
  const size = GM_config.get('mod_icons_size');
  const border = parseInt(GM_config.get('iconsborder_size')) *2;
  var iconsize = ('matchRegex' in site) ? size : GM_config.get('call_http_mod_movie') ? size - border : size;
  var title = (site['TV']) ? site['name'] + ' (TV)' : site['name'];
  var img = $('<img />').attr({'style': '-moz-opacity: 0.4; border: 0',
                               'width': iconsize,
                               'height': iconsize,
                               'src': favicon,
                               'title': title,
                               'alt': site['name']});
  if (hide_on_err) { img.attr('onerror', "this.style.display='none';"); }
  return img;
}

//==============================================================================
//    Add search links to an element
//==============================================================================

function addLink(elem, site_name, target, site, state, scout_tick, post_data) {
  // State should always be one of the values defined in valid_states.
  if ($.inArray(state, valid_states) < 0) {
    console.log("Unknown state: " + state);
  }

  var link = $('<a />').attr('href', target).attr('target', '_blank').attr('rel', 'noreferrer');
  // Link and add Form element for POST method.
  if ('mPOST' in site) {
    var form_name = (site['TV']) ? site['name'] + '-TV-form-' + scout_tick : site['name'] + '-form-' + scout_tick;
        form_name = form_name.replace(/\s|\.|\(|\)/g, '-');
    var placebo_url = new URL(target).origin;
    link = $('<a />').attr('href', placebo_url).attr('onclick', "$('#" + form_name + "').submit(); return false;").attr('target', '_blank').attr('rel', 'noreferrer');

    var data = (post_data.match('{')) ? post_data.replace(/\+/g, ' ') : '{"' + post_data.replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ') + '"}';
    var addform = $('<form></form>');
        addform.attr('id', form_name);
        addform.attr('action', target);
        addform.attr('method', 'post');
        addform.attr('style', 'display: none;');
        addform.attr('target', '_blank');
        addform.attr('rel', 'noreferrer');

    if (post_data.match('},{')) {
      const dataArray = (new Function("return [" +data+ "];")());
      dataArray.forEach(function (item, index) {
        let addinput = $("<input>");
            addinput.attr('type', 'text');
            addinput.attr('name', item.key);
            addinput.attr('value', item.value);
        addform.append(addinput);
        $('body').append(addform);
      });
    } else {
      data = JSON.parse(data);
      for (const name in data) {
        let addinput = $("<input>");
            addinput.attr('type', 'text');
            addinput.attr('name', name);
            addinput.attr('value', data[name]);
        addform.append(addinput);
        $('body').append(addform);
     }
    }
  }
  // Icon/Text appearance.
  let icon;
  const border_width = GM_config.get('iconsborder_size');
  if (getPageSetting('use_mod_icons') && getPageSetting('call_http_mod')) {
    icon = getFavicon(site);
    (!GM_config.get('one_line') && !onSearchPage) ? icon.css({'border-width': '0px',        'border-style': 'solid', 'border-radius': '2px', 'margin': '1px 0px 2px'})
                                                  : icon.css({'border-width': border_width, 'border-style': 'solid', 'border-radius': '2px', 'margin': '1px 0px 2px'});
    if (state == 'error' || state == 'logged_out') {
      (getPageSetting('highlight_sites').split(',').includes(site['name'])) ? icon.css('border-color', 'rgb(255,0,0)')
                                                                            : icon.css('border-color', 'rgb(180,0,0)');
    } else if (state == 'missing') {
      (getPageSetting('highlight_sites').split(',').includes(site['name'])) ? icon.css('border-color', 'rgb(255,255,0)')
                                                                            : icon.css('border-color', 'rgb(230,200,100)');
    } else if (state == 'seeding') {
      (getPageSetting('highlight_sites').split(',').includes(site['name'])) ? icon.css('border-color', 'rgb(0,220,220)')
                                                                            : icon.css('border-color', 'rgb(0,220,220)');
    } else if (state == 'found') {
      (getPageSetting('highlight_sites').split(',').includes(site['name'])) ? icon.css('border-color', 'rgb(0,220,0)')
                                                                            : icon.css('border-color', 'rgb(0,130,0)');
        if ((site['name']).match('-Req')) icon.css('border-color', 'rgb(50,50,200)');
    }
    link.append(icon);
  } else if (!getPageSetting('use_mod_icons')) {
    site_name = (getPageSetting('highlight_sites').split(',').includes(site['name'])) ? site_name.bold() : site_name;
    if (state == 'missing' || state == 'error' || state == 'logged_out') {
      link.append($('<s />').append(site_name));
    } else {
      link.append(site_name);
    }
    if (state == 'error' || state == 'logged_out') {
      link.css('color', 'red');
    }
  } else {
    icon = getFavicon(site);
    icon.css({'border-width': '0px', 'border-style': 'solid', 'border-radius': '2px', 'margin': '1px 0px 2px'});
    (getPageSetting('highlight_sites').split(',').includes(site['name'])) ? icon.css('border-color', 'rgb(0,220,0)')
                                                                          : icon.css('border-color', 'rgb(0,130,0)');
    if ((site['name']).match('-Req')) icon.css('border-color', 'rgb(50,50,200)');
    link.append(icon);
  }
  // Create/find elements for Search/List pages.
  if (onSearchPage && GM_config.get('load_third_bar_search')) {
    if ($(elem).parent().find('.result_box_3rd_' + scout_tick).length == 0) {
      $('<div />').addClass('result_box_3rd_' + scout_tick).insertAfter(elem);
      $.each(valid_states, function(i, name) {
        $(elem).parent().find('.result_box_3rd_' + scout_tick).append("<span id='imdbscout3_" + name + scout_tick + "'>"+'</span>');
      });
    }
  }
  if (onSearchPage && GM_config.get('load_second_bar_search')) {
    if ($(elem).parent().find('.result_box_2nd_' + scout_tick).length == 0) {
      $('<div />').addClass('result_box_2nd_' + scout_tick).insertAfter(elem);
      $.each(valid_states, function(i, name) {
        $(elem).parent().find('.result_box_2nd_' + scout_tick).append("<span id='imdbscout2_" + name + scout_tick + "'>"+'</span>');
      });
    }
  }
  if (onSearchPage) {
    if ($(elem).parent().find('.result_box_' + scout_tick).length == 0) {
      $('<div />').addClass('result_box_' + scout_tick).insertAfter(elem);
      $.each(valid_states, function(i, name) {
        $(elem).parent().find('.result_box_' + scout_tick).append("<span id='imdbscout_" + name + scout_tick + "'>"+'</span>');
      });
    }
  }
  // Add links to IMDb page.
  var in_element_two = ('inSecondSearchBar' in site) ? site['inSecondSearchBar'] : false;
  var in_element_three = ('inThirdSearchBar' in site) ? site['inThirdSearchBar'] : false;
  if (in_element_two && !getPageSetting('load_second_bar') || in_element_three && !getPageSetting('load_third_bar') || in_element_two && in_element_three) {
    return;
  } else if (!onSearchPage && in_element_two) {
    $('#imdbscoutsecondbar_' + state).append(link).append(' ');
  } else if (!onSearchPage && in_element_three) {
    $('#imdbscoutthirdbar_' + state).append(link).append(' ');
  } else if (!onSearchPage) {
    $('#imdbscout_' + state).append(link).append(' ');
  } else if (!in_element_three && !in_element_two) {
    $('#imdbscout_' + state + scout_tick).append(link);
  } else if (in_element_two) {
    $('#imdbscout2_' + state + scout_tick).append(link);
  } else {
    $('#imdbscout3_' + state + scout_tick).append(link);
  }

  if (onSearchPage) {
    // Hack: Convert GET link to button to deal with same-origin problem (icons mode only).
    // Sorting removes event, so on the title pages same hack will run at the end of the sorting (iconToButtonHack).
    if (site['name'] == "TorSyndikat") {
      const button = $('span[id*='+ scout_tick +']').find('img[title="TorSyndikat"]').parent();
      const link = button.attr('href');
            button.prop("href", "javascript: void(0)");
            button.removeAttr("target");
      button.click(function() {
        GM.openInTab(link);
      });
    }
    if (site['name'] == "TorSyndikat-Req") {
      const button = $('span[id*='+ scout_tick +']').find('img[title="TorSyndikat-Req"]').parent();
      const link = button.attr('href');
            button.prop("href", "javascript: void(0)");
            button.removeAttr("target");
      button.click(function() {
        GM.openInTab(link);
      });
    }
    if (site['name'] == "TorSyndikat-Produkt") {
      const button = $('span[id*='+ scout_tick +']').find('img[title="TorSyndikat-Produkt"]').parent();
      const link = button.attr('href');
            button.prop("href", "javascript: void(0)");
            button.removeAttr("target");
      button.click(function() {
        GM.openInTab(link);
      });
    }
    if (site['name'] == "TBD") {
      const button = $('span[id*='+ scout_tick +']').find('img[title="TBD"]').parent();
      const link = button.attr('href');
            button.prop("href", "javascript: void(0)");
            button.removeAttr("target");
      button.click(function() {
        GM.openInTab(link);
      });
    }
  }
  // Hack: Same-origin problem with POST, so remove 'onclick' form (icons mode only).
  if (site['name'] == "SFP-Req") {
    const button = $('img[title="SFP-Req"]').parent();
          button.prop("href", "https://s-f-p.dyndns.dk/viewrequests.php");
          button.removeAttr("onclick");
  }

  // Call to the sorting launcher.
  if (!onSearchPage && !in_element_two && !in_element_three) {
    iconSorterLauncher(site);
  }
}

function iconToButtonHack() {
  if ($('img[title="TorSyndikat"]').length) {
    const button = $('img[title="TorSyndikat"]').parent();
    const link = button.attr('href');
          button.prop("href", "javascript: void(0)");
          button.removeAttr("target");
    button.click(function() {
      GM.openInTab(link);
    });
  }
  if ($('img[title="TorSyndikat-Req"]').length) {
    const button = $('img[title="TorSyndikat-Req"]').parent();
    const link = button.attr('href');
          button.prop("href", "javascript: void(0)");
          button.removeAttr("target");
    button.click(function() {
      GM.openInTab(link);
    });
  }
  if ($('img[title="TorSyndikat-Produkt"]').length) {
    const button = $('img[title="TorSyndikat-Produkt"]').parent();
    const link = button.attr('href');
          button.prop("href", "javascript: void(0)");
          button.removeAttr("target");
    button.click(function() {
      GM.openInTab(link);
    });
  }
  if ($('img[title="TBD"]').length) {
    const button = $('img[title="TBD"]').parent();
    const link = button.attr('href');
          button.prop("href", "javascript: void(0)");
          button.removeAttr("target");
    button.click(function() {
      GM.openInTab(link);
    });
  }
}

//==============================================================================
//    Determine whether a site should be displayed
//==============================================================================

async function maybeAddLink(elem, site_name, search_url, site, scout_tick, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id) {
  // If the search URL is an array, recurse briefly on the elements.
  if ($.isArray(search_url)) {
    $.each(search_url, function(index, url) {
      maybeAddLink(elem, site_name + '_' + (index + 1).toString(), url, site);
    });
    return;
  }
  // Don't check the second/third bar sites if a 2nd/3rd bar is disabled in the Settings.
  var in_element_two = ('inSecondSearchBar' in site) ? site['inSecondSearchBar'] : false;
  var in_element_three = ('inThirdSearchBar' in site) ? site['inThirdSearchBar'] : false;
  if (in_element_two && !getPageSetting('load_second_bar') || in_element_three && !getPageSetting('load_third_bar') || in_element_two && in_element_three) {
    return;
  }
  // Connection rate limiter per domain.
  var set_rate = ('rateLimit' in site) ? site['rateLimit'] : 200;
  var rate     = (!onSearchPage) ? set_rate : (set_rate > 1000) ? set_rate : set_rate * 4;
  var domain   = search_url.split('/')[2];
  var now      = (new Date())*1;
  var lastLoaded = window.localStorage[domain+'_lastLoaded'];
  if (!lastLoaded) {
    lastLoaded = now - 50000;
  } else {
    lastLoaded = parseInt(lastLoaded);
  }
  if (now - lastLoaded < rate) {
    window.setTimeout(maybeAddLink.bind(undefined, elem, site['name'], search_url, site, scout_tick, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id), rate);
    return;
  } else {
    window.localStorage[domain+'_lastLoaded'] = (new Date())*1;
  }

  var success_match = ('positiveMatch' in site) ? site['positiveMatch'] : false;
  var target = search_url;
  if ('goToUrl' in site) {
    target = await replaceSearchUrlParams({'searchUrl': site['goToUrl'], 'spaceEncode': ('spaceEncode' in site) ? site['spaceEncode'] : '+'}, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id);
  }
  // Check tmdb/tvdb conversion.
  if (search_url.indexOf('=00000000') > -1 || search_url.indexOf('=undefined') > -1) {
    addLink(elem, site_name, target, site, 'error', scout_tick);
    return;
  }
  // Check for results with POST method.
  if ('mPOST' in site) {
    const post_data = await replaceSearchUrlParams(site, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id);
    GM.xmlHttpRequest({
      method: 'POST',
      timeout: parseInt(GM_config.get('timeout_ms')),
      url: search_url,
      data: post_data,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      onload: function(response) {
        if (GM_config.get('debug_sites')) {
          const name = (site['TV']) ? site['name'] + ' (TV)' : site['name'];
          console.log(name + " URL: " + search_url + "\n ");
          console.log(name + " POST Response Status: " + response.status + "\n ");
          console.log(name + " POST Response Headers: " + response.responseHeaders + "\n ");
          console.log(name + " POST Response: " + response.responseText + "\n ");
        }
        if (response.responseHeaders.indexOf('efresh: 0; url') > -1 || response.status > 499 || (response.status > 399 && !site.ignore404) || (response.responseText == "" && !site.ignoreEmpty)) {
          addLink(elem, site_name, target, site, 'logged_out', scout_tick, post_data);
        } else if (site['positiveMatch'] && site['loggedOutRegex'] && String(response.responseText).match(site['loggedOutRegex'])) {
          addLink(elem, site_name, target, site, 'logged_out', scout_tick, post_data);
        } else if (String(response.responseText).match(site['matchRegex']) ? !(success_match) : success_match) {
            if (getPageSetting('highlight_missing').split(',').includes(site['name'])) {
              if (elem.style) {
                elem.parentNode.style.background = 'rgba(255,104,104,0.7)';
              } else {
                document.querySelector('#imdbscout_missing').style.background = 'rgba(255,104,104,0.7)';
              }
            }
            if (!getPageSetting('hide_missing')) {
              addLink(elem, site_name, target, site, 'missing', scout_tick, post_data);
            }
        } else if (site['loggedOutRegex'] && String(response.responseText).match(site['loggedOutRegex'])) {
          addLink(elem, site_name, target, site, 'logged_out', scout_tick, post_data);
        } else if (site['seedingRegex'] && String(response.responseText).match(site['seedingRegex'])) {
          addLink(elem, site_name, target, site, 'seeding', scout_tick, post_data);
        } else {
          addLink(elem, site_name, target, site, 'found', scout_tick, post_data);
        }
      },
      onerror: function() {
        addLink(elem, site_name, target, site, 'error', scout_tick, post_data);
        console.log("IMDb Scout Mod (POST-Request Error. Site): " +site_name);
      },
      onabort: function() {
        addLink(elem, site_name, target, site, 'error', scout_tick, post_data);
        console.log("IMDb Scout Mod (POST-Request aborted. Site): " +site_name);
      },
      ontimeout: function() {
        addLink(elem, site_name, target, site, 'error', scout_tick, post_data);
        console.log("IMDb Scout Mod (POST-Request timed out. Site): " +site_name);
      }
    });
    return;
  }
  // Request header tweaks
  let reqHeader = {};
  if (site['name'] == "Milkie") {
    reqHeader = {
      "Host": "milkie.cc",
      "Authorization": GM_config.get("milkie_authToken")
    };
  } else if (site['name'] == "TNT") {
    reqHeader = {
      "Host": "tntracker.org",
      "Authorization": GM_config.get("tnt_authToken")
    };
  } else if (site['name'] == "DonTor") {
    reqHeader = {
      "Host": "dontorrent.equipment",
      "Referer": "https://dontorrent.equipment"
    };
  } else if (site['name'].includes("Voidtools-")) {
    if (GM_config.get("void_username") !== "") {
      reqHeader = {
        "Authorization": "Basic " + btoa(GM_config.get("void_username") + ":" + GM_config.get("void_password")),
      };
    }
  }

  // Check for results with GET method.
  GM.xmlHttpRequest({
    method: 'GET',
    headers: reqHeader,
    timeout: parseInt(GM_config.get('timeout_ms')),
    url: search_url,
    onload: function(response) {
      if (GM_config.get('debug_sites')) {
        const name = (site['TV']) ? site['name'] + ' (TV)' : site['name'];
        console.log(name + " URL: " + search_url + "\n ");
        console.log(name + " GET Response Status: " + response.status + "\n ");
        console.log(name + " GET Response Headers: " + response.responseHeaders + "\n ");
        console.log(name + " GET Response: " + response.responseText + "\n ");
      }
      if (response.responseHeaders.indexOf('efresh: 0; url') > -1 || response.status > 499 || (response.status > 399 && !site.ignore404) || (response.responseText == "" && !site.ignoreEmpty)) {
        addLink(elem, site_name, target, site, 'logged_out', scout_tick);
      } else if (site['positiveMatch'] && site['loggedOutRegex'] && String(response.responseText).match(site['loggedOutRegex'])) {
        addLink(elem, site_name, target, site, 'logged_out', scout_tick);
      } else if (String(response.responseText).match(site['matchRegex']) ? !(success_match) : success_match) {
          if (getPageSetting('highlight_missing').split(',').includes(site['name'])) {
            if (elem.style) {
              elem.parentNode.style.background = 'rgba(255,104,104,0.7)';
            } else {
              document.querySelector('#imdbscout_missing').style.background = 'rgba(255,104,104,0.7)';
            }
          }
          if (!getPageSetting('hide_missing')) {
            addLink(elem, site_name, target, site, 'missing', scout_tick);
          }
      } else if (site['loggedOutRegex'] && String(response.responseText).match(site['loggedOutRegex'])) {
        addLink(elem, site_name, target, site, 'logged_out', scout_tick);
      } else if (site['seedingRegex'] && String(response.responseText).match(site['seedingRegex'])) {
        addLink(elem, site_name, target, site, 'seeding', scout_tick);
      } else {
        addLink(elem, site_name, target, site, 'found', scout_tick);
      }
    },
    onerror: function() {
      addLink(elem, site_name, target, site, 'error', scout_tick);
      console.log("IMDb Scout Mod (GET-Request Error. Site): " +site_name);
    },
    onabort: function() {
      addLink(elem, site_name, target, site, 'error', scout_tick);
      console.log("IMDb Scout Mod (GET-Request aborted. Site): " +site_name);
    },
    ontimeout: function() {
      addLink(elem, site_name, target, site, 'error', scout_tick);
      console.log("IMDb Scout Mod (GET-Request timed out. Site): " +site_name);
    }
  });
}

//==============================================================================
//    Perform code to create fields and display sites
//==============================================================================

function perform(elem, movie_id, movie_title, movie_title_orig, is_tv, is_movie, series_id, season_id, episode_id, movie_year, scout_tick) {
  var site_shown = false;
  $.each(sites, async function(index, site) {
    if (site['show']) {
      site_shown = true;
      // For TV Series show only TV links. TV Special, TV Movie, Episode & Documentary are treated as TV and Movie.
      if ((Boolean(site['TV']) == is_tv || Boolean(site['both'])) || (!is_tv && !is_movie) || getPageSetting('ignore_type')) {
        var searchUrl = await replaceSearchUrlParams(site, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id, true);
        if ('goToUrl' in site && getPageSetting('call_http_mod')) {
          maybeAddLink(elem, site['name'], searchUrl, site, scout_tick, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id);
        }
        if ('goToUrl' in site && !getPageSetting('call_http_mod')) {
          searchUrl = await replaceSearchUrlParams({'searchUrl': site['goToUrl'], 'spaceEncode': ('spaceEncode' in site) ? site['spaceEncode'] : '+'}, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id);
          addLink(elem, site['name'], searchUrl, site, 'found', scout_tick);
        }
        if (!('goToUrl' in site) && getPageSetting('call_http_mod')) {
          maybeAddLink(elem, site['name'], searchUrl, site, scout_tick, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id);
        }
        if (!('goToUrl' in site) && !getPageSetting('call_http_mod')){
          const post_data = await replaceSearchUrlParams(site, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id, false); // runs on non-post sites too to keep order of icons
          addLink(elem, site['name'], searchUrl, site, 'found', scout_tick, post_data);
        }
      }
    }
  });

  if (!site_shown) {
    $(elem).append("<pre>No sites enabled!\nScript's settings can be found in your Monkey's shortcut.\nFor now you can press this temporary button:");
    var p = $('<p />').attr('id', 'imdbscout_settings_button');
        p.append($('<button>Load Settings</button>').css({'cursor':'pointer', 'background-color':'#F5C518', 'color':'blue', 'font-weight':'bold'}).click(function() {
          GM_config.open();
          $('#imdbscout_settings_button').remove();
    }));
    $(elem).append(p);
  }
}

//==============================================================================
//    'Load' button code
//==============================================================================

// Runs when "Load on Start?" is disabled.
function displayButton() {
  var p = $('<p />').attr('id', 'imdbscout_button');
  p.append($('<button>Load links</button>').css({'background-color':'#F5C518', 'color':'blue', 'font-weight':'bold'}).click(function() {
    $('#imdbscout_button').remove();
    if (onSearchPage) {
      performSearch();
    } else {
      performPage();
    }
  }));

  // list, watchlist, ratings
  if (onSearchPage && $('.list_page_mc_parent').length) {
    $('.list_page_mc_parent').prepend(p);
  // advanced search
  } else if (onSearchPage && $('div.ipc-title hgroup h1.ipc-title__text').length) {
    $('div.ipc-title hgroup h1.ipc-title__text').parent().append(p);
  // title reference
  } else if (!onSearchPage && $('.titlereference-header').length) {
    $('.titlereference-header').append(p);
  // title redesign
  } else if (!onSearchPage && $('.ipc-page-section').length) {
    $('.ipc-page-section:eq(0)').parent().before(p);
  } else {
    console.log("IMDb Scout Mod (displayButton Error): Element not found! Please report it.");
    GM.notification("Element not found! Please report it.", "IMDb Scout Mod (displayButton Error)");
  }
}

//==============================================================================
//    Icons at top bar on Title page
//==============================================================================

// Unlike the other URLs, they aren't checked to see if the movie exists.
function addIconBar(movie_id, movie_title, movie_title_orig) {
  var iconbar;
  // reference + remove "Reference View" txt and a link to settings
  if ($('.titlereference-header div script').length) {
    // wrap text node for removal
    $($('.titlereference-header div script')[0].nextSibling).wrap('<span class="removethis"/>');
    $('.removethis').remove();
    $('.titlereference-change-view-link').remove();
    iconbar = getIconsLinkArea();
  // in case if code above breaks
  } else if ($('.titlereference-header').length) {
    console.log("IMDb Scout Mod (addIconBar Error): Some Reference code failed! Please report it.");
    if ($('h3[itemprop="name"]').length) {
      iconbar = $('h3[itemprop="name"]').append($('<br/>'));
    }
  // redesign
  } else if ($('.ipc-page-section').length) {
    iconbar = getIconsLinkArea();
  }


  $.each(icon_sites, async function(index, site) {
    if (site['show']) {
      var search_url = ('mPOST' in site) ? site['searchUrl'] : await replaceSearchUrlParams(site, movie_id, movie_title, movie_title_orig);
      var image = getFavicon(site).css('margin', '2px 2px 2px');
      var html = $('<a />').attr('href', search_url).attr('target', '_blank').attr('rel', 'noreferrer').addClass('iconbar_icon').append(image);

      // Link and add Form element for POST method.
      if ('mPOST' in site) {
        var form_name = site['name'] + '-iconform';
            form_name = form_name.replace(/\s|\.|\(|\)/g, '-');
        var placebo_url = new URL(site['searchUrl']).origin;
        html = $('<a />').attr('href', placebo_url).attr('onclick', "$('#" + form_name + "').submit(); return false;").attr('target', '_blank').attr('rel', 'noreferrer').addClass('iconbar_icon').append(image);
        var post_data = await replaceSearchUrlParams(site, movie_id, movie_title, movie_title_orig);
        var data = (post_data.match('{')) ? post_data.replace(/\+/g, ' ') : '{"' + post_data.replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ') + '"}';
        var addform = $('<form></form>');
            addform.attr('id', form_name);
            addform.attr('action', search_url);
            addform.attr('method', 'post');
            addform.attr('style', 'display: none;');
            addform.attr('target', '_blank');
            addform.attr('rel', 'noreferrer');

        if (post_data.match('},{')) {
          const dataArray = (new Function("return [" +data+ "];")());
          dataArray.forEach(function (item, index) {
            let addinput = $("<input>");
                addinput.attr('type', 'text');
                addinput.attr('name', item.key);
                addinput.attr('value', item.value);
            addform.append(addinput);
            $('body').append(addform);
          });
        } else {
          data = JSON.parse(data);
          for (const name in data) {
            let addinput = $("<input>");
                addinput.attr('type', 'text');
                addinput.attr('name', name);
                addinput.attr('value', data[name]);
            addform.append(addinput);
            $('body').append(addform);
         }
        }
      }
      iconbar.append(html).append();
      // Call to '_Check URLs (for Dev tests)' funcs.
      if (site['name'] == "_Check URLs (for Dev tests)"){
      start_CheckURLs();
      }
      // Call to 'Copy Info to BBcode' funcs.
      if (site['name'] == "Copy Info to BBcode"){
      start_copyInfoToBBcode(movie_id, movie_title_orig);
      }
      // Call to Emby funcs.
      if (site['name'] == "Emby"){
      start_emby(movie_id, movie_title, movie_title_orig);
      }
      // Call to Jellyfin funcs.
      if (site['name'] == "Jellyfin"){
      start_jellyfin(movie_id, movie_title, movie_title_orig);
      }
      // Call to Plex funcs.
      if (site['name'] == "Plex"){
      start_plex(movie_id, movie_title, movie_title_orig);
      }
      // Call to Radarr funcs.
      if (site['name'] == "Radarr"){
      get_radarr_movies(movie_id);
      }
      // Call to Radarr2 funcs.
      if (site['name'] == "Radarr2"){
      get_radarr_movies(movie_id, true);
      }
      // Call to Sonarr funcs.
      if (site['name'] == "Sonarr"){
      get_sonarr_tvseries(movie_id);
      }
      // Call to Trakt-Watchlist funcs.
      if (site['name'] == "Trakt-Watchlist"){
      start_trakt(movie_id, movie_title);
      }
    }
  });

  if (!GM_config.get("remove_openall")) {
    // If we have access to the openInTab function, add an Open All feature.
    if (GM.openInTab) {
      // Wrapped in timeout because the button lands in front of icons (async function).
      setTimeout(() => {
        var aopenall = $('<a />').text('Open All').prepend("&nbsp;").attr('href', 'javascript:;').attr('style', 'font-weight:bold;font-size:11px;font-family: Calibri, Verdana, Arial, Helvetica, sans-serif;');
            aopenall.click(function() {
              $('.iconbar_icon').each(function() {
                GM.openInTab($(this).attr('href'));
              });
            });
        iconbar.append(aopenall);
        // Rename class of the special buttons so "Open all" wouldn't open them.
        $('img[title="_Check URLs (for Dev tests)"]').parent().removeClass('iconbar_icon').addClass('iconbar_spec_icon');
        $('img[title="Copy info to BBCode"]').parent().removeClass('iconbar_icon').addClass('iconbar_spec_icon');
        $('img[title="Emby"]').parent().removeClass('iconbar_icon').addClass('iconbar_spec_icon');
        $('img[title="Jellyfin"]').parent().removeClass('iconbar_icon').addClass('iconbar_spec_icon');
        $('img[title="Plex"]').parent().removeClass('iconbar_icon').addClass('iconbar_spec_icon');
        $('img[title="Radarr"]').parent().attr('class','iconbar_spec_icon');
        $('img[title="Radarr2"]').parent().attr('class','iconbar_spec_icon');
        $('img[title="Sonarr"]').parent().attr('class','iconbar_spec_icon');
        $('img[title="Trakt-Watchlist"]').parent().attr('class','iconbar_spec_icon');
      }, 300);
    }
  }
}

// Create elements for the icons bar
function getIconsLinkArea() {
  // If it already exists, just return it
  if ($('#imdbscout_iconsheader').length) {
    return $('#imdbscout_iconsheader');
  }
  const pad = onReferencePage ? '0px 0px 0px 0px' : '0px 0px 0px 0px';
  var p = $('<p />').attr('id', 'imdbscout_iconsheader').css({
    'padding': pad,
    'margin-left': '0px',
    'margin-right': '0px',
    'margin-top': '0px',
    'margin-bottom': '0px',
    'overflow': 'hidden',
  });
  const hr = $('<hr />').css({'margin-top':'7px', 'margin-bottom':'7px', 'color':'#0d0d0d' }).prop('color','#0d0d0d');
  // reference
  if ($('.titlereference-header div hr').first().length) {
    $('.titlereference-header div hr').first().after(p);
  // redesign
  } else if ($('.ipc-page-section').length) {
    $('#scout_rating_table').after(hr);
    $('.ipc-page-section:eq(0)').parent().before(p);
  }
  var styles = '#imdbscout_iconsheader {line-height: 16px;} ';
  GM_addStyle(styles);
  return $('#imdbscout_iconsheader');
}

//==============================================================================
//    Search/List/Watchlist page code
//==============================================================================

function performSearch() {
  // showsites is just for adjusting rate to imdb
  const showsites1 = public_sites.concat(private_sites, chinese_sites, french_sites, german_sites, usenet_sites).reduce(function (n, site) {return n + (site['show'] == true); }, 0);
  const showsites2 = (GM_config.get('load_second_bar_search')) ? subs_sites.concat(pre_databases, other_sites).reduce(function (n, site) {return n + (site['show'] == true); }, 0) : 0;
  const showsites3 = (GM_config.get('load_third_bar_search' )) ? custom_sites.concat(streaming_sites).reduce(function (n, site) {return n + (site['show'] == true); }, 0) : 0;
  var showsites  = showsites1 + showsites2 + showsites3

  // main list elements, pages to test:
  // https://www.imdb.com/search/title/?title=terminator
  // https://www.imdb.com/list/ls057577566
  // https://www.imdb.com/user/ur22654354/watchlist
  // https://www.imdb.com/user/ur20552756/ratings
  if($('.ipc-metadata-list').length && $('.ipc-metadata-list-summary-item').children().length !== 0) {
    $('.ipc-metadata-list-summary-item').each(function() {
      processListElement($(this), showsites);
    });

    // MutationObserver callback // Because 25+/50+ '.ipc-metadata-list-summary-item' elems are dynamically loaded
    var observerCallback = function(mutationsList, observer) {
      mutationsList.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          $(mutation.addedNodes).each(function() {
            // Only process if the added node is a new '.ipc-metadata-list-summary-item' element
            if ($(this).hasClass('ipc-metadata-list-summary-item')) {
              processListElement($(this), showsites);
            }
          });
        }
      });
    };

    var targetNode = document.querySelector('.ipc-metadata-list'); // Select the parent node of '.ipc-metadata-list-summary-item' to observe
    var observerOptions = {childList: true, subtree: true};        // Observer options
    var observer = new MutationObserver(observerCallback);         // Create a MutationObserver instance
    observer.observe(targetNode, observerOptions);                 // Start observing
  } else {
    console.log("IMDb Scout Mod (Lists): Element not found! Please report it.");
    GM.notification("Element not found! Please report it.", "IMDb Scout Mod (Lists)");
  }
}

function processListElement(element, showsites) {
    if (!element.find('.ipc-poster>a').length) {
      console.log("IMDb Scout Mod (processListElement): Element not found! Please report it.");
      GM.notification("Element not found! Please report it.", "IMDb Scout Mod (processListElement)");
    }
    const link     = element.find('.ipc-poster>a');
    const movie_id = link.attr('href').match(/tt([0-9]*)\/?.*/)[1];

    let scout_tick = window.localStorage['_imdbscoutmod_tick'];
    if (!scout_tick) {
      scout_tick = 1;
      window.localStorage['_imdbscoutmod_tick'] = scout_tick;
    }

    performSearchSecondPart(element, link, movie_id, showsites, scout_tick);
    scout_tick = parseInt(scout_tick) + 1;
    window.localStorage['_imdbscoutmod_tick'] = scout_tick;
}

function performSearchSecondPart(elem, link, movie_id, showsites, scout_tick) {
  // Connection rate limiter for IMDb.
  var rate;
  if (!(GM_config.get('call_http_mod_search'))) {
    rate =  400;
  } else if (showsites > 99) {
    rate = 6500;
  } else if (showsites > 80) {
    rate = 4800;
  } else if (showsites > 60) {
    rate = 3600;
  } else if (showsites > 40) {
    rate = 2700;
  } else if (showsites > 20) {
    rate = 2000;
  } else if (showsites > 10) {
    rate = 1500;
  } else {
    rate = 800;
  }
  var domain = "https://www.imdb.com";
  var now    = (new Date())*1;
  var lastLoaded = window.localStorage[domain+'_lastLoaded'];
  if (!lastLoaded) {
    lastLoaded = now - 8000;
  } else {
    lastLoaded = parseInt(lastLoaded);
  }
  if (now - lastLoaded < rate) {
    window.setTimeout(performSearchSecondPart.bind(undefined, elem, link, movie_id, showsites, scout_tick), rate);
    return;
  } else {
    window.localStorage[domain+'_lastLoaded'] = (new Date())*1;
  }

  GM.xmlHttpRequest({
    method: "GET",
    timeout: 10000,
    url:    "https://www.imdb.com" + link.attr('href'),
    anonymous: true, // prevent it sending cookies and going to a reference page if such option is enabled in imdb's acc
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
    onload: function(response) {
      var parser = new DOMParser();
      var result = parser.parseFromString(response.responseText, "text/html");

      // Note: Podcast Series|TV Mini Series - added only English.
      var is_tv    = Boolean($(result).find('title').text().match(/Podcast Series|TV Mini Series|TV Series|Série télévisée|Fernsehserie|टीवी सीरीज़|Serie TV|Série de TV|Serie de TV/));
      // newLayout || reference : check if 'title' has just a year in brackets, eg. "(2009)" // Note: 'title' is fail-safe measure if other checks fail. // v18.1 Note: Probably "fail-safe" makes this work properly on non english languages
      var is_movie = (Boolean($(result).find('[data-testid=hero-title-block__metadata]').text().match('TV')) || Boolean($(result).find('li.ipl-inline-list__item').text().match('TV'))) ? false : Boolean($(result).find('title').text().match(/.*? \(([0-9]*)\)/));
      // newLayout || reference  // Documentaries should be searched in both (tv and movie)
      if (Boolean($(result).find('[property="og:title"]').attr('content').match(/Document|डॉक्यूमेंटरी|Dokument/)) || Boolean($(result).find('li.ipl-inline-list__item').text().match(/Document|डॉक्यूमेंटरी|Dokument/))) {
        is_tv    = false;
        is_movie = false;
      }
      var movie_year  = result.title.replace(/^(.+) \((\D*|)(\d{4})(.*)$/gi, '$3');
      var movie_title = "";
      var movie_title_orig = "";
      if ($(result).find('[type=application\\/ld\\+json]:eq(0)').length) {
        const rawJsn = $(result).find('[type=application\\/ld\\+json]:eq(0)').text();
        const parseJsn = JSON.parse(rawJsn);
        movie_title = htmlDecode(parseJsn.alternateName);  //  htmlDecode added in v19.3, https://www.imdb.com/title/tt0108550
        movie_title_orig = htmlDecode(parseJsn.name);
        // movie_title not found
        if (movie_title === "" || movie_title === undefined) {
          movie_title = movie_title_orig;
        }
      } else {
        console.log("IMDb Scout Mod (Get a title Error): Element not found! Please report it.");
        GM.notification("Element not found! Please report it.", "IMDb Scout Mod (Get a title Error)");
      }
      // Streaming APIs support
      var series_id  = "tt" + movie_id;
      var season_id  = "1";
      var episode_id = "1";
      if (Boolean($(result).find('title').text().match(/TV Episode|Épisode télévisé|Fernsehepisode|टीवी एपिसोड|Episodio TV|Episódio de TV|Episodio de TV/))) {
        if ($(result).find('h3[itemprop="name"]').length && $(result).find('.titlereference-overview-season-episode-numbers li').length) {
          series_id  = $(result).find('h4[itemprop="name"] a').prop('href').match(/\/tt([0-9]+)\//)[0].replace(/\//g, "");
          season_id  = $(result).find('.titlereference-overview-season-episode-numbers li').first().text().trim().match(/(\d+)/)[0];
          episode_id = $(result).find('.titlereference-overview-season-episode-numbers li').last().text().trim().match(/(\d+)/)[0];

        } else if ($('[data-testid=hero-subnav-bar-season-episode-numbers-section]').length) {
          series_id  = $(result).find('[data-testid=hero-title-block__series-link]').prop('href').match(/\/tt([0-9]+)\//)[0].replace(/\//g, "");
          const SE_numbers = $('[data-testid=hero-subnav-bar-season-episode-numbers-section]').text().trim().split('.');
          season_id  = SE_numbers[0].match(/(\d+)/)[0];
          episode_id = SE_numbers[1].match(/(\d+)/)[0];
        }
      }

      perform(elem, movie_id, movie_title, movie_title_orig, is_tv, is_movie, series_id, season_id, episode_id, movie_year, scout_tick);
      },
      onerror: function() {
        console.log("IMDb Scout Mod (Lists): Request Error.");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (Lists): Abort.");
      },
      ontimeout: function() {
        console.log("IMDb Scout Mod (Lists): Time out.");
      }
  });
}

//==============================================================================
//    Title page code
//==============================================================================

function performPage() {
  var movie_title = "";
  var movie_title_orig = "";
  if (!onReferencePage) {
    if ($('[type=application\\/ld\\+json]:eq(0)').length) {
      const rawJsn = $('[type=application\\/ld\\+json]:eq(0)').text();
      const parseJsn = JSON.parse(rawJsn);
      movie_title = htmlDecode(parseJsn.alternateName); //  htmlDecode added in v19.3, https://www.imdb.com/title/tt0108550
      movie_title_orig = htmlDecode(parseJsn.name);
      // movie_title not found
      if (movie_title === "" || movie_title === undefined) {
        movie_title = movie_title_orig;
      }
    } else {
      console.log("IMDb Scout Mod (Get a title Error): Element not found! Please report it.");
      GM.notification("Element not found! Please report it.", "IMDb Scout Mod (Get a title Error)");
    }
  } else {
    // reference
    const m = $('h3[itemprop="name"]').text().trim();
    movie_title = m.split('\n')[0].trim();
    movie_title_orig = $.trim($($('h3[itemprop="name"]')[0].nextSibling).text());
    // movie_title_orig not found
    if (movie_title_orig === "" || movie_title_orig === undefined) {
      movie_title_orig = movie_title;
    }
  }

  var movie_id = document.URL.match(/\/tt([0-9]+)/)[1].trim('tt');
  // Note: Podcast Series|TV Mini Series - added only English.
  var is_tv    = Boolean($('title').text().match(/Podcast Series|TV Mini Series|TV Series|Série télévisée|Fernsehserie|टीवी सीरीज़|Serie TV|Série de TV|Serie de TV/));
  // newLayout || reference : check if 'title' has just a year in brackets, eg. "(2009)" // Note: 'title' is fail-safe measure if other checks fail. // v18.1 Note: Probably "fail-safe" makes this work properly on non english languages
  var is_movie = (Boolean($('[data-testid=hero-title-block__metadata]').text().match('TV')) || Boolean($('li.ipl-inline-list__item').text().match('TV'))) ? false : Boolean($('title').text().match(/.*? \(([0-9]*)\)/));
  // newLayout || reference  // Documentaries should be searched in both (tv and movie)
  if (Boolean($('[property="og:title"]').attr('content').match(/Document|डॉक्यूमेंटरी|Dokument/)) || Boolean($('li.ipl-inline-list__item').text().match(/Document|डॉक्यूमेंटरी|Dokument/))) {
    is_tv    = false;
    is_movie = false;
  }
  if (!onReferencePage && !$('[property="og:title"]').length || onReferencePage && !$('li.ipl-inline-list__item').length) {
    console.log("IMDb Scout Mod (Get a genre Error): Element not found! Please report it.");
    GM.notification("Element not found! Please report it.", "IMDb Scout Mod (Get a genre Error)");
  }

  // Streaming APIs support
  var series_id  = "tt" + movie_id;
  var season_id  = "1";
  var episode_id = "1";
  if (Boolean($('title').text().match(/TV Episode|Épisode télévisé|Fernsehepisode|टीवी एपिसोड|Episodio TV|Episódio de TV|Episodio de TV/))) {
    if (onReferencePage && $('.titlereference-overview-season-episode-numbers li').length) {
      series_id  = $('h4[itemprop="name"] a').prop('href').match(/\/tt([0-9]+)\//)[0].replace(/\//g, "");
      season_id  = $('.titlereference-overview-season-episode-numbers li').first().text().trim().match(/(\d+)/)[0];
      episode_id = $('.titlereference-overview-season-episode-numbers li').last().text().trim().match(/(\d+)/)[0];

    } else if ($('[data-testid=hero-subnav-bar-season-episode-numbers-section]').length) {
      series_id  = $('[data-testid=hero-title-block__series-link]').prop('href').match(/\/tt([0-9]+)\//)[0].replace(/\//g, "");
      const SE_numbers = $('[data-testid=hero-subnav-bar-season-episode-numbers-section]').text().trim().split('.');
      season_id  = SE_numbers[0].match(/(\d+)/)[0];
      episode_id = SE_numbers[1].match(/(\d+)/)[0];
    }
  }

  // Start of External ratings code
  if (GM_config.get("ratings_cfg_metacritic") || GM_config.get("ratings_cfg_rotten") || GM_config.get("ratings_cfg_letterboxd") || GM_config.get("ratings_cfg_douban") || GM_config.get("ratings_cfg_allocine") || GM_config.get("ratings_cfg_anime")) {
    externalRatings(movie_id, movie_title, movie_title_orig);
  }
  // Call to iconSorterCount() for the icons/sites sorting.
  iconSorterCount(is_tv, is_movie);

  // Create areas to put links in
  if (!GM_config.get("disable_iconsites")) {
    addIconBar(movie_id, movie_title, movie_title_orig);
  }
  if (!GM_config.get("disable_sites")) {
    perform(getLinkArea(), movie_id, movie_title, movie_title_orig, is_tv, is_movie, series_id, season_id, episode_id);
    if (GM_config.get('load_second_bar_movie') && !GM_config.get('load_third_bar_movie')) {
      getLinkAreaSecond();
    } else if (!GM_config.get('load_second_bar_movie') && GM_config.get('load_third_bar_movie')) {
      getLinkAreaThird();
    } else if (GM_config.get('load_second_bar_movie') && GM_config.get('load_third_bar_movie') && !GM_config.get('switch_bars')) {
      getLinkAreaSecond();
      getLinkAreaThird();
    } else if (GM_config.get('load_second_bar_movie') && GM_config.get('load_third_bar_movie') && GM_config.get('switch_bars')) {
      getLinkAreaThird();
      getLinkAreaSecond();
    }
  }
}

function htmlDecode(value) {
  return $("<textarea/>").html(value).text();
}

//==============================================================================
//    Create elements for the 1st search bar on Title page
//==============================================================================

function getLinkArea() {
  // If it already exists, just return it
  if ($('#imdbscout_header').length) {
    return $('#imdbscout_header');
  }
  var font_weight = (GM_config.get('highlight_sites_movie').length == 0) ? 'bold' : 'normal';
  let backgroundColor;
  if (onReferencePage) {
    backgroundColor = (GM_config.get('greybackground_reference_view')) ? '#333333' : '#ffffff' ;
  } else {
    backgroundColor = '#333333';
  }
  var p = $('<p />').append(GM_config.get('imdbscoutmod_header_text')).attr('id', 'imdbscout_header').css({
    'padding': '4px 10px',
    'font-weight': font_weight,
    'background-color': backgroundColor,
    'margin-top': '0px',
    'margin-bottom': '0px',
    'overflow': 'hidden',
    'color': '#EEEEEE'
  });

  $.each(valid_states, function(i, name) {
    if (GM_config.get('one_line')) {
      p.append($('<span />').attr('id', 'imdbscout_' + name));
    } else {
      var title = $('<span>' + name.replace('_', ' ') + ': </span>').css({
        'textTransform': 'capitalize',
        'min-width': '100px',
        'display': 'inline-block'
      });
      p.append($('<div />').attr('id', 'imdbscout_' + name).append(title));
    }
  });

  const hr = $('<hr />').css({'margin-top':'7px', 'margin-bottom':'7px', 'color':'#0d0d0d' }).prop('color','#0d0d0d');
  // reference
  if ($('.titlereference-header').length) {
    $('.titlereference-header').append(p);
    if (GM_config.get('dark_reference_view')) {
      const hr = $('<hr>').css({'margin': '0px'});
      $('#imdbscout_header').after(hr);
    }
  // redesign
  } else if ($('.ipc-page-section').length) {
    $('#imdbscout_iconsheader').after(hr);
    $('.ipc-page-section:eq(0)').parent().before(p);
  }
  return $('#imdbscout_header');
}

//==============================================================================
//    Create elements for the 2nd search bar on Title page
//==============================================================================

function getLinkAreaSecond() {
  // If it already exists, just return it
  if ($('#imdbscoutsecondbar_header').length) {
    return $('#imdbscoutsecondbar_header');
  }
  var font_weight = (GM_config.get('highlight_sites_movie').length == 0) ? 'bold' : 'normal';
  let backgroundColor;
  if (onReferencePage) {
    backgroundColor = (GM_config.get('greybackground_reference_view')) ? '#333333' : '#ffffff' ;
  } else {
    backgroundColor = '#333333';
  }
  var p = $('<p />').append(GM_config.get('imdbscoutsecondbar_header_text')).attr('id', 'imdbscoutsecondbar_header').css({
    'padding': '4px 10px',
    'font-weight': font_weight,
    'background-color': backgroundColor,
    'margin-top': '0px',
    'margin-bottom': '0px',
    'overflow': 'hidden',
    'color': '#EEEEEE'
  });

  $.each(valid_states, function(i, name) {
    if (GM_config.get('one_line')) {
      p.append($('<span />').attr('id', 'imdbscoutsecondbar_' + name));
    } else {
      var title = $('<span>' + name.replace('_', ' ') + ': </span>').css({
        'textTransform': 'capitalize',
        'min-width': '100px',
        'display': 'inline-block'
      });
      p.append($('<div />').attr('id', 'imdbscoutsecondbar_' + name).append(title));
    }
  });

  // reference
  if ($('.titlereference-header').length) {
    $('.titlereference-header').append(p);
    if (GM_config.get('dark_reference_view')) {
      const hr = $('<hr>').css({'margin': '0px'});
      $('#imdbscoutsecondbar_header').after(hr);
    }
  // redesign
  } else if ($('.ipc-page-section').length) {
    $('.ipc-page-section:eq(0)').parent().before(p);
  }
  return $('#imdbscoutsecondbar_header');
}

//==============================================================================
//     Create elements for the 3rd search bar on Title page
//==============================================================================

function getLinkAreaThird() {
  // If it already exists, just return it
  if ($('#imdbscoutthirdbar_header').length) {
    return $('#imdbscoutthirdbar_header');
  }
  var font_weight = (GM_config.get('highlight_sites_movie').length == 0) ? 'bold' : 'normal';
  let backgroundColor;
  if (onReferencePage) {
    backgroundColor = (GM_config.get('greybackground_reference_view')) ? '#333333' : '#ffffff' ;
  } else {
    backgroundColor = '#333333';
  }
  var p = $('<p />').append(GM_config.get('imdbscoutthirdbar_header_text')).attr('id', 'imdbscoutthirdbar_header').css({
    'padding': '4px 10px',
    'font-weight': font_weight,
    'background-color': backgroundColor,
    'margin-top': '0px',
    'margin-bottom': '0px',
    'overflow': 'hidden',
    'color': '#EEEEEE'
  });

  $.each(valid_states, function(i, name) {
    if (GM_config.get('one_line')) {
      p.append($('<span />').attr('id', 'imdbscoutthirdbar_' + name));
    } else {
      var title = $('<span>' + name.replace('_', ' ') + ': </span>').css({
        'textTransform': 'capitalize',
        'min-width': '100px',
        'display': 'inline-block'
      });
      p.append($('<div />').attr('id', 'imdbscoutthirdbar_' + name).append(title));
    }
  });

  // reference
  if ($('.titlereference-header').length) {
    $('.titlereference-header').append(p);
    if (GM_config.get('dark_reference_view')) {
      const hr = $('<hr>').css({'margin': '0px'});
      $('#imdbscoutthirdbar_header').after(hr);
    }
  // redesign
  } else if ($('.ipc-page-section').length) {
    $('.ipc-page-section:eq(0)').parent().before(p);
  }
  return $('#imdbscoutthirdbar_header');
}

//==============================================================================
//    Icons/sites sorting
//==============================================================================

// Count selected sites for the sorting launcher (showSitezFirstBar).
function iconSorterCount(is_tv, is_movie) {
  let sitestosort = public_sites.concat(private_sites, chinese_sites, french_sites, german_sites, usenet_sites);
  if (!is_tv && !is_movie || getPageSetting('ignore_type')) {
    showSitezFirstBar = sitestosort.reduce(function (n, site) {
      return n + (site['show'] == true); }, 0);
  } else if (is_tv && !getPageSetting('ignore_type')) {
    const showtvsitez = public_sites.concat(private_sites, chinese_sites, french_sites, german_sites, usenet_sites).reduce(function (n, site) {
      return n + (site['TV'] == true && site['show'] == true); }, 0);
    const showbothsitez = public_sites.concat(private_sites, chinese_sites, french_sites, german_sites, usenet_sites).reduce(function (n, site) {
      return n + (site['both'] == true && site['show'] == true); }, 0);
    showSitezFirstBar = showtvsitez + showbothsitez;
  } else if (is_movie && !getPageSetting('ignore_type')) {
    const showallsitez = sitestosort.reduce(function (n, site) {
      return n + (site['show'] == true); }, 0);
    const showtvsitez = public_sites.concat(private_sites, chinese_sites, french_sites, german_sites, usenet_sites).reduce(function (n, site) {
      return n + (site['TV'] == true && site['show'] == true); }, 0);
    showSitezFirstBar = showallsitez - showtvsitez;
  }
}

// Sorting launcher.
function iconSorterLauncher(site) {
  showSitezFirstBar = showSitezFirstBar - 1;

  if (GM_config.get("sortReqOnNewLine") && showSitezFirstBar == 0) {
    sortReqOnNewLineTemp = true;
  }
  //console.log('Sites left: ' + showSitezFirstBar + ", Added: " + site['name']);
  if (showSitezFirstBar < 4) {
    iconSorterFound();
    iconSorterMissing();
    //console.log('SORTING!');
  }
  if (showSitezFirstBar == 0) {
    iconToButtonHack();
  }
}

// Sorting of the found sites.
function iconSorterFound() {
  const imdbscout_found = document.querySelector("#imdbscout_found");

  const sorta = (list) => { // sort alphabetically
    return list.sort((a, b) => {
      if (GM_config.get("use_mod_icons_movie")) {
        if (a.firstChild.getAttribute("alt").toLowerCase() < b.firstChild.getAttribute("alt").toLowerCase()) {
          return -1;
        } else if (a.firstChild.getAttribute("alt").toLowerCase() > b.firstChild.getAttribute("alt").toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a.textContent.toLowerCase() < b.textContent.toLowerCase()) {
          return -1;
        } else if (a.textContent.toLowerCase() > b.textContent.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  };

  let highlighted = [], requests = [], others = [];

  let children = imdbscout_found.children;
  if (!GM_config.get('one_line')) {
    let [removed, ...children2] = children;
    children = children2;
  }
  for (const child of children) {
    if (GM_config.get("use_mod_icons_movie")) {
      if (child.firstChild.getAttribute("alt").includes("-Req")) {
        requests.push(child);
      } else {
        child.children[0].style.border.includes("solid rgb(0, 220, 0)") ? highlighted.push(child) : others.push(child);
      }
    } else {
      if (child.textContent.includes("-Req")) {
        requests.push(child);
      } else {
        child.querySelector("b") ? highlighted.push(child) : others.push(child);
      }
    }
  }

  let sorted;
  if (GM_config.get("highlight_sites_movie").includes(",")) {
    const highlighted_sites = GM_config.get("highlight_sites_movie").split(",");
    let hl_temp = [];
    for (const hl of highlighted_sites) {
      for (const hl_node of highlighted) {
        if (hl === (!GM_config.get("use_mod_icons_movie") ? hl_node.textContent : hl_node.children[0].getAttribute("alt"))) {
          hl_temp.push(hl_node);
        }
      }
    }
    sorted = [...hl_temp, ...sorta(others)];
  } else {
    sorted = [...sorta(highlighted), ...sorta(others)];
  }

  for (const node of sorted) {
    node.remove();
    imdbscout_found.insertAdjacentHTML("beforeend", node.outerHTML + " ");
  }

  sortReqOnNewLineTemp && requests.length > 0 ? imdbscout_found.insertAdjacentHTML("beforeend", "</br>") : false;
  for (const node of requests) {
    node.remove();
    imdbscout_found.insertAdjacentHTML("beforeend", node.outerHTML + " ");
  }
  sortReqOnNewLineTemp && requests.length > 0 ? imdbscout_found.insertAdjacentHTML("beforeend", "</br>") : false;
}

// Sorting of the missing sites.
function iconSorterMissing() {
  if (GM_config.get("hide_missing_movie") || !GM_config.get("call_http_mod_movie")) {
  return;
  }
  const imdbscout_missing = document.querySelector("#imdbscout_missing");

  const sorta = (list) => {
    return list.sort((a, b) => { // sort alphabetically
      if (GM_config.get("use_mod_icons_movie")) {
        if (a.firstChild.getAttribute("alt").toLowerCase() < b.firstChild.getAttribute("alt").toLowerCase()) {
          return -1;
        } else if (a.firstChild.getAttribute("alt").toLowerCase() > b.firstChild.getAttribute("alt").toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a.textContent.toLowerCase() < b.textContent.toLowerCase()) {
          return -1;
        } else if (a.textContent.toLowerCase() > b.textContent.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  };

  let all = [];

  let children = imdbscout_missing.children;
  if (!GM_config.get('one_line')) {
    let [removed, ...children2] = children;
    children = children2;
  }
  for (const child of children) {
    all.push(child);
  }

  let sorted = [...sorta(all)];

  for (const node of sorted) {
    node.remove();
    imdbscout_missing.insertAdjacentHTML("beforeend", node.outerHTML + " ");
  }
}

//==============================================================================
//    Special button: _Check URLs (for Dev tests)
//==============================================================================

function start_CheckURLs() {
  const working_icon = 'data:image/gif;base64,R0lGODlhQABAAJEAAP/+/d1ZN/K+seaHbiH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkNDOTg1OTM3NkI3MTFFRThGQzhEQzQyRUI3NkUxNDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkNDOTg1OTQ3NkI3MTFFRThGQzhEQzQyRUI3NkUxNDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQ0M5ODU5MTc2QjcxMUVFOEZDOERDNDJFQjc2RTE0NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQ0M5ODU5Mjc2QjcxMUVFOEZDOERDNDJFQjc2RTE0NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTD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';
  const completed_icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkIzNjUxNTk3NkI5MTFFRUI2RDlGQ0M0RkI3REE1MTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkIzNjUxNUE3NkI5MTFFRUI2RDlGQ0M0RkI3REE1MTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQjM2NTE1Nzc2QjkxMUVFQjZEOUZDQzRGQjdEQTUxMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQjM2NTE1ODc2QjkxMUVFQjZEOUZDQzRGQjdEQTUxMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrD88IkAAAAMUExURf3//SX/GKr/qWD/WriTcn8AAAGpSURBVHjaxFdRssQgCNPk/nd+065uFUPBduatf9vVEBAClhIvAOXVYq2V3AABK8efta0kBg6DFTOBDpE9PiHUYaXcNcawATDt5Rl+2G95ALXCGEQAyIfgIQDeuhBS4FsKXy/ApwAHwpltfHj+qCs3oqnzd2m52jpSkYwutQvGvHEoXuCewkcwjCEkvKP/H5vlA1fyGynQ8Y7GG29f0d+xBoSaKORnKlAGTAfPeN3joHGQMZS5Ol1kw7DG4GVP/2aFmfNmeBeMth9LmSMW3cZUVH6XWaEMoPUAolIwYC+lNEGwpbYqtMkHT8raJiixuwEoPwDAWwDT7bNB9DTnQu7XCBFlkbdYryGZSD5AMpWFLBoKIwd6BKQqruVcZTkP2rnSwrcz0BcUV5LoVHlxZFmL+lykLL6oKrnmXKSBrKvJqMXv6Cytr+CmtzGeRWD73tm0cN/Vr0w3x3WlObPE0nT1ZLE1V9AdbRhPae6gxu5xjODNd+k56R+mVfycAt9GgVEu7QBQuIWdZ8squonHo44Xk+ZnF7C2po3Hq0lbcOsJ7r8pdkAym/4EGADKzQr2ysqbOQAAAABJRU5ErkJggg==';
  let button = $('a[href="https://dummycheckurls.info"]');
      button.addClass('_Check URLs (for Dev tests)');
      button.removeAttr("href");
      button.removeAttr("target");
  button.prop("href", "javascript: void(0)");
  button.click(function() {
    button.find('img').prop("src", working_icon);
    activate_CheckURLs(button, completed_icon);
    button.off("click");
    button.removeAttr("href");
  });
}

async function activate_CheckURLs(button, completed_icon) {
  const all = public_sites.concat(private_sites, chinese_sites, french_sites, german_sites, usenet_sites, subs_sites, pre_databases, other_sites, streaming_sites, icon_sites_main);
  const log_array = await GM.getValue("Log_CheckURLs", "[]");
  old_bad_hosts = JSON.parse(log_array);

  // Extract the base URLs from 'searchUrl':
  let all_hosts = [];
  for (let index = 0; index < all.length; index++) {
      const a = all[index].searchUrl
      const b = new URL(a)
      const c = b.protocol +"//"+ b.hostname
      all_hosts.push(c)
  }
  // Deduplicate array:
  let deduped_hosts = all_hosts.filter((value, index) => all_hosts.indexOf(value) ==index);
  console.log("IMDb Scout Mod (CheckURLs): Unique hosts: " + deduped_hosts.length);
      // Exclude/ignore some hosts:
      deduped_hosts = deduped_hosts.filter(function (e) {return e !== 'http://localhost';});
      deduped_hosts = deduped_hosts.filter(function (e) {return e !== 'https://dognzb.cr';});
      deduped_hosts = deduped_hosts.filter(function (e) {return e !== 'https://hd-only.org';});
      deduped_hosts = deduped_hosts.filter(function (e) {return e !== 'http://voidtools.replacement';});
      deduped_hosts = deduped_hosts.filter(function (e) {return e !== 'https://teracod.net';});
      deduped_hosts = deduped_hosts.filter(function (e) {return e !== 'http://zmk.pw';});

  const interval = 100;
  const timeout = 45000;
  hosts_to_Process = deduped_hosts.length;
  console.log("IMDb Scout Mod (CheckURLs): Hosts to process: " + hosts_to_Process);
  const days_now = Math.round(new Date().getTime() / 1000 / 60 / 60 / 24);

  deduped_hosts.forEach(function (i, index) {
    setTimeout(function () {
      GM.xmlHttpRequest({
        method: "GET",
        timeout: timeout,
        url: i,
        onload: function(response) {
          const s = response.status;
          countdown_CheckURLs(button, completed_icon);
          if (s != 200 && s != 403 && s != 302) {  // 403 - cloudflare challenge, 302 - www.bit-hdtv.com
            console.log("IMDb Scout Mod (CheckURLs): HTTP Status " + s +" - "+ i);
            log_CheckURLs(i, days_now)
          } else {
            // delete_log_CheckURLs(i); // no need to delete anything from "old_bad_hosts" as we just count error_days from it
          }
        },
        onerror: function() {
          countdown_CheckURLs(button, completed_icon);
          console.log("IMDb Scout Mod (CheckURLs): Request Error - " + i);
          log_CheckURLs(i, days_now)
        },
        onabort: function() {
          countdown_CheckURLs(button, completed_icon);
          console.log("IMDb Scout Mod (CheckURLs): Request Aborted - " + i);
        },
        ontimeout: function() {
          countdown_CheckURLs(button, completed_icon);
          console.log("IMDb Scout Mod (CheckURLs): Request Timeout - " + i);
          log_CheckURLs(i, days_now)
        }
      });
    }, index * interval);
  });
}

// function delete_log_CheckURLs(host) {
//   for (var key in old_bad_hosts) {
//     if (old_bad_hosts[key]["host"] == host) {
//       old_bad_hosts.splice(key, 1);
//     }
//   }
// }

function log_CheckURLs(host, days_now) {
  let error_days = 0
  for (var key in old_bad_hosts) {
    if (old_bad_hosts[key]["host"] == host) {
      error_days = days_now - old_bad_hosts[key]["date"] + old_bad_hosts[key]["error_days"];
    }
  }

  const x = { 'host':       host,
              'error_days': error_days,
              'date':       days_now};
  new_bad_hosts.push(x)
}

async function countdown_CheckURLs(button, completed_icon) {
  hosts_to_Process = hosts_to_Process - 1;
  // console.log("!!!: " + hosts_to_Process);
  if (hosts_to_Process == 0) {
    await sleep(1000);
    console.log("IMDb Scout Mod (CheckURLs): All hosts processed! Array with log is below:" );
    button.find('img').prop("src", completed_icon);
    GM.setValue("Log_CheckURLs", JSON.stringify(new_bad_hosts));
    console.log(new_bad_hosts);
  }
}

//==============================================================================
//    Special button: Copy info to BBCode
//==============================================================================

function start_copyInfoToBBcode(imdbid, movie_title_orig) {
  const standby_icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAACpjQD94zkmAAAAAXRSTlMAQObYZgAAALBJREFUKM910rENwyAUBNCPKFKyQdiErEVhKYzGKIzgkgLl4v/x2Y7k0PCQ7nQNcp53n7fHZ+IBFEMAqiECzfASvxqSuFlbxA1i9vMFjahEQZ+Yc9lWikJX6kQNTWFzhiS+b+BcjkPnDFkcDhSialjRiJXoe4YQGUQinjNMRPQTlvkFW3/rt1iIxPCLiJXAPhEIT8gBtm6xXJEUaX/onAxFLOK6AYAhbFgVHvwEG+Q4X86vk0jZCGx+AAAAAElFTkSuQmCC';
  let button = $('a[href="https://dummycopy.info"]');
      button.addClass('CopyInfotoBBcode');
      button.removeAttr("href");
      button.removeAttr("target");
  button.prop("href", "javascript: void(0)");
  button.click(function() {
    button.find('img').prop("src", standby_icon);
    copyInfoToBBcode(imdbid, movie_title_orig);
  });
}

async function copyInfoToBBcode(imdbid, movie_title_orig) {
  const error_icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAACgAAB8H+SvAAAAAXRSTlMAQObYZgAAALBJREFUKM910rENwyAUBNCPKFKyQdiErEVhKYzGKIzgkgLl4v/x2Y7k0PCQ7nQNcp53n7fHZ+IBFEMAqiECzfASvxqSuFlbxA1i9vMFjahEQZ+Yc9lWikJX6kQNTWFzhiS+b+BcjkPnDFkcDhSialjRiJXoe4YQGUQinjNMRPQTlvkFW3/rt1iIxPCLiJXAPhEIT8gBtm6xXJEUaX/onAxFLOK6AYAhbFgVHvwEG+Q4X86vk0jZCGx+AAAAAElFTkSuQmCC';
  const ready_icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAAAAZACk9hdsAAAAAXRSTlMAQObYZgAAALBJREFUKM910rENwyAUBNCPKFKyQdiErEVhKYzGKIzgkgLl4v/x2Y7k0PCQ7nQNcp53n7fHZ+IBFEMAqiECzfASvxqSuFlbxA1i9vMFjahEQZ+Yc9lWikJX6kQNTWFzhiS+b+BcjkPnDFkcDhSialjRiJXoe4YQGUQinjNMRPQTlvkFW3/rt1iIxPCLiJXAPhEIT8gBtm6xXJEUaX/onAxFLOK6AYAhbFgVHvwEG+Q4X86vk0jZCGx+AAAAAElFTkSuQmCC';
  const success_icon1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAAAAZACk9hdsAAAAAXRSTlMAQObYZgAAAKZJREFUKM990cENwyAMBVBHHHpkg7JJslYPkcpojMIIHH1A/FKTTxVViSXgHWwh68uv3jpehzbwAKLBA8kQgGzYgELomAYq0f6QiURE6IBDG/BANAQgDSSfDZu4YljFqWGXpRLN8JIFE5FIRCYKoXKGSCVW4nlGgN6CzZfj99jYPBEm+IUnHCFEr2/zBfYJW/C4dguxn2r5RlnUAMDgcSTtwPA6ZNYH82fX5apYo9sAAAAASUVORK5CYII=';
  const success_icon2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAAAAZACk9hdsAAAAAXRSTlMAQObYZgAAAJxJREFUKM+V0rENxCAMBVCiFFcyApuEtVJECqMxCiNQUiD+WfZ97qJTirjxK/6XG7vvnM32imF4AUnhgawIQFFEt1bF5harHW7phPX3HxQiEwnNYOd2vZIUAchEUUSgEk1xAl0QumAQmEhE/oRRiEo0ZiY6MSY0fIO/8MM6cRAbEYmQCXSDJ1bCETKPEAX9giBoF3hBta/gEwjcnDdEcwZMhnHuiwAAAABJRU5ErkJggg==';
  let key;
  if (GM_config.get("ratings_cfg_omdb_apikey") == '') {
    const keys = ['8c967f70', 'dd37e5a4', '3fdb9c5a', 'b81150c9', '2981ebb6', 'f17eacb0'];
    key = keys[Math.floor(Math.random() * keys.length)];
  } else {
    key = GM_config.get("ratings_cfg_omdb_apikey");
  }
  // Preparing button
  let button = $('.CopyInfotoBBcode');
      button.off("click");

  // Pause and let RT ratings to finish and get OMDb response from storage
  if (GM_config.get("ratings_cfg_rotten")) {
    await sleep(1000);
  }
  const omdbLast = await GM.getValue("OMDb_last","{}");
  let x;
  if (omdbLast.match(imdbid)) {
    x = JSON.parse(omdbLast);
    console.log("IMDb Scout Mod (Copy Info to BBCode): Parsing info from storage.");
  } else {
    x = await getInfoFromOMDb(key, imdbid, error_icon, button);
  }

  const y = JSON.stringify(x);
  if (y != undefined) {
    button.find('img').prop("src", ready_icon);
  } else {
    button.find('img').prop("src", error_icon);
    GM.notification("Error: 'undefined'!", "IMDb Scout Mod (Copy Info to BBCode)");
    return;
  }
  // Collecting info
  let collect = document.createElement("textarea");
      collect.innerHTML+="[center][size=6]" +x.Title+ "[/size][/center]\n";
      if (x.Poster != "N/A") {
        const xPoster = x.Poster.replace('300.jpg', '600.jpg');
        collect.innerHTML+="[center][img]" +xPoster+ "[/img][/center]\n";
      }
      collect.innerHTML+="\n";
      if (x.Title != movie_title_orig) {
        collect.innerHTML+="[b]Original Title:[/b] " +movie_title_orig+ "\n";
      }
      collect.innerHTML+="[b]Year:[/b] " +x.Year+ "\n";
      if (x.Runtime != "N/A") {
        collect.innerHTML+="[b]Runtime:[/b] " +x.Runtime+ "\n";
      } else if (onReferencePage) {
          if ($('.ipl-inline-list__item:eq(0)').text().trim().match('min')) {
            collect.innerHTML+="[b]Runtime:[/b] " +$('.ipl-inline-list__item:eq(0)').text().trim()+ "\n";
          } else if ($('.ipl-inline-list__item:eq(1)').text().trim().match('min')) {
            collect.innerHTML+="[b]Runtime:[/b] " +$('.ipl-inline-list__item:eq(1)').text().trim()+ "\n";
          } else {
            collect.innerHTML+="[b]Runtime:[/b] N/A\n";
          }
      } else {
          if ($('.ipc-inline-list__item:eq(0)').text().trim().match('min')) {
            collect.innerHTML+="[b]Runtime:[/b] " +$('.ipc-inline-list__item:eq(0)').text().trim()+ "\n";
          } else if ($('.ipc-inline-list__item:eq(1)').text().trim().match('min')) {
            collect.innerHTML+="[b]Runtime:[/b] " +$('.ipc-inline-list__item:eq(1)').text().trim()+ "\n";
          } else if ($('.ipc-inline-list__item:eq(2)').text().trim().match('min')) {
            collect.innerHTML+="[b]Runtime:[/b] " +$('.ipc-inline-list__item:eq(2)').text().trim()+ "\n";
          } else {
            collect.innerHTML+="[b]Runtime:[/b] N/A\n";
          }
      }
      collect.innerHTML+="[b]Genre:[/b] " +x.Genre+ "\n";
      const xLanguage = x.Language.split(',')[0];
      collect.innerHTML+="[b]Language:[/b] " +xLanguage+ "\n";
      const xCountry = x.Country.split(',')[0];
      collect.innerHTML+="[b]Country:[/b] " +xCountry+ "\n";
      if (x.Awards != "N/A") {
        collect.innerHTML+="[b]Awards:[/b] " +x.Awards+ " ([url=https://www.imdb.com/title/" +x.imdbID+ "/awards]link[/url])\n";
      }
      collect.innerHTML+="[b]IMDb link:[/b] https://www.imdb.com/title/" +x.imdbID+ "\n";
      if (x.imdbRating != "N/A") {
        collect.innerHTML+="[b]IMDb Rating:[/b] " +x.imdbRating+ " from " +x.imdbVotes+ " users\n";
      } else if (onReferencePage) {
          const imdbRating = $('.ipl-rating-star__rating:eq(0)').text().trim().replace(',','.') *1;
          const imdbVotes = $('.ipl-rating-star__total-votes:eq(0)').text().trim().replace('(','').replace(')','');
          if ($.isNumeric(imdbRating)) {
            collect.innerHTML+="[b]IMDb Rating:[/b] " +imdbRating+ " from " +imdbVotes+ " users\n";
          } else {
            collect.innerHTML+="[b]IMDb Rating:[/b] N/A\n";
          }
      } else {
          const imdbRating = $('[class^=AggregateRatingButton__RatingScore]:eq(0)').text().trim().replace(',','.') *1;
          const imdbVotes = $('[class^=AggregateRatingButton__TotalRatingAmount]:eq(0)').text().trim();
          if ($.isNumeric(imdbRating)) {
            collect.innerHTML+="[b]IMDb Rating:[/b] " +imdbRating+ " from " +imdbVotes+ " users\n";
          } else {
            collect.innerHTML+="[b]IMDb Rating:[/b] N/A\n";
          }
      }
      collect.innerHTML+="\n";
      collect.innerHTML+="[b]Plot:[/b] " +x.Plot+ "\n";
      collect.innerHTML+="\n";
      collect.innerHTML+="[b]Directed by:[/b] " +x.Director+ "\n";
      collect.innerHTML+="[b]Screenplay by:[/b] " +x.Writer+ "\n";
      collect.innerHTML+="[b]Starring:[/b] " +x.Actors+ "\n";

  // Finishing button
  button.prop("href", "javascript: void(0)");
  button.click(function() {
    copyInfoToClipboard(collect);
    if($('.CopyInfotoBBcode').length) {
      button.find('img').prop("src", success_icon2);
      button.removeClass('CopyInfotoBBcode').addClass('CopyInfotoBBcode2');
    } else {
      button.find('img').prop("src", success_icon1);
      button.removeClass('CopyInfotoBBcode2').addClass('CopyInfotoBBcode');
    }
  });
}

function copyInfoToClipboard(collect) {
  document.body.insertBefore(collect,document.body.firstChild);
  collect.focus();
  collect.select();
  const x = document.execCommand('copy');
  document.body.removeChild(collect);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getInfoFromOMDb(key, imdbid, error_icon, button) {
  return new Promise(resolve => {
    const url = "http://www.omdbapi.com/?i=tt" +imdbid+ "&apikey=" +key+ "&plot=full";
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 10000,
      url:    url,
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
      onload: function(response) {
        if (String(response.responseText).match("limit reached!")) {
          GM.notification("Limit reached! \nSet OMDb API key in settings (at Ratings). \nGet it at www.omdbapi.com .", "IMDb Scout Mod (Copy Info to BBCode)");
          $('.CopyInfotoBBcode').find('img').prop("src", error_icon);
          button.off("click");
          return;
        }
        let responseJSON;
        if (response.status == 200) {
          responseJSON = JSON.parse(response.responseText);
          if (responseJSON['Response'] == "False") {
            GM.notification("Response: 'False'! \nNo data!?", "IMDb Scout Mod (Copy Info to BBCode)");
            $('.CopyInfotoBBcode').find('img').prop("src", error_icon);
            button.off("click");
            return;
          }
          GM.setValue("OMDb_last", JSON.stringify(responseJSON));
          const returnInfo = responseJSON;
          resolve(returnInfo);
        } else {
          GM.notification("Request not successful! \nStatus code:" +response.status+ ".", "IMDb Scout Mod (Copy Info to BBCode)");
          console.log("IMDb Scout Mod (Copy Info to BBCode): Headers:\n" + response.responseHeaders + "\n ");
          console.log("IMDb Scout Mod (Copy Info to BBCode): Response:\n" + JSON.stringify(responseJSON) + "\n ");
          $('.CopyInfotoBBcode').find('img').prop("src", error_icon);
          button.off("click");
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (Copy Info to BBCode)");
        console.log("IMDb Scout Mod (Copy Info to BBCode): Request Error.");
        $('.CopyInfotoBBcode').find('img').prop("src", error_icon);
        button.off("click");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (Copy Info to BBCode): Request is aborted.");
        $('.CopyInfotoBBcode').find('img').prop("src", error_icon);
        button.off("click");
      },
      ontimeout: function() {
        console.log("IMDb Scout Mod (Copy Info to BBCode): Request timed out.");
        $('.CopyInfotoBBcode').find('img').prop("src", error_icon);
        button.off("click");
      }
    });
  });
}

//==============================================================================
//    Special button: Jellyfin
//==============================================================================

async function start_jellyfin(movie_id, movie_title, movie_title_orig) {
  const found_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAMAAACce/Y8AAAAVFBMVEUAAABRtbRUtqxiuoZJxyVGw0FJyhhOrLVKzQ5IxDRcvHNWt6ZWv2dLzgJbuJheuY5KwE1Ov1ZSv15gu3tYt6BlwYpMzjJbv6xev6BMzENQ0wJjxHzriFNUAAAAAXRSTlMAQObYZgAAAz5JREFUaN7t2dtyokAUheGOHARFQUAh+v7vOX1k0expILC5SFX+mmu/Wt1MmRDx12/tpBIHdj6fv06nrgNyhCCJ0xXGUcIVBrPwJbNE2/UC8W1wgiJgsAoqJ7T3vj9IAHHvy4MFWclqSAGEEkDwCx5Rsh8TRjiiZBXoCNmzPIKAoA3ei3ACiCh6NhwCeWAxIoKxWwDR9T1GqBrmEV2r6qUAouES7AihaksIUfNpWI9JmEZEc7l8CkZCuLTgiEvBKKBhhCYKXgGGEXiIk8oJMCBsNs4eIaaVTQOi2HlOEAhhhLqu9wsgEARZwnxMMCzxeCQbDCrQdhAQlggrKCJhHQFDCZqoQLA8TWgQJJHw3jWIAgT3CBhK0ETCLMCwgvyXs9x1FEX/IxQAYtMICNRIpGDK8/0jItOEUBMqEBtHQKBGgmAsEkHBfZn6hLsKEHtHNA0IzMjViHXGjIDva98wI0BsHRENxEXlERDWGGuOCQSMHMTWB1ZtgFCQGU54xdtHlB5RPMgMW8w0QhKeIQEnxPGWERAiJ9S1b0AAMS9Qwgog6hDxSjeNcI2FyQysSOeFlTehBUrEujSdJdYfEzEUYY29N4EfCXziJYWlGSsfWBDfYhwhNoyYCklSiVEOgLE0ApERRqAEhJRphCQmBohsdgQlQiMCM9Ig4QvICfQmzAq0QJxXEhCkQQgtaCKbe0lKCQgriBQEEUAISgQETaAxkQVGgPCNT9OAsA/sICAlBAmMuHZXsvGi+tSyokIAFgj6ulpsD4KMEEbYSUCgxNfBBEbwEJktQLTHEU5or/c9BIRbdvOEIwgZHaGJdi+RhQm86WUSfGLyunr/Xd8ogRG2bQBGmCCAuA9F0c8+fpmg79x1S6/9YhMRAgQRtGGrVIlXPATDE95jgowg36Y1JfI8nxJZiKBC4Mc/fLoJK3yBENeO/n3FJwah0r/AhwQcEwhnzI3AhgobTESYEmIIggwCvq8xInBMoXNC8zfhj8hXj7AC7qP3BJknzI1IPQIASX5+T0bgmGRmAx1BhDcAopT3/hk8JtesgAHBni4Q47vO5/9LvMnnzzqFCueEDSYAGRI/ThsPXfLteg0ZQ3/0X7+jf5hLej58/U8WAAAAAElFTkSuQmCC";
  const error_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAMAAACce/Y8AAAAVFBMVEUAAADHe1HJcVXdHLPPVYXhDr7LY3bTRJLGgk/WOZzkBMjMXn7RTYvGi0zZKqjdAMvKZ1nKYGzKX13Gh07KX2bRZnrmMLHQdVvhQKPXUZDSaGHWYoVyeKB5AAAAAXRSTlMAQObYZgAAA2ZJREFUaN7t2dFyqjAYBGAVBJFKpUdq1fd/z5O4wqauoZCEi85058y55JvNT9vfuPrLb83aZrVgDofDekmEwuZMI7mwuwubpQwD7FDCGtf0gCvQSC0YYvcQjpvj9bqIwBLH4/F6Siz8eyphckpqQGAJK3wkJQ4DAeAufNBIIlhACBoJBEtYBIOg0CUyjMBjsiHRdkkHsdMSbVsUqQQekzvskxG6Il4AwV9OZ2uwRJGCcCdxRo+PoYRNEoElVjYbEBDqWxEncBIQEKdEXde3PEUJCjRaECZ5nMCfOgg0cE5WyPMUbxMFGhTy2GOC0Qs0+mOKMA4PQvcaGHWNEubfJdAQQYi+xNvbJW4SIDQQHkQZIoCgoBlKmJRl8CQovDTyCAIdJhFvIMqks6bhCGVACRU0wzHZzO6wPIFJUBgzykeSvk3MQFRV2SSZNf/KkSgfRNWkmHXbqlFBsEQTX6LlRuAQFYnoEq0lxDDPhkBjYokRoa6fCCvAmC0oAQEEjUGQGl7CI/R7jRokZpS4I98ES0B4NihMMsZmzaVDapCIKcHNKc+fDEdosvASXP/wV0JqkAgvUQxEbYhvhnk8BENkQSV4TFwJvhtNn4zE2AvLEjJrCn5iO+ljnQpSQgwSYSVOLIFJeIjMEtu5k9BjAlGKAYE1RgUl+DZx6xACgtRQYvyYKJRfKzefQgSWyL1LR5aBGDF4D3EXGCnhIyhs40pQqJ4NEnsPgRJK+EpU1Uti6yO0BIlBsIgrkKAhhN7+KQFBS5RCQLDEfuwKUwj9uYYgBAQh9ApT1zOZNQhdY11ir4QVdkpgGDc5JmQlxNZPuNc1uhvb3OzTLyVDQIg9CSnBq46gsAQMISDEEBSUYIn0hJaIJ/aPPBHr5QkKxxiCwvv+/dWXRBaIIyjYuIRzD7sYYcKvJlIII8Q9ocA4QQEJAyjQ4LTdW337/5xr5C1DQQiW4F2yyU9XixlCYSYBAxk+vzOZEykhhHw1ISvBRY3GhAQEL6Hfr3j3Gj4eAgkKSmzWWqLw7DU+wU8g0gGELJhSYopAQkvwY52P8M2aBCMl9JiCSxA5G0NLzBD0hZUY4DptEs1ICQKvY0pcTwEl9NffWLqua4vOBMJ0gsJqSjqbHLlcxgXzcGY1O2iBGl/IZ5+sz/3Rf/kd+Q/Hk31KvuHwvAAAAABJRU5ErkJggg==";
  let button = $('a[href="https://jellyfin.org"]');
      button.addClass('JellyfinServerIndicator');
      button.prop("rel", "noreferrer");
      button.removeAttr("href");

  const jelly_url = GM_config.get("jellyfin_server_url").replace(/\/$/, "");
  const jelly_user = GM_config.get("jellyfin_username");
  const jelly_pass = GM_config.get("jellyfin_password");
  const debug = GM_config.get("jellyfin_debug");

  let titles =[];
      titles.push(movie_title);
  if (movie_title != movie_title_orig) {
    titles.push(movie_title_orig);
  }

  let user_id = await GM.getValue("Jellyfin_UserId", "none");
  let access_token = await GM.getValue("Jellyfin_AccessToken", "none");
  let last_validcreds = await GM.getValue("Jellyfin_LastValidCreds", "none");

  if (user_id == "none" || last_validcreds != jelly_user+jelly_pass) {
    const got_token = await getAuthFromJellyfin(jelly_url, jelly_user, jelly_pass, debug);
    if (got_token) {
      user_id = await GM.getValue("Jellyfin_UserId", "none");
      access_token = await GM.getValue("Jellyfin_AccessToken", "none");
    } else {
      user_id = "none";
    }
  }
  let search_found = false;
  let found_title = "";
  let server_id = "none";
  let item_id = "none";
  if (user_id != "none") {
    for (var i = 0; i < titles.length; i++) {
      const x = await searchJellyfin(jelly_url, titles[i], movie_id, user_id, access_token, debug);
      if (x === true) {
        search_found = x;
        found_title = titles[i];
        server_id = await GM.getValue("Jellyfin_ServerId", "none");
        item_id = await GM.getValue("Jellyfin_ItemId", "none");
        break;
      } else if (x === "stop"){
        search_found = x;
        break;
      }
    }
  }
  const link_notfound = jelly_url+ "/web/index.html#!/home.html";
  if (search_found === true) {
    const link_found = jelly_url+ "/web/index.html#!/details?id=" +item_id+ "&serverId=" +server_id;
    button.prop("href", link_found);
    $('.JellyfinServerIndicator').find('img').prop("src", found_icon);
  } else if (user_id == "none" || search_found === "stop") {
    button.prop("href", link_notfound);
    $('.JellyfinServerIndicator').find('img').prop("src", error_icon);
  } else {
    button.prop("href", link_notfound);
  }
}

function getAuthFromJellyfin(jelly_url, jelly_user, jelly_pass, debug) {
  return new Promise(resolve => {
    const url = jelly_url+ "/Users/authenticatebyname";
    const post_data = '{"Username":"' +jelly_user+ '","Pw":"' +jelly_pass+ '"}';
    GM.xmlHttpRequest({
      method: "POST",
      timeout: 5000,
      url:    url,
      headers: {
        "Accept": "application/json",
        "x-emby-authorization": 'MediaBrowser Client="Jellyfin Web", Device="IMDb Scout Mod", DeviceId="666", Version="10.7.6"',
        "content-Type": "application/json",
      },
      data: post_data,
      onload: function(response) {
        const resultStr = String(response.responseText);
        if (debug) {
          console.log("Jellyfin Debug_01 URL: " +url);
          console.log("Jellyfin Debug_01 Response: " +resultStr);
          console.log("Jellyfin Debug_01 Status: " +response.status);
        }
        if (response.status == 200) {
          const responseJSON = JSON.parse(response.responseText);
          const user_id = responseJSON.User.Id;
          const access_token = responseJSON.AccessToken;
          GM.setValue("Jellyfin_UserId", user_id);
          GM.setValue("Jellyfin_AccessToken", access_token);
          GM.setValue("Jellyfin_LastValidCreds", jelly_user+jelly_pass);
          resolve(true);
        } else if (response.status == 401) {
          GM.notification("Invalid username or password.", "IMDb Scout Mod (Jellyfin)");
          console.log("IMDb Scout Mod (Jellyfin): Invalid username or password.");
          GM.setValue("Jellyfin_UserId", "none");
          GM.setValue("Jellyfin_AccessToken", "none");
          resolve(false);
        } else {
          GM.notification("HTTP status is not 200.", "IMDb Scout Mod (Jellyfin)");
          console.log("IMDb Scout Mod (Jellyfin): HTTP status is not 200!");
          resolve(false);
        }
      },
      onerror: function() {
        GM.notification("Request Error! \nCheck if Jellyfin Server is running, \nand if Jellyfin Server URL is correct.", "IMDb Scout Mod (Jellyfin)");
        console.log("IMDb Scout Mod (Jellyfin): Request Error.");
        resolve(false);
      },
      onabort: function() {
        console.log("IMDb Scout Mod (Jellyfin): Request is aborted.");
        resolve(false);
      },
      ontimeout: function() {
        GM.notification("Request timed out!", "IMDb Scout Mod (Jellyfin)");
        console.log("IMDb Scout Mod (Jellyfin): Request timed out.");
        resolve(false);
      }
    });
  });
}

function searchJellyfin(jelly_url, title, movie_id, user_id, access_token, debug) {
  return new Promise(resolve => {
    const titleUri = title.replace(/&/g,'%26').replace(/#/g,'%23');
    const url = jelly_url+ "/Users/" +user_id+ "/Items?searchTerm=" +titleUri+ "&IncludeItemTypes=Series,Movie,Episode&Limit=24&Fields=OriginalTitle,ProviderIds&Recursive=true";
    const auth = 'MediaBrowser Client="Jellyfin Web", Device="IMDb Scout Mod", DeviceId="666", Version="10.7.6", Token="' +access_token+ '"';
    const imdbid = "tt" +movie_id;
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 5000,
      url: url,
      headers: {
        "Accept": "application/json",
        "x-emby-authorization": auth,
        "content-Type": "application/json",
      },
      onload: function(response) {
        const resultStr = String(response.responseText);
        if (debug) {
          console.log("Jellyfin Debug_02 URL: " +url);
          console.log("Jellyfin Debug_02 Response: " +resultStr);
          console.log("Jellyfin Debug_02 Status: " +response.status);
        }
        if (response.status == 200) {
          if (resultStr.match(imdbid)) {
            const responseJSON = JSON.parse(response.responseText);
            const obj_array = responseJSON.Items;
            let found_obj = $.grep(obj_array, function(i) {
              return i.ProviderIds.Imdb === imdbid;
            });
            const x = found_obj[0].ServerId;
            const y = found_obj[0].Id;
            GM.setValue("Jellyfin_ServerId", x);
            GM.setValue("Jellyfin_ItemId", y);
            if (debug) {
              console.log("Jellyfin Debug_02 ServerId: " +x);
              console.log("Jellyfin Debug_02 ItemId: " +y);
            }
            resolve(true);
          } else {
            resolve(false);
          }
        } else if (response.status == 401) {
          GM.notification("Invalid username or password, \nor access token expired, \ntry to refresh the page first.", "IMDb Scout Mod (Jellyfin)");
          console.log("IMDb Scout Mod (Jellyfin): Invalid username or password, or access token expired, try to refresh the page first.");
          GM.setValue("Jellyfin_UserId", "none");
          GM.setValue("Jellyfin_AccessToken", "none");
          resolve("stop");
        } else {
          GM.notification("HTTP status is not 200.", "IMDb Scout Mod (Jellyfin)");
          console.log("IMDb Scout Mod (Jellyfin): HTTP status is not 200!");
          resolve("stop");
        }
      },
      onerror: function() {
        GM.notification("Request Error! \nCheck if Jellyfin Server is running, \nand if Jellyfin Server URL is correct.", "IMDb Scout Mod (Jellyfin)");
        console.log("IMDb Scout Mod (Jellyfin): Request Error.");
        resolve("stop");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (Jellyfin): Request is aborted.");
        resolve("stop");
      },
      ontimeout: function() {
        GM.notification("Request timed out!", "IMDb Scout Mod (Jellyfin)");
        console.log("IMDb Scout Mod (Jellyfin): Request timed out.");
        resolve("stop");
      }
    });
  });
}

//==============================================================================
//    Special button: Emby
//==============================================================================

async function start_emby(movie_id, movie_title, movie_title_orig) {
  const found_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiAgMAAADWy+6dAAAACVBMVEUAAABStUoAZADvOtGiAAAAAXRSTlMAQObYZgAAAVZJREFUSMel1sFtwzAQRNEQiEpQPy6BATwHpy+WwINUZWDY9M8OveDBe/2gnyURor4+nJqFcs3KpqzsuiRFqgkjXTNGyhglkATkDNDESAmTQBKQM0DOADmTQBKQM0DODKhMzIC2izMD2qszA9LVGWZioJyBykqAdmXQpgwqBsVyM4hf+23voP1ejneQ7uV8A5VH6TO0Pco5Q/uz9AnSsxwOlVHOZtD2KiyCeZSzRUiUHqAiyhmgTRQWPRnK+R9SKI01JZYDZxOFRfXFUDqMFRgrHcaKMZRDg/E1bTDucDX+37oG49cjmHgPumDifbPtRjkEE59PE0x4pofv0DJKM4a9o8iw37oiwx4VTIRugjHI1wAJByiW6pDWUDXInPSdCPRjDNDFGCAoOxq+obQ8GZiZWZ9AA1qedDNUlyfqDC1Obh9jDIJxaPkl4gMzQzAOLb+s5jEmmT+/vrUeJElMGgAAAABJRU5ErkJggg==";
  const error_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiAgMAAADWy+6dAAAACVBMVEUAAABStUrgABUqlEtKAAAAAXRSTlMAQObYZgAAAVZJREFUSMel1sFtwzAQRNEQiEpQPy6BATwHpy+WwINUZWDY9M8OveDBe/2gnyURor4+nJqFcs3KpqzsuiRFqgkjXTNGyhglkATkDNDESAmTQBKQM0DOADmTQBKQM0DODKhMzIC2izMD2qszA9LVGWZioJyBykqAdmXQpgwqBsVyM4hf+23voP1ejneQ7uV8A5VH6TO0Pco5Q/uz9AnSsxwOlVHOZtD2KiyCeZSzRUiUHqAiyhmgTRQWPRnK+R9SKI01JZYDZxOFRfXFUDqMFRgrHcaKMZRDg/E1bTDucDX+37oG49cjmHgPumDifbPtRjkEE59PE0x4pofv0DJKM4a9o8iw37oiwx4VTIRugjHI1wAJByiW6pDWUDXInPSdCPRjDNDFGCAoOxq+obQ8GZiZWZ9AA1qedDNUlyfqDC1Obh9jDIJxaPkl4gMzQzAOLb+s5jEmmT+/vrUeJElMGgAAAABJRU5ErkJggg==";
  let button = $('a[href="https://emby.media"]');
      button.addClass('EmbyServerIndicator');
      button.prop("rel", "noreferrer");
      button.removeAttr("href");

  const emb_url = GM_config.get("emby_server_url").replace(/\/$/, "");
  const emb_user = GM_config.get("emby_username");
  const emb_pass = GM_config.get("emby_password");
  const debug = GM_config.get("emby_debug");

  let user_id = await GM.getValue("Emby_UserId", "none");
  let access_token = await GM.getValue("Emby_AccessToken", "none");
  let last_validcreds = await GM.getValue("Emby_LastValidCreds", "none");

  if (user_id == "none" || last_validcreds != emb_user+emb_pass) {
    const got_token = await getAuthFromEmby(emb_url, emb_user, emb_pass, debug);
    if (got_token) {
      user_id = await GM.getValue("Emby_UserId", "none");
      access_token = await GM.getValue("Emby_AccessToken", "none");
    } else {
      user_id = "none";
    }
  }
  let search_found = false;
  let server_id = "none";
  let item_id = "none";
  if (user_id != "none") {
    const x = await searchEmby(emb_url, movie_id, user_id, access_token, debug);
    if (x === true) {
      search_found = x;
      server_id = await GM.getValue("Emby_ServerId", "none");
      item_id = await GM.getValue("Emby_ItemId", "none");
    } else if (x === "stop"){
      search_found = x;
    }
  }
  const link_notfound = emb_url+ "/web/index.html?#!/home";
  if (search_found === true) {
    const link_found = emb_url+ "/web/index.html?#!/item?id=" +item_id+ "&serverId=" +server_id;
    button.prop("href", link_found);
    $('.EmbyServerIndicator').find('img').prop("src", found_icon);
  } else if (user_id == "none" || search_found === "stop") {
    button.prop("href", link_notfound);
    $('.EmbyServerIndicator').find('img').prop("src", error_icon);
  } else {
    button.prop("href", link_notfound);
  }
}

function getAuthFromEmby(emb_url, emb_user, emb_pass, debug) {
  return new Promise(resolve => {
    const url = emb_url+ "/emby/Users/authenticatebyname?X-Emby-Client=Emby Web&X-Emby-Device-Name=IMDb Scout Mod&X-Emby-Device-Id=666&X-Emby-Client-Version=4.6.4.0";
    const post_data = '{"Username":"' +emb_user+ '","Pw":"' +emb_pass+ '"}';
    GM.xmlHttpRequest({
      method: "POST",
      timeout: 5000,
      url:    url,
      headers: {
        "Accept": "application/json",
        "content-Type": "application/json",
      },
      data: post_data,
      onload: function(response) {
        const resultStr = String(response.responseText);
        if (debug) {
          console.log("Emby Debug_01 URL: " +url);
          console.log("Emby Debug_01 Response: " +resultStr);
          console.log("Emby Debug_01 Status: " +response.status);
        }
        if (response.status == 200) {
          const responseJSON = JSON.parse(response.responseText);
          const user_id = responseJSON.User.Id;
          const access_token = responseJSON.AccessToken;
          GM.setValue("Emby_UserId", user_id);
          GM.setValue("Emby_AccessToken", access_token);
          GM.setValue("Emby_LastValidCreds", emb_user+emb_pass);
          resolve(true);
        } else if (response.status == 401) {
          GM.notification("Invalid username or password.", "IMDb Scout Mod (Emby)");
          console.log("IMDb Scout Mod (Emby): Invalid username or password.");
          GM.setValue("Emby_UserId", "none");
          GM.setValue("Emby_AccessToken", "none");
          resolve(false);
        } else {
          GM.notification("HTTP status is not 200.", "IMDb Scout Mod (Emby)");
          console.log("IMDb Scout Mod (Emby): HTTP status is not 200!");
          resolve(false);
        }
      },
      onerror: function() {
        GM.notification("Request Error! \nCheck if Emby Server is running, \nand if Emby Server URL is correct.", "IMDb Scout Mod (Emby)");
        console.log("IMDb Scout Mod (Emby): Request Error.");
        resolve(false);
      },
      onabort: function() {
        console.log("IMDb Scout Mod (Emby): Request is aborted.");
        resolve(false);
      },
      ontimeout: function() {
        GM.notification("Request timed out!", "IMDb Scout Mod (Emby)");
        console.log("IMDb Scout Mod (Emby): Request timed out.");
        resolve(false);
      }
    });
  });
}

function searchEmby(emb_url, movie_id, user_id, access_token, debug) {
  return new Promise(resolve => {
    const imdbid = "tt" +movie_id;
    const url_p1 = emb_url+ "/emby/Users/" +user_id+ "/Items?Recursive=true&IncludeItemTypes=Movie,Series,Episode&Fields=OriginalTitle,ProviderIds&AnyProviderIdEquals=imdb." +imdbid;
    const url_p2 = "&Limit=50&X-Emby-Client=Emby Web&X-Emby-Device-Name=IMDb Scout Mod&X-Emby-Device-Id=666&X-Emby-Client-Version=4.6.4.0&X-Emby-Token=" +access_token;
    const url = url_p1 + url_p2;
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 5000,
      url: url,
      headers: {
        "Accept": "application/json",
        "content-Type": "application/json",
      },
      onload: function(response) {
        const resultStr = String(response.responseText);
        if (debug) {
          console.log("Emby Debug_02 URL: " +url);
          console.log("Emby Debug_02 Response: " +resultStr);
          console.log("Emby Debug_02 Status: " +response.status);
        }
        if (response.status == 200) {
          if (resultStr.match(imdbid)) {
            const responseJSON = JSON.parse(response.responseText);
            const x = responseJSON.Items[0].ServerId;
            const y = responseJSON.Items[0].Id;
            GM.setValue("Emby_ServerId", x);
            GM.setValue("Emby_ItemId", y);
            if (debug) {
              console.log("Emby Debug_02 ServerId: " +x);
              console.log("Emby Debug_02 ItemId: " +y);
            }
            resolve(true);
          } else {
            resolve(false);
          }
        } else if (response.status == 401) {
          GM.notification("Invalid username or password, \nor access token expired, \ntry to refresh the page first.", "IMDb Scout Mod (Emby)");
          console.log("IMDb Scout Mod (Emby): Invalid username or password, or access token expired, try to refresh the page first.");
          GM.setValue("Emby_UserId", "none");
          GM.setValue("Emby_AccessToken", "none");
          resolve("stop");
        } else {
          GM.notification("HTTP status is not 200.", "IMDb Scout Mod (Emby)");
          console.log("IMDb Scout Mod (Emby): HTTP status is not 200!");
          resolve("stop");
        }
      },
      onerror: function() {
        GM.notification("Request Error! \nCheck if Emby Server is running, \nand if Emby Server URL is correct.", "IMDb Scout Mod (Emby)");
        console.log("IMDb Scout Mod (Emby): Request Error.");
        resolve("stop");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (Emby): Request is aborted.");
        resolve("stop");
      },
      ontimeout: function() {
        GM.notification("Request timed out!", "IMDb Scout Mod (Emby)");
        console.log("IMDb Scout Mod (Emby): Request timed out.");
        resolve("stop");
      }
    });
  });
}

//==============================================================================
//    Special button: Plex
//==============================================================================

async function start_plex(movie_id, movie_title, movie_title_orig) {
  const error_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABqAgMAAAApTywEAAAADFBMVEUAAAAzMjLlJSOILCtdxdm5AAAAAXRSTlMAQObYZgAAASdJREFUSMfk1r0NwjAUAGEoGIF9GIGCBClFBsgI7JERKEiUklGyRKYAu7niXiy5Q8LtJ4XDfvk5lFcTrmuiU2xNsvOOXbhkdNHjnt34Oa+ikeKYv7Fu+q45tjbZFNs92xhak+0d25DsGdsj2Su2rmA9obI22yojdIxtI1Q2JFtkCsUUijkUcyjmUNtgU+iuzTZCZRoLTGOBORTTWGAOxRyKORRjyRQqI3Sxsds2Qku2yhSKaSxkg0ynhGnT6v4Dh4TpcOv3erI5E/N22jrPC0YmpqcB5lOwkYkp09Znq7unyax7hjAQNnbaxkDIGAgbA2FjIGxk2si0kSkj00Zm/TtuKxiZWDwQGAMhYyB+41vjMzrJkdkexNfGxNc2xdumxW0h3jY0XgAAgEgBSKfkENwAAAAASUVORK5CYII=";
  const found_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABqAgMAAAApTywEAAAADFBMVEUAAAAyMzIl5SMriCtvvKHfAAAAAXRSTlMAQObYZgAAASdJREFUSMfk1r0NwjAUAGEoGIF9GIGCBClFBsgI7JERKEiUklGyRKYAu7niXiy5Q8LtJ4XDfvk5lFcTrmuiU2xNsvOOXbhkdNHjnt34Oa+ikeKYv7Fu+q45tjbZFNs92xhak+0d25DsGdsj2Su2rmA9obI22yojdIxtI1Q2JFtkCsUUijkUcyjmUNtgU+iuzTZCZRoLTGOBORTTWGAOxRyKORRjyRQqI3Sxsds2Qku2yhSKaSxkg0ynhGnT6v4Dh4TpcOv3erI5E/N22jrPC0YmpqcB5lOwkYkp09Znq7unyax7hjAQNnbaxkDIGAgbA2FjIGxk2si0kSkj00Zm/TtuKxiZWDwQGAMhYyB+41vjMzrJkdkexNfGxNc2xdumxW0h3jY0XgAAgEgBSKfkENwAAAAASUVORK5CYII=";
  let button = $('a[href="https://www.plex.tv"]');
      button.addClass('PlexServerIndicator');
      button.prop("rel", "noreferrer");
      button.removeAttr("href");

  const plex_url = GM_config.get("plex_server_url").replace(/\/$/, "");
  const plex_token = GM_config.get("plex_token");
  let titles =[];
      titles.push(movie_title);
  if (movie_title != movie_title_orig) {
    titles.push(movie_title_orig);
  }

  let tvdb_id = "00000000";
  // newLayout || reference : check if 'title' has just a year in brackets, eg. "(2009)" // Note: 'title' is fail-safe measure if other checks fail.
  const is_movie = (Boolean($('[data-testid=hero-title-block__metadata]').text().match('TV')) || Boolean($('li.ipl-inline-list__item').text().match('TV'))) ? false : Boolean($('title').text().match(/.*? \(([0-9]*)\)/));
  if (!is_movie) {
    tvdb_id = await getTVDbID(movie_id);
  }

  let search_found = false;
  let found_title = "";
  let metadata_key = "none";
  let machineId = "none";
  for (var i = 0; i < titles.length; i++) {
    const x = await getInfoFromPlex(titles[i], movie_id, tvdb_id, plex_url, plex_token);
    if (x === true) {
      search_found = x;
      found_title = titles[i];
      metadata_key = await GM.getValue("Plex_metadata_key", "none");
      machineId = await machineIdentifierFromPlex(plex_url);
      break;
    } else if (x === "stop"){
      search_found = x;
      break;
    }
  }

  const link_notfound = plex_url+ "/search?query=" +movie_title+ "&X-Plex-Token=" +plex_token;
  if (search_found === true) {
    let link_found;
    if (machineId !== "none" && metadata_key !== "none") {
      link_found = plex_url+ "/web/index.html#!/server/" +machineId+ "/details?key=" +metadata_key;
    } else {
      link_found = plex_url+ "/web/index.html#!/";
    }
    button.prop("href", link_found);
    $('.PlexServerIndicator').find('img').prop("src", found_icon);
  } else if (search_found === "stop") {
    button.prop("href", link_notfound);
    $('.PlexServerIndicator').find('img').prop("src", error_icon);
  } else {
    button.prop("href", link_notfound);
  }
}

function machineIdentifierFromPlex(plex_url) {
  return new Promise(resolve => {
    const url = plex_url+ "/identity";
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 5000,
      url:    url,
      onload: function(response) {
        if (response.status == 200) {
          const parser = new DOMParser();
          const result = parser.parseFromString(response.responseText, "text/xml");
          const x = $(result).find("MediaContainer").attr("machineIdentifier");
          if (x.length == 40) {
            resolve(x);
          } else {
            console.log("IMDb Scout Mod (Plex): machineIdentifier not found.");
            resolve("none");
          }
        } else {
          console.log("IMDb Scout Mod (Plex): machineIdentifier not found.");
          resolve("none");
        }
      },
      onerror: function() {
        resolve("none");
      },
      onabort: function() {
        resolve("none");
      },
      ontimeout: function() {
        resolve("none");
      }
    });
  });
}

function getInfoFromPlex(title, movie_id, tvdb_id, plex_url, plex_token) {
  return new Promise(resolve => {
    const titleUri = title.replace(/&/g,'%26').replace(/#/g,'%23');
    const imdbid = "tt" +movie_id;
    const tvdbid = "thetvdb://" +tvdb_id;
    const url = plex_url+ "/search?query=" +titleUri+ "&X-Plex-Token=" +plex_token;
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 5000,
      url:    url,
      onload: function(response) {
        if (response.status == 200) {
          const resultStr = String(response.responseText);
          const parser = new DOMParser();
          const result = parser.parseFromString(response.responseText, "text/xml");
          if (resultStr.match(imdbid)) {
            const metadata_key = $(result).find('[guid*=' +imdbid+ ']').attr("key");
            if (metadata_key != undefined) {
              GM.setValue("Plex_metadata_key", metadata_key);
            }
            resolve(true);
          } else if (resultStr.match(tvdbid)) {
            const metadata_key = $(result).find('[guid*=' +tvdb_id+ ']').attr("key");
            if (metadata_key != undefined) {
              GM.setValue("Plex_metadata_key", metadata_key);
            }
            resolve(true);
          } else {
            GM.setValue("Plex_metadata_key", "none");
            resolve(false);
          }
        } else if (response.status == 401) {
          GM.setValue("Plex_metadata_key", "none");
          GM.notification("Unauthorized! \nCheck if Plex Token is correct.", "IMDb Scout Mod (Plex)");
          console.log("IMDb Scout Mod (Plex): Unauthorized! Check if Plex Token is correct.");
          resolve("stop");
        } else {
          GM.setValue("Plex_metadata_key", "none");
          GM.notification("HTTP status is not 200.", "IMDb Scout Mod (Plex)");
          console.log("IMDb Scout Mod (Plex): Status is not 200!");
          resolve("stop");
        }
      },
      onerror: function() {
        GM.setValue("Plex_metadata_key", "none");
        GM.notification("Request Error! \nCheck if Plex Server is running, \nand if Plex Server URL is correct.", "IMDb Scout Mod (Plex)");
        console.log("IMDb Scout Mod (Plex): Request Error.");
        resolve("stop");
      },
      onabort: function() {
        GM.setValue("Plex_metadata_key", "none");
        console.log("IMDb Scout Mod (Plex): Request is aborted.");
        resolve("stop");
      },
      ontimeout: function() {
        GM.setValue("Plex_metadata_key", "none");
        GM.notification("Request timed out!", "IMDb Scout Mod (Plex)");
        console.log("IMDb Scout Mod (Plex): Request timed out.");
        resolve("stop");
      }
    });
  });
}

//==============================================================================
//    Special buttons: Radarr and Radarr2
//==============================================================================

function get_radarr_movies(movie_id, second_instance = false) {
  let title = "Radarr";
  if (second_instance == true) title = "Radarr2";
  let radarr = "radarr";
  if (second_instance == true) radarr = "radarr2";
  let imdbid = "tt" + movie_id;
  let radarr_url = GM_config.get(radarr + '_url').replace(/\/$/, '');
  let radarr_apikey = GM_config.get(radarr + '_apikey');
  const error_icon = "data:image/png;base64,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";
  GM.xmlHttpRequest({
    method: "GET",
    url: radarr_url + "/api/v3/movie",
    headers: {
      "X-Api-Key": radarr_apikey,
      "Accept": "application/json"
    },
    onload: function(response) {
      if (response.status == 200) {
        const responseJSON = JSON.parse(response.responseText);
        GM.setValue("IMDb_Scout_Mod_Radarr_movies", JSON.stringify(responseJSON));
        console.log("IMDb Scout Mod (Radarr): Sync movies complete!");
        radarrButtonBuilder(imdbid, radarr_url, radarr_apikey, second_instance);
      } else if (response.status == 401) {
          $("img[title='" + title + "']").prop("src", error_icon);
          console.log("IMDb Scout Mod (Radarr): Error: Invalid Radarr API Key.");
          GM.notification("Error: Invalid Radarr API Key.", "IMDb Scout Mod (Radarr)");
      } else {
          $("img[title='" + title + "']").prop("src", error_icon);
          console.log("IMDb Scout Mod (Radarr): Error: Status " + response.status);
          GM.notification("Error: Status " + response.status, "IMDb Scout Mod (Radarr)");
      }
    },
    onerror: function() {
      $("img[title='" + title + "']").prop("src", error_icon);
      console.log("IMDb Scout Mod (Radarr): Request Error. Check that Radarr is running or your Radarr URL.");
      if (GM_config.get("app_notification")) {
        GM.notification("Error: No response. \nPlease check your Radarr URL.", "IMDb Scout Mod (Radarr)");
      }
    },
    onabort: function() {
      $("img[title='" + title + "']").prop("src", error_icon);
      console.log("IMDb Scout Mod (Radarr): Request is aborted.");
    }
  });
}

async function radarrButtonBuilder(imdbid, radarr_url, radarr_apikey, second_instance = false) {
  let Radarr = "Radarr"
  if (second_instance == true) Radarr = "Radarr2";
  let exists = await check_exists(imdbid);
  const exists_icon = "data:image/png;base64,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";
  let button = $("[title='" + Radarr + "']").parent();
    button.prop("href", "javascript: void(0)");
    button.removeAttr("target");
  if (exists) {
    button.find('img').prop("src", exists_icon);
    button.click(function() {
      GM.openInTab(radarr_url + "/movie/" + exists[0].titleSlug);
    });
  } else {
    button.click(function() {
      new_movie_lookup(imdbid, radarr_url, radarr_apikey, exists_icon, second_instance);
    });
  }
}

async function check_exists(imdbid) {
  let movieliststr = await GM.getValue("IMDb_Scout_Mod_Radarr_movies", "{}");
  let movie_list = JSON.parse(movieliststr);
  let filter = null;
  try {
    filter = movie_list.filter(movie => movie.imdbId == imdbid);
  }
  catch (e) {
    if (e instanceof TypeError) {
      return false;
    } else {
      errorNotificationHandler(e, false);
      return false;
    }
  }
  if (!filter.length) {
    return false;
  } else {
    return filter;
  }
}

function new_movie_lookup(imdbid, radarr_url, radarr_apikey, exists_icon, second_instance = false) {
  GM.xmlHttpRequest({
    method: "GET",
    url: radarr_url + "/api/v3/movie/lookup/imdb?imdbId=" + imdbid,
    headers: {
      "X-Api-Key": radarr_apikey,
      "Accept": "application/json"
    },
    onload: function(response) {
      let responseJSON = null;
      if (!response.responseJSON) {
        if (!response.responseText) {
          console.log("IMDb Scout Mod (Radarr): Lookup: No results found.");
          GM.notification("Lookup: No results found.", "IMDb Scout Mod (Radarr)");
          return;
        }
        responseJSON = JSON.parse(response.responseText);
        radarr_add_movie(responseJSON, imdbid, radarr_url, radarr_apikey, exists_icon, second_instance);
      }
    }
  });
}

function radarr_add_movie(movie, imdbid, radarr_url, radarr_apikey, exists_icon, second_instance = false) {
  let title = "Radarr";
  if (second_instance == true) title = "Radarr2";
  let radarr = "radarr";
  if (second_instance == true) radarr = "radarr2";
  movie.rootFolderPath = GM_config.get(radarr + "_rootfolderpath");
  movie.monitored = GM_config.get(radarr + "_monitored");
  movie.minimumAvailability = GM_config.get(radarr + "_minimumavailability");
  if (GM_config.get(radarr + "_searchformovie")) {
    movie.addOptions = {searchForMovie: true};
  } else {
    movie.addOptions = {searchForMovie: false};
  }
  const qProID = GM_config.get(radarr + "_profileid");
  if (qProID == "Any") {
    movie.qualityProfileId = 1;
  } else if (qProID == "HD - 720p/1080p") {
    movie.qualityProfileId = 6;
  } else if (qProID == "HD-1080p") {
    movie.qualityProfileId = 4;
  } else if (qProID == "HD-720p") {
    movie.qualityProfileId = 3;
  } else if (qProID == "SD") {
    movie.qualityProfileId = 2;
  } else if (qProID == "Ultra-HD") {
    movie.qualityProfileId = 5;
  } else if (qProID == "Custom") {
    movie.qualityProfileId = parseInt(GM_config.get(radarr + "_customprofileid"));
  }
  GM.xmlHttpRequest({
    method: "POST",
    url: radarr_url + "/api/v3/movie",
    headers: {
      "X-Api-Key": radarr_apikey,
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    data: JSON.stringify(movie),
    onload: function(response) {
      const responseJSON = JSON.parse(response.responseText);
      if (response.status == 201) {
        let button = $('img[title="' + title + '"]');
            button.prop("src", exists_icon);
            button.parent().off("click");
        button.click(function() {
          GM.openInTab(radarr_url + "/movie/" + responseJSON.titleSlug);
        });
        GM.notification('"' + responseJSON.title + '"' + " \nSuccessfully sent to Radarr.", "IMDb Scout Mod (Radarr)");
      } else {
          console.log("IMDb Scout Mod (Radarr): Error: " + responseJSON[0].errorMessage);
          GM.notification("Error: " + responseJSON[0].errorMessage, "IMDb Scout Mod (Radarr)");
      }
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Radarr): Request Error.");
      GM.notification("Request Error.", "IMDb Scout Mod (Radarr)");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Radarr): Request is aborted.");
      GM.notification("Request is aborted.", "IMDb Scout Mod (Radarr)");
    }
  });
}

function errorNotificationHandler(error, expected, errormsg) {
  if (expected) {
    GM.notification("Error: " + errormsg, "IMDb Scout Mod (Radarr)");
  } else {
    GM.notification("Unexpected Radarr Error, please report it. \nActual Error: " + error, "IMDb Scout Mod (Radarr)");
  }
}

//==============================================================================
//    Special button: Sonarr
//==============================================================================

async function get_sonarr_tvseries(movie_id) {
  const error_icon = "data:image/png;base64,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";
  var tvdbid = await getTVDbID(movie_id);
  if (tvdbid == "0") {
    $('a[href="https://sonarr.tv"]').find('img').prop("src", error_icon);
    console.log("IMDb Scout Mod (Sonarr): TVDb ID not found.");
    return;
  } else if (tvdbid == undefined) {
    $('a[href="https://sonarr.tv"]').find('img').prop("src", error_icon);
    console.log("IMDb Scout Mod (Sonarr): Error converting IMDbID to TVDbID (undefined).");
    return;
  }
  let sonarr_url = GM_config.get("sonarr_url").replace(/\/$/, "");
  let sonarr_apikey = GM_config.get("sonarr_apikey");
  GM.xmlHttpRequest({
    method: "GET",
    url: sonarr_url + "/api/v3/series",
    headers: {
      "X-Api-Key": sonarr_apikey,
      "Accept": "*/*"
    },
    onload: function(response) {
      if (response.status == 200) {
        const responseJSON = JSON.parse(response.responseText);
        GM.setValue("IMDb_Scout_Mod_Sonarr_series", JSON.stringify(responseJSON));
        console.log("IMDb Scout Mod (Sonarr): Sync series complete!");
        sonarrButtonBuilder(tvdbid, sonarr_url, sonarr_apikey);
      } else if (response.status == 401) {
          $('a[href="https://sonarr.tv"]').find('img').prop("src", error_icon);
          console.log("IMDb Scout Mod (Sonarr): Error: Invalid Sonarr API Key.");
          GM.notification("Error: Invalid Sonarr API Key.", "IMDb Scout Mod (Sonarr)");
      } else {
          $('a[href="https://sonarr.tv"]').find('img').prop("src", error_icon);
          console.log("IMDb Scout Mod (Sonarr): Error: Status " + response.status);
          GM.notification("Error: Status " + response.status, "IMDb Scout Mod (Sonarr)");
      }
    },
    onerror: function() {
      $('a[href="https://sonarr.tv"]').find('img').prop("src", error_icon);
      console.log("IMDb Scout Mod (Sonarr): Request Error. Check that Sonarr is running or your Sonarr URL.");
      if (GM_config.get("app_notification")) {
        GM.notification("Error: No response. \nPlease check your Sonarr URL.", "IMDb Scout Mod (Sonarr)");
      }
    },
    onabort: function() {
      $('a[href="https://sonarr.tv"]').find('img').prop("src", error_icon);
      console.log("IMDb Scout Mod (Sonarr): Request is aborted.");
    }
  });
}

async function sonarrButtonBuilder(tvdbid, sonarr_url, sonarr_apikey) {
  let exists = await sonarrCheck_exists(tvdbid);
  const exists_icon = "data:image/png;base64,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";
  let button = $('a[href="https://sonarr.tv"]');
      button.prop("href", "javascript: void(0)");
      button.removeAttr("target");
  if (exists) {
    button.find('img').prop("src", exists_icon);
    button.click(function() {
      GM.openInTab(sonarr_url + "/series/" + exists[0].titleSlug);
    });
  } else {
    button.click(function() {
      new_tvseries_lookup(tvdbid, sonarr_url, sonarr_apikey, exists_icon);
    });
  }
}

async function sonarrCheck_exists (tvdbid) {
  let seriesliststr = await GM.getValue("IMDb_Scout_Mod_Sonarr_series", "{}");
  let series_list = JSON.parse(seriesliststr);
  let filter = null;
  try {
    filter = series_list.filter(series => series.tvdbId == tvdbid);
  }
  catch (e) {
    if (e instanceof TypeError) {
      return false;
    } else {
      sonarrErrorNotificationHandler(e, false);
      return false;
    }
  }
  if (!filter.length) {
    return false;
  } else {
    return filter;
  }
}

function new_tvseries_lookup(tvdbid, sonarr_url, sonarr_apikey, exists_icon) {
  GM.xmlHttpRequest({
    method: "GET",
    url: sonarr_url + "/api/v3/series/lookup?term=tvdb:" + tvdbid,
    headers: {
      "X-Api-Key": sonarr_apikey,
      "Accept": "*/*"
    },
    onload: function(response) {
      let responseJSON = null;
      if (!response.responseJSON) {
        if (!response.responseText) {
          console.log("IMDb Scout Mod (Sonarr): Lookup: No results found.");
          GM.notification("Lookup: No results found.", "IMDb Scout Mod (Sonarr)");
          return;
        }
        responseJSON = JSON.parse(response.responseText);
        add_tvseries(responseJSON[0], tvdbid, sonarr_url, sonarr_apikey, exists_icon);
      }
    }
  });
}

function add_tvseries(tvseries, tvdbid, sonarr_url, sonarr_apikey, exists_icon) {
  tvseries.rootFolderPath = GM_config.get("sonarr_rootfolderpath");
  tvseries.seasonFolder = GM_config.get("sonarr_seasonfolder");
  tvseries.seriesType = GM_config.get("sonarr_seriestype");
  tvseries.languageProfileId = GM_config.get("sonarr_languageprofileid");
  if (GM_config.get("sonarr_searchformissing")) {
    tvseries.addOptions = {searchForMissingEpisodes: true};
  }
  if (GM_config.get("sonarr_searchforcutoff")) {
    tvseries.addOptions = {searchForCutoffUnmetEpisodes: true};
  }
  const uSceneNr = GM_config.get("sonarr_usescenenumbering");
  if (uSceneNr == "Yes") {
    tvseries.useSceneNumbering = true;
  } else if (uSceneNr == "No") {
    tvseries.useSceneNumbering = false;
  }
  const qProID = GM_config.get("sonarr_profileid");
  if (qProID == "Any") {
    tvseries.qualityProfileId = 1;
  } else if (qProID == "HD - 720p/1080p") {
    tvseries.qualityProfileId = 6;
  } else if (qProID == "HD-1080p") {
    tvseries.qualityProfileId = 4;
  } else if (qProID == "HD-720p") {
    tvseries.qualityProfileId = 3;
  } else if (qProID == "SD") {
    tvseries.qualityProfileId = 2;
  } else if (qProID == "Ultra-HD") {
    tvseries.qualityProfileId = 5;
  } else if (qProID == "Custom") {
    tvseries.qualityProfileId = parseInt(GM_config.get("sonarr_customprofileid"));
  }
  const sonMon = GM_config.get("sonarr_monitored");
  if (sonMon == "All Episodes") {
    tvseries.monitored  = true;
    tvseries.addOptions = {monitor: 'all'};
  } else if (sonMon == "Future Episodes") {
    tvseries.monitored  = true;
    tvseries.addOptions = {monitor: 'future'};
  } else if (sonMon == "Missing Episodes") {
    tvseries.monitored  = true;
    tvseries.addOptions = {monitor: 'missing'};
  } else if (sonMon == "Existing Episodes") {
    tvseries.monitored  = true;
    tvseries.addOptions = {monitor: 'existing'};
  } else if (sonMon == "Pilot Episode") {
    tvseries.monitored  = true;
    tvseries.addOptions = {monitor: 'pilot'};
  } else if (sonMon == "Only First Season") {
    tvseries.monitored  = true;
    tvseries.addOptions = {monitor: 'firstSeason'};
  } else if (sonMon == "Only Latest Season") {
    tvseries.monitored  = true;
    tvseries.addOptions = {monitor: 'latestSeason'};
  } else if (sonMon == "None") {
    tvseries.monitored  = false;
    tvseries.addOptions = {monitor: 'none'};
  }
  GM.xmlHttpRequest({
    method: "POST",
    url: sonarr_url + "/api/v3/series",
    headers: {
      "X-Api-Key": sonarr_apikey,
      "Accept": "application/json, text/javascript, */*; q=0.01",
      "Content-Type": "application/json"
    },
    data: JSON.stringify(tvseries),
    onload: function(response) {
      const responseJSON = JSON.parse(response.responseText);
      if (response.status == 201) {
        let button = $('img[title="Sonarr"]');
            button.prop("src", exists_icon);
            button.parent().off("click");
        button.click(function() {
          GM.openInTab(sonarr_url + "/series/" + responseJSON.titleSlug);
        });
        GM.notification('"' + responseJSON.title + '"' + " \nSuccessfully sent to Sonarr.", "IMDb Scout Mod (Sonarr)");
      } else {
          console.log("IMDb Scout Mod (Sonarr): Error: " + responseJSON[0].errorMessage);
          GM.notification("Error: " + responseJSON[0].errorMessage, "IMDb Scout Mod (Sonarr)");
      }
    }
  });
}

function sonarrErrorNotificationHandler(error, expected, errormsg) {
  if (expected) {
    GM.notification("Error: " + errormsg, "IMDb Scout Mod (Sonarr)");
  } else {
    GM.notification("Unexpected Sonarr Error, please report it. \nActual Error: " + error, "IMDb Scout Mod (Sonarr)");
  }
}

//==============================================================================
//    Special button: Trakt-Watchlist
//==============================================================================

async function start_trakt(movie_id, movie_title) {
  const imdbid = "tt" + movie_id;
  const title = movie_title.trim();
  let button = $('a[href="https://trakt.tv/oauth/authorize?client_id=325c09f8f8d6e3466c7ced12c11cc32d4af00e1af1f6310da4f6dfb702c7b8c2&redirect_uri=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0052077%2Freference&response_type=code"]');
  const access_token = await GM.getValue("IMDb_Scout_Mod_Trakt_access_token", "none");

  if (access_token == 'none') {
    button.click(function() {
      button.remove();
    });
    GM.notification("Trakt's access token not found. \nPress icon to authorize with Trakt. \nRefresh page after authorization is completed.", "IMDb Scout Mod (Trakt-Watchlist)");
    return;
  }
  const created_at = await GM.getValue("IMDb_Scout_Mod_Trakt_created_at", 9999999999);
  const current_time = Math.round(new Date().getTime() / 1000);
  if (current_time - created_at > 5184000) {
    trakt_refresh_token();
    return;
  }
  const exists_icon = "data:image/png;base64,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";
  const missing_icon = "data:image/png;base64,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";
  const error_icon = "data:image/png;base64,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";
  const synctime = await GM.getValue("IMDb_Scout_Mod_Trakt_watchlist_synctime", "none");
  button.prop("href", "javascript: void(0)");
  button.removeAttr("target");

  if (synctime !== 'none') {
    if (current_time - synctime < GM_config.get('trakt_synclimiter')) {
      GM.setValue("IMDb_Scout_Mod_Trakt_watchlist_synctime", current_time);
      const trakt_watchlist = await GM.getValue("IMDb_Scout_Mod_Trakt_watchlist", "none");

      if (Boolean(trakt_watchlist.match(imdbid))) {
        button.find('img').prop("src", exists_icon);
        button.click(function() {
          trakt_watchlist_remove(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
        });
      } else {
        button.find('img').prop("src", missing_icon);
        button.click(function() {
          trakt_watchlist_add(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
        });
      }
    } else {
      get_trakt_watchlist(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
    }
  } else {
    get_trakt_watchlist(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
  }
}

function get_trakt_watchlist(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon) {
  GM.xmlHttpRequest({
    method: "GET",
    url: "https://api.trakt.tv/sync/watchlist",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + access_token,
      "trakt-api-version": "2",
      'trakt-api-key': '325c09f8f8d6e3466c7ced12c11cc32d4af00e1af1f6310da4f6dfb702c7b8c2'
    },
    onload: function(response) {
      if (response.status == 200) {
        let responseJSON = JSON.parse(response.responseText);
        const set_synctime = Math.round(new Date().getTime() / 1000);
        const trakt_watchlist = JSON.stringify(responseJSON);

        GM.setValue("IMDb_Scout_Mod_Trakt_watchlist", trakt_watchlist);
        GM.setValue("IMDb_Scout_Mod_Trakt_watchlist_synctime", set_synctime);
        console.log("IMDb Scout Mod (Trakt-Watchlist): Sync watchlist complete!");

        if (Boolean(trakt_watchlist.match(imdbid))) {
          button.find('img').prop("src", exists_icon);
          button.click(function() {
            trakt_watchlist_remove(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
          });
        } else {
          button.find('img').prop("src", missing_icon);
          button.click(function() {
            trakt_watchlist_add(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
          });
        }
      } else if (response.status == 401) {
        GM.setValue("IMDb_Scout_Mod_Trakt_access_token", "none");
        location.reload();
      } else if (response.status > 499) {
        button.find('img').prop("src", error_icon);
        button.off("click");
        GM.notification("Server/CF Error or Overloaded.", "IMDb Scout Mod (Trakt-Watchlist)");
      } else if (response.status > 399) {
        button.find('img').prop("src", error_icon);
        button.off("click");
        GM.notification("Sync Error " + response.status + ", please report it.", "IMDb Scout Mod (Trakt-Watchlist)");
      } else {
        button.find('img').prop("src", error_icon);
        button.off("click");
        console.log("IMDb Scout Mod (Trakt Sync status): " + response.status);
        console.log("IMDb Scout Mod (Trakt Sync response): " + response.responseText);
      }
    }
  });
}

function trakt_watchlist_add(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon) {
  const body = {'movies': [{'ids': {'imdb': imdbid}}], 'shows': [{'ids': {'imdb': imdbid}}], 'episodes': [{'ids': {'imdb': imdbid}}]};

  GM.xmlHttpRequest({
    method: "POST",
    url: "https://api.trakt.tv/sync/watchlist",
    data: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + access_token,
      "trakt-api-version": "2",
      'trakt-api-key': '325c09f8f8d6e3466c7ced12c11cc32d4af00e1af1f6310da4f6dfb702c7b8c2'
    },
    onload: function(response) {
      if (response.status == 201) {
        const responseJSON   = JSON.parse(response.responseText);
        const resultAdded    = JSON.stringify(responseJSON["added"]);
        const resultExisting = JSON.stringify(responseJSON["existing"]);
        const countAdded     = (resultAdded.match(/1/g) || []).length;
        const countExisting  = (resultExisting.match(/1/g) || []).length;

        if (countAdded == 0 && countExisting == 0) {
          button.find('img').prop("src", error_icon);
          button.off("click");
          GM.notification('"' + title + '"' + " \nNot Found on Trakt.", "IMDb Scout Mod (Trakt-Watchlist)");
        } else if (countAdded == 0 && countExisting !== 0) {
          button.find('img').prop("src", exists_icon);
          button.off("click");
          button.click(function() {
            trakt_watchlist_remove(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
          });
          GM.notification('"' + title + '"' + " \nAlready exists in Trakt's watchlist!", "IMDb Scout Mod (Trakt-Watchlist)");
        } else if (countAdded > 1) {
          button.find('img').prop("src", exists_icon);
          button.off("click");
          button.click(function() {
            trakt_watchlist_remove(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
          });
          GM.notification('"' + title + '"' + " \nAdded to Trakt's watchlist. \nDetected incorrect data on Trakt!", "IMDb Scout Mod (Trakt-Watchlist)");
        } else {
          button.find('img').prop("src", exists_icon);
          button.off("click");
          button.click(function() {
            trakt_watchlist_remove(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
          });
          GM.notification('"' + title + '"' + " \nAdded to Trakt's watchlist.", "IMDb Scout Mod (Trakt-Watchlist)");
        }
      } else if (response.status == 401) {
        GM.setValue("IMDb_Scout_Mod_Trakt_access_token", "none");
        location.reload();
      } else if (response.status == 429) {
          button.find('img').prop("src", error_icon);
          button.off("click");
          GM.notification("API rate limit exceeded.", "IMDb Scout Mod (Trakt-Watchlist)");
      } else if (response.status > 499) {
        button.find('img').prop("src", error_icon);
        button.off("click");
        GM.notification("Server/CF Error or Overloaded.", "IMDb Scout Mod (Trakt-Watchlist)");
      } else if (response.status > 399) {
        button.find('img').prop("src", error_icon);
        button.off("click");
        GM.notification("Add Error " + response.status + ", please report it.", "IMDb Scout Mod (Trakt-Watchlist)");
      } else {
        button.find('img').prop("src", error_icon);
        button.off("click");
        console.log("IMDb Scout Mod (Trakt Add status): " + response.status);
        console.log("IMDb Scout Mod (Trakt Add response): " + response.responseText);
      }
    },
    onerror: function() {
      button.find('img').prop("src", error_icon);
      button.off("click");
      console.log("IMDb Scout Mod (Trakt-Watchlist): Add Request Error.");
    },
    onabort: function() {
      button.find('img').prop("src", error_icon);
      button.off("click");
      console.log("IMDb Scout Mod (Trakt-Watchlist): Add Request is aborted.");
    }
  });
}

function trakt_watchlist_remove(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon) {
  const body = {'movies': [{'ids': {'imdb': imdbid}}], 'shows': [{'ids': {'imdb': imdbid}}], 'episodes': [{'ids': {'imdb': imdbid}}]};
  GM.xmlHttpRequest({
    method: "POST",
    url: "https://api.trakt.tv/sync/watchlist/remove",
    data: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + access_token,
      "trakt-api-version": "2",
      'trakt-api-key': '325c09f8f8d6e3466c7ced12c11cc32d4af00e1af1f6310da4f6dfb702c7b8c2'
    },
    onload: function(response) {
      if (response.status == 200) {
        button.find('img').prop("src", missing_icon);
        button.off("click");
        button.click(function() {
          trakt_watchlist_add(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
        });
        GM.notification('"' + title + '"' + " \nRemoved from Trakt's watchlist.", "IMDb Scout Mod (Trakt-Watchlist)");
      } else if (response.status == 401) {
        GM.setValue("IMDb_Scout_Mod_Trakt_access_token", "none");
        location.reload();
      } else if (response.status == 429) {
          button.find('img').prop("src", error_icon);
          button.off("click");
          GM.notification("API rate limit exceeded.", "IMDb Scout Mod (Trakt-Watchlist)");
      } else if (response.status > 499) {
        button.find('img').prop("src", error_icon);
        button.off("click");
        GM.notification("Server/CF Error or Overloaded.", "IMDb Scout Mod (Trakt-Watchlist)");
      } else if (response.status > 399) {
        button.find('img').prop("src", error_icon);
        button.off("click");
        GM.notification("Remove Error " + response.status + ", please report it.", "IMDb Scout Mod (Trakt-Watchlist)");

      } else {
        button.find('img').prop("src", error_icon);
        button.off("click");
        console.log("IMDb Scout Mod (Trakt Remove status): " + response.status);
        console.log("IMDb Scout Mod (Trakt Remove response): " + response.responseText);
      }
    },
    onerror: function() {
      button.find('img').prop("src", error_icon);
      button.off("click");
      console.log("IMDb Scout Mod (Trakt-Watchlist): Remove Request Error.");
    },
    onabort: function() {
      button.find('img').prop("src", error_icon);
      button.off("click");
      console.log("IMDb Scout Mod (Trakt-Watchlist): Remove Request is aborted.");
    }
  });
}

function traktCatchToken() {
  const code = location.href.replace('https://www.imdb.com/title/tt0052077/reference?code=','');
  var body = {
    'code': code,
    'client_id': '325c09f8f8d6e3466c7ced12c11cc32d4af00e1af1f6310da4f6dfb702c7b8c2',
    'client_secret': 'ee4204782a908e201ae22da35fbd19f08362e99ba158b04f1931caf8eea55fe4',
    'redirect_uri': 'https://www.imdb.com/title/tt0052077/reference',
    'grant_type': 'authorization_code'
  };
  GM.xmlHttpRequest({
    method: "POST",
    url: "https://api.trakt.tv/oauth/token",
    data: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    },
    onload: function(response) {
      if (response.status == 200) {
        let responseJSON = JSON.parse(response.responseText);
        const access_token  = responseJSON.access_token;
        const refresh_token = responseJSON.refresh_token;
        const created_at    = responseJSON.created_at;
        GM.setValue("IMDb_Scout_Mod_Trakt_access_token", access_token);
        GM.setValue("IMDb_Scout_Mod_Trakt_refresh_token", refresh_token);
        GM.setValue("IMDb_Scout_Mod_Trakt_created_at", created_at);
        window.close();
      } else {
        console.log("IMDb Scout Mod (Trakt Get Token status): " + response.status);
        console.log("IMDb Scout Mod (Trakt Get Token response): " + response.responseText);
      }
    }
  });
}

async function trakt_refresh_token() {
  const refresh_token = await GM.getValue("IMDb_Scout_Mod_Trakt_refresh_token", "none");
  var body = {
    'refresh_token': refresh_token,
    'client_id': '325c09f8f8d6e3466c7ced12c11cc32d4af00e1af1f6310da4f6dfb702c7b8c2',
    'client_secret': 'ee4204782a908e201ae22da35fbd19f08362e99ba158b04f1931caf8eea55fe4',
    'redirect_uri': 'https://www.imdb.com/title/tt0052077/reference',
    'grant_type': 'refresh_token'
  };
  GM.xmlHttpRequest({
    method: "POST",
    url: "https://api.trakt.tv/oauth/token",
    data: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    },
    onload: function(response) {
      if (response.status == 200) {
        let responseJSON = JSON.parse(response.responseText);
        const access_token  = responseJSON.access_token;
        const refresh_token = responseJSON.refresh_token;
        const created_at    = responseJSON.created_at;
        GM.setValue("IMDb_Scout_Mod_Trakt_access_token", access_token);
        GM.setValue("IMDb_Scout_Mod_Trakt_refresh_token", refresh_token);
        GM.setValue("IMDb_Scout_Mod_Trakt_created_at", created_at);
        GM.notification("Trakt's access token is refreshed. \nNext refresh after 2 months.", "IMDb Scout Mod (Trakt-Watchlist)");
        location.reload();
      } else {
        GM.setValue("IMDb_Scout_Mod_Trakt_access_token", "none");
        console.log("IMDb Scout Mod (Trakt Refresh Token status): " + response.status);
        console.log("IMDb Scout Mod (Trakt Refresh Token response): " + response.responseText);
      }
    }
  });
}

//==============================================================================
//    External ratings
//==============================================================================

function externalRatings(imdbid, title, title_orig) {
  const rott_rotten = "data:image/png;base64,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";
  const rott_certified = "data:image/png;base64,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";
  const rott_fresh = "data:image/png;base64,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";
  const rott_user_up = "data:image/png;base64,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";
  const rott_user_down = "data:image/png;base64,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";
  const meta_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAElBMVEUAAAAzMzP/zDT+/v5oX0elmG641eaPAAAAAXRSTlMAQObYZgAAA3ZJREFUaN69mVFym0AQBVO6ARL8WxQ5gGulAyzGBwDL979K4tjmie2dmVKo8nxZpKbV83YFBH65dej/lv3PYbPqf9tVTw/29yggwq9nPfL1uwi9Xfv6GUTcz4r7owrzD2tHP2KIB3j/qMVQCPtvU/NZ7bSAEA9wy81dCaEhfIHcFDVCwRP43bBeQ0LRj+qCIQ7oB8FXYD8JnsKB+bFGRwH9PuHJFBjQNE3T+ndrKpgBtG8ppeuqdSwUIDCX/emz1uOLC6BASgWhq89gJfiS1spFjk81gQEDqC7KEYBYQENIgQAuYbqvq61wMARO6qYCAVyCtwSF+4XABGdjAihoBn+CLqW6wkiAImQEVGiLGbSLsYiGwlIFNMzQUjhqBq4BM6RCWwOcLcC1oqAQBMgGIG9muW7WgRHwl/SsNO4UjgQMBiDrTykoBC+C9k75VCoQkBvU/Vlgq6AQBCguhB/yawRQ2ISAXaDQBIBCVwIG7GEBoLBNkRl2CQAqlIC5NoBCpMLyDdAiUEDLSIWxAJg/wlxX0DIIwGuBZqBCJ4BWEechKOhguwUMmKCqoGMCYBuk5Cno0BZwRgSGgo4QwEWkwnpAG0H7iBlSQZ8dgKugj+MGAEtLQZ8CwPX1zVLIDuA0fwEu64aAwqVxACl9AbSgUMh1wLff5aSzQAcFFQDrIv0Tn7GrcwRQft8TQCEGpAIAhQBwAgAKNmCWgABQ8AEnABwF/Rb0a3wBAAo+oEuqOVLg+QDXo1ABpzTeBEhBWBVOqhuFeaOgg6oWp3VPQcd0GBcWR4ECvDJlV4ECBIQKMzYiLu+uwtXYiNoIngIEeIMxNJ4CBLSKulF1FSDQCaAUHYVSoDkCMLsKOB8tAAyNo6BihrrTtBVYHQF94yk4ESiERxTGCmB4RKEXADNAIYhAgOwpcAICzoECJzD+8x4rdABoHajgTsAHGFSIJ5BCU1F4NnYRANb9asNa+Binp4IEGKENmKUQCvTmkzApxAJSYAq2gABU6LMU/CXow+eRbVWg7SWAGbAdKwKjBKDAXwT7OwhQYTBOxXikCgUSuAICsHrGwH5MAAUQECAFqEAC+32F/sb85M8BqND/LpZgwjsSS0ESGV8vAVdBFrfpo3l6f+g1T1z7X1TtJOx+WRdV1B9X1B+XG+A+wk+9NiaB+nGh/Wde3hMSN/8BSXUWJsXAq8kAAAAASUVORK5CYII=";
  const meta_badge = "data:image/png;base64,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";
  const lboxd_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAALVBMVEUAAAAgKDD/gABAvPQA4FT8/v1Dw/0E6ViwYRE5msej6OIFx09I54QLokj/zZqk8vmhAAAAAXRSTlMAQObYZgAAArJJREFUaN7tmT1r21AUhuN/oNctwaZ0sKBQSimYC4KOBYGhydaqg+liBBc8FlQ0FA/O1NUUCpn7sQcKHkK3tHugkMFz/keva8tH55hYco6KnJBnNLyPz8H3y/fu/T/AUGQJr1y6gQ145eIKBUqg+HoqQpHnBpnXGbAFyrxD0QA1IfO6ErAtnq4Ah1rg6TpwiAJ0JeBaqAWsA10PqEkA6qAugVeVANemIkGjRoG3IwIouCWCBhR4d4JqBKhVAC5o+Y7HIGY/0vTgHMRxYO3zyVWCI3/BOPtgmoaO9ABL2oE1xgS2KwSU54ZpEv6j92GZt2YBGfKCpk9gzoXLLw0jzAlMRjDJCah/ogPggcuvDCcA9mOzIhYCaoCamIY55k3EhggGUtDyGZ2sACph3+QJpKDpc1wBjBFiLugKgS/oJFzQu8cFZsgFLSl4Egq+G06QCRrUQZ5LUcFhXwq6THAkBdFXLngZxcIwYAKZfxa95oL30RchGG4UPIrecsGvNUGQF7TWBX0u+Ba92UpwKQS9KOobguaDtxA01wVRUqngUAoc3QLB2c0XJFpByZ9x8zggoisGkld+JL6SgoLJVDgXjHo2FqwHZ3I9MIJBwYoUcnrrP8LmRfVpKPgtBeAC2cM4EYK2XJWL9oULnn+HQHQgBJA700O+HpzT1kibIxPwEgBewghAwBd1KYDYnVkJKRz5vWkIIaDhTKec+0l+d3d8XhksuIAMlHf8yU4oLwBmsBMpIAPlHbM0deWnJ8j4ZK2xNp6AC4iPLj5Gjtnp6U/kaB8bdkhDJefE2s/Kd4IqBLX/8bzZgl25wdAIduQiag+1X8YpBfobTb1Af6vbqP1iWnG3rhGonwf0DxTKErSvPJ72maeKly5NE16Vr32EIq998SSDIl+6DeW78V4ZdHGSyPCu8hfYVeoYJ6xJswAAAABJRU5ErkJggg==";
  const lboxd_cust = "data:image/png;base64,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";
  const douban_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAgMAAAC+UIlYAAAADFBMVEUAAAABdhD9/v16t4L0Izp4AAAAAXRSTlMAQObYZgAAARhJREFUWMPt2D0OgjAUB/A6eATv4xEcKE0YcOcI3qNHcABjnDhKL8HuYqK1EuA988orUQeI/S8Q8iNtXstHK4SQTITLmgM7BzYcSEgLtI0VD7akC6QTGx4kYSADiQCBvPLmHMHPgbLeXGc1HxYCPLW8A/CPRhnBp8CiND5gJKSIIAIEmrnO6j8Ae/tw19Cje4H3ZJfUATRUNXkVKwTcqfYCA8AAoLcpAqBh6M50gKfhcSjKyQMOr29xm2wCKCmAy0AxwC0XfpAOoOm6S0HFAqifO6kpgBFQDNA90BRArVMHDAVQ63wKkBRAATMKbJubq1R7HKav6UE1Eh3BO7AjMfP6l1s6+HrFGlwUh5fVggfBpX14cyC4vfAEQ6sYUOFLXfsAAAAASUVORK5CYII=";
  const allocine_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2BAMAAADviXoiAAAAGFBMVEUAAAAmJib/////ywBcUzPIoQmUehKRkZFw3PDCAAAAAXRSTlMAQObYZgAAA2BJREFUWMPdmU1P20AQQKv+AzeOe3WjSD1HG+fuptBz5JS7lY87qBJ/vxCyed6ZHS94b8wBiOTHzL7xLvbw5VPF18Vb1B8mF8OYQhIfqFZHPRUFTqNTYdA0nEaBk+hkOIoQ70Wf2+I1ymcBpyv+VxB/gqpTaX8WYTwlE8uk0dSJih8LHd/HqxaoBY+lXRbx+DWSGE1hlIc+FGanVWjnVtcfzcTGYu+dcxuxZIOVFZ/cSzSizUbJraz3Eq3/HC866njr3qIXru20xOzKrgojMaxq7fzKrmlyhCWtYpFFYp0WybDIQjWJYektrpBFj2Ep+VaYv/Tg2R2/j6KH7A9/K3XejfOxhv0Gq0u+e7mW5SIrUjTsdddQ48HdoiAES3OrDjl3jujlPob1JVfOx/n36fL94dxRyKBoUTIrJI7X/GtVNOz1xigFuvf2NvLArXWHOkegt0MWXQqW69USO+6vVi8YtmXXqa7OAlklLKqELARtDVmokrKo02lZsNzMsZIrPiBLsELWipIpAjbQzHXiPrTuLDQrWTevVKFEozm4ozeDDglZmkUWie57r6AxWY65Q7Dczh19Ja1o0rC9yOLaSm9hGuzZpT6T5S26Etu/lu0l1YYF6PPOYIvhpWJnJNmOEktIZJkssnbUj6xRFj+9Or52abaC3QbsOsGyyFaxzTiLLFgiwdJUfkLWOIsslCMrzVYWu06z5Y0tTwG7gY3tBWTxdEbE9gJ7EFksnmjVIavYGdeFt9YOVp85XB9l16PnFbJ6WCVLn7EE9YVsEz9jH6WsFayQxdlOg4kt9altaP89Amhi7EqyusEVsugvsmgvf7sJGgKLrAVsRPTBJ4ZFFpqlaM67po1vYf2sgiwM/T2fXhd5+YponpFMWTyf8fkoVBmy0BMsAlXmgjuqvN3iD/KJAXYZyvJxM78Xz8Bm0TO5dea9eDKzX1MqsWXtZ37dpZI7WAQdghVFd6gixDuOVfQB1ijZfqebGTU/wZrvklXMFe+S9jssspo+Nqio7XdnZG3aaNrafGdH1t6Yj1izAmQ1RyCRNjGjmDeiXmYU6dmIPQ6yZzJ2MJNJz4KM4VnODCpj9pUzc8ub9eXPGPNnm/kzVWA78mfI+bPr/Jl5/qwe2EKnwnXe/0Sm0Rn/A/pM8R8w2HBWwA4YRgAAAABJRU5ErkJggg==";
  const anime_icon = "data:image/png;base64,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";

  let key;
  if (GM_config.get("ratings_cfg_omdb_apikey") == '') {
    const keys = ['8c967f70', 'dd37e5a4', '3fdb9c5a', 'b81150c9', '2981ebb6', 'f17eacb0'];
    key = keys[Math.floor(Math.random() * keys.length)];
  } else {
    key = GM_config.get("ratings_cfg_omdb_apikey");
  }

  if (GM_config.get("ratings_cfg_letterboxd") || GM_config.get("ratings_cfg_rotten") || GM_config.get("ratings_cfg_metacritic") || GM_config.get("ratings_cfg_douban") || GM_config.get("ratings_cfg_allocine") || GM_config.get("ratings_cfg_anime")) {
    addRatingsElements(imdbid, title, title_orig);
  }

  // Get Letterboxd ratings.
  if (GM_config.get("ratings_cfg_letterboxd")) {
    getLetterboxdRatings(imdbid, lboxd_icon, lboxd_cust);
  }
  // Get Metacritic's Metascore & RT's Tomatometer. Link for RT Audience score & "Certified" badge.
  // Running for Metascore without RT enabled is currently disabled, GM_config.get("ratings_cfg_metacritic")
  // Metacritic disabled in this func as it can overwrite "must see" badge [v19.2]
  if (GM_config.get("ratings_cfg_rotten")) {
    getRTandMetaRatings_OMDb(key, imdbid, meta_icon, rott_rotten, rott_certified, rott_fresh, rott_user_up, rott_user_down);
  }
  // Get Metacritic's Metascore & "Must-See" Badge. Link for Metacritic's User Score.
  if (GM_config.get("ratings_cfg_metacritic")) {
    getMetacriticRatings_IMDb(imdbid, meta_icon, meta_badge);
  }
  // Get Douban ratings.
  if (GM_config.get("ratings_cfg_douban")) {
    getDoubanRatings(imdbid, douban_icon);
  }
  // Get Allocine ratings.
  if (GM_config.get("ratings_cfg_allocine")) {
    getAllocineRatings(imdbid, allocine_icon);
  }
  // Get MyAnimeList & AniList ratings.
  if (GM_config.get("ratings_cfg_anime")) {
    if (Boolean($('[property="og:title"]').attr('content').match(/Animation/)) || Boolean($('li.ipl-inline-list__item').text().match(/Animation/))) { // check genre
      getAnimeRatings(imdbid, title_orig, title, anime_icon);
    } else {
      console.log("IMDb Scout Mod (externalRatings): Skipping getAnimeRatings() as genre isn't anime.");
    }
  }
}

function addRatingsElements(imdbid, title, title_orig) {
  const img_px = GM_config.get("ratings_img_px");
  // Main ratings table element
  const table = $('<table>').attr('id', 'scout_rating_table').attr('style', 'display: flex; justify-content:center; align-items:center; text-align:center;').append(
                  $('<tbody>').append(
                    $('<tr>')
  ));
  const hr = $('<hr />').css({'margin-top':'3px', 'margin-bottom':'3px'});
  // reference
  if ($('.titlereference-header').length) {
    $('#main').children().first().prepend(table);
    $('#scout_rating_table').after(hr);
  // redesign
  } else if ($('.ipc-page-section').length) {
    $('.ipc-page-section:eq(0)').parent().parent().prepend(table);
  } else {
    return;
  }

  // Metacritic ratings
  if (GM_config.get("ratings_cfg_metacritic")) {
    const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAElBMVEUAAABQUFDAwMDf399ubm6WlpaIZZrQAAAAAXRSTlMAQObYZgAAA3ZJREFUaN69mVFym0AQBVO6ARL8WxQ5gGulAyzGBwDL979K4tjmie2dmVKo8nxZpKbV83YFBH65dej/lv3PYbPqf9tVTw/29yggwq9nPfL1uwi9Xfv6GUTcz4r7owrzD2tHP2KIB3j/qMVQCPtvU/NZ7bSAEA9wy81dCaEhfIHcFDVCwRP43bBeQ0LRj+qCIQ7oB8FXYD8JnsKB+bFGRwH9PuHJFBjQNE3T+ndrKpgBtG8ppeuqdSwUIDCX/emz1uOLC6BASgWhq89gJfiS1spFjk81gQEDqC7KEYBYQENIgQAuYbqvq61wMARO6qYCAVyCtwSF+4XABGdjAihoBn+CLqW6wkiAImQEVGiLGbSLsYiGwlIFNMzQUjhqBq4BM6RCWwOcLcC1oqAQBMgGIG9muW7WgRHwl/SsNO4UjgQMBiDrTykoBC+C9k75VCoQkBvU/Vlgq6AQBCguhB/yawRQ2ISAXaDQBIBCVwIG7GEBoLBNkRl2CQAqlIC5NoBCpMLyDdAiUEDLSIWxAJg/wlxX0DIIwGuBZqBCJ4BWEechKOhguwUMmKCqoGMCYBuk5Cno0BZwRgSGgo4QwEWkwnpAG0H7iBlSQZ8dgKugj+MGAEtLQZ8CwPX1zVLIDuA0fwEu64aAwqVxACl9AbSgUMh1wLff5aSzQAcFFQDrIv0Tn7GrcwRQft8TQCEGpAIAhQBwAgAKNmCWgABQ8AEnABwF/Rb0a3wBAAo+oEuqOVLg+QDXo1ABpzTeBEhBWBVOqhuFeaOgg6oWp3VPQcd0GBcWR4ECvDJlV4ECBIQKMzYiLu+uwtXYiNoIngIEeIMxNJ4CBLSKulF1FSDQCaAUHYVSoDkCMLsKOB8tAAyNo6BihrrTtBVYHQF94yk4ESiERxTGCmB4RKEXADNAIYhAgOwpcAICzoECJzD+8x4rdABoHajgTsAHGFSIJ5BCU1F4NnYRANb9asNa+Binp4IEGKENmKUQCvTmkzApxAJSYAq2gABU6LMU/CXow+eRbVWg7SWAGbAdKwKjBKDAXwT7OwhQYTBOxXikCgUSuAICsHrGwH5MAAUQECAFqEAC+32F/sb85M8BqND/LpZgwjsSS0ESGV8vAVdBFrfpo3l6f+g1T1z7X1TtJOx+WRdV1B9X1B+XG+A+wk+9NiaB+nGh/Wde3hMSN/8BSXUWJsXAq8kAAAAASUVORK5CYII=";
    const url = "https://www.metacritic.com/search/" +title+ "/?page=1&category=2";
    const td1 = $('<td>').append(
                  $('<center>').append(
                    $('<a>').addClass('MetaCritRatingUrl').attr({'href': url, 'title':'Metacritic', 'target': '_blank'}).css('display','flex').append(
                      $('<img>').addClass('MetaCritRatingImg').attr('src', img).css({'height':img_px, 'width':img_px})
    )));
    $('#scout_rating_table').find('tr').append(td1);

    const td = $('<td>').attr('style', 'width:30px; vertical-align:middle;');
          td.append($('<span>').addClass('MetaCritRating scoutRatings').attr('title','Metascore').css('font-weight', 'bold').text("-"));
          td.append('<br>');
          td.append($('<span>').addClass('MetaUserRating scoutRatings').attr('title','Users score').css('font-weight', 'bold').text("-"));
          td.append('<br>');
    $('#scout_rating_table').find('tr').append(td);
  }

  // Rotten Tomatoes ratings
  if (GM_config.get("ratings_cfg_rotten")) {
    const img = "data:image/png;base64,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";
    const url = "https://www.rottentomatoes.com/search/?search=" + title;
    const td1 = $('<td>').append(
                  $('<center>').append(
                    $('<a>').addClass('RottCritRatingUrl').attr({'href': url, 'title':'Rotten Tomatoes', 'target': '_blank'}).css('display','flex').append(
                      $('<img>').addClass('RottCritRatingImg').attr('src', img).css({'height':img_px, 'width':img_px})
    )));
    $('#scout_rating_table').find('tr').append(td1);

    const td = $('<td>').attr('style', 'width:30px; vertical-align:middle;');
          td.append($('<span>').addClass('RottCritRating scoutRatings').attr('title','Tomatometer').css('font-weight', 'bold').text("-"));
          td.append('<br>');
    $('#scout_rating_table').find('tr').append(td);

    const img1 = "data:image/png;base64,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";
    const td3 = $('<td>').append(
                  $('<center>').append(
                    $('<a>').addClass('RottCritRatingUrl').attr({'href': url, 'title':'Rotten Tomatoes', 'target': '_blank'}).css('display','flex').append(
                      $('<img>').addClass('RottUserRatingImg').attr('src', img1).css({'height':img_px, 'width':img_px})
    )));
    $('#scout_rating_table').find('tr').append(td3);

    const td2 = $('<td>').attr('style', 'width:30px; vertical-align:middle;');
          td2.append($('<span>').addClass('RottUserRating scoutRatings').attr('title','Audience score').css('font-weight', 'bold').text("-"));
          td2.append('<br>');
    $('#scout_rating_table').find('tr').append(td2);
  }

  // Letterboxd ratings
  if (GM_config.get("ratings_cfg_letterboxd")) {
    const img = "data:image/png;base64,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";
    const url = "https://letterboxd.com/imdb/" + imdbid;
    const td1 = $('<td>').append(
                  $('<center>').append(
                    $('<a>').addClass('LetterboxdUserRatingUrl').attr({'href': url, 'title':'Letterboxd', 'target': '_blank'}).css('display','flex').append(
                      $('<img>').addClass('LetterboxdUserRatingImg').attr('src', img).css({'height':img_px, 'width':img_px})
    )));
    $('#scout_rating_table').find('tr').append(td1);

    const td = $('<td>').attr('style', 'width:30px; vertical-align:middle;');
          td.append($('<span>').addClass('LetterboxdUserRating scoutRatings').attr('title','Users rating').css('font-weight', 'bold').text("-"));
          td.append('<br>');
    $('#scout_rating_table').find('tr').append(td);
  }

  // Douban ratings
  if (GM_config.get("ratings_cfg_douban")) {
    const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAgMAAAC+UIlYAAAADFBMVEUAAABlZWX+/v6np6epfp6hAAAAAXRSTlMAQObYZgAAARhJREFUWMPt2D0OgjAUB/A6eATv4xEcKE0YcOcI3qNHcABjnDhKL8HuYqK1EuA988orUQeI/S8Q8iNtXstHK4SQTITLmgM7BzYcSEgLtI0VD7akC6QTGx4kYSADiQCBvPLmHMHPgbLeXGc1HxYCPLW8A/CPRhnBp8CiND5gJKSIIAIEmrnO6j8Ae/tw19Cje4H3ZJfUATRUNXkVKwTcqfYCA8AAoLcpAqBh6M50gKfhcSjKyQMOr29xm2wCKCmAy0AxwC0XfpAOoOm6S0HFAqifO6kpgBFQDNA90BRArVMHDAVQ63wKkBRAATMKbJubq1R7HKav6UE1Eh3BO7AjMfP6l1s6+HrFGlwUh5fVggfBpX14cyC4vfAEQ6sYUOFLXfsAAAAASUVORK5CYII=";
    const url = "https://search.douban.com/movie/subject_search?search_text=tt" +imdbid;
    const td1 = $('<td>').append(
                  $('<center>').append(
                    $('<a>').addClass('DoubanUserRatingUrl').attr({'href': url, 'title':'Douban', 'target': '_blank'}).css('display','flex').append(
                      $('<img>').addClass('DoubanUserRatingImg').attr('src', img).css({'height':img_px, 'width':img_px})
    )));
    $('#scout_rating_table').find('tr').append(td1);

    const td = $('<td>').attr('style', 'width:30px; vertical-align:middle;');
          td.append($('<span>').addClass('DoubanUserRating scoutRatings').attr('title','Users rating').css('font-weight', 'bold').text("-"));
          td.append('<br>');
    $('#scout_rating_table').find('tr').append(td);
  }

  // Allocine ratings
  if (GM_config.get("ratings_cfg_allocine")) {
    const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2BAMAAADviXoiAAAAGFBMVEUAAAAzMzPr6+vExMSdnZ1WVlaCgoJubm4HXAuhAAAAAXRSTlMAQObYZgAAA45JREFUWMPdmU1T2zAQhjv8A+OPXNNMoeeMnPgcPJCzG5q7G1LObtLp329JLL/Su5JVrBt7acrwoN13P5CWTx/KbhZXm7+bXJg2mWQ67C3bfCrKcBhleCrKcBhlOIhOhhfj9r/otkneLD8THPb4mMD25PX4sfeJbT9wcAh9TNieAY97vEmkZeNeE+qDx469S9z2beRgyGRbfmhtwfzHMjqr1bL/6D3YE+xeKVVRyB6WPT6rf1ZSmj0udxSqulij/Xc77dR4p67WktbOYxubTXt2OTiCg5nl1GY9WyHJDhbRChZiIWI6FiITC7Eg9ZxZ5Ja1UnAoE6xdUrnW9aTZ/qeiuJj9rEupXvWflLYV2FuwhsstSun6qRjYNdgCThtsX0rw8aAGS2DEIrmzGuI8K1jHfWyzG8vL1+/ny79PP2s4YigtXc4U2bEXYOVwGuyXS7SEPl6HpCVW8qBZylAfLtViDbGQJStcVAOXxM4SKxNsY3Qdt0BqiZWDhVQkFgQ6ecW60T1EYsHPoYXRS2BRzC6XC/wHYjnYg8PlHVqYWd0I+D64jMS13A6WzCzWMGcw7yC0yeIbtVVGhkgsyUIsHLTvtASlk9XVTGK111CP2pOGKnqQ+aucb43RkyTWr4vQmr2TM5lLdEntP0d6WazKCIDFumVWm1kZ1BlBttYu8ihoAizE0uML1oXZFLJmNAmCbIFTdha7CrAIshHsOsBCrEZMLxVkNZFItguzqY/d+FgWC+mCWGE2H9j8hcViVtxwagiT1yZMvYAeJLEQPImFHkTvk1gNWlKI9cAzB5b52JVnXrFYHVghlpyxMO0fsyXPWMx2a94tmUUgBVgk2GzhysW2Y7+PAJQudilZvofOIFZqsZX4HSrfJzohzJbioiOFPuiDwUKs3HVXoXlXdtaExhRjlsW62NPr+a0i/ryAxR2J72YQC7Y1hu2R7mYesSAPgmhIKnfANfVO3juAcMFy+2PaDD19pDuw1+mUW6fo6GYGltuhoJb13/lllnJUMBkyBJacrmnM0Btn9G11IpbfVsze+5+g/KYbfUsWrBW/JeUblsUq8ePoDSvfziTWGl+gt7PnzQ6xtp79SGhXkKryNyDaFQR2FBn85VVUeDfiXwcFdzJscicT3gXJ5VnMDipi9xWzc4vY9cXsGON3m/E71fhdbvwOGXD84jt+4R6/6AcahhmN+5vINDrib0Afyf4CrepxXp43oBkAAAAASUVORK5CYII=";
    const url = "https://www.allocine.fr/rechercher/?q=" +title_orig;
    const td1 = $('<td>').append(
                  $('<center>').append(
                    $('<a>').addClass('AllocineUserRatingUrl').attr({'href': url, 'title':'Allocine', 'target': '_blank'}).css('display','flex').append(
                      $('<img>').addClass('AllocineUserRatingImg').attr('src', img).css({'height':img_px, 'width':img_px})
    )));
    $('#scout_rating_table').find('tr').append(td1);

    const td = $('<td>').attr('style', 'width:30px; vertical-align:middle;');
          td.append($('<span>').addClass('AllocineCritRating scoutRatings').attr('title','Critics').css('font-weight', 'bold').text("-"));
          td.append('<br>');
          td.append($('<span>').addClass('AllocineUserRating scoutRatings').attr('title','Users').css('font-weight', 'bold').text("-"));
          td.append('<br>');
    $('#scout_rating_table').find('tr').append(td);
  }

  // MyAnimeList & AniList ratings
  if (GM_config.get("ratings_cfg_anime")) {
    const img = "data:image/png;base64,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";
    const td1 = $('<td>').append(
                  $('<center>').append(
                    $('<a>').addClass('AnimeUserRatingUrl').attr({'title':'Anime', 'target': '_blank'}).css('display','flex').append(
                      $('<img>').addClass('AnimeUserRatingImg').attr('src', img).css({'height':img_px, 'width':img_px})
    )));
    $('#scout_rating_table').find('tr').append(td1);

    const td = $('<td>').attr('style', 'width:30px; vertical-align:middle;');
          td.append($('<span>').addClass('AnimeCritRating scoutRatings').attr('title','MyAnimeList').css('font-weight', 'bold').text("-"));
          td.append('<br>');
          td.append($('<span>').addClass('AnimeUserRating scoutRatings').attr('title','AniList').css('font-weight', 'bold').text("-"));
          td.append('<br>');
    $('#scout_rating_table').find('tr').append(td);
  }
}

function getMetacriticRatings_IMDb(imdbid, meta_icon, meta_badge) {
  console.log("IMDb Scout Mod (getMetacriticRatings_IMDb): Started.");
  const url = "https://www.imdb.com/title/tt" +imdbid+ "/criticreviews";
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 20000,
    url:    url,
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");
      let meta_crit, meta_count, meta_url;
      if ($(result).find('[data-testid=critic-reviews-title]').length) {
        const x = $(result).find('[data-testid=critic-reviews-title]').children().first().text().trim();
        if ($.isNumeric(x)) {
          meta_crit = x;
        } else {
          meta_crit = "-";
        }
        const y = $(result).find('[data-testid=critic-reviews-title]').children().eq(1).children().eq(1).text().trim().split(" ")[0];
        if ($.isNumeric(y)) {
          meta_count = y;
        } else {
          meta_count = "-";
        }
        meta_url = $(result).find('[data-testid=critic-reviews-title]').find('[href]').attr("href");
        if (meta_url != undefined && meta_url.match("www.metacritic.com")) {
          meta_url = meta_url.split("?ftag")[0];
          getMetacritic_User(meta_url);
        }
      } else {
        console.log("IMDb Scout Mod (Metascore from IMDb): Score not found. Starting getMetacriticRatings.");
        getMetacriticRatings(imdbid, meta_icon, meta_badge);
        return;
      }
      //console.log("!!!!!!!!!!!!!: " + meta_crit);
      //console.log("!!!!!!!!!!!!!: " + meta_count);
      //console.log("!!!!!!!!!!!!!: " + meta_url);
      $('.MetaCritRatingImg').attr('src', meta_icon);
      if (meta_url.match("metacritic")) {
        $('.MetaCritRatingUrl').attr('href', meta_url);
      }
      $('.MetaCritRating').text(meta_crit);
      if (meta_crit > 80 && meta_count > 14) {
        $('.MetaCritRatingImg').attr('src', meta_badge);
      }
      ratingsColor();
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Metascore from IMDb): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Metascore from IMDb): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Metascore from IMDb): Request timed out.");
    }
  });
}

function getMetacritic_User(url) {
  console.log("IMDb Scout Mod (getMetacritic_User): Started.");
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 10000,
    url:    url,
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");
      let meta_user;
      if ($(result).find('.c-productScoreInfo_scoreNumber span:eq(1)').length) {
        const x = $(result).find('.c-productScoreInfo_scoreNumber span:eq(1)').text().trim();
        if ($.isNumeric(x)) {
          meta_user = x *10;
        } else {
          console.log("IMDb Scout Mod (getMetacritic_User): User rating not numeric or some code error.");
          return;
        }
      } else {
        console.log("IMDb Scout Mod (getMetacritic_User): User rating not found or some code error.");
        return;
      }
      $('.MetaUserRating').text(meta_user);
      ratingsColor();
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Metacritic user): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Metacritic user): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Metacritic user): Request timed out.");
    }
  });
}

async function getMetacriticRatings(imdbid, meta_icon, meta_badge) {
  let metacritic_id = await getMetacriticID1(imdbid);
  if (metacritic_id == "00000000") {
    console.log("IMDb Scout Mod (Metacritic): ID not found on Wikidata.");
    return;
  }
  const meta_url = "https://www.metacritic.com/" +metacritic_id;

  GM.xmlHttpRequest({
    method:  "GET",
    timeout: 10000,
    url:     meta_url,
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");
      let meta_crit, meta_user;
      if ($(result).find('.c-productScoreInfo_scoreNumber span:eq(0)').length) {
        const x = $(result).find('.c-productScoreInfo_scoreNumber span:eq(0)').text().trim();
        if (Boolean(x.match('\\.'))) { // fixes: if meta_crit missing then it picks meta_user element where score is with dot
          meta_crit = "-";
        } else {
          if ($.isNumeric(x)) {
            meta_crit = x;
          } else {
            meta_crit = "-";
          }
        }
      }
      if ($(result).find('.c-productScoreInfo_scoreNumber span:eq(1)').length) {
        const x = $(result).find('.c-productScoreInfo_scoreNumber span:eq(1)').text().trim();
        if ($.isNumeric(x)) {
          meta_user = x *10;
        } else {
          meta_user = "-";
        }
      }
      //console.log("!!!!!!!!!!!!!: " + meta_crit);
      //console.log("!!!!!!!!!!!!!: " + meta_count);
      //console.log("!!!!!!!!!!!!!: " + meta_url);
      if ($(result).find('.must-see').length) {
        $('.MetaCritRatingImg').attr('src', meta_badge);
      } else {
        $('.MetaCritRatingImg').attr('src', meta_icon);
      }
      $('.MetaCritRatingUrl').attr('href', meta_url);
      $('.MetaCritRating').text(meta_crit);
      $('.MetaUserRating').text(meta_user);
      ratingsColor();
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Metacritic): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Metacritic): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Metacritic): Request timed out.");
    }
  });
}

function getLetterboxdRatings(imdbid, lboxd_icon, lboxd_cust) {
  const url = "https://letterboxd.com/imdb/" + imdbid;
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 10000,
    url:    url,
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");

      let user_rating;
      if ($(result).find('meta[content="Average rating"]').length) {
        const x = $(result).find('meta[content="Average rating"]').next().attr('content');
        const y = x.split("out")[0].replace( /^\D+/g, '').trim() * 20;
        const z = Math.round(y);
        user_rating = z;
        $('.LetterboxdUserRatingImg').attr('src', lboxd_icon);
        $('.LetterboxdUserRating').text(user_rating);
        ratingsColor();
      // If there is no score then try to get raw average rating with another func.
      } else if ($(result).find('meta[property="og\:url"]').length && !String(response.responseText).match('No-one has added')) {
        const url = $(result).find('meta[property="og\:url"]').attr('content');
        getLetterboxdRatingsCustom(url, lboxd_cust);
      }
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Letterboxd Ratings 1): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Letterboxd Ratings 1): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Letterboxd Ratings 1): Request timed out.");
    }
  });
}

function getLetterboxdRatingsCustom(url, lboxd_cust) {
  const newurl = url + "ratings";
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 10000,
    url:    newurl,
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");

      let user_rating;
      if ($(result).find('[class*=rated-large-]').length) {
        let ratings_array = [];
        ratings_array.push($(result).find('.rated-large-1').parentsUntil('.section').find('li').length);
        ratings_array.push($(result).find('.rated-large-2').parentsUntil('.section').find('li').length *2);
        ratings_array.push($(result).find('.rated-large-3').parentsUntil('.section').find('li').length *3);
        ratings_array.push($(result).find('.rated-large-4').parentsUntil('.section').find('li').length *4);
        ratings_array.push($(result).find('.rated-large-5').parentsUntil('.section').find('li').length *5);
        ratings_array.push($(result).find('.rated-large-6').parentsUntil('.section').find('li').length *6);
        ratings_array.push($(result).find('.rated-large-7').parentsUntil('.section').find('li').length *7);
        ratings_array.push($(result).find('.rated-large-8').parentsUntil('.section').find('li').length *8);
        ratings_array.push($(result).find('.rated-large-9').parentsUntil('.section').find('li').length *9);
        ratings_array.push($(result).find('.rated-large-10').parentsUntil('.section').find('li').length *10);

        const voters = $(result).find('.film-rating-group').find('li').length;
        const average = (eval(ratings_array.join("+")) / voters) *10;
        user_rating = Math.round(average);
      } else {
        return;
      }
      $('.LetterboxdUserRatingImg').attr('src', lboxd_cust);
      $('.LetterboxdUserRating').attr('title', 'Custom raw average');
      $('.LetterboxdUserRating').text(user_rating);
      ratingsColor();
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Letterboxd Ratings 2): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Letterboxd Ratings 2): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Letterboxd Ratings 2): Request timed out.");
    }
  });
}

function getRTandMetaRatings_OMDb(key, imdbid, meta_icon, rott_rotten, rott_certified, rott_fresh, rott_user_up, rott_user_down) {
  const url = "http://www.omdbapi.com/?i=tt" +imdbid+ "&apikey=" +key+ "&plot=full&tomatoes=true";
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 10000,
    url:    url,
    onload: function(response) {
      if (String(response.responseText).match("limit reached!")) {
        GM.notification("Limit reached! \nSet OMDb API key in settings. \nGet it at www.omdbapi.com .", "IMDb Scout Mod (RT/MC Ratings)");
        return;
      }
      let responseJSON, rott_crit, meta_crit;
      if (response.status == 200) {
        responseJSON = JSON.parse(response.responseText);
        GM.setValue("OMDb_last", JSON.stringify(responseJSON));
        if (responseJSON['Response'] == "False" || responseJSON['Ratings'].length < 1 || responseJSON['Type'] == "series" || responseJSON['Type'] == "episode") {
          console.log("IMDb Scout Mod (OMDb Ratings): Ratings not found. Starting getRotten.");
          const rott_url = '00000000';
          getRotten(rott_url, rott_rotten, rott_certified, rott_fresh, rott_user_up, rott_user_down, imdbid);
          return;
        }
        const rott_url = responseJSON['tomatoURL'];
        if (rott_url.match("rottentomatoes")) {
          getRotten(rott_url, rott_rotten, rott_certified, rott_fresh, rott_user_up, rott_user_down, imdbid);
          $('.RottCritRatingUrl').attr('href', rott_url);
        }
        let x;
        if (responseJSON['Ratings'][0]['Source'] == 'Rotten Tomatoes') {
          x = parseInt(responseJSON['Ratings'][0]['Value'], 10);
        } else if (responseJSON['Ratings'].length > 1) {
            if (responseJSON['Ratings'][1]['Source'] == 'Rotten Tomatoes') {
              x = parseInt(responseJSON['Ratings'][1]['Value'], 10);
            } else if (responseJSON['Ratings'].length > 2) {
               if (responseJSON['Ratings'][2]['Source'] == 'Rotten Tomatoes') {
                 x = parseInt(responseJSON['Ratings'][2]['Value'], 10);
               }
            }
        }
        const y = parseInt(responseJSON['Metascore'], 10);
        if ($.isNumeric(x)) {
          rott_crit = x;
        } else {
          rott_crit = "-";
        }
        if ($.isNumeric(y)) {
          meta_crit = y;
        } else {
          meta_crit = "-";
        }
      } else {
        return;
      }
      if (rott_crit <= 59) {
        $('.RottCritRatingImg').attr('src', rott_rotten);
      } else if (rott_crit > 59) {
        $('.RottCritRatingImg').attr('src', rott_fresh);
      }
      if (rott_crit >= 0) {
        $('.RottCritRating').text(rott_crit);
      }
// Metacritic disabled in this func as it can overwrite "must see" badge [v19.2]
//       if (meta_crit >= 0) {
//         $('.MetaCritRatingImg').attr('src', meta_icon);
//         $('.MetaCritRating').text(meta_crit);
//       }
      ratingsColor();
    },
    onerror: function() {
      console.log("IMDb Scout Mod (OMDb Ratings): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (OMDb Ratings): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (OMDb Ratings): Request timed out.");
    }
  });
}

async function getRotten(rott_url, rott_rotten, rott_certified, rott_fresh, rott_user_up, rott_user_down, imdbid) {
  console.log("IMDb Scout Mod (getRotten): Started.");
  if (rott_url == "00000000") {
    let rotten_id = await getRottenID1(imdbid);
    if (rotten_id == "00000000") {
      console.log("IMDb Scout Mod (Rotten Tomatoes): ID not found on Wikidata.");
      return;
    }
    const rt_c = (rotten_id.match(/\//g) || []).length;
    if (rotten_id.match("tv") && rt_c < 3) {
      rott_url = "https://www.rottentomatoes.com/" +rotten_id+ "/s01";
    } else {
      rott_url = "https://www.rottentomatoes.com/" +rotten_id;
    }
    $('.RottCritRatingUrl').attr('href', rott_url);
  }
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 20000,
    url:     rott_url,
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");

      let rott_state, rott_user, rott_crit;
      if ($(result).find('#media-scorecard-json').length) {
        const scoreTxt = $(result).find('#media-scorecard-json').text();
        const scoreJsn = JSON.parse(scoreTxt);
        const x = scoreJsn.audienceScore.score;
        const y = scoreJsn.criticsScore.score;

        if (scoreJsn.criticsScore.certified == true) {
          rott_state = "certified";
        } else if (scoreJsn.criticsScore.sentiment == "POSITIVE") {
          rott_state = "fresh";
        } else {
          rott_state = "rotten";
        }

        if ($.isNumeric(x)) {
          rott_user = x;
        } else {
          rott_user = "-";
        }
        if ($.isNumeric(y)) {
          rott_crit = y;
        } else {
          rott_crit = "-";
          rott_state = "none";
        }
      } else {
        console.log("IMDb Scout Mod (Rotten Tomatoes): Elements not found.");
        return;
      }

      if (rott_crit >= 0) {
        $('.RottCritRating').text(rott_crit);
      }
      if (rott_user >= 0) {
        $('.RottUserRating').text(rott_user);
      }
      if (rott_state.match("certified")) {
        $('.RottCritRatingImg').attr('src', rott_certified);
      } else if (rott_state.match("rotten")) {
        $('.RottCritRatingImg').attr('src', rott_rotten);
      } else if (rott_state.match("fresh")) {
        $('.RottCritRatingImg').attr('src', rott_fresh);
      }
      if (rott_user > 59) {
        $('.RottUserRatingImg').attr('src', rott_user_up);
      } else if (rott_user <= 59 && rott_user >= 0) {
        $('.RottUserRatingImg').attr('src', rott_user_down);
      }
      ratingsColor();
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Rotten Tomatoes): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Rotten Tomatoes): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Rotten Tomatoes): Request timed out.");
    }
  });
}

async function getDoubanRatings(imdbid, douban_icon) {
  let id = await getDoubanID0_1(imdbid);
  if (id == "00000000") {
    id = await getDoubanID0_2(imdbid);
  }
  if (id == "00000000") {
    id = await getDoubanID1(imdbid);
  }
  if (id == "00000000") {
    id = await getDoubanID2(imdbid);
  }
  if (id == "00000000") {
    id = await getDoubanID3(imdbid);
  }
  if (id == "00000000") {
    return;
  }
  const url = "https://movie.douban.com/subject/" +id;
  $('.DoubanUserRatingUrl').attr('href', url);
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 20000,
    url:    url,
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");

      let user_rating;
      if ($(result).find('.rating_num').length) {
        const x = $(result).find('.rating_num').text();
        if ($.isNumeric(x)) {
          user_rating = x *10;
          $('.DoubanUserRating').text(user_rating);
          $('.DoubanUserRatingImg').attr('src', douban_icon);
          ratingsColor();
        }
      }
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Douban): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Douban): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Douban): Request timed out.");
    }
  });
}

//www.allocine.fr/film/fichefilm_gen_cfilm=118831.html
async function getAllocineRatings(imdbid, allocine_icon) {
  const id = await getAllocineID(imdbid);
  const is_film = await GM.getValue("AllocineID_last_is_film");
  let url;
  if (id == "00000000") {
    return;
  } else if (is_film) {
    url = "https://www.allocine.fr/film/fichefilm_gen_cfilm=" +id+ ".html";
  } else {
    url = "https://www.allocine.fr/series/ficheserie_gen_cserie=" +id+ ".html";
  }
  $('.AllocineUserRatingUrl').attr('href', url);
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 20000,
    url:    url,
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");
      const resultStr = String(response.responseText);

      let rating1, rating2;
      if ($(result).find('.stareval-note').length) {
        const x = $(result).find('.stareval-note:eq(0)').text().replace(',','.') *20;
        const y = $(result).find('.stareval-note:eq(1)').text().replace(',','.') *20;
        if ($.isNumeric(x)) {
          rating1 = x;
        } else {
          rating1 = "-";
        }
        if ($.isNumeric(y)) {
          rating2 = y;
        } else {
          rating2 = "-";
        }
        if (rating1 > 0 || rating2 > 0) {
          $('.AllocineUserRatingImg').attr('src', allocine_icon);
        }
        if (resultStr.match('> Presse <')) {
          $('.AllocineCritRating').text(rating1);
          $('.AllocineUserRating').text(rating2);
        } else {
          $('.AllocineUserRating').text(rating1);
        }
        ratingsColor();
      }
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Allocine): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Allocine): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Allocine): Request timed out.");
    }
  });
}

async function getAnimeRatings(imdbid, title_orig, title, anime_icon) {
  const id = await getAnimeID(imdbid);
  const myanimelist_id = id[0];
  const anilist_id     = id[1];
  const year           = document.title.replace(/^(.+) \((\D*|)(\d{4})(.*)$/gi, '$3').match(/\b\d{4}\b/g)?.join(" ") || '';

  if (myanimelist_id == "00000000" || anilist_id == "00000000" || myanimelist_id == undefined || anilist_id == undefined) {
    var titles = await getTMDb_original_title(imdbid);
        titles.push(title_orig);
        titles.push(title);
  }
  getMyanimelistRatings(myanimelist_id, anime_icon, titles, year);
  getAnilistRatings(anilist_id, anime_icon, titles, year);
}

async function getMyanimelistRatings(myanimelist_id, anime_icon, titles, year, run = 1) {
  // https://github.com/jikan-me/jikan
  // https://docs.api.jikan.moe
  await sleep(500);
  let url;
  if (myanimelist_id == "00000000" || myanimelist_id == undefined) {
    console.log("IMDb Scout Mod (MyAnimeList): Trying method by title.");
    var [engTitle, originalTitle, title_orig, title] = titles;
    var xTitle = (run == 2) ? engTitle.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : originalTitle;
    var tmdb_failed = (originalTitle !== "00000000" && originalTitle !== undefined) ? false : true;
    xTitle = (tmdb_failed || run == 3) ? title_orig.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : xTitle;
    xTitle = (               run == 4) ? title     .normalize("NFD").replace(/[\u0300-\u036f]/g, "") : xTitle;

    const is_tv      = Boolean($('title').text().match(/Podcast Series|TV Mini Series|TV Series|Série télévisée|Fernsehserie|टीवी सीरीज़|Serie TV|Série de TV|Serie de TV/));
    const start_date = year + "-01-01";
    const end_date   = parseInt(year) + 1 + "-01-01";
    url = is_tv ? "https://api.jikan.moe/v4/anime?q=" +encodeURIComponent(xTitle)+ "&start_date=" +start_date : "https://api.jikan.moe/v4/anime?q=" +encodeURIComponent(xTitle)+ "&start_date=" +start_date+ "&end_date=" +end_date;
    console.log("IMDb Scout Mod (MyAnimeList): jikan API URL -> " + url);
  } else {
    url = "https://api.jikan.moe/v4/anime/" +myanimelist_id;
  }

  GM.xmlHttpRequest({
    method: "GET",
    timeout: 10000,
    url:    url,
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
    onload: function(response) {
      if (response.status == 200) {
        if (myanimelist_id !== "00000000" && myanimelist_id !== undefined) {
          const result = JSON.parse(response.responseText);
          const rating = result.data.score;
          if ($.isNumeric(rating) && rating > 0) {
            $('.AnimeUserRatingImg').attr('src', anime_icon);
            $('.AnimeCritRating').text(Math.round(rating*10));
            ratingsColor();
            $('.AnimeCritRating').wrap(`<a href="${result.data.url}"></a>`);
          }
        } else {
          const result = JSON.parse(response.responseText);
          let is_found = false;

          for (xx of result.data) {
            if (xx.year == parseInt(year) || !xx.year) {
              for (yy of xx.titles) {
                if (yy.title.toLowerCase() == xTitle.toLowerCase()) {
                  is_found = true;
                  break;
                }
              }
              const rating = xx.score;
              if (is_found && $.isNumeric(rating) && rating > 0) {
                $('.AnimeUserRatingImg').attr('src', anime_icon);
                $('.AnimeCritRating').text(Math.round(rating*10));
                ratingsColor();
                $('.AnimeCritRating').wrap(`<a href="${xx.url}"></a>`);
                return;
              } else {
                  is_found = false;
              }
            }
          }
          if(run == 1 && !tmdb_failed){
            console.log("IMDb Scout Mod (MyAnimeList): Nothing found with TMDb's Original title. Retrying with TMDb's English title.");
            getMyanimelistRatings(myanimelist_id, anime_icon, titles, year, run = 2)
          } else if (run == 2 && !tmdb_failed) {
            console.log("IMDb Scout Mod (MyAnimeList): Nothing found with TMDb's English title. Retrying with IMDb's Original title.");
            getMyanimelistRatings(myanimelist_id, anime_icon, titles, year, run = 3)
          } else if (run == 3 && !tmdb_failed) {
            console.log("IMDb Scout Mod (MyAnimeList): Nothing found with IMDb's Original title. Retrying with IMDb's title.");
            getMyanimelistRatings(myanimelist_id, anime_icon, titles, year, run = 4)
          } else if (run == 1 && tmdb_failed) {
            console.log("IMDb Scout Mod (MyAnimeList): Nothing found with IMDb's Original title. Retrying with IMDb's title.");
            getMyanimelistRatings(myanimelist_id, anime_icon, titles, year, run = 4)
          } else {
            console.log("IMDb Scout Mod (MyAnimeList): Nothing found with IMDb's title.");
          }
        }
      } else {
          GM.notification("HTTP Error: " +response.status, "IMDb Scout Mod (MyAnimeList)");
          console.log("IMDb Scout Mod (MyAnimeList): HTTP Error: " +response.status);
      }
    },
    onerror: function() {
      console.log("IMDb Scout Mod (MyAnimeList): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (MyAnimeList): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (MyAnimeList): Request timed out.");
    }
  });
}

async function getAnilistRatings(anilist_id, anime_icon, titles, year, run = 1) {
  // https://anilist.gitbook.io/anilist-apiv2-docs
  // https://anilist.github.io/ApiV2-GraphQL-Docs
  await sleep(500);
  let query, variables;
  if (anilist_id == "00000000" || anilist_id == undefined) {
    console.log("IMDb Scout Mod (AniList): Trying method by title.");
    var [engTitle, originalTitle, title_orig, title] = titles;
    var tmdb_failed = (originalTitle !== "00000000" && originalTitle !== undefined) ? false : true;
    var xTitle = (run == 2) ? engTitle.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : originalTitle;
    xTitle = (tmdb_failed || run == 3) ? title_orig.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : xTitle;
    xTitle = (               run == 4) ? title     .normalize("NFD").replace(/[\u0300-\u036f]/g, "") : xTitle;

    const start_date = parseInt(year + "0101");
    const end_date   = parseInt(parseInt(year) + 1 + "0101");

    query = `query ($search: String, $startDate: FuzzyDateInt, $endDate: FuzzyDateInt) { Media (search: $search, type: ANIME, startDate_greater: $startDate, startDate_lesser: $endDate) { id averageScore meanScore title { romaji english native } startDate { year } } }`;
    variables = { search: xTitle, startDate: start_date, endDate: end_date };
  } else {
    query = `query ($id: Int) { Media (id: $id, type: ANIME) { id, averageScore, meanScore }}`;
    variables = { id: anilist_id };
  }
  const post_data = JSON.stringify({ query: query, variables: variables });
  GM.xmlHttpRequest({
    method: "POST",
    timeout: 10000,
    url:    "https://graphql.anilist.co",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    data: post_data,
    onload: function(response) {
      if (response.status == 200) {
        const result = JSON.parse(response.responseText);
        // note: averageScore is weighted nonsense https://anilist.co/forum/thread/2845
        const rating = result.data.Media.meanScore;
        if ($.isNumeric(rating) && rating > 0) {
          $('.AnimeUserRatingImg').attr('src', anime_icon);
          $('.AnimeUserRating').text(rating);
          ratingsColor();
          $('.AnimeUserRating').wrap(`<a href="https://anilist.co/anime/${result.data.Media.id}"></a>`)
        }
      } else if (response.status == 404 && run == 1 && !tmdb_failed) {
        console.log("IMDb Scout Mod (AniList): Nothing found with TMDb's Original title. Retrying with TMDb's English title.");
        getAnilistRatings(anilist_id, anime_icon, titles, year, run = 2)
      } else if (response.status == 404 && run == 2 && !tmdb_failed) {
        console.log("IMDb Scout Mod (AniList): Nothing found with TMDb's English title. Retrying with IMDb's Original title.");
        getAnilistRatings(anilist_id, anime_icon, titles, year, run = 3)
      } else if (response.status == 404 && run == 3 && !tmdb_failed) {
        console.log("IMDb Scout Mod (AniList): Nothing found with IMDb's Original title. Retrying with IMDb's title.");
        getAnilistRatings(anilist_id, anime_icon, titles, year, run = 4)
      } else if (response.status == 404 && run == 1 && tmdb_failed) {
        console.log("IMDb Scout Mod (AniList): Nothing found with IMDb's Original title. Retrying with IMDb's title.");
        getAnilistRatings(anilist_id, anime_icon, titles, year, run = 4)
      } else if (response.status == 404) {
        console.log("IMDb Scout Mod (AniList): Nothing found with IMDb's title.");
      } else {
        GM.notification("HTTP Error: " +response.status, "IMDb Scout Mod (AniList)");
        console.log("IMDb Scout Mod (AniList): HTTP Error: " +response.status);
      }
    },
    onerror: function() {
      console.log("IMDb Scout Mod (AniList): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (AniList): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (AniList): Request timed out.");
    }
  });
}

function ratingsColor() {
  if (GM_config.get("ratings_cfg_color")) {
    const ref_high = parseInt(GM_config.get('ratings_cfg_color_scheme').split(',')[0], 10);
    const ref_low  = parseInt(GM_config.get('ratings_cfg_color_scheme').split(',')[1], 10);
    $( ".scoutRatings").each(function(index) {
      if ($(this).text() > ref_high) {
        $(this).css('color', '#00e600');
      } else if ($(this).text() <= ref_high && $(this).text() > ref_low) {
        $(this).css('color', '#f5c20a');
      } else if ($(this).text() <= ref_low && $(this).text() >= 0) {
        $(this).css('color', '#e60000');
      }
    });
  }
}

//==============================================================================
//    Dark styles for Reference View
//==============================================================================

function darkReferenceStyles() {
  if (!GM_config.get('dark_reference_view') || !onReferencePage) {
    return;
  }
  console.log("IMDb Scout Mod (darkReferenceStyles): Started.");
  // www.w3schools.com/colors/colors_picker.asp
  // background color
  addGlobalStyles('#nav-search-form {background: #d9d9d9}');
  addGlobalStyles('#wrapper, #pagecontent, .recently-viewed {background-color: #000000}');
  addGlobalStyles('.aux-content-widget-2 {background: #191919}');
  addGlobalStyles('#imdbscout_header, #imdbscoutsecondbar_header, #imdbscoutthirdbar_header, .article, .cast_list tr, .titlereference-list tr {background-color: #191919 !important}');
  addGlobalStyles('.add-image-container {background-color: #262626}');
  // border color
  addGlobalStyles('.article, .aux-content-widget-2, .cast_list tr, .titlereference-list tr, .recently-viewed .item {border-color: #323232 !important}');
  addGlobalStyles('hr, .answers-widget__question, .answers-widget__see-more {border-color: #666666}');
  addGlobalStyles('.recently-viewed {border-color: #000000}');
  // font color
  addGlobalStyles('h3[itemprop="name"], .titlereference-title-year a {color: #f5c20a}');
  addGlobalStyles('.titlereference-original-title-label {color: #cc0000}');
  addGlobalStyles('.ipl-rating-star__rating {font-weight: bold; color: #00b300;}');
  addGlobalStyles('.article, .aux-content-widget-2, .cast_list tr td {color: #cccccc !important}');
  addGlobalStyles('.ipl-list-title, #sidebar h4, .ipl-list-title::after {color: #c49b08}');
  addGlobalStyles('.ipl-list-title::after {border-color: #7a6105}');
}

function addGlobalStyles(css) {
  var head, style;
  head = document.getElementsByTagName('head')[0];
  if (!head) { return; }
  style = document.createElement('style');
  style.className = 'IMDbScoutStyles';
  style.innerHTML = css;
  head.appendChild(style);
}

//==============================================================================
//    Compact mode for Reference View
//==============================================================================

function compactReferenceStyles() {
  if (!GM_config.get('compact_reference_view') || !onReferencePage) {
    return;
  }
  console.log("IMDb Scout Mod (compactReferenceStyles): Started.");

  addGlobalStyles('#main {margin-left:25px !important}');
  addGlobalStyles('#sidebar {margin-right:25px !important}');
  addGlobalStyles('#content-2-wide {margin-top:5px !important}');
  addGlobalStyles('.aux-content-widget-2 {margin-top:0px; padding-top:0px !important}');

  addGlobalStyles('#imdbHeader {width:960px; display:flex; justify-content:center; align-items:center; margin:auto !important}');
  document.getElementById('styleguide-v2').id = 'styleguide-v2x'; // this loops document.events.on('bodyloaded' event till this element is found
  addGlobalStyles('body#styleguide-v2x {background-color: #000000 !important; margin-top:0px}');
}

function compactReferenceElemRemoval() {
  // Replace urls to fullcredits  // Removed in v22.0 as imdb removed these pages
//   if (GM_config.get('fullcredits_reference_view')) {
//     $('a[href^="/name/nm"]').attr('href', (n, old) => old.split('/?ref_=')[0] + '/fullcredits');
//   }

  if (!GM_config.get('compact_reference_view') || !onReferencePage) {
    return;
  }
  console.log("IMDb Scout Mod (compactReferenceElemRemoval): Started.");

  // Check if the Styles funcs were executed as it may not happened at 'bodyloaded' event on very slow PCs + Chrome
  if (GM_config.get('dark_reference_view')) {
    if (!$('.IMDbScoutStyles').length) {
      console.log("IMDb Scout Mod (Warning): Slow device!");
      darkReferenceStyles();
      compactReferenceStyles();
    }
  }

  $('.titlereference-section-credits').nextUntil('.titlereference-section-storyline').remove();
  $('.titlereference-section-credits').remove();
  if (Boolean($('.titlereference-section-storyline .ipl-zebra-list__item').first().text().match("Plot Summary"))) {
    $('.titlereference-section-storyline .ipl-zebra-list__item').first().nextUntil('section').remove();
  } else {
    $('.titlereference-section-storyline').remove();
  }
  $('.titlereference-section-did-you-know').remove();
  $('#contribute-main-section').remove();
  $('.recently-viewed').remove();

  // Inject Top Review
  if ($('.titlereference-overview-review-list').length) {
    if ($('.titlereference-overview-review-list').text().match('User')) {
      if (GM_config.get("helpful_reviews_spoilers")) {
        getIMDbBestReview(use_spoilers=true);
      } else {
        getIMDbBestReview();
      }
    }
  }

  // Inject Box Office (graphQL API)
  insertNewBoxOffice();
}

function insertNewBoxOffice() {
  const x = `<section class="titlereference-section-box-office_scout">
              <h4 class="ipl-header__content ipl-list-title">Box Office (graphQL API)</h4>
              <table class="titlereference-list ipl-zebra-list">
                <tbody>
                  <tr class="ipl-zebra-list__item">
                    <td class="ipl-zebra-list__label">Worldwide Gross</td>
                    <td class="scout_box_office_worldwide_gross">
                        scout_placeholder
                    </td></tr></tbody></table></section>`

  const y = jQuery.parseHTML(x);
  $('section.article').find('section').last().after(y);

  let imdbid = document.URL.match(/\/tt([0-9]+)/)[1];
      imdbid = "tt" + imdbid;

  const GraphQLReq = {
    query: `
      query {
        title(id: "${imdbid}") {
          worldwideGross: rankedLifetimeGross(boxOfficeArea: WORLDWIDE) {
            total {
              amount
            }
          }
        }
      }`
  };

  GM.xmlHttpRequest({
    method:  "POST",
    timeout: 10000,
    url:     "https://api.graphql.imdb.com",
    data:    JSON.stringify(GraphQLReq),
    headers: {
      'Content-Type': 'application/json'
    },
    onload: function(response) {
      if (response.status >= 200 && response.status < 300) {
        const body = JSON.parse(response.responseText);
        let worldwidegross_amount;
        if(body.data.title.worldwideGross !== null) {
          worldwidegross_amount = body.data.title.worldwideGross.total.amount;
          if (Number.isInteger(worldwidegross_amount)) {
            worldwidegross_amount = `$${worldwidegross_amount.toLocaleString()}`; // To get "$40,000,000" from 40000000
          } else {
              worldwidegross_amount = String(worldwidegross_amount);
          }
        } else {
            worldwidegross_amount = "null";
        }
        $('.scout_box_office_worldwide_gross').html(worldwidegross_amount);
      } else {
          console.log("IMDb Scout Mod (insertGross): Error status: " +response.status);
          console.log("IMDb Scout Mod (insertGross): Error response: " +response.responseText);
      }
    },
    onerror: function() {
      console.log("IMDb Scout Mod (insertGross): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (insertGross): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (insertGross): Request timed out.");
    }
  });
}

//==============================================================================
//    Helpful reviews
//==============================================================================

function getIMDbBestReview(use_spoilers=false) {
  const imdbid = document.URL.match(/\/tt([0-9]+)/)[1].trim('tt');
  // Note: Redesigned reviews pages + show spoilers = shows wrong numbers of votes [numbers are OK in JSON]
  // Note v24.0: Looks like the above issue is fixed by IMDb.
  const new_url1 = "https://www.imdb.com/title/tt" +imdbid+ "/reviews/?sort=num_votes,desc&spoilers=EXCLUDE";
  const new_url2 = "https://www.imdb.com/title/tt" +imdbid+ "/reviews/?sort=num_votes,desc";

  let url;
  if (use_spoilers) {
    url = new_url2
    console.log("IMDb Scout Mod (getIMDbBestReview): Started. Using new reviews URL with spoilers.");
  } else {
    url = new_url1
    console.log("IMDb Scout Mod (getIMDbBestReview): Started. Using new reviews URL without spoilers.");
  }

  GM.xmlHttpRequest({
    method: "GET",
    timeout: 20000,
    url:    url,
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0" },
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");
      var bestScore, topreview, hasspoilers;
      var xTitle, xRevLink, xReview, xUser, xUsrLink, xDate, xRating, xSpoiler;

      // Sometimes randomly imdb loads pre-redesigned reviews page, https://www.imdb.com/title/tt1828194/reviews/?ref_=tt_urv_sm  (in private window):
      // Note v24.0: Looks like the above issue is fixed by IMDb, still the code below is left to detect it, workaround code is deleted.
      if ($(result).find('.imdb-user-review').length) {
        console.log("IMDb Scout Mod (getIMDbBestReview): Error: Pre-redesigned reviews page detected!");
        GM.notification("Error: Pre-redesigned reviews page detected! Please report it.", "IMDb Scout Mod (getIMDbBestReview)");
        return;
      }

      if ($(result).find('[id=__NEXT_DATA__]:eq(0)').length) {
        console.log("IMDb Scout Mod (getIMDbBestReview): Redesigned reviews page detected.");
        const rawJsn   = $(result).find('[id=__NEXT_DATA__]:eq(0)').text();
        const parseJsn = JSON.parse(rawJsn);
        const reviews  = parseJsn.props.pageProps.contentData.reviews;

        if (!use_spoilers && !reviews.length) {
          console.log("IMDb Scout Mod (getIMDbBestReview): Reviews not found! Restarting with spoilers enabled!.");
          getIMDbBestReview(use_spoilers=true);
          return;
        }

        reviews.forEach((item) => {
          const spoiler   = item.review.spoiler;
          let upvotes, downvotes;
          if (item.review.helpfulnessVotes === undefined) { // review doesn't have votes
            upvotes   = 0;
            downvotes = 0;
          } else {
            upvotes   = item.review.helpfulnessVotes.upVotes;
            downvotes = item.review.helpfulnessVotes.downVotes;
          }
          const score = wilsonScore(upvotes, downvotes);

          if(bestScore === undefined) {
              bestScore        = score;
              topreview        = item;
              hasspoilers      = spoiler;
          } else if (score > bestScore) {
              bestScore        = score;
              topreview        = item;
              hasspoilers      = spoiler;
          }
        });

        xTitle   = htmlDecode(topreview.review.reviewSummary);
        xRevLink = "/review/" + topreview.review.reviewId;
        xReview  = htmlDecode(topreview.review.reviewText);
        xUser    = htmlDecode(topreview.review.author.nickName);
        xUsrLink = "/user/" + topreview.review.author.userId;
        xDate    = topreview.review.submissionDate;
        xRating  = topreview.review.authorRating;
        xSpoiler = "";

        if(xRating === undefined) {xRating = "x"}
        if(hasspoilers) {xSpoiler = "Warning: Spoilers"}

      } else {
          console.log("IMDb Scout Mod (getIMDbBestReview): Element not found! Please report it.");
          GM.notification("Element not found! Please report it.", "IMDb Scout Mod (getIMDbBestReview)");
          return;
      }

      if (onReferencePage) {
        let x = '' +
                '<section class="scout_review">' +
                '  <div><h4 class="ipl-list-title">Helpful Review</h4></div>' +
                '  <table class="titlereference-list ipl-zebra-list">' +
                '    <tbody>' +
                '      <tr class="ipl-zebra-list__item">' +
                '        <td>' +
                '          <a class="scout_review_rating">' +
                '            <span class="ipl-rating-star__star">' +
                '              <svg class="ipl-icon ipl-star-icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">' +
                '                <path d="M0 0h24v24H0z" fill="none"></path>' +
                '                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>' +
                '                <path d="M0 0h24v24H0z" fill="none"></path>' +
                '              </svg></span>' +
                '            <span class="point-scale"> xRating</span><span> |</span></a>' +
                '          <a class="scout_review_title" href="xRevLink"> xTitle</a>' +
                '          <div class="display-name-date" style="font-size:11px">' +
                '            <span class="display-name-link">' +
                '              <a href="xUsrLink">xUser</a></span>' +
                '            <span class="review-date"> xDate</span></div>' +
                '          <p class="spoiler-warning" style="font-weight:bold; color:red;">xSpoiler</p>' +
                '          <p>xReview</p></td></tr></tbody></table></section>' +
                '';
        x = x.replace('xTitle', xTitle);
        x = x.replace('xRevLink', xRevLink);
        x = x.replace('xReview', xReview);
        x = x.replace('xUser', xUser);
        x = x.replace('xUsrLink', xUsrLink);
        x = x.replace('xDate', xDate);
        x = x.replace('xRating', xRating);
        x = x.replace('xSpoiler', xSpoiler);

        let y = jQuery.parseHTML(x);
        $('.titlereference-section-media').after(y);
      // if on redesigned:
      } else {
//         console.log("!!!!!!!_01: " + $('.review-top-review').find('.ipc-signpost__text').length);
//         console.log("!!!!!!!_02: " + $('[data-testid=review-summary]').find('.ipc-title__text').length);
//         console.log("!!!!!!!_03: " + $('[data-testid=review-summary]').find('.ipc-title-link-wrapper').length);
//         console.log("!!!!!!!_04: " + $('[data-testid=permalink-link]').length);
//         console.log("!!!!!!!_05: " + $('[data-testid=review-overflow]').find('.ipc-html-content-inner-div').length);
//         console.log("!!!!!!!_06: " + $('[data-testid=author-link]').length);
//         console.log("!!!!!!!_07: " + $('.review-date').length);
//         console.log("!!!!!!!_08: " + $('.review-rating').find('.ipc-rating-star--rating').length);
//         console.log("!!!!!!!_09: " + $('[data-testid=review-card-parent]').find('.ipc-list-card__actions').length);

        $('.review-top-review').find('.ipc-signpost__text').contents().filter(function() {
          return this.nodeType === Node.TEXT_NODE;
        }).replaceWith('Helpful Review');

        $('[data-testid=review-summary]').find('.ipc-title__text').contents().filter(function() {
          return this.nodeType === Node.TEXT_NODE;
        }).replaceWith(xTitle);

        $('[data-testid=review-summary]').find('.ipc-title-link-wrapper').attr('href', xRevLink);

        $('[data-testid=permalink-link]').attr('href', xRevLink);

        $('[data-testid=review-overflow]').find('.ipc-html-content-inner-div').each(function() {
            $(this).html(xReview);
        });

        $('[data-testid=review-overflow]').css('max-height', '5000px');
        $('[data-testid=review-overflow]').find('button.ipc-overflowText-overlay').remove();

        $('[data-testid=author-link]').contents().filter(function() {
          return this.nodeType === Node.TEXT_NODE;
        }).replaceWith(xUser);

        $('[data-testid=author-link]').attr('href', xUsrLink);

        $('.review-date').contents().filter(function() {
          return this.nodeType === Node.TEXT_NODE;
        }).replaceWith(xDate);

        $('.review-rating').find('.ipc-rating-star--rating').contents().filter(function() {
          return this.nodeType === Node.TEXT_NODE;
        }).replaceWith(xRating);

        if (hasspoilers) {
          const yy = jQuery.parseHTML('<div class="spoiler-warning" style="font-weight:bold; color:red;">Warning: Spoilers</div>');
          $('[data-testid=review-overflow]').find('.ipc-html-content-inner-div').before(yy);
        }

        $('[data-testid=review-card-parent]').find('.ipc-list-card__actions').remove();
      }
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Review): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Review): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Review): Request timed out.");
    }
  });
}

function wilsonScore(upVotes, downVotes, z = 1.95996) {
  const n = upVotes + downVotes;
  if (n === 0) return 0;
  const phat = upVotes / n;
  const numerator = phat + (z * z) / (2 * n) - z * Math.sqrt((phat * (1 - phat) + (z * z) / (4 * n)) / n);
  const denominator = 1 + (z * z) / n;
  return numerator / denominator;
}

//==============================================================================
//    Remove ads from IMDb
//==============================================================================

function adsRemovalReference() {
  if (!GM_config.get('remove_ads')) {
    return;
  }
  console.log("IMDb Scout Mod (adsRemovalReference): Started.");
  if (Boolean($('.aux-content-widget-2').first().text().match("IMDb Answers"))) {
    $('.aux-content-widget-2').first().remove();
  }
  $('.cornerstone_slot').remove();
  $('.imdb-footer').remove();
  $('#social-share-widget').remove();
  $('.navbar__imdbpro').remove();
  $('[class^=Root__Separator]').remove();
  // To remove ad's background image
  $('#wrapper').attr('style', 'background: 000000 !important');
}

async function adsRemoval() {
  if (!GM_config.get('remove_ads')) {
    return;
  }
  console.log("IMDb Scout Mod (adsRemoval): Started.");
  // v21.3 fix https://github.com/Purfview/IMDb-Scout-Mod/issues/227  // reenabled in v22.0
//   const isMobile = Boolean(navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|mobile|mini|crios/));
//   if (isMobile) {
//     console.log("IMDb Scout Mod (adsRemoval): Mobile browser detected, disabling adsRemoval!");
//     return;
//   }

  $('.nas-slot').empty(); // empty() removes all children // removing 4th or 5th ".nas-slot" breaks dynamic reflow when window is resized.
  $('#inline40_wrapper').remove();
  $('#adLink').remove();

  $('[class^=Banner]').remove();
  $('[id^=taboola]').remove();
  $('[class*=ProLink]').remove();
  $('[class^=IMDbPro]').remove();
  $('.imdb-editorial-single').remove();
  $('.imdb-footer').remove();
  $('.navbar__imdbpro').remove();
  $('[class^=Root__Separator]').remove();

  // after 3 secs run same again:
  await sleep(3000);
  $('.nas-slot').empty();
  $('#inline40_wrapper').remove();
  $('#adLink').remove();

  $('[class^=Banner]').remove();
  $('[id^=taboola]').remove();
  $('[class*=ProLink]').remove();
  $('[class^=IMDbPro]').remove();
  $('.imdb-editorial-single').remove();
  $('.imdb-footer').remove();
  $('.navbar__imdbpro').remove();
  $('[class^=Root__Separator]').remove();
}

//==============================================================================
//    Create the config name (GM_config)
//==============================================================================

function configName(site) {
  if ('configName' in site) {
    return 'show_' + site['configName'] + (site['TV'] ? '_TV' : '');
  } else {
    return 'show_' + site['name'] + (site['TV'] ? '_TV' : '');
  }
}

//==============================================================================
//    Count sites (GM_config)
//==============================================================================

function countSites(task) {
  if (task == 1) {
    const count_total = sites.concat(icon_sites).length;
    return count_total;
  }
  if (task == 2) {
    // Init GM_config to get amount of selected sites.
    // GM_config's fields needs to be mirrored to keep Settings intact.
    var config_fields = {
      'aftertitle': {'type': 'hidden'},
      'imdbtotalstats': {'type': 'hidden'},
      'imdbselectedstats': {'type': 'hidden'},
      'imdbscoutmod_header_text': {'type': 'text'},
      'imdbscoutsecondbar_header_text': {'type': 'text'},
      'imdbscoutthirdbar_header_text': {'type': 'text'},
      'mod_icons_size': {'type': 'text'},
      'iconsborder_size': {'type': 'select', 'options': ['2px', '3px', '4px', '5px', '6px']},
      'cfg_iconsize': {'type': 'text'},
      'timeout_ms': {'type': 'select', 'options': ['10000 ms', '20000 ms', '30000 ms', '45000 ms', '60000 ms']},
      'remove_ads': {'type': 'checkbox'},
      'debug_sites': {'type': 'checkbox'},
      'loadmod_on_start_movie': {'type': 'checkbox'},
      'load_second_bar_movie': {'type': 'checkbox'},
      'load_third_bar_movie': {'type': 'checkbox'},
      'switch_bars': {'type': 'checkbox'},
      'sortReqOnNewLine': {'type': 'checkbox'},
      'call_http_mod_movie': {'type': 'checkbox'},
      'hide_missing_movie': {'type': 'checkbox'},
      'use_mod_icons_movie': {'type': 'checkbox'},
      'one_line': {'type': 'checkbox'},
      'ignore_type_movie': {'type': 'checkbox'},
      'remove_openall': {'type': 'checkbox'},
      'force_reference_view': {'type': 'checkbox'},
      'dark_reference_view': {'type': 'checkbox'},
      'compact_reference_view': {'type': 'checkbox'},
      'greybackground_reference_view': {'type': 'checkbox'},
      'app_notification': {'type': 'checkbox'},
      'helpful_reviews': {'type': 'checkbox'},
      'helpful_reviews_spoilers': {'type': 'checkbox'},
      'disable_iconsites': {'type': 'checkbox'},
      'disable_sites': {'type': 'checkbox'},
      'highlight_sites_movie': {'type': 'text'},
      'highlight_missing_movie': {'type': 'text'},
      'loadmod_on_start_search': {'type': 'checkbox'},
      'load_second_bar_search': {'type': 'checkbox'},
      'load_third_bar_search': {'type': 'checkbox'},
      'call_http_mod_search': {'type': 'checkbox'},
      'hide_missing_search': {'type': 'checkbox'},
      'use_mod_icons_search': {'type': 'checkbox'},
      'ignore_type_search': {'type': 'checkbox'},
      'highlight_sites_search': {'type': 'text'},
      'highlight_missing_search': {'type': 'text'},
      'ratings_img_px': {'type': 'select', 'options': ['32px', '48px', '64px']},
      'ratings_cfg_metacritic': {'type': 'checkbox'},
      'ratings_cfg_rotten': {'type': 'checkbox'},
      'ratings_cfg_letterboxd': {'type': 'checkbox'},
      'ratings_cfg_douban': {'type': 'checkbox'},
      'ratings_cfg_allocine': {'type': 'checkbox'},
      'ratings_cfg_anime': {'type': 'checkbox'},
      'ratings_cfg_color': {'type': 'checkbox'},
      'ratings_cfg_color_scheme': {'type': 'text'},
      'ratings_cfg_omdb_apikey': {'type': 'text'},
      'radarr_searchformovie': {'type': 'checkbox'},
      'radarr_monitored': {'type': 'checkbox'},
      'radarr_url': {'type': 'text'},
      'radarr_apikey': {'type': 'text'},
      'radarr_rootfolderpath': {'type': 'text'},
      'radarr_profileid': {'type': 'select', 'options': ['Any', 'HD - 720p/1080p', 'HD-1080p', 'HD-720p', 'SD', 'Ultra-HD', 'Custom']},
      'radarr_customprofileid': {'type': 'text'},
      'radarr_minimumavailability': {'type': 'select', 'options': ['announced', 'inCinemas', 'released']},
      'radarr2_searchformovie': {'type': 'checkbox'},
      'radarr2_monitored': {'type': 'checkbox'},
      'radarr2_url': {'type': 'text'},
      'radarr2_apikey': {'type': 'text'},
      'radarr2_rootfolderpath': {'type': 'text'},
      'radarr2_profileid': {'type': 'select', 'options': ['Any', 'HD - 720p/1080p', 'HD-1080p', 'HD-720p', 'SD', 'Ultra-HD', 'Custom']},
      'radarr2_customprofileid': {'type': 'text'},
      'radarr2_minimumavailability': {'type': 'select', 'options': ['announced', 'inCinemas', 'released']},
      'sonarr_searchformissing': {'type': 'checkbox'},
      'sonarr_searchforcutoff': {'type': 'checkbox'},
      'sonarr_seasonfolder': {'type': 'checkbox'},
      'sonarr_usescenenumbering': {'type': 'select', 'options': ['Auto', 'No', 'Yes']},
      'sonarr_monitored': {'type': 'select', 'options': ['All Episodes', 'Future Episodes', 'Missing Episodes', 'Existing Episodes', 'Pilot Episode', 'Only First Season', 'Only Latest Season', 'None']},
      'sonarr_url': {'type': 'text'},
      'sonarr_apikey': {'type': 'text'},
      'sonarr_rootfolderpath': {'type': 'text'},
      'sonarr_profileid': {'type': 'select', 'options': ['Any', 'HD - 720p/1080p', 'HD-1080p', 'HD-720p', 'SD', 'Ultra-HD', 'Custom']},
      'sonarr_customprofileid': {'type': 'text'},
      'sonarr_languageprofileid': {'type': 'text'},
      'sonarr_seriestype': {'type': 'select', 'options': ['standard', 'daily', 'anime']},
      'trakt_synclimiter': {'type': 'select', 'options': ['15', '30', '60', '300']},
      'plex_server_url': {'type': 'text'},
      'plex_token': {'type': 'text'},
      'jellyfin_server_url': {'type': 'text'},
      'jellyfin_username': {'type': 'text'},
      'jellyfin_password': {'type': 'text'},
      'jellyfin_debug': {'type': 'checkbox'},
      'emby_server_url': {'type': 'text'},
      'emby_username': {'type': 'text'},
      'emby_password': {'type': 'text'},
      'emby_debug': {'type': 'checkbox'},
      'milkie_authToken': {'type': 'text'},
      'tnt_authToken': {'type': 'text'},
      'void_url': {'type': 'text'},
      'void_username': {'type': 'text'},
      'void_password': {'type': 'text'}
    };
    $.each(custom_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(public_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(private_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(chinese_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(french_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(german_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(usenet_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(subs_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(pre_databases, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(other_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(streaming_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(icon_sites_main, function(index, icon_site) {config_fields['show_icon_' + icon_site['name']] = {'type': 'checkbox'};});
    $.each(special_buttons, function(index, icon_site) {config_fields['show_icon_' + icon_site['name']] = {'type': 'checkbox'};});

    GM_config.init({'id': 'imdb_scout', 'fields': config_fields});

    $.each(sites, function(index, site) {
      site['show'] = GM_config.get(configName(site));
    });
    $.each(icon_sites, function(index, icon_site) {
      icon_site['show'] = GM_config.get('show_icon_' + icon_site['name']);
    });

    const count_selected = sites.concat(icon_sites).reduce(function (n, site) {
      return n + (site['show'] == true); }, 0);

    return count_selected;
  }
}


//============================================================================//
//================================  MAIN  ====================================//
//============================================================================//


//==============================================================================
//    Polyfill for GM3 notifications
//==============================================================================

if (typeof GM.notification === "undefined") {
  this.GM_notification = function(options) {
    const opts = {};
    if (typeof options === "string") {
      opts.text = options;
      opts.title = arguments[1];
      opts.image = arguments[2];
      opts.onclick = arguments[3];
    } else {
      Object.keys(options).forEach(function(key) {
        opts[key] = options[key];
      });
    }

    checkPermission();

    function checkPermission() {
      if (Notification.permission === "granted") {
        fireNotice(opts);
      } else if (Notification.permission === "denied") {
        alert("User has denied notifications for this page/site!");
        // eslint-disable-next-line no-useless-return
        return;
      } else {
        Notification.requestPermission(function(permission) {
          console.log("New permission: ", permission);
          checkPermission();
        });
      }
    }

    function fireNotice(ntcOptions) {
      if (ntcOptions.text && !ntcOptions.body) {
        ntcOptions.body = ntcOptions.text;
      }
      var ntfctn = new Notification(ntcOptions.title, ntcOptions);

      if (ntcOptions.onclick) {
        ntfctn.onclick = ntcOptions.onclick;
      }
      if (ntcOptions.timeout) {
        setTimeout(function() {
          ntfctn.close();
        }, ntcOptions.timeout);
      }
    }
  };
  GM.notification = GM_notification;
}

//==============================================================================
//    Settings Menu (GM_config)
//==============================================================================

// To have consistent spacing in different browsers.
var set_cfg_iconsize_spacing = "&nbsp &nbsp";
var radarr_url_spacing = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
var radarr_apikey_spacing = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
var radarr_rootfolderpath_spacing = "&nbsp";
var sonarr_usescenenumbering_spacing = "&nbsp &nbsp";
var sonarr_monitored_spacing = " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
var sonarr_languageprofileid_spacing = " &nbsp &nbsp &nbsp &nbsp &nbsp";
var sonarr_seriestype_spacing = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
var void_url_spacing = "&nbsp &nbsp &nbsp &nbsp &nbsp";
if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
  set_cfg_iconsize_spacing = " &nbsp";
  radarr_url_spacing = " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
  radarr_apikey_spacing = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
  radarr_rootfolderpath_spacing = "";
  sonarr_usescenenumbering_spacing = "&nbsp";
  sonarr_monitored_spacing = " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
  sonarr_languageprofileid_spacing = "&nbsp &nbsp &nbsp &nbsp &nbsp";
  sonarr_seriestype_spacing = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
  void_url_spacing = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
}

var config_fields = {
  'aftertitle': {
    'section': ' ',
    'label': ' &nbsp',
    'type': 'hidden'
  },
  'imdbtotalstats': {
    'label': 'Total sites:&nbsp'.bold().fontsize(3) + countSites(1).toString().bold().fontsize(3).fontcolor("Blue"),
    'type': 'hidden'
  },
  'imdbselectedstats': {
    'label': 'Selected sites:&nbsp'.bold().fontsize(3) + countSites(2).toString().bold().fontsize(3).fontcolor("Blue"),
    'type': 'hidden'
  },
  'imdbscoutmod_header_text': {
    'label': 'Header text for the 1st bar:&nbsp',
    'type': 'text',
    'default': ''
  },
  'imdbscoutsecondbar_header_text': {
    'label': 'Header text for the 2nd bar:',
    'type': 'text',
    'default': ''
  },
  'imdbscoutthirdbar_header_text': {
    'label': 'Header text for the 3rd bar:&nbsp',
    'type': 'text',
    'default': ''
  },
  'mod_icons_size': {
    'label': 'Size of the icons (pixels): &nbsp &nbsp',
    'type': 'text',
    'default': '32'
  },
  'iconsborder_size': {
    'label': 'Size of the icons border:&nbsp &nbsp &nbsp',
    'type': 'select',
    'options': ['2px', '3px', '4px', '5px', '6px'],
    'default': '3px'
  },
  'cfg_iconsize': {
    'label': 'Size of the settings icons:' + set_cfg_iconsize_spacing,
    'type': 'text',
    'default': '22'
  },
  'timeout_ms': {
    'label': 'Timeout requests after: &nbsp &nbsp &nbsp' + radarr_rootfolderpath_spacing,
    'type': 'select',
    'options': ['10000 ms', '20000 ms', '30000 ms', '45000 ms', '60000 ms'],
    'default': '30000 ms'
  },
  'remove_ads': {
    'type': 'checkbox',
    'label': 'Remove IMDb ads?',
    'default': true
  },
  'debug_sites': {
    'type': 'checkbox',
    'label': 'Debug (the searchable sites)?',
    'default': false
  },
  'loadmod_on_start_movie': {
    'section': 'Title Page:',
    'type': 'checkbox',
    'label': 'Load links to sites on start?',
    'default': true
  },
  'load_second_bar_movie': {
    'type': 'checkbox',
    'label': 'Enable the 2nd search bar?',
    'default': false
  },
  'load_third_bar_movie': {
    'type': 'checkbox',
    'label': 'Enable the 3rd search bar?',
    'default': false
  },
  'switch_bars': {
    'type': 'checkbox',
    'label': 'Swap 2nd and 3rd bars?',
    'default': false
  },
  'sortReqOnNewLine': {
    'type': 'checkbox',
    'label': 'Split Req sites to a new line if the request is found?',
    'default': true
  },
  'call_http_mod_movie': {
    'type': 'checkbox',
    'label': 'Auto-search sites for results?',
    'default': true
  },
  'hide_missing_movie': {
    'type': 'checkbox',
    'label': "Hide link if search didn't found results?",
    'default': false
  },
  'use_mod_icons_movie': {
    'type': 'checkbox',
    'label': 'Use icons instead of text?',
    'default': true
  },
  'one_line': {
    'type': 'checkbox',
    'label': 'Show search results on one line?',
    'default': true
  },
  'ignore_type_movie': {
    'type': 'checkbox',
    'label': 'Search all sites, ignoring movie/tv distinction?',
    'default': false
  },
  'remove_openall': {
    'type': 'checkbox',
    'label': 'Remove "Open All" button?',
    'default': true
  },
  'force_reference_view': {
    'type': 'checkbox',
    'label': 'Reference View: Force it (without login)?',
    'default': false
  },
  'dark_reference_view': {
    'type': 'checkbox',
    'label': 'Reference View: Enable the dark style?',
    'default': true
  },
  'compact_reference_view': {
    'type': 'checkbox',
    'label': 'Reference View: Enable the compact mode?',
    'default': true
  },
  'greybackground_reference_view': {
    'type': 'checkbox',
    'label': 'Reference View: Enable grey background for searchable sites?',
    'default': true
  },
  'app_notification': {
    'type': 'checkbox',
    'label': "Notify when Radarr/Sonarr doesn't respond?",
    'default': true
  },
  'helpful_reviews': {
    'type': 'checkbox',
    'label': "Replace Featured reviews with Helpful reviews?",
    'default': true
  },
  'helpful_reviews_spoilers': {
    'type': 'checkbox',
    'label': "Allow Helpful reviews with spoilers?",
    'default': false
  },
  'disable_iconsites': {
    'type': 'checkbox',
    'label': "Disable the icon sites code?",
    'default': false
  },
  'disable_sites': {
    'type': 'checkbox',
    'label': "Disable the searchable sites code?",
    'default': false
  },
  'highlight_sites_movie': {
    'label': 'Highlight sites: &nbsp &nbsp &nbsp',
    'type': 'text',
    'default': 'PTP,KG,BTN,BTN-Title,SC,CG,TVV,Tik'
  },
  'highlight_missing_movie': {
    'label': 'Mark when not on:',
    'type': 'text',
    'default': ''
  },
  'loadmod_on_start_search': {
    'section': 'Search/List/Watchlist Page:',
    'type': 'checkbox',
    'label': 'Load links to sites on start?',
    'default': false
  },
  'load_second_bar_search': {
    'type': 'checkbox',
    'label': 'Enable the 2nd search bar?',
    'default': false
  },
  'load_third_bar_search': {
    'type': 'checkbox',
    'label': 'Enable the 3rd search bar?',
    'default': false
  },
  'call_http_mod_search': {
    'type': 'checkbox',
    'label': 'Auto-search sites for results?',
    'default': true
  },
  'hide_missing_search': {
    'type': 'checkbox',
    'label': "Hide link if search didn't found results?",
    'default': false
  },
  'use_mod_icons_search': {
    'type': 'checkbox',
    'label': 'Use icons instead of text?',
    'default': true
  },
  'ignore_type_search': {
    'type': 'checkbox',
    'label': 'Search all sites, ignoring movie/tv distinction?',
    'default': false
  },
  'highlight_sites_search': {
    'label': 'Highlight sites: &nbsp &nbsp &nbsp',
    'type': 'text',
    'default': ''
  },
  'highlight_missing_search': {
    'label': 'Mark when not on:',
    'type': 'text',
    'default': ''
  },
  'ratings_img_px': {
    'label': 'Size of the ratings icons: &nbsp',
    'section': 'External ratings:',
    'type': 'select',
    'options': ['32px', '48px', '64px'],
    'default': '48px'
  },
  'ratings_cfg_metacritic': {
    'type': 'checkbox',
    'label': 'Enable Metacritic ratings?',
    'default': true
  },
  'ratings_cfg_rotten': {
    'type': 'checkbox',
    'label': 'Enable Rotten Tomatoes ratings?',
    'default': true
  },
  'ratings_cfg_letterboxd': {
    'type': 'checkbox',
    'label': 'Enable Letterboxd ratings?',
    'default': true
  },
  'ratings_cfg_douban': {
    'type': 'checkbox',
    'label': 'Enable Douban ratings?',
    'default': false
  },
  'ratings_cfg_allocine': {
    'type': 'checkbox',
    'label': 'Enable Allocine ratings?',
    'default': false
  },
  'ratings_cfg_anime': {
    'type': 'checkbox',
    'label': 'Enable MyAnimeList & AniList ratings?',
    'default': false
  },
  'ratings_cfg_color': {
    'type': 'checkbox',
    'label': 'Enable color scheme for ratings?',
    'default': true
  },
  'ratings_cfg_color_scheme': {
    'label': 'Reference points for colors:&nbsp',
    'type': 'text',
    'default': '69,49'
  },
  'ratings_cfg_omdb_apikey': {
    'label': 'OMDb API key:&nbsp',
    'type': 'text',
    'default': ''
  },
  'radarr_searchformovie': {
    'section': 'Radarr settings:',
    'type': 'checkbox',
    'label': 'Search for movie on add?',
    'default': true
  },
  'radarr_monitored': {
    'type': 'checkbox',
    'label': 'Add monitored?',
    'default': true
  },
  'radarr_url': {
    'label': 'Radarr URL:' + radarr_url_spacing,
    'type': 'text',
    'default': 'http://localhost:7878'
  },
  'radarr_apikey': {
    'label': 'Radarr API Key:' + radarr_apikey_spacing,
    'type': 'text',
    'default': ''
  },
  'radarr_rootfolderpath': {
    'label': 'Radarr Root Folder Path:' + radarr_rootfolderpath_spacing,
    'type': 'text',
    'default': 'D:\\Movies'
  },
  'radarr_profileid': {
    'label': 'Radarr Quality Profile: &nbsp &nbsp &nbsp',
    'type': 'select',
    'options': ['Any', 'HD - 720p/1080p', 'HD-1080p', 'HD-720p', 'SD', 'Ultra-HD', 'Custom'],
    'default': 'Any'
  },
  'radarr_customprofileid': {
    'label': 'Custom Quality ProfileID:' + radarr_rootfolderpath_spacing,
    'type': 'text',
    'default': '1'
  },
  'radarr_minimumavailability': {
    'label': 'Minimum Availability: &nbsp &nbsp &nbsp &nbsp',
    'type': 'select',
    'options': ['announced', 'inCinemas', 'released'],
    'default': 'inCinemas'
  },
  'radarr2_searchformovie': {
    'section': 'Radarr2 settings:',
    'type': 'checkbox',
    'label': 'Search for movie on add?',
    'default': true
  },
  'radarr2_monitored': {
    'type': 'checkbox',
    'label': 'Add monitored?',
    'default': true
  },
  'radarr2_url': {
    'label': 'Radarr2 URL:' + radarr_url_spacing,
    'type': 'text',
    'default': 'http://localhost:7979'
  },
  'radarr2_apikey': {
    'label': 'Radarr2 API Key:' + radarr_apikey_spacing,
    'type': 'text',
    'default': ''
  },
  'radarr2_rootfolderpath': {
    'label': 'Radarr2 Root Folder Path:' + radarr_rootfolderpath_spacing,
    'type': 'text',
    'default': 'D:\\Movies'
  },
  'radarr2_profileid': {
    'label': 'Radarr2 Quality Profile: &nbsp &nbsp &nbsp',
    'type': 'select',
    'options': ['Any', 'HD - 720p/1080p', 'HD-1080p', 'HD-720p', 'SD', 'Ultra-HD', 'Custom'],
    'default': 'Any'
  },
  'radarr2_customprofileid': {
    'label': 'Custom Quality ProfileID:' + radarr_rootfolderpath_spacing,
    'type': 'text',
    'default': '1'
  },
  'radarr2_minimumavailability': {
    'label': 'Minimum Availability: &nbsp &nbsp &nbsp &nbsp',
    'type': 'select',
    'options': ['announced', 'inCinemas', 'released'],
    'default': 'inCinemas'
  },
  'sonarr_searchformissing': {
    'section': 'Sonarr settings:',
    'type': 'checkbox',
    'label': 'Start search for missing episodes?',
    'default': false
  },
  'sonarr_searchforcutoff': {
    'type': 'checkbox',
    'label': 'Start search for cutoff unmet episodes?',
    'default': false
  },
  'sonarr_seasonfolder': {
    'type': 'checkbox',
    'label': 'Season Folder?',
    'default': true
  },
  'sonarr_usescenenumbering': {
    'label': 'Use Scene Numbering?' + sonarr_usescenenumbering_spacing,
    'type': 'select',
    'options': ['Auto', 'No', 'Yes'],
    'default': 'Auto'
  },
  'sonarr_monitored': {
    'label': 'Monitored:' + sonarr_monitored_spacing,
    'type': 'select',
    'options': ['All Episodes', 'Future Episodes', 'Missing Episodes', 'Existing Episodes', 'Pilot Episode', 'Only First Season', 'Only Latest Season', 'None'],
    'default': 'All Episodes'
  },
  'sonarr_url': {
    'label': 'Sonarr URL:' + radarr_url_spacing,
    'type': 'text',
    'default': 'http://localhost:8989'
  },
  'sonarr_apikey': {
    'label': 'Sonarr API Key:' + radarr_apikey_spacing,
    'type': 'text',
    'default': ''
  },
  'sonarr_rootfolderpath': {
    'label': 'Sonarr Root Folder Path:' + radarr_rootfolderpath_spacing,
    'type': 'text',
    'default': 'D:\\TVSeries'
  },
  'sonarr_profileid': {
    'label': 'Sonarr Quality Profile: &nbsp &nbsp &nbsp',
    'type': 'select',
    'options': ['Any', 'HD - 720p/1080p', 'HD-1080p', 'HD-720p', 'SD', 'Ultra-HD', 'Custom'],
    'default': 'Any'
  },
  'sonarr_customprofileid': {
    'label': 'Custom Quality ProfileID:' + radarr_rootfolderpath_spacing,
    'type': 'text',
    'default': '1'
  },
  'sonarr_languageprofileid': {
    'label': 'Language ProfileID:' + sonarr_languageprofileid_spacing,
    'type': 'text',
    'default': '1'
  },
  'sonarr_seriestype': {
    'label': 'Series Type:' + sonarr_seriestype_spacing,
    'type': 'select',
    'options': ['standard', 'daily', 'anime'],
    'default': 'standard'
  },
  'trakt_synclimiter': {
    'label': "Sliding watchlist's sync timeout (seconds):",
    'section': 'Trakt-Watchlist settings:',
    'type': 'select',
    'options': ['15', '30', '60', '300'],
    'default': '15'
  },
  'plex_server_url': {
    'label': "Plex Server URL:",
    'section': 'Plex settings:',
    'type': 'text',
    'default': 'http://127.0.0.1:32400'
  },
  'plex_token': {
    'label': "Plex Token: &nbsp &nbsp &nbsp &nbsp &nbsp",
    'type': 'text',
    'default': ''
  },
  'jellyfin_server_url': {
    'label': "Jellyfin Server URL:",
    'section': 'Jellyfin settings:',
    'type': 'text',
    'default': 'http://localhost:8096'
  },
  'jellyfin_username': {
    'label': "Jellyfin Username: &nbsp",
    'type': 'text',
    'default': ''
  },
  'jellyfin_password': {
    'label': "Jellyfin Password:&nbsp &nbsp",
    'type': 'text',
    'default': ''
  },
  'jellyfin_debug': {
    'type': 'checkbox',
    'label': "Debug?",
    'default': false
  },
  'emby_server_url': {
    'label': "Emby Server URL:",
    'section': 'Emby settings:',
    'type': 'text',
    'default': 'http://localhost:8096'
  },
  'emby_username': {
    'label': "Emby Username: &nbsp",
    'type': 'text',
    'default': ''
  },
  'emby_password': {
    'label': "Emby Password:&nbsp &nbsp",
    'type': 'text',
    'default': ''
  },
  'emby_debug': {
    'type': 'checkbox',
    'label': "Debug?",
    'default': false
  },
  'milkie_authToken': {
    'label': 'Milkie:',
    'section': 'Authorization Tokens:',
    'type': 'text',
    'default': ''
  },
  'tnt_authToken': {
    'label': 'TNT:&nbsp &nbsp',
    'type': 'text',
    'default': ''
  },
  'void_url': {
    'label': 'Voidtools URL:' + void_url_spacing,
    'section': 'Voidtools config:',
    'type': 'text',
    'default': 'http://localhost:8080'
  },
  'void_username': {
    'label': 'Voidtools Username:',
    'type': 'text',
    'default': ''
  },
  'void_password': {
    'label': 'Voidtools Password:&nbsp',
    'type': 'text',
    'default': ''
  }
};

//==============================================================================
//    Add sites to Settings (GM_config)
//==============================================================================

$.each(custom_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Custom sites:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(public_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Public download sites:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(private_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Private download sites:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(chinese_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Chinese sites:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(french_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['French sites:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(german_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['German sites:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(usenet_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Usenet sites:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(subs_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Subtitles sites (in 2nd bar):'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(pre_databases, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Pre databases (in 2nd bar):'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(other_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Other sites/tools (in 2nd bar):'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(streaming_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Streaming sites (in 3rd bar):'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(icon_sites_main, function(index, icon_site) {
  config_fields['show_icon_' + icon_site['name']] = {
    'section': (index == 0) ? ['Icon sites (no search):'] : '',
    'type': 'checkbox',
    'label': ' ' + icon_site['name'],
    'default': ('showByDefault' in icon_site) ? icon_site['showByDefault'] : true
  };
});

$.each(special_buttons, function(index, icon_site) {
  config_fields['show_icon_' + icon_site['name']] = {
    'section': (index == 0) ? ['Special icons/buttons:'] : '',
    'type': 'checkbox',
    'label': ' ' + icon_site['name'],
    'default': ('showByDefault' in icon_site) ? icon_site['showByDefault'] : true
  };
});

//==============================================================================
//    Initialize and register GM_config
//==============================================================================

GM_config.init({
  'id': 'imdb_scout',
  'title': 'IMDb Scout Mod Settings',
  'fields': config_fields,
  'css': `#imdb_scout_section_header_1, #imdb_scout_section_header_2, #imdb_scout_section_header_3, \
          #imdb_scout_section_header_4, #imdb_scout_section_header_5, #imdb_scout_section_header_6, \
          #imdb_scout_section_header_7, #imdb_scout_section_header_8, #imdb_scout_section_header_9, \
          #imdb_scout_section_header_10, #imdb_scout_section_header_11, #imdb_scout_section_header_12, \
          #imdb_scout_section_header_13, #imdb_scout_section_header_14, #imdb_scout_section_header_15, \
          #imdb_scout_section_header_16, #imdb_scout_section_header_17, #imdb_scout_section_header_18, \
          #imdb_scout_section_header_19, #imdb_scout_section_header_20, #imdb_scout_section_header_21, \
          #imdb_scout_section_header_22, #imdb_scout_section_header_23, #imdb_scout_section_header_24, \
          #imdb_scout_section_header_25 { \
             background:   #00ab00 !important; \
             color:          black !important; \
             font-weight:     bold !important; \
             border:           0px !important; \
             padding-left:     0px !important; \
             text-align:    middle !important;}\
          .field_label { \
             display:         flex !important; \
             align-items:   center !important; \
             font-weight:   normal !important;}\
          .config_var { \
             margin-top:       2px !important; \
             margin-bottom:    2px !important; \
             display:         flex !important; \
             align-items:   center !important;}\
          #imdb_scout_aftertitle_var { \
             margin-top:       0px !important; \
             margin-bottom:    0px !important;}\
          input { \
             margin-top:       0px !important; \
             margin-bottom:    0px !important;}\
          .grey_link { \
             margin-left:      4px !important;}\
          #imdb_scout_section_header_0 { \
             font-weight:     bold !important; \
             border:           0px !important; \
             margin-top:       0px !important; \
             background:   #bfbfbf !important;}\
          #imdb_scout_header { \
             background:     black !important; \
             color:          white !important;}\
          #imdb_scout_section_0 { \
             margin-top:       0px !important;}`,
  'events':
  {
    'open': function() {
      // Iframe position.
      this.frame.style.top    = '50px';
      this.frame.style.left   = 'auto';
      this.frame.style.right  = '20px';
      this.frame.style.height = '90%';
      this.frame.style.width  = '450px';

      $('#imdb_scout').contents().find('input#imdb_scout_field_highlight_sites_movie').attr('size', '35');
      $('#imdb_scout').contents().find('input#imdb_scout_field_highlight_missing_movie').attr('size', '35');
      $('#imdb_scout').contents().find('input#imdb_scout_field_highlight_sites_search').attr('size', '35');
      $('#imdb_scout').contents().find('input#imdb_scout_field_highlight_missing_search').attr('size', '35');
      $('#imdb_scout').contents().find('input#imdb_scout_field_mod_icons_size').attr('size', '1');
      $('#imdb_scout').contents().find('input#imdb_scout_field_cfg_iconsize').attr('size', '1');
      $('#imdb_scout').contents().find('input#imdb_scout_field_radarr_customprofileid').attr('size', '1');
      $('#imdb_scout').contents().find('input#imdb_scout_field_radarr2_customprofileid').attr('size', '1');
      $('#imdb_scout').contents().find('input#imdb_scout_field_sonarr_customprofileid').attr('size', '1');
      $('#imdb_scout').contents().find('input#imdb_scout_field_sonarr_languageprofileid').attr('size', '1');
      $('#imdb_scout').contents().find('input#imdb_scout_field_ratings_cfg_color_scheme').attr('size', '3');

      const modVersion = 'IMDb Scout Mod v' + GM.info.script.version;
      const modUrl = 'https://greasyfork.org/en/scripts/407284-imdb-scout-mod';
      $('#imdb_scout').contents().find('#imdb_scout_section_header_0').append($('<a href="'+modUrl+'" target ="_blank">'+modVersion+'</a>'));
      $('#imdb_scout').contents().find('#imdb_scout_section_header_0').find('a').css({
       'text-decoration': 'none',
       'color': '#cb0000'
      });

      $('#imdb_scout').contents().find('#imdb_scout_section_13').find('.field_label').each(function(index, label) {
        var url = new URL(custom_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(custom_sites[index], true));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_14').find('.field_label').each(function(index, label) {
        var url = new URL(public_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(public_sites[index], true));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_15').find('.field_label').each(function(index, label) {
        var url = new URL(private_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(private_sites[index], true));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_16').find('.field_label').each(function(index, label) {
        var url = new URL(chinese_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(chinese_sites[index], true));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_17').find('.field_label').each(function(index, label) {
        var url = new URL(french_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(french_sites[index], true));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_18').find('.field_label').each(function(index, label) {
        var url = new URL(german_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(german_sites[index], true));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_19').find('.field_label').each(function(index, label) {
        var url = new URL(usenet_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(usenet_sites[index], true));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_20').find('.field_label').each(function(index, label) {
        var url = new URL(subs_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(subs_sites[index], true));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_21').find('.field_label').each(function(index, label) {
        var url = new URL(pre_databases[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(pre_databases[index], true));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_22').find('.field_label').each(function(index, label) {
        var url = new URL(other_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(other_sites[index], true));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_23').find('.field_label').each(function(index, label) {
        var url = new URL(streaming_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(streaming_sites[index], true));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_24').find('.field_label').each(function(index, label) {
        var url = new URL(icon_sites_main[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(icon_sites_main[index], true));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_25').find('.field_label').each(function(index, label) {
        var url = new URL(special_buttons[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(special_buttons[index], true));
      });

      $('#imdb_scout').contents().find("img").css({"margin-right": "4px", "width": GM_config.get('cfg_iconsize'), "height": GM_config.get('cfg_iconsize')});
    },

    'close': function() {
      location.reload();
    }
  }
});

GM.registerMenuCommand('IMDb Scout Mod Settings', function() {GM_config.open();});

//==============================================================================
//    Remove tracking from IMDb's URL before start
//    Force the title pages to open in Reference View
//==============================================================================

if (Boolean(location.href.match('\\?ref_=')) || Boolean(location.href.match('\\?pf_'))) {
  let stripped_href = location.href.split('?ref_=')[0];
      stripped_href = stripped_href.split('?pf_')[0];
  if (GM_config.get('force_reference_view') && Boolean(location.href.match('/title/tt')) && !Boolean(location.href.match('reference'))) {
    console.log("IMDb Scout Mod (Redirect): Redirect to Reference Page (tracking stripped).");
    if (stripped_href.endsWith('/')) {
      stripped_href = stripped_href + "reference";
    } else {
        stripped_href = stripped_href + "/reference";
    }
  }
  window.location.replace(stripped_href);
  return;
} else if (GM_config.get('force_reference_view') && Boolean(location.href.match('/title/tt')) && !Boolean(location.href.match('reference'))) {
    console.log("IMDb Scout Mod (Redirect): Redirect to Reference Page.");
    let reference_href = location.href;
    if (reference_href.endsWith('/')) {
      reference_href = reference_href + "reference";
    } else {
        reference_href = reference_href + "/reference";
    }
    window.location.replace(reference_href);
    return;
}

//==============================================================================
//    Fetch per-site values from GM_config
//==============================================================================

$.each(sites, function(index, site) {
  site['show'] = GM_config.get(configName(site));
});

$.each(icon_sites, function(index, icon_site) {
  icon_site['show'] = GM_config.get('show_icon_' + icon_site['name']);
});

//==============================================================================
//    Global variables
//==============================================================================

// For internal use (order matters).
const valid_states = [
  'seeding',
  'found',
  'missing',
  'logged_out',
  'error'
];

// Are we on a search/list page?
const onSearchPage = Boolean(location.href.match('/search/'))
                  || Boolean(location.href.match('/list/'))
                  || Boolean(location.href.match('watchlist'))
                  || Boolean(location.href.match('ratings'));

// Are we on a reference page?
const onReferencePage = Boolean(location.href.match('/reference'));

// Globals for the sorting launcher.
var showSitezFirstBar = 0;
var sortReqOnNewLineTemp = false;

// Globals for CheckURLs.
var hosts_to_Process = 0;
var old_bad_hosts = [];
var new_bad_hosts = [];

// Trakt auth code?
const traktCodePage = Boolean(location.href.match(/tt0052077\/reference\?code=/));

//==============================================================================
//    Stuff for the new IMDb design (to start after reflow)
//==============================================================================

function startObserver() {
  // Double check if still on a redesigned page. Possible fix for a rare bug when the script runs before page transfers to a reference page if set on imdb's settings.
  if ($('html[xmlns\\:og="http://ogp.me/ns#"]').length) {
    return;
  }

  if ($('.ipc-page-section').length) {
    addDummyElem();
    const obscfg = { childList: true};
    const obs = new MutationObserver(checkDummyElem);
    obs.observe($('.ipc-page-section')[0], obscfg);
  } else {
    console.log("IMDb Scout Mod (Start Observer Error): Element not found! Please report it.");
    GM.notification("Element not found! Please report it.", "IMDb Scout Mod (Start Observer Error)");
  }
}

function addDummyElem() {
  const temp = $('<temp />').attr('id','temp_scout').css({'display':'none'});
  $('.ipc-page-section:eq(0)').append(temp);
  setTimeout(function(){
    temp.remove();
  }, 2000);
}

function checkDummyElem(mutation, observer) {
  if (!$('#temp_scout').length) {
    observer.disconnect();
    adsRemoval();
    startIMDbScout();
  }
}

//==============================================================================
//    Stuff for the new IMDb design (alternative to startObserver)
//==============================================================================

function startRedesign() {
  // Double check if still on a redesigned page. Possible fix for a rare bug when the script runs before page transfers to a reference page if set on imdb's settings.
  if ($('html[xmlns\\:og="http://ogp.me/ns#"]').length) {
    return;
  }

  if ($('.ipc-page-section').length) {
    adsRemoval();
    startIMDbScout();
  } else {
    console.log("IMDb Scout Mod (Start Redesign Error): Element not found! Please report it.");
    GM.notification("Element not found! Please report it.", "IMDb Scout Mod (Start Redesign Error)");
  }
}

//==============================================================================
//    Warning for Chrome/Chromium users shown 3 times per version
//==============================================================================

// Note: Chrome bug with requests + Violenmonkey may be banned soon
async function scoutWarning() {
if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || navigator.userAgent.toLowerCase().indexOf('chromium') > -1) {
    const warn_count = await GM.getValue("Scout_warning_count", 0);
    const warn_ver   = await GM.getValue("Scout_warning_ver", "none");
    if (warn_count < 3 && warn_ver !== GM.info.script.version) {
      console.log("IMDb Scout Mod (Warning): Bug detected: Chrome/Chromium! The script works slower and may soon stop working at all. Install Firefox to fix!");
      GM.notification("Bug detected: Chrome/Chromium! \nThe script works slower and may soon \nstop working at all. \nInstall Firefox to fix!", "IMDb Scout Mod (Warning)");
      GM.setValue("Scout_warning_count", warn_count +1);
    } else if (warn_ver !== GM.info.script.version) {
        GM.setValue("Scout_warning_ver", GM.info.script.version);
        GM.setValue("Scout_warning_count", 0);
    }
  }
}

//==============================================================================
//    Warning for non-English IMDb shown 3 times per version
//==============================================================================

async function scoutWarning2() {
if (/com\/[^/]*\/title\/tt/.test(window.location.href)) {
    const warn_count = await GM.getValue("Scout_warning2_count", 0);
    const warn_ver   = await GM.getValue("Scout_warning2_ver", "none");
    if (warn_count < 3 && warn_ver !== GM.info.script.version) {
      console.log("IMDb Scout Mod (Warning): Non-English IMDb detected! The script doesn't work properly here. Set language to English!");
      GM.notification("Non-English IMDb detected! \nThe script doesn't work \nproperly here. \nSet language to English!", "IMDb Scout Mod (Warning)");
      GM.setValue("Scout_warning2_count", warn_count +1);
    } else if (warn_ver !== GM.info.script.version) {
        GM.setValue("Scout_warning2_ver", GM.info.script.version);
        GM.setValue("Scout_warning2_count", 0);
    }
  }
}


//==============================================================================
//    Start: Display 'Load' button or add links to sites
//==============================================================================

function startIMDbScout() {
  if (traktCodePage) {
    traktCatchToken();
    GM.notification("Setup complete. Close this page.", "IMDb Scout Mod (Trakt-Watchlist)");
    return;
  }
  console.log("IMDb Scout Mod (Start): Starting main functions.");

  if (!onSearchPage && !onReferencePage && GM_config.get("helpful_reviews")) {
    if ($('[data-testid=review-overflow]').length) {
      if (GM_config.get("helpful_reviews_spoilers")) {
        getIMDbBestReview(use_spoilers=true);
      } else {
        getIMDbBestReview();
      }
    } else {
      console.log("IMDb Scout Mod (getIMDbBestReview): Not starting as element not found.");
    }
  }

  if (!onSearchPage && GM_config.get('loadmod_on_start_movie')) {
    $('#ipc-wrap-background-id').remove(); // This div steals focus from the scout links. v19.1 fix
    performPage();
  } else if (onSearchPage && GM_config.get('loadmod_on_start_search')) {
    performSearch();
  } else {
    $('#ipc-wrap-background-id').remove(); // This div steals focus from the scout links. v19.1 fix
    displayButton();
  }
}

if ($('html[xmlns\\:og="http://ogp.me/ns#"]').length) {
  console.log("IMDb Scout Mod (Start): Reference page detected.");
  document.events.on('bodyloaded', () => { // This instead of DOMContentLoaded is just to prevent white->black flick when darkstyle is enabled
    darkReferenceStyles();
    compactReferenceStyles();
  });
  window.addEventListener('DOMContentLoaded', compactReferenceElemRemoval);
  window.addEventListener('DOMContentLoaded', adsRemovalReference);
  window.addEventListener('DOMContentLoaded', startIMDbScout);
} else {
  // Redesigned pages stopped using jQuery(?). It's needed for POST links.  // This should be replaced by pure js for POST, like in Discogs_Scout as document.events may not work on very slow PCs +Chrome
  document.events.on('headloaded', () => {
    const addJquery = document.createElement("script");
    addJquery.setAttribute("type","text/javascript");
    addJquery.setAttribute("src","https://code.jquery.com/jquery-3.5.1.min.js");
    document.getElementsByTagName("head")[0].appendChild(addJquery);
  });
  // Start for redesigned page
  if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    window.addEventListener('DOMContentLoaded', startRedesign);
  } else {
    window.addEventListener('DOMContentLoaded', startObserver);  // counter reflow on Chrome
  }
}

scoutWarning();
scoutWarning2();
