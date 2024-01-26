function codeSubmit(UserInput1, UserInput2, UserInput3) {
    let UserInputTotal = toString(UserInput1) + toString(UserInput2) + toString(UserInput3)
    switch (UserInputTotal) {
        case "394":
            alert("tu as trouvé le mot de passe !")
        case _:
            alert("tu t'es trompé de mot de passe.")
    }
}