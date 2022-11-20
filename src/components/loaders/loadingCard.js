import {connect} from 'react-redux';

function LoadingCard(){
    return(
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
           <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-gray-300 animate-pulse">
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover bg-gray-300" src="#" alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600 bg-gray-300">
                    <a href="#" className="hover:underline bg-gray-300">
                    </a>
                    </p>
                    <a href="#" className="block mt-2 bg-gray-300">
                    <p className="text-xl font-semibold text-gray-900 bg-gray-300"></p>
                    <p className="mt-3 text-base text-gray-500 bg-gray-300"></p>
                    </a>
                </div>
                </div>
            </div>
			<div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-gray-300 animate-pulse">
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover bg-gray-300" src="#" alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600 bg-gray-300">
                    <a href="#" className="hover:underline bg-gray-300">
                    </a>
                    </p>
                    <a href="#" className="block mt-2 bg-gray-300">
                    <p className="text-xl font-semibold text-gray-900 bg-gray-300"></p>
                    <p className="mt-3 text-base text-gray-500 bg-gray-300"></p>
                    </a>
                </div>
                </div>
            </div>
           <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-gray-300 animate-pulse">
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover bg-gray-300" src="#" alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600 bg-gray-300">
                    <a href="#" className="hover:underline bg-gray-300">
                    </a>
                    </p>
                    <a href="#" className="block mt-2 bg-gray-300">
                    <p className="text-xl font-semibold text-gray-900 bg-gray-300"></p>
                    <p className="mt-3 text-base text-gray-500 bg-gray-300"></p>
                    </a>
                </div>
                </div>
            </div>
           <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-gray-300 animate-pulse">
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover bg-gray-300" src="#" alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600 bg-gray-300">
                    <a href="#" className="hover:underline bg-gray-300">
                    </a>
                    </p>
                    <a href="#" className="block mt-2 bg-gray-300">
                    <p className="text-xl font-semibold text-gray-900 bg-gray-300"></p>
                    <p className="mt-3 text-base text-gray-500 bg-gray-300"></p>
                    </a>
                </div>
                </div>
            </div>
           <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-gray-300 animate-pulse">
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover bg-gray-300" src="#" alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600 bg-gray-300">
                    <a href="#" className="hover:underline bg-gray-300">
                    </a>
                    </p>
                    <a href="#" className="block mt-2 bg-gray-300">
                    <p className="text-xl font-semibold text-gray-900 bg-gray-300"></p>
                    <p className="mt-3 text-base text-gray-500 bg-gray-300"></p>
                    </a>
                </div>
                </div>
            </div>
           <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-gray-300 animate-pulse">
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover bg-gray-300" src="#" alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600 bg-gray-300">
                    <a href="#" className="hover:underline bg-gray-300">
                    </a>
                    </p>
                    <a href="#" className="block mt-2 bg-gray-300">
                    <p className="text-xl font-semibold text-gray-900 bg-gray-300"></p>
                    <p className="mt-3 text-base text-gray-500 bg-gray-300"></p>
                    </a>
                </div>
                </div>
            </div>			
        </div>
    )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
})(LoadingCard)
