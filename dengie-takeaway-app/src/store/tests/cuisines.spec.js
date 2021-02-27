import { loadCuisines } from "../cuisines";
import axios from "axios";
import Mockadapter from "axios-mock-adapter";
import configureStore from "../configureStore";

describe("cuisinesSlice", () => {
  let fakeAxios;
  let store;

  const cuisines = [
    {
      cuisine: "abc",
      restaurants: [],
    },
  ];

  beforeEach(() => {
    fakeAxios = new Mockadapter(axios);
    store = configureStore();
  });

  const cuisinesSlice = () => store.getState().entities.cuisines;

  describe("loading cuisines", () => {
    describe("if the cuisines exist in the cache", () => {
      it("they should not be fetched from the server again", async () => {
        fakeAxios.onGet("/cuisines").reply(200, cuisines);

        await store.dispatch(loadCuisines());
        await store.dispatch(loadCuisines());

        expect(fakeAxios.history.get.length).toBe(1);
      });
    });

    describe("if the cuisines don't exist in the cache", () => {
      it("they should be fetched from the server and put in the store", async () => {
        fakeAxios.onGet("/cuisines").reply(200, cuisines);

        await store.dispatch(loadCuisines());

        expect(cuisinesSlice().list).toHaveLength(1);
      });

      describe("loading indicator", () => {
        it("should be true whilst fetching the cuisines", () => {
          fakeAxios.onGet("/cuisines").reply(() => {
            expect(cuisinesSlice().loading).toBe(true);
            return [200, cuisines];
          });

          store.dispatch(loadCuisines());
        });

        it("should be false after the cuisines are fetched", async () => {
          fakeAxios.onGet("/cuisines").reply(200, cuisines);

          await store.dispatch(loadCuisines());

          expect(cuisinesSlice().loading).toBe(false);
        });

        it("should be false if the server returns an error", async () => {
          const cuisines = [
            {
              cuisine: "abc",
              restaurants: [],
            },
          ];
          fakeAxios.onGet("/cuisines").reply(500);

          await store.dispatch(loadCuisines());

          expect(cuisinesSlice().loading).toBe(false);
        });
      });
    });
  });
});
