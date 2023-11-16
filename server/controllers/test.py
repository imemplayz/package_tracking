def est_premier(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True


def permuter(v1, joueur):
    temp = v1
    v1 = joueur
    joueur = temp


def trier(T):
    n = len(T)
    for i in range(n - 1):
        for j in range(i + 1, n):
            if est_premier(T[i]) and est_premier(T[j]):
                if T[i] < T[j]:
                    permuter(T[i], T[j])
            elif est_premier(T[i]) and not est_premier(T[j]):
                permuter(T[i], T[j])


tableau = [12, 5, 7, 20, 15, 11, 9, 18]
trier(tableau)
print(tableau)
