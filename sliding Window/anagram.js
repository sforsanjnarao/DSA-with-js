function search(pat, txt) {
    const k = pat.length;
    const n = txt.length;
    let count = 0;

    // Edge case: if pattern is longer than text
    if (n < k) return count;

    // Frequency arrays for pattern and current window in text
    const patFreq = new Array(26).fill(0);
    const txtFreq = new Array(26).fill(0);

    // Step 1: Build frequency array for the pattern
    for (let i = 0; i < k; i++) {
        patFreq[pat.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // Step 2: Build frequency array for the first window in text
    for (let i = 0; i < k; i++) {
        txtFreq[txt.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // Step 3: Compare first window
    if (arraysEqual(patFreq, txtFreq)) {
        count++;
    }

    // Step 4: Slide the window across the text
    for (let i = 1; i <= n - k; i++) {
        // Remove the character going out of the window
        txtFreq[txt.charCodeAt(i - 1) - 'a'.charCodeAt(0)]--;

        // Add the character coming into the window
        txtFreq[txt.charCodeAt(i + k - 1) - 'a'.charCodeAt(0)]++;

        // Compare frequency arrays
        if (arraysEqual(patFreq, txtFreq)) {
            count++;
        }
    }

    return count;
}

// Helper function to compare two arrays for equality
function arraysEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Example usage:
console.log(search("ab", "abxaba"));  // Output: 3