export function Header(): string {
    return `
    <header class="fixed top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav class="mt-2 md:mt-4 relative max-w-4xl w-full bg-gradient-to-r from-cyan-50 via-teal-50 to-blue-100 dark:from-slate-800 dark:via-purple-900/30 dark:to-blue-900/40 backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95 border border-cyan-200/60 dark:border-purple-600/40 rounded-[20px] md:rounded-[28px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-2 md:p-1 ps-4 md:ps-5 md:py-0 sm:mx-auto shadow-lg shadow-cyan-500/10 dark:shadow-purple-900/20">
            <div class="flex items-center min-w-0 flex-1 md:flex-none">
            <!-- Logo -->
            <a class="flex-none rounded-md text-base md:text-lg inline-block font-bold focus:outline-hidden focus:opacity-80 text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 truncate" href="https://www.teamk6.games/" aria-label="Team K6">
                <span class="hidden xs:inline">TEAM K6</span>
                <span class="xs:hidden">K6</span>
            </a>
            <!-- End Logo -->

            <div class="ms-1 sm:ms-2">

            </div>
            </div>

            <div class="flex items-center gap-1 md:order-4 md:ms-4">
            <!-- Download button - responsive sizing -->
            <a class="hidden sm:inline-flex w-full sm:w-auto whitespace-nowrap py-2 md:py-2.5 px-3 md:px-4 inline-flex justify-center items-center gap-x-2 text-xs md:text-sm font-medium rounded-full border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400/60 dark:hover:border-gray-500/60 hover:text-gray-800 dark:hover:text-gray-100 focus:outline-hidden focus:bg-gray-50 dark:focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 shadow-sm" href="https://github.com/tolgazorlu/presskit" target="_blank">
                <span class="hidden md:inline">Download Press Kit Template</span>
                <span class="md:hidden">Download</span>
            </a>

            <!-- Mobile download button -->
            <a class="sm:hidden w-8 h-8 flex justify-center items-center border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full transition-all duration-300" href="#" title="Download Press Kit">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
            </a>

            <div class="md:hidden">
                <!-- Toggle Button - improved touch target -->
                <button type="button" class="hs-collapse-toggle flex justify-center items-center w-10 h-10 md:size-9.5 border border-gray-300/50 dark:border-gray-600/50 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100/80 dark:hover:bg-gray-700/80 focus:outline-hidden focus:bg-gray-100/80 dark:focus:bg-gray-700/80 transition-all duration-300" id="hs-navbar-header-floating-collapse" aria-expanded="false" aria-controls="hs-navbar-header-floating" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-header-floating">
                <svg class="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                <svg class="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
                <!-- End Toggle Button -->
            </div>
            </div>

            <!-- Mobile Navigation Menu - Enhanced -->
            <div id="hs-navbar-header-floating" class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-header-floating-collapse">
            <div class="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-4 mt-4 md:mt-0 py-3 md:py-0 md:ps-7 border-t md:border-t-0 border-gray-200/60 dark:border-gray-600/60 md:border-none">
                <!-- Mobile Download button in menu -->
                <a class="sm:hidden w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium text-center transition-all duration-300 mb-2" href="#">
                    Download Press Kit
                </a>
                
                <a class="py-2 md:py-3 px-4 md:px-2 border-s-2 md:border-s-0 md:border-b-2 border-gray-400 dark:border-gray-500 font-medium text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-hidden transition-colors duration-300 text-base md:text-sm" href="index.html" aria-current="page">Home</a>
               <a class="py-2 md:py-3 px-4 md:px-2 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-hidden transition-all duration-300 text-base md:text-sm" href="#footer">Social</a>
            </div>
            </div>
        </nav>
    </header>
  `;
}