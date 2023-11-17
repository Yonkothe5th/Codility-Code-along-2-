function solution(A) {
    let result = 0;
    
    for (let i = 0; i < A.length; i++) {
        result ^= A[i];
    }
    
    return result;
}
    
    // test where number lacking a pair is 7
    const A = [9, 3, 9, 3, 9, 7, 9];
    console.log(solution(A)); 