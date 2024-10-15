import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { AiFillGoogleCircle } from "react-icons/ai";
import { app } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import siteLogo from "../assets/logo-color.png";

// import { useAuth } from "../context/AuthProvider";
import { useAuth } from "../context/AuthProvider";

export default function GoogleAuth() {
  const auth = getAuth(app);
    const {globalUrl} = useAuth()
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultsFromGoogle);
      
      const res = await fetch(`${globalUrl}/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });

      if (res.ok) {
        // dispatch(signInSuccess(data));
        localStorage.setItem(
          "User",
          JSON.stringify(resultsFromGoogle.user.email)
        );
        // console.log("message", resultsFromGoogle.user.email);
        // navigate("/");
        window.location.reload();
        document.getElementById("googleModal").close();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <dialog id="googleModal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <img src={siteLogo} alt="error" className="w-20" />
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg mb-2">
          Report Today, See Change Tomorrow
        </h3>
        <p className="mb-1">
          Log in to CityEase to report issues, track progress, and receive
          real-time updates for faster problem resolutions.
        </p>
        <button
          className="flex w-full bg-gray-100 px-4 py-2 mt-10 rounded-md gap-2 justify-center items-center cursor-pointer hover:bg-slate-200"
          onClick={handleGoogleClick}
        >
          <img
            width={20}
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            alt=""
          />
          <span> Sign in with Google</span>
        </button>
      </div>
    </dialog>
  );
}
